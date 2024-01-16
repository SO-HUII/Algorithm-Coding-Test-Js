## ✍🏻 제목 : 2016년
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 
이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

#### 제한사항
- 2016년은 윤년입니다.
- 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

|a|b|return|
|:------:|:----:|:----:|
|5|24|"TUE"|


</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(a, b) {
  let answer = '';
  // monthIndex는 1월이 0부터 시작되므로 a에서 1을 빼줘야 함.
  let date = new Date(2016, a - 1, b);

  answer = date.toString().slice(0, 3).toUpperCase();
  return answer;
}
```
new Date(year, monthIndex, day) 해당 구문을 활용해 주었다.
그리고 요일의 앞 세글자만 출력하고 해당 요일의 알파벳을 대문자로 나타내고 싶으니 slice()와 toUpperCase()를 사용했다.