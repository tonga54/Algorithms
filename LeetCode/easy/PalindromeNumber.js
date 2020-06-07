// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = String(x);
    let i = 0;
    let n = x.length - 1;
    let flag = true;
    while((i < x.length && n >= 0) && flag){
        if(i == n){
            //Stop execution
            i = x.length;
        }
        else{
            if(x[i] != x[n]){
                flag = false;
            }    
        }
        
        i++; n--;
    }
    
    return flag;
};