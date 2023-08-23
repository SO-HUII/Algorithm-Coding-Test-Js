function solution(n) {
    let answer;
    
    function DFS(x) {
        if(x == 1) {
            return 1;
        } else {
            return x * DFS(x - 1);
        }
    }
    answer = DFS(n);
    return answer;
}

const num = 5;
console.log(solution(num));