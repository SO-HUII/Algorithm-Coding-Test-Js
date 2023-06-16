function solution(num, numArr) {
    let answer;
    let lp = 0;
    let sum = 0;
    let count = 0;

    for(let rp = 0; rp < numArr.length; rp++) {
        sum += numArr[rp];
        if(sum == num) count++; 
        while(sum >= num) {
            sum -= numArr[lp++]; // 포인터 lp위치 오른쪽으로 이동
            if(sum == num) count++;
        }
    }
    answer = count;
    return answer;
}

let num = 6;
let numArr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(num, numArr));