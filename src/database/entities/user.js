const EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
    name: 'User',
    tableName: 'users',
    columns: {
        clientId: {
            primary: true,
            type: 'varchar',
        },
        username: {
            type: 'varchar',
        },
        armorLvl: {
            type: 'int',
            default: 0,
        },
        weaponLvl: {
            type: 'int',
            default: 0,
        },
        matBonus: {
            type: 'float',
            default: 1,
        },
        gold: {
            type: 'bigint',
            default: 0,
        },
        silver: {
            type: 'bigint',
            default: 0,
        },
        honorShards: {
            type: 'bigint',
            default: 0,
        },
        guardianStones: {
            type: 'bigint',
            default: 0,
        },
        destructionStones: {
            type: 'bigint',
            default: 0,
        },
        leapstones: {
            type: 'int',
            default: 0,
        },
        chaosDungeonClaimedAt: {
            type: 'bigint',
            default: null,
        },
        guardianClaimedAt: {
            type: 'bigint',
            default: null,
        },
    },
});
