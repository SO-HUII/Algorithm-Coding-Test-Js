function solution(num) {
    function DFS(n) {
        if(n > 7) {
            return;
        } else {
            // 전위 순회
            console.log(n);
            DFS(n * 2);  // 왼쪽 자식노드로
            DFS(n * 2 + 1);  // 오른쪽 자식노드로

            // 중위 순회
            // DFS(n * 2);
            // console.log(n);
            // DFS(n * 2 + 1);

            // 후위 순회
            // DFS(n * 2);
            // DFS(n * 2 + 1);
            // console.log(n);
        }
    }
    DFS(num);
}

let num = 1;
solution(num);