

const map = new Map();
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    generateMap();
    
    let result = 0;
    let pointer = 0;

    while (pointer < s.length) {
        let tempResult = map.get(s[pointer]);
        if (pointer + 1 < s.length 
                && map.has(s[pointer] + s[pointer + 1])) {
            tempResult = map.get(s[pointer] + s[pointer + 1]);
            pointer++;
        }
        result += tempResult;
        pointer++;
    }
    console.log(result);
    return result;
};

const generateMap = () => {
    map.set('I', 1);
    map.set('IV', 4);
    map.set('V', 5);
    map.set('IX', 9);
    map.set('X', 10);
    map.set('XL', 40);
    map.set('L', 50);
    map.set('XC', 90);
    map.set('C', 100);
    map.set('CD', 400);
    map.set('D', 500);
    map.set('CM', 900);
    map.set('M', 1000);
}