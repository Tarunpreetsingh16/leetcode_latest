/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map();
    if (s.length != t.length) return false;

    s.split("").forEach((char) => {
        if (!map.has(char)) {
            map.set(char, 0);
        }

        const count = map.get(char);
        map.set(char, count + 1);
    })

    t.split("").forEach((char) => {
        if (!map.has(char)) {
            return false;
        }
        const count = map.get(char);
        if (count - 1 < 0) {
            return false;
        }
        map.set(char, count - 1);
    })

    for (let [key, value] of map) {
        if (value != 0) return false;
    }
    return true;
};