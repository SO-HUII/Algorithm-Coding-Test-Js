## ✍🏻 제목 : 정수 내림차순으로 배치하기
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

#### 제한사항
- n은 1이상 8000000000 이하인 자연수입니다.

|n|return|
|:------:|:----:|
|118372|873211|

</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(n) {
  let answer = 0;
  answer = Number(Array.from(String(n)).sort((a, b) => b - a).join(''));
  return answer;
}
```
sort() 메서드는 배열을 정렬하는 메서드이므로 주의하자.
`Array.from(String(n)).sort((a, b) => b - a).join('')` 여기까지만 진행한다면 문자열이 반환되어버리니 마지막에 Number()를 이용해 숫자로 바꾸어주는 것도 잊지 않았다.