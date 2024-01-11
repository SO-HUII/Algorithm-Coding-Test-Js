## ✍🏻 제목 : 조이스틱
조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

조이스틱을 각 방향으로 움직이면 아래와 같습니다.

```
▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
```

예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

```
- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
```

만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

#### 제한사항
- name은 알파벳 대문자로만 이루어져 있습니다.
- name의 길이는 1 이상 20 이하입니다.

|name|return|
|:------:|:----:|
|"JEROEN"|56|
|"JAN"|23|

</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(name) {
  let answer = 0;

  // min: A의 아스키코드, max: Z의 아스키코드 + 1
  const min = 65;
  const max = 90 + 1;

  // A에서 특정 알파벳을 만드는 최소 조작
  const charToNum = (n) => {
    // 찾고자하는 문자의 아스키코드
    const num = n.charCodeAt();
    
    if(num < 78) return num - 65; // n === B ~ M
    else return 91 - num; // n === N ~ Z
  }

  const charArr = name.split('').map((c) => charToNum(c));
  let minMove = charArr.length - 1;

  charArr.forEach((nowCur, index) => {
    answer += nowCur;
    let nextCur = index + 1;

    // 연속되는 A길이 만큼 nextCur 증가
    while(nextCur < charArr.length && charArr[nextCur] === 0) {
      nextCur++;
    }

    const toBack = charArr.length - nextCur;
    minMove = Math.min(minMove, (index * 2) + toBack, index + (2 * toBack));
  });

  return answer + minMove;
}
```
B에서 M까지는 ▲를 이용하여, N부터 Z까지는 ▼를 이용하여 이동하는 방법이 최소로 이동할 수 있다.

문자열 "Hello"라고 가정하면, charArr의 길이는 5가 되고, 최소한의 이동 횟수는 5 - 1 = 4이기 때문에 `minMove`를 `charArr.length - 1`로 초기화한다.

연속으로 A인지를 살펴보아야 하는데 왜냐하면 A가 연속될 때 ▶를 이용해 이동하는 것 보다 ◀를 이용해 문자의 맨 뒤로 이동하는 방법이 이동 횟수가 더 적을 수 있기 때문이다. `charArr[nextCur] === 0`은 현재 문자가 A임을 나타낸다.

Math.min() 메서드를 사용하여 초기에 설정해 둔 최솟값, 오른쪽으로 이동, 왼쪽으로 이동한 횟수 중 가장 작은 횟수가 다시 minMove에 저장된다.

</br>

---

### 🎉 새로 알게된 점은?
`charCodeAt()`: Returns the Unicode value of the character at the specified location.