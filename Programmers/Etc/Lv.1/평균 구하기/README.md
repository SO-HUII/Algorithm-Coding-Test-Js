## ✍🏻 제목 : 평균 구하기
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

#### 제한사항
- arr은 길이 1 이상, 100 이하인 배열입니다.
- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

|arr|return|
|:------:|:----:|
|[1, 2, 3, 4]|2.5|
|[5, 5]|5|

</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(arr) {
  let answer = 0;
  let len = arr.length;

  for(let i = 0; i < len; i++) {
    answer += arr[i];
  }
  return answer / len;
}
```