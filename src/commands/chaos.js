const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const typeormConnection = require('../database/db');
const { userInitChaos } = require('./utils/userInit');
const { checkDailyChaos } = require('./utils/checkDaily');
const colors = require('../colors.json');

module.exports = {
    data: new SlashCommandBuilder().setName('chaos').setDescription('Claim your daily chaos dungeon.'),
    async execute(interaction) {
        const chaosEmbed = new EmbedBuilder()
            .setTitle('Chaos Dungeon')
            .setDescription('You have claimed your daily Guardian Raid!')
            .setColor(colors.successColor);

        typeormConnection
            .getRepository('User')
            .find({ clientId: interaction.user.id })
            .then((rows) => {
                if (rows.length === 0) {
                    // Create a new user
                    typeormConnection
                        .getRepository('User')
                        .save(userInitChaos(interaction.user.id, interaction.user.username))
                        .then(() => {
                            interaction.reply({ embeds: [chaosEmbed], ephemeral: true });
                        });
                } else {
                    if (!checkDailyChaos(rows)) {
                        const timeRemaining = 86400000 - (Date.now() - rows[0].chaosDungeonClaimedAt);
                        const chaosDungeonFailEmbed = new EmbedBuilder()
                            .setTitle('You have already claimed your daily Chaos Dungeon!')
                            // add field for time remaining in hours and minutes for next claim
                            .setDescription(
                                `**Next Claim:** ${Math.floor(timeRemaining / 3600000)} hours and ${Math.floor(
                                    (timeRemaining % 3600000) / 60000,
                                )} minutes`,
                            )
                            .setColor(colors.failureColor);
                        interaction.reply({ embeds: [chaosDungeonFailEmbed] }, { ephemeral: true });
                        return;
                    }
                    typeormConnection
                        .getRepository('User')
                        .update(
                            { clientId: interaction.user.id },
                            {
                                silver: Math.round(parseInt(rows[0].silver) + 120000 * parseFloat(rows[0].matBonus)),
                                honorShards: Math.round(
                                    parseInt(rows[0].honorShards) + 7500 * parseFloat(rows[0].matBonus),
                                ),
                                guardianStones: Math.round(
                                    parseInt(rows[0].guardianStones) + 18000 * parseFloat(rows[0].matBonus),
                                ),
                                destructionStones: Math.round(
                                    parseInt(rows[0].destructionStones) + 10000 * parseFloat(rows[0].matBonus),
                                ),
                                chaosDungeonClaimedAt: Date.now(),
                            },
                        )
                        .then(() => {
                            interaction.reply({ embeds: [chaosEmbed], ephemeral: true });
                        });
                }
            });
    },
};
