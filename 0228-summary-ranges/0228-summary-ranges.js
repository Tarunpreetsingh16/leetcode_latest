/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) return [];
    let left = nums[0];
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const nextNum = nums[i + 1];
        if (currentNum + 1 != nextNum) {
            result.push(left + (left != currentNum ? `->${currentNum}` : ''));
            left = nextNum;
        }
    }
    return result;
};
