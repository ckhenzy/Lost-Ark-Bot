const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const typeormConnection = require('../database/db');
const materialIcons = require('../materials.json');
const { numberFormatter } = require('./utils/numberFormatter');

module.exports = {
    data: new SlashCommandBuilder().setName('stats').setDescription('View your inventory.'),
    async execute(interaction) {
        typeormConnection
            .getRepository('User')
            .find({ clientId: interaction.user.id })
            .then((rows) => {
                if (rows.length === 0) {
                    const statsEmbed = new EmbedBuilder()

                        .setTitle('Inventory')
                        .setDescription('You have no items in your inventory.')
                        .setColor('#ff0000');
                    return interaction.reply({ embeds: [statsEmbed] }, { ephemeral: true });
                }
                // Build our embed
                const statsEmbed = new EmbedBuilder()
                    .setAuthor({ name: interaction.user.username, iconUrl: `${interaction.user.avatarURL}` })
                    .setThumbnail(`${interaction.user.avatarURL()}`)
                    .addFields(
                        {
                            name: 'Armor',
                            value: `${rows[0].armorLvl}`,
                            inline: true,
                        },
                        {
                            name: 'Weapon',
                            value: `${rows[0].weaponLvl}`,
                            inline: true,
                        },
                        { name: 'Material Bonus', value: `${rows[0].matBonus}`, inline: true },
                        { name: `${materialIcons.gold}`, value: `${numberFormatter(rows[0].gold)}`, inline: true },
                        { name: `${materialIcons.silver}`, value: `${numberFormatter(rows[0].silver)}`, inline: true },
                        {
                            name: `${materialIcons.honorShards}`,
                            value: `${numberFormatter(rows[0].honorShards)}`,
                            inline: true,
                        },
                        {
                            name: `${materialIcons.guardianStone}`,
                            value: `${numberFormatter(rows[0].guardianStones)}`,
                            inline: true,
                        },
                        {
                            name: `${materialIcons.destructionStone}`,
                            value: `${numberFormatter(rows[0].destructionStones)}`,
                            inline: true,
                        },
                        {
                            name: `${materialIcons.leapstone}`,
                            value: `${numberFormatter(rows[0].leapstones)}`,
                            inline: true,
                        },
                    )
                    .setTimestamp();
                // .setImage() // Add image of weapon glow here

                interaction.reply({ embeds: [statsEmbed], ephemeral: true });
            });
    },
};
