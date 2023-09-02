function solution(n, nArr) {
    let answer = 0;

    // 인접행렬 배열
    // index 0번째 배열의 원소는 사용하지 않고 비워놓을 것이기 때문에 n + 1개로 설정.
    //                    행의 개수(n + 1)개, 열의 개수(n + 1)개
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let check = Array.from({ length: n + 1 }, () => 0);

    for(let [a, b] of nArr) {
        graph[a][b] = 1;
    }

    // v: vertex
    function DFS(v) {
        // 종착점일 시 count +1
        if(v === n) answer++;
        else {
            for(let i = 1; i <= n; i++) {
                if(graph[v][i] === 1 && check[i] === 0) {
                    check[i] = 1;
                    DFS(i);
                    check[i] = 0;  // back 지점
                }
            }
        }
    }
    // DFS() 첫 호출 전 첫 방문 노드 체크해주지 않으면 경로 탐색시 경로 반복의 위험 있음.
    check[1] = 1;
    DFS(1);
    return answer;
}

const n = 5;

// 간선 정보
const nodeArr = [[5, 9], [1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(n, nodeArr));