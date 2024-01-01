/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const trappedWater = Array.from({length: height.length});

    trappedWater[0] = height[0];
    let highest = height[0];

    for (let i = 1; i < height.length; i++) {
        if (height[i] >=  highest) {
            highest = height[i];
        }
        trappedWater[i] = highest;
    }

    trappedWater[trappedWater.length - 1] = Math.min(
        trappedWater[trappedWater.length - 1], 
        height[height.length - 1]);

    highest = height[height.length - 1];
    let totalTrappedWater = 0;
    
    for (let i = height.length - 2; i > -1; i--) {
        if (height[i] >=  highest) {
            highest = height[i];
        }
        const minTrappedWater = Math.min(highest, trappedWater[i]) - height[i];
        trappedWater[i] =   minTrappedWater < 0 ? 0 : minTrappedWater;
        totalTrappedWater += trappedWater[i];
    }
    return totalTrappedWater;
};