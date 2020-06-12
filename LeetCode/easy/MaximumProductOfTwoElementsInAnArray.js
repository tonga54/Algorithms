// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let auxFirstNumber = 0;
    let auxSecondNumber = 0;
    for(var i = 0; i < nums.length; i++){
        if(nums[i] > auxFirstNumber){
            auxSecondNumber = auxFirstNumber;
            auxFirstNumber = nums[i];
        }
        else if(nums[i] > auxSecondNumber){
            auxSecondNumber = nums[i];   
        }
    }

    return (auxFirstNumber - 1) * (auxSecondNumber - 1);
};