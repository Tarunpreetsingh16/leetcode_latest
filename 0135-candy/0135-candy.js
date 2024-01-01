/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const candies = Array.from({length: ratings.length}, () => 1);

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i - 1] < ratings[i]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

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