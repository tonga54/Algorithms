// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let maxValue = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    for(var i = arr.length - 2; i >= 0; i--){
        let currentValue = arr[i];
        arr[i] = maxValue;

        if(currentValue > maxValue){
            maxValue = currentValue;
        }
    }

    return arr;
};

// var replaceElements = function(arr) {
//     response = [];
//     for(var i = 0; i < arr.length - 1; i++){
//         arrAux = arr.slice(i + 1, arr.length);
//         response.push(Math.max.apply(null, arrAux));
//     }
//     response.push(-1);
//     return response;
// };

console.log(replaceElements([17,18,5,4,6,1]));