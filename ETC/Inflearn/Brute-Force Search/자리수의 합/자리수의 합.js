function solution(numArr) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;

    for(let i of numArr) {
        let sum = 0;
        let numDig = i;

        // numDig == 0이면 break 
        while(numDig) {
            let num = numDig % 10;
            sum += num;
            numDig = Math.floor(numDig / 10);
        }

        if(sum > max) {
            max = sum;  // 자릿수 합의 최대수
            answer = i;  // 자릿수의 합이 최대인 정수
        } else if(sum == max) {  // 자릿수의 합이 최대인데 그 합이 같은 정수가 있다면
            if(i > answer) {  // 더 큰 정수가 출력
                answer = i
            }
        }
    }
    return answer;
}

let numArr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(numArr));