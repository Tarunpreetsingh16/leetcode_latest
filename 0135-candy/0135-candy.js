/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const candies = Array.from({length: ratings.length}, () => 1);

    // first we need to assign candies to the children who have higher ratings than their left neighbor 
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i - 1] < ratings[i]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // now need to assign candies to the children who have higher ratings than their right neighbor 
    for (let i = ratings.length - 2; i > -1; i--) {
        if (ratings[i + 1] < ratings[i] && candies[i + 1] >= candies[i]) {
            candies[i] = candies[i + 1] + 1;
        }
    }

    const sum = candies.reduce((prevVal, newVal) => {
        return prevVal + newVal
    }, 0)

    return sum;
};