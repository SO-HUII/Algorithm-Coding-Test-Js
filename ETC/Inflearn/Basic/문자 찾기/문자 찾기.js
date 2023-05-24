function solution(str, ch) {
    let answer;
    let count = 0;

    for(let i of str) {
        if(i == ch) {
            count++;
        }
    }
    answer = count;
    return answer;
}

let str = "COMPUTERPROGRAMMING";
let ch = 'R';
console.log(solution(str, ch));