function solution(numArr1, numArr2) {
    let answer;

    for(let i = 0; i < numArr2.length; i++) {
        numArr1.push(numArr2[i]);
    }

    answer = numArr1.sort((a, b) => a - b).join(' ');

    return answer;
}

let numArr1 = [1, 3, 5];
let numArr2 = [2, 3, 6, 7, 9];
console.log(solution(numArr1, numArr2));