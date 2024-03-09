## ✍🏻 제목 : 제일 작은 수 제거하기
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

#### 제한사항
- arr은 길이 1 이상인 배열입니다.
- 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

|arr|return|
|:------:|:----:|
|[4, 3, 2, 1]|[4, 3, 2]|
|[10]|[-1]|

</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(arr) {
  let answer = [];
  const min = Math.min(...arr);
  arr.splice(arr.indexOf(min), 1);
  answer = arr;
  
  if(answer.length === 0) answer.push(-1);
  return answer;
}
```
스프레드 연산자를 이용해 arr 배열 자체를 answer 배열로 복사.(얕은 복사)
ex) arr.splice(3, 1) -> arr의 3번째 인덱스에서 한 개 요소 제거