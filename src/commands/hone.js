const { SlashCommandBuilder } = require('discord.js');

const typeormConnection = require('../database/db');

const { tryHoningArmor, tryHoningWeapon } = require('./utils/honeUtil');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hone')
        .setDescription('Hone your Gear!')
        .addBooleanOption((option) => option.setName('armor').setDescription('Hone your Armor').setRequired(true))
        .addBooleanOption((option) => option.setName('weapon').setDescription('Hone your Weapon').setRequired(true)),
    async execute(interaction) {
        typeormConnection
            .getRepository('User')
            .find({ clientId: interaction.user.id })
            .then((rows) => {
                if (rows.length === 0) {
                    interaction.reply(
                        'You have not started your journey yet! Please use the /chaos command to begin your journey.',
                        { ephemeral: true },
                    );
                } else {
                    // check which option was selected
                    const armor = interaction.options.getBoolean('armor');
                    const weapon = interaction.options.getBoolean('weapon');

                    if (armor && weapon) {
                        return interaction.reply('You can only hone one item at a time!', { ephemeral: true });
                    }

                    if (armor) {
                        return tryHoningArmor(
                            interaction.user.id,
                            rows[0].honorShards,
                            rows[0].guardianStones,
                            rows[0].gold,
                            rows[0].silver,
                            rows[0].leapstones,
                            rows,
                            interaction,
                        );
                    } else if (weapon) {
                        tryHoningWeapon(
                            interaction.user.id,
                            rows[0].honorShards,
                            rows[0].destructionStones,
                            rows[0].gold,
                            rows[0].silver,
                            rows[0].leapstones,
                            rows,
                            interaction,
                        );
                    }
                }
            });
    },
};
