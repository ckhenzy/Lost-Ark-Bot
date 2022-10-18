const typeormConnection = require('../../database/db');
const honingTable = require('../../honeTable.json');
const { EmbedBuilder } = require('discord.js');
const colors = require('../../colors.json');

function tryHoningArmor(clientId, honorShards, guardianStones, gold, silver, leapstones, rows, interaction) {
    // check if user has enough materials to hone armor
    const honeRoll = Math.random() * 100;

    const armorHoneSuccessEmbed = new EmbedBuilder()
        .setTitle('Armor Hone Success!')
        .setDescription('Your armor has been successfully honed!')
        .setColor(colors.successColor)
        .setAuthor({ name: interaction.user.username, iconUrl: `${interaction.user.avatarURL}` });

    const honeFailEmbed = new EmbedBuilder()
        .setTitle('Hone Failed!')
        .setDescription('Your hone attempt has failed.')
        .setColor(colors.failureColor);

    switch (true) {
        case rows[0].armorLvl < 10:
            // check if user has enough materials to hone armor and reply accordingly
            if (guardianStones < honingTable.armor0_10.guardianStones) {
                return interaction.reply(
                    `You do not have enough Guardian Stones to hone your armor. You need ${honingTable.armor0_10.guardianStones} Guardian Stones to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (gold < honingTable.armor0_10.gold) {
                return interaction.reply(
                    `You do not have enough Gold to hone your armor. You need ${honingTable.armor0_10.gold} Gold to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (silver < honingTable.armor0_10.silver) {
                return interaction.reply(
                    `You do not have enough Silver to hone your armor. You need ${honingTable.armor0_10.silver} Silver to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (leapstones < honingTable.armor0_10.leapstones) {
                return interaction.reply(
                    `You do not have enough Leapstones to hone your armor. You need ${honingTable.armor0_10.leapstones} Leapstones to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (honorShards < honingTable.armor0_10.honorShards) {
                return interaction.reply(
                    `You do not have enough Honor Shards to hone your armor. You need ${honingTable.armor0_10.honorShards} Honor Shards to hone your armor.`,
                    { ephemeral: true },
                );
            }

            // try honing

            if (honeRoll <= honingTable.armor0_10.chance * 100) {
                // hone successful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            guardianStones: parseInt(rows[0].guardianStones) - honingTable.armor0_10.guardianStones,
                            gold: parseInt(rows[0].gold) - honingTable.armor0_10.gold,
                            silver: parseInt(rows[0].silver) - honingTable.armor0_10.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.armor0_10.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.armor0_10.honorShards,
                            armorLvl: parseInt(rows[0].armorLvl) + 1,
                            matBonus: parseFloat(rows[0].matBonus) + honingTable.armor0_10.matBonus,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [armorHoneSuccessEmbed] });
                    });
            } else {
                // hone unsuccessful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            guardianStones: parseInt(rows[0].guardianStones) - honingTable.armor0_10.guardianStones,
                            gold: parseInt(rows[0].gold) - honingTable.armor0_10.gold,
                            silver: parseInt(rows[0].silver) - honingTable.armor0_10.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.armor0_10.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.armor0_10.honorShards,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [honeFailEmbed] });
                    });
            }
            break;
        case rows[0].armorLvl < 20:
            // check if user has enough materials to hone armor
            if (guardianStones < honingTable.armor11_20.guardianStones) {
                return interaction.reply(
                    `You do not have enough Guardian Stones to hone your armor. You need ${honingTable.armor11_20.guardianStones} Guardian Stones to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (gold < honingTable.armor11_20.gold) {
                return interaction.reply(
                    `You do not have enough Gold to hone your armor. You need ${honingTable.armor11_20.gold} Gold to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (silver < honingTable.armor11_20.silver) {
                return interaction.reply(
                    `You do not have enough Silver to hone your armor. You need ${honingTable.armor11_20.silver} Silver to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (leapstones < honingTable.armor11_20.leapstones) {
                return interaction.reply(
                    `You do not have enough Leapstones to hone your armor. You need ${honingTable.armor11_20.leapstones} Leapstones to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (honorShards < honingTable.armor11_20.honorShards) {
                return interaction.reply(
                    `You do not have enough Honor Shards to hone your armor. You need ${honingTable.armor11_20.honorShards} Honor Shards to hone your armor.`,
                    { ephemeral: true },
                );
            }

            // try honing

            if (honeRoll <= honingTable.armor11_20.chance * 100) {
                // hone successful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            guardianStones: parseInt(rows[0].guardianStones) - honingTable.armor11_20.guardianStones,
                            gold: parseInt(rows[0].gold) - honingTable.armor11_20.gold,
                            silver: parseInt(rows[0].silver) - honingTable.armor11_20.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.armor11_20.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.armor11_20.honorShards,
                            armorLvl: parseInt(rows[0].armorLvl) + 1,
                            matBonus: parseFloat(rows[0].matBonus) + honingTable.armor11_20.matBonus,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [armorHoneSuccessEmbed] });
                    });
            } else {
                // hone unsuccessful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            guardianStones: parseInt(rows[0].guardianStones) - honingTable.armor11_20.guardianStones,
                            gold: parseInt(rows[0].gold) - honingTable.armor11_20.gold,
                            silver: parseInt(rows[0].silver) - honingTable.armor11_20.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.armor11_20.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.armor11_20.honorShards,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [honeFailEmbed] });
                    });
            }
            break;
        case rows[0].armorLvl < 30:
            // check if user has enough materials to hone armor
            if (guardianStones < honingTable.armor21_30.guardianStones) {
                return interaction.reply(
                    `You do not have enough Guardian Stones to hone your armor. You need ${honingTable.armor21_30.guardianStones} Guardian Stones to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (gold < honingTable.armor21_30.gold) {
                return interaction.reply(
                    `You do not have enough Gold to hone your armor. You need ${honingTable.armor21_30.gold} Gold to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (silver < honingTable.armor21_30.silver) {
                return interaction.reply(
                    `You do not have enough Silver to hone your armor. You need ${honingTable.armor21_30.silver} Silver to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (leapstones < honingTable.armor21_30.leapstones) {
                return interaction.reply(
                    `You do not have enough Leapstones to hone your armor. You need ${honingTable.armor21_30.leapstones} Leapstones to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (honorShards < honingTable.armor21_30.honorShards) {
                return interaction.reply(
                    `You do not have enough Honor Shards to hone your armor. You need ${honingTable.armor21_30.honorShards} Honor Shards to hone your armor.`,
                    { ephemeral: true },
                );
            }

            // try honing

            if (honeRoll <= honingTable.armor21_30.chance * 100) {
                // hone successful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            guardianStones: parseInt(rows[0].guardianStones) - honingTable.armor21_30.guardianStones,
                            gold: parseInt(rows[0].gold) - honingTable.armor21_30.gold,
                            silver: parseInt(rows[0].silver) - honingTable.armor21_30.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.armor21_30.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.armor21_30.honorShards,
                            armorLvl: parseInt(rows[0].armorLvl) + 1,
                            matBonus: parseFloat(rows[0].matBonus) + honingTable.armor21_30.matBonus,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [armorHoneSuccessEmbed] });
                    });
            } else {
                // hone unsuccessful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            guardianStones: parseInt(rows[0].guardianStones) - honingTable.armor21_30.guardianStones,
                            gold: parseInt(rows[0].gold) - honingTable.armor21_30.gold,
                            silver: parseInt(rows[0].silver) - honingTable.armor21_30.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.armor21_30.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.armor21_30.honorShards,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [honeFailEmbed] });
                    });
            }
            break;
        case rows[0].armorLvl < 40:
            // check if user has enough materials to hone armor
            if (guardianStones < honingTable.armor31_40.guardianStones) {
                return interaction.reply(
                    `You do not have enough Guardian Stones to hone your armor. You need ${honingTable.armor31_40.guardianStones} Guardian Stones to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (gold < honingTable.armor31_40.gold) {
                return interaction.reply(
                    `You do not have enough Gold to hone your armor. You need ${honingTable.armor31_40.gold} Gold to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (silver < honingTable.armor31_40.silver) {
                return interaction.reply(
                    `You do not have enough Silver to hone your armor. You need ${honingTable.armor31_40.silver} Silver to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (leapstones < honingTable.armor31_40.leapstones) {
                return interaction.reply(
                    `You do not have enough Leapstones to hone your armor. You need ${honingTable.armor31_40.leapstones} Leapstones to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (honorShards < honingTable.armor31_40.honorShards) {
                return interaction.reply(
                    `You do not have enough Honor Shards to hone your armor. You need ${honingTable.armor31_40.honorShards} Honor Shards to hone your armor.`,
                    { ephemeral: true },
                );
            }

            // try honing

            if (honeRoll <= honingTable.armor31_40.chance * 100) {
                // hone successful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            guardianStones: parseInt(rows[0].guardianStones) - honingTable.armor31_40.guardianStones,
                            gold: parseInt(rows[0].gold) - honingTable.armor31_40.gold,
                            silver: parseInt(rows[0].silver) - honingTable.armor31_40.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.armor31_40.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.armor31_40.honorShards,
                            armorLvl: parseInt(rows[0].armorLvl) + 1,
                            matBonus: parseFloat(rows[0].matBonus) + honingTable.armor31_40.matBonus,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [armorHoneSuccessEmbed] });
                    });
            } else {
                // hone unsuccessful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            guardianStones: parseInt(rows[0].guardianStones) - honingTable.armor31_40.guardianStones,
                            gold: parseInt(rows[0].gold) - honingTable.armor31_40.gold,
                            silver: parseInt(rows[0].silver) - honingTable.armor31_40.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.armor31_40.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.armor31_40.honorShards,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [honeFailEmbed] });
                    });
            }
            break;
        case rows[0].armorLvl < 50:
            // check if user has enough materials to hone armor
            if (guardianStones < honingTable.armor41_50.guardianStones) {
                return interaction.reply(
                    `You do not have enough Guardian Stones to hone your armor. You need ${honingTable.armor41_50.guardianStones} Guardian Stones to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (gold < honingTable.armor41_50.gold) {
                return interaction.reply(
                    `You do not have enough Gold to hone your armor. You need ${honingTable.armor41_50.gold} Gold to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (silver < honingTable.armor41_50.silver) {
                return interaction.reply(
                    `You do not have enough Silver to hone your armor. You need ${honingTable.armor41_50.silver} Silver to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (leapstones < honingTable.armor41_50.leapstones) {
                return interaction.reply(
                    `You do not have enough Leapstones to hone your armor. You need ${honingTable.armor41_50.leapstones} Leapstones to hone your armor.`,
                    { ephemeral: true },
                );
            }
            if (honorShards < honingTable.armor41_50.honorShards) {
                return interaction.reply(
                    `You do not have enough Honor Shards to hone your armor. You need ${honingTable.armor41_50.honorShards} Honor Shards to hone your armor.`,
                    { ephemeral: true },
                );
            }

            // try honing

            if (honeRoll <= honingTable.armor41_50.chance * 100) {
                // hone successful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            guardianStones: parseInt(rows[0].guardianStones) - honingTable.armor41_50.guardianStones,
                            gold: parseInt(rows[0].gold) - honingTable.armor41_50.gold,
                            silver: parseInt(rows[0].silver) - honingTable.armor41_50.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.armor41_50.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.armor41_50.honorShards,
                            armorLvl: parseInt(rows[0].armorLvl) + 1,
                            matBonus: parseFloat(rows[0].matBonus) + honingTable.armor41_50.matBonus,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [armorHoneSuccessEmbed] });
                    });
            } else {
                // hone unsuccessful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            guardianStones: parseInt(rows[0].guardianStones) - honingTable.armor41_50.guardianStones,
                            gold: parseInt(rows[0].gold) - honingTable.armor41_50.gold,
                            silver: parseInt(rows[0].silver) - honingTable.armor41_50.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.armor41_50.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.armor41_50.honorShards,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [honeFailEmbed] });
                    });
            }
            break;
        case rows[0].armorLvl >= 50:
            interaction.reply('Your armor is already max level!', { ephemeral: true });
            break;
    }
}

function tryHoningWeapon(clientId, honorShards, destructionStones, gold, silver, leapstones, rows, interaction) {
    const honeRoll = Math.random() * 100;

    const weaponHoneSuccessEmbed = new EmbedBuilder()
        .setTitle('Weapon Hone Success!')
        .setDescription('Your weapon has been successfully honed!')
        .setColor(colors.successColor)
        .setAuthor({ name: interaction.user.username, iconUrl: `${interaction.user.avatarURL}` });

    const honeFailEmbed = new EmbedBuilder()
        .setTitle('Hone Failed!')
        .setDescription('Your hone attempt has failed.')
        .setColor(colors.failureColor);

    switch (true) {
        case rows[0].weaponLvl < 10:
            // check if user has enough materials to hone armor and reply accordingly
            if (destructionStones < honingTable.weapon0_10.destructionStones) {
                return interaction.reply(
                    `You do not have enough Destruction Stones to hone your weapon. You need ${honingTable.weapon0_10.destructionStones} Guardian Stones to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (gold < honingTable.weapon0_10.gold) {
                return interaction.reply(
                    `You do not have enough Gold to hone your weapon. You need ${honingTable.weapon0_10.gold} Gold to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (silver < honingTable.weapon0_10.silver) {
                return interaction.reply(
                    `You do not have enough Silver to hone your weapon. You need ${honingTable.weapon0_10.silver} Silver to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (leapstones < honingTable.weapon0_10.leapstones) {
                return interaction.reply(
                    `You do not have enough Leapstones to hone your weapon. You need ${honingTable.weapon0_10.leapstones} Leapstones to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (honorShards < honingTable.weapon0_10.honorShards) {
                return interaction.reply(
                    `You do not have enough Honor Shards to hone your weapon. You need ${honingTable.weapon0_10.honorShards} Honor Shards to hone your weapon.`,
                    { ephemeral: true },
                );
            }

            // try honing

            if (honeRoll <= honingTable.weapon0_10.chance * 100) {
                // hone successful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            destructionStones:
                                parseInt(rows[0].destructionStones) - honingTable.weapon0_10.destructionStones,
                            gold: parseInt(rows[0].gold) - honingTable.weapon0_10.gold,
                            silver: parseInt(rows[0].silver) - honingTable.weapon0_10.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.weapon0_10.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.weapon0_10.honorShards,
                            weaponLvl: parseInt(rows[0].weaponLvl) + 1,
                            matBonus: parseFloat(rows[0].matBonus) + honingTable.weapon0_10.matBonus,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [weaponHoneSuccessEmbed] });
                    });
            } else {
                // hone unsuccessful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            destructionStones:
                                parseInt(rows[0].destructionStones) - honingTable.weapon0_10.destructionStones,
                            gold: parseInt(rows[0].gold) - honingTable.weapon0_10.gold,
                            silver: parseInt(rows[0].silver) - honingTable.weapon0_10.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.weapon0_10.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.weapon0_10.honorShards,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [honeFailEmbed] });
                    });
            }
            break;
        case rows[0].weaponLvl < 20:
            // check if user has enough materials to hone armor and reply accordingly
            if (destructionStones < honingTable.weapon11_20.destructionStones) {
                return interaction.reply(
                    `You do not have enough Destruction Stones to hone your weapon. You need ${honingTable.weapon11_20.destructionStones} Destruction Stones to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (gold < honingTable.weapon11_20.gold) {
                return interaction.reply(
                    `You do not have enough Gold to hone your weapon. You need ${honingTable.weapon11_20.gold} Gold to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (silver < honingTable.weapon11_20.silver) {
                return interaction.reply(
                    `You do not have enough Silver to hone your weapon. You need ${honingTable.weapon11_20.silver} Silver to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (leapstones < honingTable.weapon11_20.leapstones) {
                return interaction.reply(
                    `You do not have enough Leapstones to hone your weapon. You need ${honingTable.weapon11_20.leapstones} Leapstones to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (honorShards < honingTable.weapon11_20.honorShards) {
                return interaction.reply(
                    `You do not have enough Honor Shards to hone your weapon. You need ${honingTable.weapon11_20.honorShards} Honor Shards to hone your weapon.`,
                    { ephemeral: true },
                );
            }

            // try honing

            if (honeRoll <= honingTable.weapon11_20.chance * 100) {
                // hone successful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            destructionStones:
                                parseInt(rows[0].destructionStones) - honingTable.weapon11_20.destructionStones,
                            gold: parseInt(rows[0].gold) - honingTable.weapon11_20.gold,
                            silver: parseInt(rows[0].silver) - honingTable.weapon11_20.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.weapon11_20.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.weapon11_20.honorShards,
                            weaponLvl: parseInt(rows[0].weaponLvl) + 1,
                            matBonus: parseFloat(rows[0].matBonus) + honingTable.weapon11_20.matBonus,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [weaponHoneSuccessEmbed] });
                    });
            } else {
                // hone unsuccessful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            destructionStones:
                                parseInt(rows[0].destructionStones) - honingTable.weapon11_20.destructionStones,
                            gold: parseInt(rows[0].gold) - honingTable.weapon11_20.gold,
                            silver: parseInt(rows[0].silver) - honingTable.weapon11_20.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.weapon11_20.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.weapon11_20.honorShards,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [honeFailEmbed] });
                    });
            }
            break;

        case rows[0].weaponLvl < 30:
            // check if user has enough materials to hone armor and reply accordingly
            if (destructionStones < honingTable.weapon21_30.destructionStones) {
                return interaction.reply(
                    `You do not have enough Destruction Stones to hone your weapon. You need ${honingTable.weapon21_30.destructionStones} Guardian Stones to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (gold < honingTable.weapon21_30.gold) {
                return interaction.reply(
                    `You do not have enough Gold to hone your weapon. You need ${honingTable.weapon21_30.gold} Gold to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (silver < honingTable.weapon21_30.silver) {
                return interaction.reply(
                    `You do not have enough Silver to hone your weapon. You need ${honingTable.weapon10_20.silver} Silver to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (leapstones < honingTable.weapon21_30.leapstones) {
                return interaction.reply(
                    `You do not have enough Leapstones to hone your weapon. You need ${honingTable.weapon21_30.leapstones} Leapstones to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (honorShards < honingTable.weapon21_30.honorShards) {
                return interaction.reply(
                    `You do not have enough Honor Shards to hone your weapon. You need ${honingTable.weapon21_30.honorShards} Honor Shards to hone your weapon.`,
                    { ephemeral: true },
                );
            }

            // try honing

            if (honeRoll <= honingTable.weapon21_30.chance * 100) {
                // hone successful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            destructionStones:
                                parseInt(rows[0].destructionStones) - honingTable.weapon21_30.destructionStones,
                            gold: parseInt(rows[0].gold) - honingTable.weapon21_30.gold,
                            silver: parseInt(rows[0].silver) - honingTable.weapon21_30.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.weapon21_30.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.weapon21_30.honorShards,
                            weaponLvl: parseInt(rows[0].weaponLvl) + 1,
                            matBonus: parseFloat(rows[0].matBonus) + honingTable.weapon21_30.matBonus,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [weaponHoneSuccessEmbed] });
                    });
            } else {
                // hone unsuccessful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            destructionStones:
                                parseInt(rows[0].destructionStones) - honingTable.weapon21_30.destructionStones,
                            gold: parseInt(rows[0].gold) - honingTable.weapon21_30.gold,
                            silver: parseInt(rows[0].silver) - honingTable.weapon21_30.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.weapon21_30.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.weapon21_30.honorShards,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [honeFailEmbed] });
                    });
            }
            break;

        case rows[0].weaponLvl < 40:
            // check if user has enough materials to hone armor and reply accordingly
            if (destructionStones < honingTable.weapon31_40.destructionStones) {
                return interaction.reply(
                    `You do not have enough Destruction Stones to hone your weapon. You need ${honingTable.weapon31_40.destructionStones} Guardian Stones to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (gold < honingTable.weapon31_40.gold) {
                return interaction.reply(
                    `You do not have enough Gold to hone your weapon. You need ${honingTable.weapon31_40.gold} Gold to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (silver < honingTable.weapon31_40.silver) {
                return interaction.reply(
                    `You do not have enough Silver to hone your weapon. You need ${honingTable.weapon31_40.silver} Silver to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (leapstones < honingTable.weapon31_40.leapstones) {
                return interaction.reply(
                    `You do not have enough Leapstones to hone your weapon. You need ${honingTable.weapon31_40.leapstones} Leapstones to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (honorShards < honingTable.weapon31_40.honorShards) {
                return interaction.reply(
                    `You do not have enough Honor Shards to hone your weapon. You need ${honingTable.weapon31_40.honorShards} Honor Shards to hone your weapon.`,
                    { ephemeral: true },
                );
            }

            // try honing

            if (honeRoll <= honingTable.weapon31_40.chance * 100) {
                // hone successful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            destructionStones:
                                parseInt(rows[0].destructionStones) - honingTable.weapon31_40.destructionStones,
                            gold: parseInt(rows[0].gold) - honingTable.weapon31_40.gold,
                            silver: parseInt(rows[0].silver) - honingTable.weapon31_40.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.weapon31_40.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.weapon31_40.honorShards,
                            weaponLvl: parseInt(rows[0].weaponLvl) + 1,
                            matBonus: parseFloat(rows[0].matBonus) + honingTable.weapon31_40.matBonus,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [weaponHoneSuccessEmbed] });
                    });
            } else {
                // hone unsuccessful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            destructionStones:
                                parseInt(rows[0].destructionStones) - honingTable.weapon31_40.destructionStones,
                            gold: parseInt(rows[0].gold) - honingTable.weapon31_40.gold,
                            silver: parseInt(rows[0].silver) - honingTable.weapon31_40.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.weapon31_40.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.weapon31_40.honorShards,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [honeFailEmbed] });
                    });
            }
            break;

        case rows[0].weaponLvl < 50:
            // check if user has enough materials to hone armor and reply accordingly
            if (destructionStones < honingTable.weapon41_50.destructionStones) {
                return interaction.reply(
                    `You do not have enough Destruction Stones to hone your weapon. You need ${honingTable.weapon41_50.destructionStones} Guardian Stones to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (gold < honingTable.weapon41_50.gold) {
                return interaction.reply(
                    `You do not have enough Gold to hone your weapon. You need ${honingTable.weapon41_50.gold} Gold to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (silver < honingTable.weapon41_50.silver) {
                return interaction.reply(
                    `You do not have enough Silver to hone your weapon. You need ${honingTable.weapon41_50.silver} Silver to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (leapstones < honingTable.weapon41_50.leapstones) {
                return interaction.reply(
                    `You do not have enough Leapstones to hone your weapon. You need ${honingTable.weapon41_50.leapstones} Leapstones to hone your weapon.`,
                    { ephemeral: true },
                );
            }
            if (honorShards < honingTable.weapon41_50.honorShards) {
                return interaction.reply(
                    `You do not have enough Honor Shards to hone your weapon. You need ${honingTable.weapon41_50.honorShards} Honor Shards to hone your weapon.`,
                    { ephemeral: true },
                );
            }

            // try honing

            if (honeRoll <= honingTable.weapon41_50.chance * 100) {
                // hone successful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            destructionStones:
                                parseInt(rows[0].destructionStones) - honingTable.weapon41_50.destructionStones,
                            gold: parseInt(rows[0].gold) - honingTable.weapon41_50.gold,
                            silver: parseInt(rows[0].silver) - honingTable.weapon41_50.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.weapon41_50.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.weapon41_50.honorShards,
                            weaponLvl: parseInt(rows[0].weaponLvl) + 1,
                            matBonus: parseFloat(rows[0].matBonus) + honingTable.weapon41_50.matBonus,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [weaponHoneSuccessEmbed] });
                    });
            } else {
                // hone unsuccessful
                typeormConnection
                    .getRepository('User')
                    .update(
                        { clientId: clientId },
                        {
                            destructionStones:
                                parseInt(rows[0].destructionStones) - honingTable.weapon41_50.destructionStones,
                            gold: parseInt(rows[0].gold) - honingTable.weapon41_50.gold,
                            silver: parseInt(rows[0].silver) - honingTable.weapon41_50.silver,
                            leapstones: parseInt(rows[0].leapstones) - honingTable.weapon41_50.leapstones,
                            honorShards: parseInt(rows[0].honorShards) - honingTable.weapon41_50.honorShards,
                        },
                    )
                    .then(() => {
                        return interaction.reply({ embeds: [honeFailEmbed] });
                    });
            }
            break;
        case rows[0].weaponLvl >= 50:
            return interaction.reply('Your weapon is already at max level!', { ephemeral: true });
    }
}

module.exports = {
    tryHoningArmor: tryHoningArmor,
    tryHoningWeapon: tryHoningWeapon,
};
