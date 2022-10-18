const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const typeormConnection = require('../database/db');
const { checkDailyGuardian } = require('./utils/checkDaily');
const colors = require('../colors.json');
const { userInitGuaridan } = require('./utils/userInit');

module.exports = {
    data: new SlashCommandBuilder().setName('guardian').setDescription('Claim your daily Guardian Raid'),
    async execute(interaction) {
        const guardianEmbed = new EmbedBuilder()
            .setTitle('Guardian Raid')
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
                        .save(userInitGuaridan(interaction.user.id, interaction.user.username))
                        .then(() => {
                            interaction.reply({ embeds: [guardianEmbed], ephemeral: true });
                        });
                } else {
                    // Update existing user and add materials to it (limited to 1 per day)
                    if (!checkDailyGuardian(rows)) {
                        const timeRemaining = 86400000 - (Date.now() - rows[0].guardianClaimedAt);
                        const guardianEmbedFail = new EmbedBuilder()
                            .setTitle('You have already claimed your daily Guardian Raid!')
                            // add field for time remaining in hours and minutes for next claim
                            .setDescription(
                                `**Next Claim:** ${Math.floor(timeRemaining / 3600000)} hours and ${Math.floor(
                                    (timeRemaining % 3600000) / 60000,
                                )} minutes`,
                            )
                            .setColor(colors.failureColor);
                        interaction.reply({ embeds: [guardianEmbedFail] }, { ephemeral: true });
                        return;
                    }
                    typeormConnection
                        .getRepository('User')
                        .update(
                            { clientId: interaction.user.id },
                            {
                                gold: Math.round(parseInt(rows[0].gold) + 1375 * parseFloat(rows[0].matBonus)),
                                leapstones: Math.round(
                                    parseInt(rows[0].leapstones) + 22 * parseFloat(rows[0].matBonus),
                                ),
                                guardianClaimedAt: Date.now(),
                            },
                        )
                        .then(() => {
                            interaction.reply({ embeds: [guardianEmbed], ephemeral: true });
                        });
                }
            });
    },
};
