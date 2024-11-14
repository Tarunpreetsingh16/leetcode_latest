/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const cache = [];

    const canJump = (nums, index) => {
        if (index === nums.length - 1) {
            return true;
        }
        const currentNum = nums[index];
        
        for (let i = currentNum; i > 0; i--) {
            if (cache[index + i] != null && cache[index + i] == false) {
                continue;
            }
            if (canJump(nums, index + i)) {
                return true;
            }
        }
        cache[index] = false;

        return false;
    }

    return canJump(nums, 0);
};