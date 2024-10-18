/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map1 = {}
    const map2 = {}

    var isNotIsomorphic = false
    for (var i = 0; i < s.length; i++) {
        if (
            (s[i] in map1 && map1[s[i]] != t[i]) || 
            (t[i] in map2 && map2[t[i]] != s[i])
        ) {
            isNotIsomorphic = true;
            break;
        }
        map2[t[i]] = s[i]
        map1[s[i]] = t[i]
    }
    return !isNotIsomorphic
};