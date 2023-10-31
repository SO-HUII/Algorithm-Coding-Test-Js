function solution(n, wires) {
    var answer = Number.MAX_SAFE_INTEGER;

    // 트리 생성.
    let tree = Array.from({ length: n + 1 }, () => []);

    for(const [v1, v2] of wires) {
        tree[v1].push(v2);
        tree[v2].push(v1);
    }

    // root: 탐색 시작 노드, exceptN: 탐색에서 제외 노드.
    function bfs(root, exceptN) {
        let count = 0;
        let visited = [];
        let queue = [root];  // 탐색해야 할 노드 저장
        visited[root] = true;

        while(queue.length) {
            let index = queue.pop();
            tree[index].forEach((e) => {
                if(e !== exceptN && visited[e] !== true) {
                    visited[e] = true;
                    queue.push(e);
                }
            })
            count++;
        }
        return count;
    }
    wires.forEach((e) => {
        let [a, b] = e;
        answer = Math.min(answer, Math.abs(bfs(a, b) - bfs(b, a)));
    });
    return answer;
}