// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let max = Math.max.apply(null, candies);
    for(candy of candies){
        result.push((candy + extraCandies) >= max);
    }

    return result;
};