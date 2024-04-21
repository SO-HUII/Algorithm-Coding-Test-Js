## ✍🏻 제목 : 핸드폰 번호 가리기
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

#### 제한사항
- phone_number는 길이 4 이상, 20이하인 문자열입니다.

|phone_number|return|
|:------:|:----:|
|"01033334444"|"*******4444"|
|"027778888"|"*****8888"|

</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(phone_number) {
  let answer = phone_number.split('').fill('*', 0, phone_number.length - 4).join('');
  return answer;
}
```
ex) phone_number: "01033334444"
1. phone_number.split('') : 0, 1, 0, 3, 3, 3, 3, 4, 4, 4, 4
2. phone_number.split('').fill('*', 0, phone_number.length - 4) : index 0 ~ phone_number.length - 4까지 *로 채우기. *, *, *, *, *, *, *, 4, 4, 4, 4
3. phone_number.split('').fill('*', 0, phone_number.length - 4).join('') : *******4444