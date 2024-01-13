/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const map = new Map();
    
    t.split('').forEach(char => {
        if (!map.has(char)) {
            map.set(char, 0);
        }
        map.set(char, map.get(char) + 1);
    });

    let minSteps = 0;
    s.split('').forEach(char => {
        if (map.has(char)) {
            const newCount = map.get(char) - 1;
            if (newCount === 0) map.delete(char);
            else map.set(char, newCount);
        }
        else minSteps++;
    });
    return minSteps;
};