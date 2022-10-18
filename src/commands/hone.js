const { SlashCommandBuilder } = require('discord.js');

const typeormConnection = require('../database/db');

const { tryHoningArmor, tryHoningWeapon } = require('./utils/honeUtil');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hone')
        .setDescription('Hone your Gear!')
        .addStringOption((option) => option.setName('type').setDescription('Armor or Weapon').setRequired(true)),
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
                    const gear = interaction.options.getString('type');
                    if (gear !== 'armor' && gear !== 'weapon') {
                        return interaction.reply('Please select either armor or weapon.', { ephemeral: true });
                    }

                    if (gear === 'armor') {
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
                    } else if (gear === 'weapon') {
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
