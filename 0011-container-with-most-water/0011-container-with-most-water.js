/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0, left = 0, right = height.length - 1;

    while (left < right) {
        const water = Math.min(height[left], height[right]) * (right - left);
        maxWater = Math.max(water, maxWater);
        height[left] <= height[right] ? left++ : right--;
    }
    return maxWater;
};