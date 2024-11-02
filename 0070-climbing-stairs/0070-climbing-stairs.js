/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;

    let  i = 2;

    while (i <= n) {
        dp[i] = dp[i - 1] + (i - 2 < 0 ? 0 : dp[i - 2]);
        i++;
    }
    console.log(dp)
    return dp[n];
}; 