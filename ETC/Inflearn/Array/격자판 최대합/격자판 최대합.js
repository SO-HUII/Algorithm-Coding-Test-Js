function solution(numArr) {
    let answer;
    let max = 0;
    let sum1 = 0;
    let sum2 = 0;
    let n = numArr.length;

    // 행, 열 최대합
    for(let i = 0; i < n; i++) {
        sum1 = 0;
        sum2 = 0;
        for(let j = 0; j < n; j++) {
            sum1 += numArr[i][j];
            sum2 += numArr[j][i];
        }
        max = Math.max(max, sum1, sum2);  // 셋 중 가장 큰 수 고르기
    }

    // 대각선 최대합
    sum1 = 0;
    sum2 = 0;
    for(let i = 0; i < n; i++) {
        sum1 += numArr[i][i];
        sum2 += numArr[i][n - i - 1];
    }
    max = Math.max(max, sum1, sum2);
    answer = max;
    return answer;    
}

let numArr = [[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15,], [19, 27, 29, 37, 27,], [19, 13, 30, 13 ,19]];
console.log(solution(numArr));