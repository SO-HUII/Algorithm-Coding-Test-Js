function solution(str, ch) {
    let answer = [];
    let min = Number.MAX_SAFE_INTEGER;

    // 앞 -> 뒤 (자신보다 왼쪽에 있는 e와 떨어진 거리)
    for(let i = 0; i < str.length; i++) {
        if(str[i] == ch) min = 0;
        else min++;
        answer.push(min);
    }

    min = Number.MAX_SAFE_INTEGER;  // min 다시 큰 값으로 초기화
    // 뒤 -> 앞 (자신보다 오른쪽에 있는 e와 떨어진 거리)
    for(let i = str.length - 1; i >= 0; i--) {
        if(str[i] == ch) min = 0;
        else min++;

        if(min < answer[i]) {
            answer[i] = min;
        }
    }
    return answer.join(' ');  // 배열 answer를 , 없이 하나의 문자열로 출력 
}

const ch = 'e';
let str = "teachermode";
console.log(solution(str, ch));