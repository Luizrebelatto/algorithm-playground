/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let maxValueRight = -1

    for(let i = arr.length - 1; i >= 0; i--){
        const currentValue = arr[i]
        arr[i] = maxValueRight

        if(currentValue > maxValueRight){
            maxValueRight = currentValue
        }

    }
    return arr
};