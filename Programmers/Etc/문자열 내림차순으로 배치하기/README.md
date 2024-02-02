## ✍🏻 제목 : 문자열 내림차순으로 배치하기
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

#### 제한사항
- str은 길이 1 이상인 문자열입니다.

|s|return|
|:------:|:----:|
|"Zbcdefg"|"gfedcbZ"|

</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(s) {
  s = s.split("").sort().reverse().join("");
  return s;
}
```
ex) s = "FEjStyK"
s.split('') -> ['F', 'E', 'j', 'S', 't', 'y', 'K']
s.split('').sort() -> ['E', 'F', 'K', 'S', 'j', 't', 'y']
s.split('').sort().reverse() -> ['y', 't', 'j', 'S', 'K', 'F', 'E']
s.split('').sort().reverse().join('') -> ytjSKFE