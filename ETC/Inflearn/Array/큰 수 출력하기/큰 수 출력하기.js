function solution() {
    let answer = [];
    answer.push(numArr[0]);
    
    for(let i = 1; i < numArr.length; i++) {
        if(numArr[i] > numArr[i - 1]) {
            answer.push(numArr[i]);
        }
    }
    return answer;    
}

let numArr = [7, 3, 9, 5, 6, 12];
console.log(solution());