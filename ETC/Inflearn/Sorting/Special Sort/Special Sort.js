function solution(numArr) {
    let answer = numArr;

    for(let i = 0; i < numArr.length - 1; i++) {
        for(let j = 0; j < numArr.length - i - 1; j++) {
            if(numArr[j + 1] < 0 && numArr[j] > 0) {
                [numArr[j], numArr[j + 1]] = [numArr[j + 1], numArr[j]]; 
            }        
        }
    }
    return answer.join(' ');
}

let numArr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(numArr));