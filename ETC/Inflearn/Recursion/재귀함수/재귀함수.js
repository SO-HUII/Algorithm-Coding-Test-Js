function solution(num) {
    function DFS(Level) {
        // 여기서의 return은 '종료'의 의미
        if(Level == 0) return;
        else {
            DFS(Level - 1);
            console.log(Level);
        }
    }
    DFS(num);
}

let num = 3;
solution(num);