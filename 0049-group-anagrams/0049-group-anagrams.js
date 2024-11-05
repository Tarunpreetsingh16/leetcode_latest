/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    strs.forEach(str => {
        const arr = Array.from({length: 26}, () => 0);

        for (let i = 0; i < str.length; i++) {
            const code = str.charCodeAt(i) - 97;
            arr[code]++;
        }
        const key = arr.join("#");
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    })
    return Array.from(map.values());
};  