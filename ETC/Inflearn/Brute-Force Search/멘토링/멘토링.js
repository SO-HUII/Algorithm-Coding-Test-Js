function solution(rankArr) {
    let answer = 0;
    let count = 0;
    let tmp = [];
    
    // i, j를 돌며 멘토, 멘티 경우의 수 구하기
    for(let i = 1; i <= rankArr[0].length; i++) {
        for(let j = 1; j <= rankArr[0].length; j++) {
            // 시험에 대한 반복문 시작 전 count를 0으로 초기화
            count = 0;
            for(let k = 0; k < rankArr.length; k++) {
                let pi = 0;
                let pj = 0;
                for(let s = 0; s < rankArr[0].length; s++) {
                    // k번째 시험, s 위치에 i번 학생이 있으면
                    if(rankArr[k][s] == i) pi = s;
                    if(rankArr[k][s] == j) pj = s;
                }
            if(pi > pj) count++;
            }
            // count가 시험을 본 횟수와 같다면 
            if(count == rankArr.length) {
                tmp.push("[" + [i, j] + "]");
                answer++;
            }
        }
    }
    return `멘토, 멘티가 될 수 있는 경우의 수는 ${answer}이며 경우의 수는 각각 ${tmp.join(" ")}입니다.`;
}

let rankArr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(rankArr));