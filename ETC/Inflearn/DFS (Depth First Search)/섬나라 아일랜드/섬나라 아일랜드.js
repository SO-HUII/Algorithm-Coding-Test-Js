function solution(coorArr) {
    let answer = 0;
    const n = coorArr.length;
    
    // 시계 방향
    const dx = [-1, -1, 0, 1, 1, 1, 0, -1]
    const dy = [0, 1, 1, 1, 0, -1, -1, -1]

    function DFS(x, y) {
        // 섬 탐색 후 해당 칸은 0으로 바꿔줌. 그렇지 않을 시 무한 탐색할 수 있음.
        coorArr[x][y] = 0;
        
        // 방향 수에 따라 8번 반복 
        for(let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];

            if(nx >= 0 && nx < n && ny >=0 && ny < n && coorArr[nx][ny] === 1) {
                DFS(nx, ny);
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(coorArr[i][j] === 1) {
                answer++;
                DFS(i, j);
            }
        }
    }
    return answer;
}

const coorArr = [[1, 1, 0, 0, 0, 1, 0],
                [0, 1, 1, 0, 1, 1, 0],
                [0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 1, 1],
                [1, 1, 0, 1, 1, 0, 0],
                [1, 0, 0, 0, 1, 0, 0],
                [1, 0, 1, 0, 1, 0, 0],
                ];
console.log(solution(coorArr));