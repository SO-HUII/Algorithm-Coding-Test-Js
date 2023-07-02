## ✍🏻 제목 : 선택 정렬
N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 선택정렬입니다.

- `입력조건` : 첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다. 두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.

- `출력조건` : 오름차순으로 정렬된 수열을 출력합니다.

|입력예시|출력예시|
|:------:|:----:|
|6</br>13 5 11 7 23 15|5 7 11 13 15 23|


</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
for(let i = 0; i < numArr.length - 1; i++) {
    minNum = i;
    for(let j = i + 1; j < numArr.length; j++) {
        if(numArr[j] < numArr[minNum]) minNum = j;
    }
    // 배열의 구조분해할당 -> 두 변수에 저장된 값 교환(swaping)
    [numArr[i], numArr[minNum]] = [numArr[minNum], numArr[i]]; 
}
```
`i for`문을 돌며 이중 반복문 `j for`문을 돈다. j는 i가 가리키는 위치의 다음 위치부터 시작하며 값을 비교해야 하기 때문에 **시작 지점**을 `i + 1`로 설정해준다. `minNum`에는 현재 `i`의 값을 담아준다. 이중 반복문을 돌며 만약 `j`를 인덱스로 하는 `numArr`의 값이 `minNum`을 인덱스로 하는 값보다 **작다**면 `minNum`을 `j`로 바꿔준다. 그리고 `j for`문이 **끝**나면 **배열의 구조분해할당**을 이용해 `numArr[i]`와 `numArr[minNum]`의 값을 `swap` 해주어 더 작은 값이 numArr 배열의 **앞**쪽에 위치할 수 있도록 한다.

</br>

---

### 🎉 새로 알게된 점은?

`minNum`으로 인덱스 값을 저장하지 않고
```javascript
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) { 
        if (arr[j] < arr[i]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
}
```
이렇게 풀 수도 있지만 위에 코드 같은 경우에는 j for문이 돌면서 `arr[j] < arr[i]`가 **참**일 경우 **매번** arr[i]와 arr[j]의 값을 **교환**해야한다.

이렇게 두 수가 교환을 반복하는 일을 최소화하기 위해 minNum을 사용해주었다.