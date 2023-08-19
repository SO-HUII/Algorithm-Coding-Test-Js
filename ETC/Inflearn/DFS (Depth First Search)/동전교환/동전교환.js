function solution(coinT, price) {
    let answer = Number.MAX_SAFE_INTEGER;
    const n  = coinT.length;

    function DFS(L, sum) {
        if(sum > price) return;
        if(L >= answer) return;
        if(sum == price) {
            answer = Math.min(answer, L);
        } else {
            for(let i = 0; i < n; i++) {
                DFS(L + 1, sum + coinT[i]);
            }
        }
    }
    DFS(0, 0);
    return answer;
}

const coinType = [1, 2, 5];
const price = 15;
console.log(solution(coinType, price));