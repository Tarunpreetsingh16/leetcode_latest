/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        if (nums[r] === val) {
            r--;
            continue;
        }
        if (nums[l] != val) l++;
        else if (nums[l] === val) {
            nums[l] = nums[r] + nums[l];
            nums[r] = nums[l] - nums[r];
            nums[l] = nums[l] - nums[r];
            r--;
            l++;
        }
    }
    let result = 0;
    nums.some(num => {
        if (num != val) {
            result++
        }
        else {
            return true;
        }
    });
    return result;
};