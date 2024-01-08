/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    if (nums.length <= 2) return nums.length;
    const dp = Array.from({length: nums.length}, () => new Map());
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            const diff = nums[j] - nums[i];

            if (dp[j].has(diff)) {
                dp[i].set(diff, 1 + dp[j].get(diff));
            } 
            else {
                dp[i].set(diff, 2);
            }

            max = Math.max(max, dp[i].get(diff));
        }
    }
    return max;
};