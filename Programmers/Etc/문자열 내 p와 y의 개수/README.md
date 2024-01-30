## ✍🏻 제목 : 문자열 내 p와 y의 개수
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

#### 제한사항
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다.

|s|answer|
|:------:|:----:|
|"pPoooyY"|true|
|"Pyy"|false|

**입출력 예 설명**

입출력 예 #1
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(s){
  s = s.toLowerCase();
  let numP = 0;
  let numY= 0;

  for(let i = 0; i < s.length; i++) {
    if(s[i] === 'p') numP++;
    if(s[i] === 'y') numY++;
  }

  if(numP === numY) return true;
  else return false;
}
```
대문자, 소문자를 모두 케이스로 나누어서 탐색하는 것보다 s 문자열 자체를 toLowerCase(), toUpperCase()를 이용해 소문자, 혹은 대문자로 통일해주는 것이 좋을 것 같다고 생각했다.

다른 사람들 풀이를 보니 보통 replace()와 length를 이용하여 풀더라.