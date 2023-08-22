function solution(nArr, c) {
    let answer = [];
    const n = nArr.length;
    let check = Array.from({ length : n }, () => 0);
    let tmp = Array.from({ length : c }, () => 0);

    function DFS(L) {
        if(L == c) {
            answer.push(tmp.slice());
        } else {
            for(let i = 0; i < n; i++) {
                // nArr의 i번째 원소를 사용할 수 있는지 판별
                if(check[i] == 0) {
                    check[i] = 1;
                    tmp[L] = nArr[i];
                    DFS(L + 1);

                    //DFS(L + 1)이 종료된 후 check 상태 해제
                    check[i] = 0;
                }
            }
        }
    }
    DFS(0);
    return answer;
}

const numArr = [3, 6, 9];
const choice = 2;
console.log(solution(numArr, choice));