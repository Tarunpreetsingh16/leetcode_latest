/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const map = new Map();

    matches.forEach(pair => {
        const winner = pair[0];
        const loser = pair[1];

        if (!map.has(winner)) map.set(winner, 0);
        
        if (!map.has(loser)) map.set(loser, 0);
        map.set(loser, map.get(loser) + 1);
    })

    const result = [[], []];
    for (let [key, value] of map) {
        if (value === 0) {
            result[0].push(key);
        }
        if (value === 1) {
            result[1].push(key);
        }
    }
    result[0].sort((a, b) => a - b);
    result[1].sort((a, b) => a - b);
    return result
};