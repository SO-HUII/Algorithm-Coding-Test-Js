function solution(selectN, nArr, mul) {
    let answer = 0;
    let n = nArr.length;

    // L: Level, s: start number
    function DFS(L, s, sum) {
        if(L == selectN) {
            // console.log(sum);  // 11 14 18 15 19 22 17 21 24 25
            if(sum % mul == 0) answer++;
        } else {
            for(let i = s; i < n; i++) {
                DFS(L + 1, i + 1, sum + nArr[i]);
            }
        }
    }
    DFS(0, 0, 0);
    return answer;
}

const selectNum = 3;
const numArr = [2, 4, 5, 8, 12];
const multiple = 6;
console.log(solution(selectNum, numArr, multiple));