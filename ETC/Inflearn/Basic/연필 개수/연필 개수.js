function solution(people) {
    // let answer;
    // const pensil = 12;
    // answer = people / pensil + 1

    // return parseInt(answer);

    // 다른 Math 함수 더 알아보고 README.md에 함께 정리
    let answer = Math.ceil(people / 12);

    return answer;
}

console.log(solution(178));