function numberFormatter(number) {
    if (number >= 999999999) {
        return `${(number / 1000000000).toFixed(0)}b`;
    }
    if (number >= 999999) {
        return `${(number / 1000000).toFixed(0)}m`;
    }
    if (number >= 999) {
        return `${(number / 1000).toFixed(0)}k`;
    }
    return number;
}

module.exports = {
    numberFormatter: numberFormatter,
};
