/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {
    let maxArea = 0;
    for(var i = 0; i < heights.length; i++){
        let j = i + 1;
        while(j < heights.length){
            if(heights[i] < heights[j]){
                let tempArea = heights[i] * (j-i);
                if(tempArea > maxArea){
                    maxArea = tempArea;
                }
                j++;
            } else {
                let tempArea = heights[j] * (j-i);
                if(tempArea > maxArea){
                    maxArea = tempArea;
                }
                j++;
            }
        }
    }
    return maxArea;
}

// console.log(containerWithMostWater(heights1));
// console.log(containerWithMostWater(heights2));
// console.log(containerWithMostWater(heights3));
// console.log(containerWithMostWater(heights4));

function efficientContainer (heights) {
    let i = 0;
    let j = heights.length - 1;
    let maxArea = 0;
    while(i< j){
        if(heights[i] < heights[j]){
            let tempArea = heights[i] * (j-i);
            if(tempArea > maxArea){
                maxArea = tempArea;
            }
            i++;
        } 
        else if(heights[j] < heights[i]){
            let tempArea = heights[j] * (j-i);
            if(tempArea > maxArea){
                maxArea = tempArea;
            }
            j--;
        } else {
            let tempArea = heights[i] * (j-i);
            if(tempArea > maxArea){
                maxArea = tempArea;
            }
            i++;
        }
    }
    return maxArea;
}

console.log(efficientContainer(heights1));
console.log(efficientContainer(heights2));
console.log(efficientContainer(heights3));
console.log(efficientContainer(heights4));