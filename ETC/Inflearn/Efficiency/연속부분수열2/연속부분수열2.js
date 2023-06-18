function solution(num, numArr) {
    let answer;
    let lp = 0;
    let sum = 0;
    let count = 0;

    for(let rp = 0; rp < numArr.length; rp++) {
        sum += numArr[rp];
        
        while(sum > num) {
            sum -= numArr[lp++];
        }
        count += (rp - lp + 1);
    }
    
    answer = count;
    return answer;
}

let num = 5;
let numArr = [1, 3, 1, 2, 3];
console.log(solution(num, numArr));