## ✍🏻 제목 : 후위산 연산
후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

- `입력조건` : 첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

- `출력조건` : 연산한 결과를 출력합니다.

|입력예시|출력예시|
|:------:|:----:|
|352+*9-</br>|12|


</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
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
```
`isNaN`을 이용해 탐색중인 문자(`i`)가 숫자라면 `calStack`에 `push`해주어 추가한다. `isNaN`은 예를 들어 `"37"`도 숫자 `37`로 변환하여 숫자여부를 판단한다. 만약 문자가 숫자가 아니라 **연산자**라면 `pop`을 **두 번**하여 `top`부터 차례로 **숫자를 꺼내**어 `num1`, `num2`에 각각 담아준다. 그리고 `switch`문을 이용해 문자(`i`)의 연산자 종류에 따라 계산을 달리하여 해당 **연산 결과**를 `val`에 담아 `calStack`에 `push`해준다.
</br>

