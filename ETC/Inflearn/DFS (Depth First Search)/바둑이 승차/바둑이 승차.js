function solution(maxW, dogN, dogsW) {
    let answer = Number.MIN_SAFE_INTEGER;

    function DFS(L, sum) {
        // 트럭이 감당할 수 있는 무게 초과시 return
        if(sum > maxW) return;
        if(L == dogN) {
            // 트럭에 태울 수 있는 가장 무거운 무게 max()로 비교해 찾기
            answer = Math.max(answer, sum)
        } else {
            DFS(L + 1, sum + dogsW[L]);
            DFS(L + 1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}

const maxWeight = 259;
const dogNum = 5;
const dogsWeight = [81, 58, 42, 33, 61];
console.log(solution(maxWeight, dogNum, dogsWeight));