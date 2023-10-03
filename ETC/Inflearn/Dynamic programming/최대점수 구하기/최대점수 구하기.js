function solution(q, m, arr) {
    let answer;
    let dy = Array.from({ length: m + 1 }, () => 0);

    for(let i = 0; i < q; i++) {
        let ps = arr[i][0];
        let pt = arr[i][1];
        
        for(let j = m; j >= pt; j--) {
            // pt를 빼준 시간에서 얻을 수 있는 최대 점수 + 현재 문제의 스코어
            dy[j] = Math.max(dy[j], dy[j - pt] + ps);
        }
    }
    answer = dy[m];
    return answer;
}

const ques = 5;
const min = 20;
const arr = [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
console.log(solution(ques, min, arr));