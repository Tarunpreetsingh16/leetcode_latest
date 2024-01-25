/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const dp = Array.from({length: text1.length + 1})
    dp.forEach((_, i) => dp[i] = Array.from({length: text2.length + 1}))

    for (let i = 0; i < dp[0].length; i++) {
        dp[0][i] = 0
    }

    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 0
    }

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
                continue
            }
            dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
        }
    }
    console.log(dp)
    return dp[dp.length - 1][dp[0].length - 1]
};