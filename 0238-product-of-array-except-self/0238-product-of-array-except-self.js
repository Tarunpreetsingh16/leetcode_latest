/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefixProduct = getPrefixProduct(nums);
    const suffixProduct = getSuffixProduct(nums);

    for (let i = 0; i < prefixProduct.length; i++) {
        prefixProduct[i] *= suffixProduct[i];
    }

    return prefixProduct;
};

const getPrefixProduct = (arr) => {
    const prefixProduct = [1];

    for (let i = 1; i < arr.length; i++) {
        prefixProduct[i] = prefixProduct[i - 1] * arr[i - 1];
    }
    return prefixProduct;
}

const getSuffixProduct = (arr) => {
    const prefixProduct = getPrefixProduct(arr.reverse());
    return prefixProduct.reverse();
}