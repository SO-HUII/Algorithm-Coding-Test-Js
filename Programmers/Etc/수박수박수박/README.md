## ✍🏻 제목 : 수박수박수박
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

#### 제한사항
n은 길이 10,000이하인 자연수입니다.

|n|return|
|:------:|:----:|
|3|"수박수"|
|4|"수박수박"|


</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(n) {
  let answer = '';

  for(let i = 1; i <= n; i++) {
    if(i % 2 !== 0) answer += "수";
    else answer += "박";
  }
  return answer;
}
```
홀수번째에는 '수'를 짝수번째에는 '박'을 answer에 더해가는 방식으로 문제를 해결할 수 있다.