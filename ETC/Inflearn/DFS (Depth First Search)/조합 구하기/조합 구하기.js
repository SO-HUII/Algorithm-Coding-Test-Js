function solution(n, c) {
    let answer = [];
    let check = Array.from({ length: c }, () => 0);

    // s: start number (for문)
    function DFS(L, s) {
        if(L == c) {
            answer.push(check.slice());
        } else {
            for(let i = s; i <= n; i++) {
                check[L] = i;
                DFS(L + 1, i + 1);
            }
        }
    }
    DFS(0, 1);
    return answer;
}

const num = 4;
const count = 2;
console.log(solution(num, count));