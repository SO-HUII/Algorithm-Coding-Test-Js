## ✍🏻 제목 : 가운데 글자 가져오기
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

#### 제한사항
s는 길이가 1 이상, 100이하인 스트링입니다.

|s|return|
|:------:|:----:|
|"abcde"|"c"|
|"qwer"|"we"|


</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(s) {
  let answer = '';

  if(s.length % 2 !== 0) {
    answer = s[Math.round(s.length / 2 - 1)];
  } else {
    answer = s[s.length / 2 - 1] + s[s.length / 2];
  }
  return answer;
}
```