function solution(str) {
    let answer = [];

    for(let i of str) {
        if(i != ')') answer.push(i);
    
        else {
            while(answer[answer.length - 1] != '(') {
                answer.pop();
            }
            answer.pop();
        }
    }
    return answer.join('');
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));