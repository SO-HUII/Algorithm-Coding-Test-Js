function solution(num) {
    let answer = "";
    function DFS(num) {
        if(num == 0) return;
        else {
            DFS(parseInt(num / 2));
            answer += (num % 2);
        }
    }
    DFS(num);
    return answer;
}

let num = 11;
console.log(solution(num));