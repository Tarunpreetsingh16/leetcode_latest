/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    let i;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            i = mid;
            break;
        }
        else if (nums[mid] < target) {
            if (mid + 1 > right) {
                i = mid + 1;
                break;
            }
            left = mid + 1;
        }
        else {
            if (mid - 1 < left) {
                i = mid;
                break;
            }
            right = mid - 1;
        }
    }

    return i;
};