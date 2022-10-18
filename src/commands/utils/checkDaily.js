// Check if the user has already claimed their daily reward
function checkDailyChaos(rows) {
    const lastClaimed = rows[0].chaosDungeonClaimedAt;
    const now = Date.now();
    const diff = now - lastClaimed;
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    return diffDays >= 1;
}

function checkDailyGuardian(rows) {
    const lastClaimed = rows[0].guardianClaimedAt;
    const now = Date.now();
    const diff = now - lastClaimed;
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    return diffDays >= 1;
}

module.exports = {
    checkDailyChaos: checkDailyChaos,
    checkDailyGuardian: checkDailyGuardian,
};
