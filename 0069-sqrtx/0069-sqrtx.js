/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left=1;
    let right=x;
    let eligiblecandidate=0;
    while(left<=right){
        let n=(left+parseInt((right-left)/2));

        if((n*n)==x) {
            return n;
        }
        else if((n*n)<x){
            left=n+1;
            eligiblecandidate=n;
        }
        else {
            right=n-1;
        }

    }
    return eligiblecandidate;


};
