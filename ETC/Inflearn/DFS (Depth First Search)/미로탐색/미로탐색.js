function solution(rArr) {
    let answer = 0;
    
    //          좌 상 우 하
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    function DFS(x, y) {
        // 도착점이 도달한 경우
        if(x === rArr.length - 1 && y === rArr[0].length - 1) {
            answer++;
        } else {
            // 상하좌우 네 번 반복
            for(let i = 0; i < 4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];

                // 격자 경계를 안 쪽에서 탐색하도록 + 경로가 통로인 경우(배열 요소가 0인 경우)
                if(nx >= 0 && nx <= rArr.length - 1 && ny >= 0 && ny <= rArr[0].length - 1 && rArr[nx][ny] === 0) {
                    rArr[nx][ny] = 1;
                    DFS(nx, ny);
                    rArr[nx][ny] = 0;
                }
            }
        }
    }

    rArr[0][0] = 1;
    DFS(0, 0);
    return answer;
}

const routeArr = [[0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1 ,1, 1, 0], [0, 0, 0, 1, 0, 0, 0],[1, 1, 0, 1, 0, 1, 1],[1, 1, 0, 0, 0, 0, 1],[1, 1, 0, 1, 1, 0, 0],[1, 0, 0, 0, 0, 0, 0]];
console.log(solution(routeArr));