/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    const newRotationNum = k % nums.length

    //rever initial numbers
    reverse(0, nums.length - newRotationNum - 1, nums)

    //reverse rest of the numbers
    reverse(nums.length - newRotationNum, nums.length - 1, nums)

    //reverse the whole array
    reverse(0, nums.length - 1, nums)
}

const reverse = (l, r, nums) => {
    while(l < r) {
        const temp = nums[l]
        nums[l] = nums[r]
        nums[r] = temp
        l++, r--
    }
};
