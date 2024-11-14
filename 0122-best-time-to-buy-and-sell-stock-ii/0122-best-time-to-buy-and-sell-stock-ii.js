/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;

    let left = 0, right = 1;

    while (right < prices.length) {
        const leftPrice = prices[left], rightPrice = prices[right];

        if (rightPrice - leftPrice > 0) {
            profit += (rightPrice - leftPrice)
        }
        left++;
        right++;
    }

    return profit;
};