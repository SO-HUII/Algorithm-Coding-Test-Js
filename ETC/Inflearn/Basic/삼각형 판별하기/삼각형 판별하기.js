// 삼각형 성립 조건
// 제일 긴 변의 길이가 나머지 두 변의 길이의 합보다 짧아야한다.

function solution(a, b, c) {
    let answer = "YES";
    let longest;
    let sum = a + b + c;

    if(a > b) longest = a;
    else longest = b;
    if(c > longest) longest = c;

    if((sum - longest) <= longest) answer = "NO"

    return answer;
}

console.log(solution(13, 33, 17));