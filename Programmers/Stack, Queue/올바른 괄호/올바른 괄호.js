function solution(s){
    let answer = false;
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(stack[stack.length - 1] === '(' && s[i] === ')') stack.pop();
        else stack.push(s[i]);
    }
    if(stack.length === 0) answer = true; 
    
    return answer;
}