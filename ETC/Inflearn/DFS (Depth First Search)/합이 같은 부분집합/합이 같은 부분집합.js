function solution(numArr) {
    let answer = "NO";
    // numArr의 요소들의 전체 합
    let total = numArr.reduce((a, b) => a + b, 0);
    let len = numArr.length;

    // L: index
    function DFS(L, sum) {
        // 두 부분집합의 원소의 합이 서로 같은 경우가 존재할 시 바로 종료.
        if(answer == 'YES') return;
        if(L == len) {
            // 배열 원소 전체 합에서 한 부분 집합의 합을 뺀다면 나머지 부분집합의 합을 자연스럽게 구할 수 있음
            if((total - sum) == sum) {
                answer = "YES";
            }

        } else {
            DFS(L + 1, sum + numArr[L]);  // index 수 포함 O
            DFS(L + 1, sum);  // index 수 포함 X
        }
    }
    DFS(0, 0);
    return answer;
}

const numArr = [1, 3, 5, 6, 7, 10]
console.log(solution(numArr));