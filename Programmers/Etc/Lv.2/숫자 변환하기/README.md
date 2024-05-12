## ✍🏻 제목 : 숫자 변환하기
자연수 x를 y로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.

- x에 n을 더합니다
- x에 2를 곱합니다.
- x에 3을 곱합니다.

자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요. 이때 x를 y로 만들 수 없다면 -1을 return 해주세요.



#### 제한사항
- 1 ≤ x ≤ y ≤ 1,000,000
- 1 ≤ n < y


|x|y|n|result|
|:------:|:----:|:----:|:----:|
|10|40|5|2|
|10|40|30|1|
|2|5|4|-1|

</br>

**입출력 예 설명**

입출력 예 #1 <br>
x에 2를 2번 곱하면 40이 되고 이때가 최소 횟수입니다.

입출력 예 #2 <br>
x에 n인 30을 1번 더하면 40이 되고 이때가 최소 횟수입니다.

입출력 예 #3 <br>
x를 y로 변환할 수 없기 때문에 -1을 return합니다.

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(x, y, n) {
  if(x === y) return 0;
  let dp = new Array(y + 1).fill(Infinity);

  for(let i = 0; i <= x; i++) dp[i] = 0;
  for(let i = x; i <= y; i++) {
      for(e of [i - n, i / 2, i / 3]) {
          if(e < x) continue;
          if(dp[e] + 1 < dp[i]) dp[i] = dp[e] + 1;
      }
  }

  return dp[y] !== Infinity ? dp[y] : -1;
}
```