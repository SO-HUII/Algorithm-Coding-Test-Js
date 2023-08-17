function solution(n, c) {
    let answer = [];
    let tmp = Array.from({length : c}, () => 0);

    function DFS(L) {
        // level 2에서 stop. 이중 for문 효과
        if(L == c) {
            // 깊은 복사
            answer.push(tmp.slice());
        } else {
            for(let i = 1; i <= n; i++) {
                tmp[L] = i;
                DFS(L + 1);
            }
        }
    }
    DFS(0);
    return answer;
}

const num = 3;
const count = 2;
console.log(solution(num, count));