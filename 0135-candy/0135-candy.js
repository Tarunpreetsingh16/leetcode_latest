/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const candies = Array.from({length: ratings.length}, () => 1);

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] < ratings[i - 1]) {
            let j = i;
            while (j > 0 && ratings[j] < ratings[j - 1] && candies[j] >= candies[j - 1]) {
                j--;
                candies[j]++;
            }
        }
        else if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    const sum = candies.reduce((prevVal, newVal) => {
        return prevVal + newVal
    }, 0)

    console.log(sum, candies);
    return sum;
};