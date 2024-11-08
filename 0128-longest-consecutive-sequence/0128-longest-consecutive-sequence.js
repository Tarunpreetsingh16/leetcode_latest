/**
 * @param {number[]} nums
 * @return {number}
 */

function CustomValue(sequence) {
    this.visited = false;
    this.sequence = sequence ? sequence : [];
};
var longestConsecutive = function (nums) {
    const map = new Map();

    // create a map with values set to CustomValue
    // where CustomValue will store if the num has already been visited
    // and sequence will store adjacent numbers for each num
    nums.forEach(num => {
        if (!map.has(num)) {
            map.set(num, new CustomValue([]));

            const adjacentValues = [];

            if (map.has(num - 1)) {
                map.get(num - 1).sequence.push(num);
                adjacentValues.push(num - 1)
            }

            if (map.has(num + 1)) {
                map.get(num + 1).sequence.push(num);
                adjacentValues.push(num + 1)
            }

            map.get(num).sequence.push(...adjacentValues);
        }
    });

    //now use bfs to calculate the length of each num
    let maxLength = -Infinity;
    for (let [key, value] of map) {
        // if the num has already been visited, means it was already counted in the old length calculation
        if (!value.visited) {
            maxLength = Math.max(maxLength, getLengthForKey(key, map, 1))
        }
    }
    return maxLength === -Infinity ? 0 : maxLength;
};

const getLengthForKey = (key, map, length) => {
    //mark the num/key as visited so that we do not get stuck in an infinite loop
    map.get(key).visited = true;
    const node = map.get(key);
    node.sequence.forEach(num => {
        //this will stop us from visiting a num in the map that has already been visited
        if (!map.get(num).visited) {
            //get length of adjacent nums sequence 
            length = getLengthForKey(num, map, length + 1)
        }
    })
    return length;
};
