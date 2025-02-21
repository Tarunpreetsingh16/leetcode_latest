/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 1, prev = prices[0], profit = 0

    while (i < prices.length) {
        curr = prices[i]
        if (curr > prev) {
            profit = Math.max(profit, curr - prev)
        }
        prev = Math.min(prev, curr)
        i++
    }
    return profit
};