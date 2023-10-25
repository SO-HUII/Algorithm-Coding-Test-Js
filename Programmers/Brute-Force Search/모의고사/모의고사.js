function solution(answers) {
    let answer = [];
    const pArr = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    
    // pArr 세 명의 정답 개수 저장 배열
    let sum  = [0, 0, 0];
    
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < answers.length; j++) {
            if(answers[j] === pArr[i][j % (pArr[i].length)]) {
                sum[i]++;
            }
        }
    }
    let max = Math.max(sum[0], sum[1], sum[2]);
    
    if(max === sum[0]) answer.push(1);
    if(max === sum[1]) answer.push(2);
    if(max === sum[2]) answer.push(3);
    
    return answer;
}