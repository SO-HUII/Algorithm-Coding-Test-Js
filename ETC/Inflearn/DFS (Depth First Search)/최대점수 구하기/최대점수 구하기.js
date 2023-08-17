function solution(limitT, queArr) {
    let answer = Number.MIN_SAFE_INTEGER;

    function DFS(L, sumS, sumT) {
        if(sumT > limitT) return;
        if(L == queArr.length) {
            answer = Math.max(answer, sumS);
        } else {
            DFS(L + 1, sumS + queArr[L][0], sumT + queArr[L][1]);
            DFS(L + 1, sumS, sumT);
        }
    }
    DFS(0, 0, 0)
    return answer;
}

const limitTime = 20;
const queArr = [[10, 5],[25, 12],[15, 8],[6, 3],[7, 4]];
console.log(solution(limitTime, queArr));