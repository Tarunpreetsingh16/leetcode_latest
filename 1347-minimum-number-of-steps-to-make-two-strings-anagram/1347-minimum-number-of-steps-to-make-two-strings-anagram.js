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
        if (map.has(char) && map.get(char) > 0) {
            map.set(char, map.get(char) - 1);
        }
        else minSteps++;
    });
    return minSteps;
};