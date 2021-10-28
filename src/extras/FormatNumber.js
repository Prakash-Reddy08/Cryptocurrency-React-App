let ranges = [
    { divider: 1e18, suffix: 'E' },
    { divider: 1e15, suffix: 'P' },
    { divider: 1e12, suffix: 'T' },
    { divider: 1e9, suffix: 'B' },
    { divider: 1e6, suffix: 'M' },
    { divider: 1e3, suffix: 'k' }
];

function formatNumber(n) {
    if (n) {
        for (let i = 0; i < ranges.length; i++) {
            if (n >= ranges[i].divider) {
                if (ranges[i].suffix === 'B' || 'T' || 'P' || 'E') {
                    return (n / ranges[i].divider).toFixed(1).toString() + ranges[i].suffix;
                }
                return (n / ranges[i].divider).toFixed(2).toString() + ranges[i].suffix;
            }
        }
        return n.toString();
    }
    return "";
}


export default formatNumber;