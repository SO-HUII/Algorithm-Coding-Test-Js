## ✍🏻 제목 : 숫자만 추출
문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다. 

만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205이 됩니다. 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.

- `입력조건` : 첫 줄에 숫자가 썩인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.

- `출력조건` : 첫 줄에 자연수를 출력합니다.

|입력예시|출력예시|
|:------:|:----:|
|g0en2T0s8eSoft|208|


</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
str = parseInt(str.replace(/[^0-9]/g,''));
```
replace()에 정규 표현식을 이용하여 숫자(0-9)를 제외한 모든 문자를 빈 문자열로 대체하고 parseInt()를 통해 정수로 반환된다.
```javascript
// Not a Number
if(!isNaN(i)) answer += i;
```
다른 방법으로는 ! 전달된 값이 숫자인지를 판별하는 isNaN()을 이용해 해결하는 방식으로 i가 숫자가 아닌게 아니라면(!isNaN(i)), 즉, i가 숫자라면 answer에 추가해주어 숫자만 추출할 수 있다.
</br>

---

### 🎉 새로 알게된 점은?
NaN은 Not a Number, 말그대로 '숫자가 아닌' 이라는 뜻! 
그런데 isNaN(null) 이것의 결과는 false로 나온다.
```plain
In computing, NaN, standing for not a number, is a numeric data type value representing an undefined or unrepresentable value, especially in floating-point calculations. Systematic use of NaNs was introduced by the IEEE 754 floating-point standard in 1985, along with the representation of other non-finite quantities like infinities.

NaN은 컴퓨팅에서 "숫자가 아님"을 의미하며, 정의되지 않거나 표현할 수 없는 값을 나타내는 숫자 데이터 유형이다. 특히, 부동 소수점 연산에서 사용된다. NaN의 체계적인 사용은 1985년 IEEE 754 부동 소수점 표준과 함께 무한(infinity)과 같은 다른 비유한 수량의 표현도 도입되었다.
```
위키에 설명된 이러한 이유로 isNaN()은 단순히 숫자가 아닌 것에 대해 판별하는 것으로 해석하면 안되고 "IEEE-754 'Not A Number'" 인가? 에 대한 질문으로 해석해야한다고 한다.  null은 숫자로 변환되면 0으로 간주되고 0은 숫자이기 때문에 false가 나오는 것이다.

null을 숫자로 확인하려면 다른 방법을 사용해야 하는데 typeof를 사용하여 null 값인지 확인하거나 Number(null)을 이용하여 0임을 볼 수 있다.

</br>

---

### 🐾 회고
자바스크립트는 배우면 배울수록 조금 어이없는 예외상황이 있는 게 신기하고 웃기다 ㅋㅋㅋㅋㅋ 그게 자바스크립트의 재미일지도...?^^ 이런 역사(?)나 세부적인 정의를 찾아보는 것이 시간낭비라고 생각됐던 때도 있었는데 지금은 오히려 이렇게 시간내서 더 찾아보는게 기억에 잘 남고 효율적인 것 같다.