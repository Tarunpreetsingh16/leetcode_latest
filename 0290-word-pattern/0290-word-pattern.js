/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const sMap = new Map();
    const pMap = new Map();

    sWords = s.split(" ");
    pChars = pattern.split("");
    
    if (pChars.length != sWords.length) {
        return false;
    }
    for (let i = 0; i < sWords.length; i++) {
        const pChar = pChars[i];
        const sWord = sWords[i];

        if ((sMap.has(sWord) && sMap.get(sWord) != pChar)
            || (pMap.has(pChar) && pMap.get(pChar) != sWord)) {
            return false;
        }

        sMap.set(sWord, pChar);
        pMap.set(pChar, sWord);
    }
    return true;
};