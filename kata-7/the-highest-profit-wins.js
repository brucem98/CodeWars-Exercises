// https://www.codewars.com/kata/559590633066759614000063/train/javascript


function minMax(arr){
    let result = []
    result.push(Math.min(...arr))
    result.push(Math.max(...arr))
    return result;
}

console.log(minMax([3,5,7,8,15]))