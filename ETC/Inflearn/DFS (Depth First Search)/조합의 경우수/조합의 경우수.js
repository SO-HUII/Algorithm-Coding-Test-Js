function solution(n, r) {
    let answer;

    function DFS(n, r) {
        if(n == r || r == 0) {  // 조합 결과가 1인 경우
            return 1;
        } else{
            return DFS(n - 1, r - 1) + DFS(n - 1, r);
        }
    }
    answer = DFS(n, r);
    return answer;
}

const n = 5;
const r = 3;
console.log(solution(n, r));