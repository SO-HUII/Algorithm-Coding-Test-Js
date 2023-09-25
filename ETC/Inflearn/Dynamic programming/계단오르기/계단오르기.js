function solution(s) {
    let answer = 0;
    // 해당 인덱스 위치의 계단까지 가는 방법의 수를 저장하는 배열
    let mArr = Array.from({ length: s + 1 }, () => 0);

    // 1계단, 2계단 올라가는 방법 수 초기화
    mArr[1] = 1;
    mArr[2] = 2;

    for(let i = 3; i <= s; i++) {
        mArr[i] = mArr[i - 2] + mArr[i - 1];
    }
    answer = mArr[s];
    return answer;
}

const stair = 7;
console.log(solution(stair));