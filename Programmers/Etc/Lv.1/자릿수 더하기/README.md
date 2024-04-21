## ✍🏻 제목 : 자릿수 더하기
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.

예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

#### 제한사항
- N의 범위 : 100,000,000 이하의 자연수

|N|answer|
|:------:|:----:|
|123|6|
|987|24|

**입출력 예 설명**

입출력 예 #1

문제의 예시와 같습니다.

입출력 예 #2

9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(n) {
  let answer = 0;
  n = n.toString();
  let arr = n.split('');

  for(let i = 0; i < arr.length; i++) {
    answer += +arr[i];
  }
  return answer;
}
```
split()은 문자열에 사용 가능한 메서드이기때문에 우선 숫자 n을 toString()으로 문자열로 바꾸어주고 split으로 각 숫자를 분리하였다.