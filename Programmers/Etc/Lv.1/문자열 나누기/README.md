## ✍🏻 제목 : 문자열 나누기
문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.

- 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
- 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
- s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
- 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.

문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.

#### 제한사항
- 1 ≤ s의 길이 ≤ 10,000
- s는 영어 소문자로만 이루어져 있습니다.

|s|result|
|:------:|:----:|
|"banana"|3|
|"abracadabra"|6|
|"aaabbaccccabba"|3|

**입출력 예 설명**

입출력 예 #1 <br>
s="banana"인 경우 ba - na - na와 같이 분해됩니다.

입출력 예 #2 <br>
s="abracadabra"인 경우 ab - ra - ca - da - br - a와 같이 분해됩니다.

입출력 예 #3 <br>
s="aaabbaccccabba"인 경우 aaabbacc - ccab - ba와 같이 분해됩니다.

</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(s) {
  let stack = [];
  let count = 0;
  
  for(let i = 0; i < s.length; i += 1){
      stack.push(s[i]);
      
      // 현재 첫 번째 문자와 같은 문자들을 필터링
      const same = stack.filter((item) => item === stack[0]);

      // 현재 첫 번째 문자와 다른 문자들을 필터링
      const diff = stack.filter((item) => item !== stack[0]);
      
      if(same.length === diff.length){
          count += 1;  // 분해한 문자열의 개수
          stack = [];
      }
  }
  
  if(stack.length !== 0){
      count += 1;
  }
  
  return count;
}
```