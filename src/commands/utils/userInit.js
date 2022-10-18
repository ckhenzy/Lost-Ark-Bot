function userInitChaos(clientId, username) {
    return {
        clientId,
        username,
        armorLvl: 0,
        weaponLvl: 0,
        matBonus: 1,
        gold: 0,
        silver: 120000,
        honorShards: 7500,
        guardianStones: 18000,
        destructionStones: 10000,
        leapstones: 0,
        chaosDungeonClaimedAt: Date.now(),
    };
}

function userInitGuardian(clientId, username) {
    return {
        clientId,
        username,
        armorLvl: 0,
        weaponLvl: 0,
        matBonus: 1,
        gold: 1375,
        silver: 0,
        honorShards: 0,
        guardianStones: 0,
        destructionStones: 0,
        leapstones: 22,
        guardianClaimedAt: Date.now(),
    };
}

module.exports = {
    userInitChaos: userInitChaos,
    userInitGuardian: userInitGuardian,
};
