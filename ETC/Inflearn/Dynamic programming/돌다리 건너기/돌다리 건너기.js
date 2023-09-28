function solution(n) {
    let answer = 0;
    let mArr = Array.from({ length: n + 2 }, () => 0);

    mArr[1] = 1;
    mArr[2] = 2;

    for(let i = 3; i <= n + 1; i++) {
        mArr[i] = mArr[i - 2] + mArr[i - 1];
    }

    answer = mArr[n + 1];
    return answer;
}

const rocks = 7;
console.log(solution(rocks));