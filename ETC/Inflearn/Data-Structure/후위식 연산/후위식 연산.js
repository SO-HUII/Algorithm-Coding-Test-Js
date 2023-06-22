function solution() {
    let answer;
    let calStack = [];

    for(let i of cal) {
        if(isNaN(i)) {
            let num1 = calStack.pop();
            let num2 = calStack.pop();

            let val = 0;
            switch(i) {
                case '+':
                    val = num1 + num2;
                    break;
                case '-':
                    val = num2 - num1;
                    break;
                case '*':
                    val = num1 * num2;
                    break;
                case '/':
                    val = num2 / num1;
                    break;
            }
            calStack.push(val);
        } else calStack.push(Number(i));  // i는 문자이기 때문에 숫자로 바꾸어 stack에 push 해야함
    }
    answer = calStack[0];
    return answer;
}

let cal = "352+*9-";
console.log(solution());