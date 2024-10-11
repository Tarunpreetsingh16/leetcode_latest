/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorityElement = nums[0];
    let count = 1;

    nums.forEach((num) => {
        if (num != majorityElement) {
            count--;
        }
        else {
            count++;
        }
        if (count === 0) {
            majorityElement = num;
            count = 1;
        }
    }) 

    return majorityElement;
};                                           