function solution(numArr1, numArr2) {
    let answer = [];
    
    for(let i = 0; i < numArr1.length; i++) {
        for(let j = 0; j < numArr2.length; j++) {
            if(numArr1[i] == numArr2[j]) {
                if(!answer.includes(numArr1[i])) {
                    answer.push(numArr1[i]);
                }
            }
        }
    }
    return answer.sort().join(' ');
}

let numArr1 = [1, 3, 9, 5, 2];
let numArr2 = [3, 2, 5, 7, 8];
console.log(solution(numArr1, numArr2));

