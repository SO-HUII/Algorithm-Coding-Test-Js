## ✍🏻 제목 : 일곱 난쟁이

왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.

아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.

아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.

</br>

- `입력조건` : 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.


- `출력조건` : 입력된 순서대로 일곱 난쟁이의 키를 출력한다.

</br>

|입력예시|출력예시|
|:------:|:----:|
|20 7 23 19 10 15 25 8 13|20 7 23 19 10 8 13|


</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(arr) {
    let answer = arr;  // 얕은 복사. 주소만 복사.
    let sum = 0;
    let num = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    num = sum - 100;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            if(arr[i] + arr[j] == num) {
                answer.splice(j, 1); // j번째 원소 제거
                answer.splice(i, 1); // i번째 원소 제거
                break;
            }
        }
    }
    return answer;
}
```
우선 얕은 복사를 해주어 arr의 주소를 answer와 공유한다. 주소를 공유하기 때문에 서로 변화하면 서로에게 영향을 준다는 점을 기억하자!

다음으로 진짜 난쟁이들의 키의 합이 100이라고 했으니 가자 난쟁이까지의 키를 전부 합한 값에서 100을 빼주면 가짜 난쟁이의 합을 구할 수 있다.

중첩 반복문을 이용하여 난쟁이들을 서로서로의 합을 모두 비교해준다. 여기서 해당 난쟁이들을 찾으면 그 난쟁이들의 키를 splice()를 이용해 제거해준다. splice()는 특정 인덱스 위치의 값을 제거해주는 메서드이다.

반환값을 출력시 console.log만 사용하면 출력이
```
[
  20, 7, 23, 19,
  10, 8, 13
]
```
이런식으로 나오는 문제점이 있었다. 그래서 .join(' ');을 사용하여 문자열을 합치되 문자열마다 공백을 넣어주었다.
```
20 7 23 19 10 8 13
```
짜라란~╰(*°▽°*)╯ 이렇게 정리되어 출력이 된다.
</br>

---

### 🎉 새로 알게된 점은?
처음 문제를 풀때는 splice()가 아니라 pop()을 사용하였다. 아이코 ! 하지만 pop()을 배열을 뒤에서부터 삭제해주는 메서드이기 때문에 출력으로 8과 13이 나오지 않는 문제가 있었다..ㅎㅎ 다행히 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경해주는 splice()를 찾아 해결 ! 

</br>

---

### 🐾 회고
- MDN 문서 뒤져보며 해결 방법 찾은 나 대견해 ~~ 앞으로도 검색왕이 되기를 음하하