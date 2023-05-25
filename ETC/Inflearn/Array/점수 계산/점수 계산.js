function solution(numArr) {
    let answer;
    let count = 0;
    let sum = 0;

    for(let i of numArr) {
        if(i == 1) {
            count++;
        } else {
            count = 0;
        }
        sum += count;
    }
    answer = sum;
    return answer;    
}

let numArr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]
console.log(solution(numArr));