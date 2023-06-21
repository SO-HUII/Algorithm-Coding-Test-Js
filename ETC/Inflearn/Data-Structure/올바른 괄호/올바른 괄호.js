function solution(bracket) {
    let answer = "YES";
    let bracArr = [];

    for(let i of bracket) {
        if(i == '(') bracArr.push(i);
        else {
            // ')'만 남는 상황도 고려
            if(bracArr.length == 0) answer = "NO";
            bracArr.pop();
        }
    }
    if(bracArr.length > 0) answer = "NO";
    return answer;
    }

let bracket = "(()(()))(()";
console.log(solution(bracket));