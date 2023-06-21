function solution(bar) {
    let answer;
    let stack = [];
    let count = 0;

    for(let i = 0; i < bar.length; i++) {
        if(bar[i] == '(') stack.push(bar[i]);
        else {
            stack.pop();
            // 레이저를 쏜 상황
            if(bar[i - 1] == '(') {
                // 스택에 있는 '(' 갯수만큼(막대 수만큼) count에 추가
                // 막대가 있는데 중간에 레이저가 있다면 막대 수만큼 잘렸을 테니까 
                count += stack.length;

            // 막대가 끝난 상황
            } else count += 1;
        }
    }
    answer = count;
    return answer;
}

let bar = "()(((()())(())()))(())";
console.log(solution(bar));