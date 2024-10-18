/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length != t.length) return false;

    let ptr = 0;
    const sMap = new Map();
    const tMap = new Map();

    while (ptr < s.length) {
        const sChar = s[ptr];
        const tChar = t[ptr];
        if (sMap.has(sChar)) {
            if (sMap.get(sChar) != tChar) {
                return false;
            }
        } 
        else if (tMap.has(tChar)) {
            if (tMap.get(tChar) != sChar) {
                return false;
            }
        }
        sMap.set(sChar, tChar);
        tMap.set(tChar, sChar);
        ptr++;
    }
    return true;
};