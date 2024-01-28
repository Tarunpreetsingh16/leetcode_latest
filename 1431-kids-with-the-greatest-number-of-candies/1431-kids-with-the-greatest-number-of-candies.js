/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = candies.reduce((prevItem, newItem) => {
        if (prevItem < newItem) return newItem
        return prevItem
    }, 0)

    return candies.map(candy => {
        if (candy + extraCandies >= max) {
            return true
        }
        return false
    })
};