/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0, i = 1

    // while (j < prices.length) {
    //     if (prices[i] < prices[j]) {
    //         while (j < prices.length && prices[j] < prices[j + 1]) {
    //             j++
    //         }
    //         maxProfit += (prices[j] - prices[i])
    //         i = j
    //         j++
    //     } else {
    //         i++, j++
    //     }
    // }
    while(i < prices.length) {
        if (prices[i] > prices[i-1]) {
            maxProfit += prices[i] - prices[i-1]
        }
        i++
    }
    return maxProfit
};