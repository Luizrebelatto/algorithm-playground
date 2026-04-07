/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false
    }

    const lettersCount = {}

    for(let i = 0; i < s.length; i++){
        lettersCount[s[i]] = (lettersCount[s[i]] || 0) + 1
    }

    for(let j = 0; j < t.length; j++){
        if(!lettersCount[t[j]]) return false
        lettersCount[t[j]]--
    }

    return true  
};
// https://leetcode.com/problems/valid-anagram/