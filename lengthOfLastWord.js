/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const sentences = s.trim().split(" ")
    return sentences[sentences.length - 1].length
};