function solution(num) {
    let answer = 0;

    if(num > 20) {
        answer = "20이하의 자연수를 입력해주세요.";
    } else {
        for(let i = 0; i <= num; i++) {
                answer += i;
        }
    }
    return answer;
}

console.log(solution(26));