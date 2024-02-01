/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sTracker = 0, tTracker = 0

    while (tTracker < t.length && sTracker < s.length) {
        s[sTracker] === t[tTracker] && sTracker++
        tTracker++
    }
    return sTracker === s.length
};