/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 2) return 1
    let i = 0, j = 1, updateNum = false
    while (j < nums.length) {
        const left = nums[i], right = nums[j]
        if (left != right) {
            if (updateNum) {
                nums[++i] = nums[j]
                continue
            }   
            i++
        }
        else {
            updateNum = true
        }
        j++
    }
    return i+1
};