function solution(num) {
    let answer = [];
    // 0으로 초기화한 배열 생성
    let check = Array.from({ length: num + 1 }, () => 0);

    function DFS(n) {
        if(n === num + 1) {
            // 부분집합 문자열
            let subset = ""
            for(let i = 1; i <= num; i++) {
                // check[i] == 1 : 체크(포함)되어있다는 뜻
                if(check[i] == 1) subset += i + " ";
            }
            // 부분집합 누적 후 출력 (공집합 제외)
            if(subset.length > 0) answer.push(subset.trim());
        } else {
            check[n] = 1;  // 해당 숫자 노드 포함 O
            // 자식노드 두 갈래로
            DFS(n + 1);
            check[n] = 0;  // // 해당 숫자 노드 포함 X
            DFS(n + 1);
        }

    }
    DFS(1);
    return answer;
}
const num = 3;
console.log(solution(num));