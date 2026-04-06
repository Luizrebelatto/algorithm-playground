/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const newArray = new Set()

    for(let i = 0; i <= nums.length; i++){
        if(newArray.has(nums[i])){
            return true
        }
        newArray.add(nums[i])
    }
    return false
};

// https://leetcode.com/problems/contains-duplicate/