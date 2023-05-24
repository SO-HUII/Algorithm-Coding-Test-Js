function solution(heightArr) {
    let answer;
    let n = heightArr.length;
    let count = 0;

    // 상, 하, 좌, 우
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            let flag = 1;
            for(let k = 0; k < 4; k++) { 
                let nx = i + dx[k];
                let ny = j + dy[k];
                if(nx >= 0 && nx < n && ny >= 0 && ny < n) {
                    if(heightArr[nx][ny] >= heightArr[i][j]){
                        flag = 0;
                        break;
                    } 
                }
            }
            // flag가 상하좌우를 탐색할 동안 한 번도 0으로 바뀌지 않았으니 heightArr[i][j]는 봉우리
            if(flag) count++;
        }
    }
    answer = count;
    return answer;    
}

let heightArr = [[5, 3, 7, 2, 3], [3, 7, 1, 6, 1], [7, 2, 5, 3, 4], [4, 3, 6, 4, 1] ,[8, 7, 3, 5, 2]];
console.log(solution(heightArr));