/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const map = new Map();

    /* maintain the count of a specific number
      For example = [1,2,2,3,3,4] => Map(4) {1 -> 1, 2 -> 2, 3 -> 2, 4 -> 1} (num -> number of times it occurred in the array)
    */
    nums.forEach((num) => {
        if (!map.has(num)) map.set(num, 1);
        else map.set(num, map.get(num) + 1);
    })

    const result = [];

    /**
    *   This method will be used to iterate through the map and create the resulting array
    */
    const loopThroughMap = (value, key, map) => {
        /* Run the loop from 0 till the value (number of times a key (num) was seen in the original array)
            While we go through it, we start adding number to rows in 2D array. By doing this we will never have
            same number more than once in a row.
        */ 
        for (let i = 0; i < value; i++) {
            /* if a new array is needed in the resulting array, create one. */
            if (result.length - 1 < i) {
                result[i] = [];
            }

            result[i].push(key);
        }
        /* delete the key-value pair as we have alloted the current number to the rows of the 2D array.*/
        map.delete(key);
    };

    /* go through the map using *loopThroughMap* method */
    map.forEach(loopThroughMap);

    return result;
};