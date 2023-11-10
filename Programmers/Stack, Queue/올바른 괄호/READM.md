## ✍🏻 제목 : 올바른 괄호
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

- "()()" 또는 "(())()" 는 올바른 괄호입니다.
- ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

#### 제한사항
- 문자열 s의 길이 : 100,000 이하의 자연수
- 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

|s|answer|
|:------:|:----:|
|"()()"|true|
|"(())()"|true|
|")()("|false|
|"(()("|false|

</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
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
```
s배열을 탐색하며 stack 배열에 해당 데이터를 조건에 따라 push, 또는 pop하여 괄호가 모두 짝지어지는지 판단할 수 있다. 반복을 마쳤을 땨 stack의 길이가 0이라면 모든 괄호들이 짝지어져 pop()된 것이므로 true를 반환하게 된다.