/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length != t.length) return false
    let i = 0, mapForS = new Map(), mapForT = new Map()

    while (i < s.length) {
        if (mapForS.has(s[i]) || mapForT.has(t[i])) {
            if (!(mapForS.get(s[i]) === t[i] && mapForT.get(t[i]) === s[i])) {
                return false
            }
        }
        else {
            mapForS.set(s[i], t[i])
            mapForT.set(t[i], s[i])
        }
        i++
    }
    return true
};