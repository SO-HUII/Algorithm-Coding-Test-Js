function solution(n, nArr) {
    let answer = 0;
    // n + 1행과 빈 열
    let graph = Array.from(Array(n + 1), () => Array());
    let check = Array.from({ length: n + 1 }, () => 0);

    for(let [a, b] of nArr) {
        graph[a].push(b);  // 인접리스트 생성
    }

    function DFS(v) {
        if(v === n) answer++;
        else {
            // 인접리스트의 길이(연결되어있는 노드수)만큼 반복 탐색
            for(let i = 0; i <= graph[v].length; i++) {
                // v 정점에서 이동 가능한 정점 번호: graph[v][i] 
                if(check[graph[v][i]] === 0) {
                    check[graph[v][i]] = 1;
                    DFS(graph[v][i]);
                    check[graph[v][i]] = 0;
                }
            }
        }
    }
    check[1] = 1;
    DFS(1);
    return answer;
}

const n = 5;
const nodeArr = [[5, 9], [1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(n, nodeArr));
