## ✍🏻 제목 : 뮤직비디오
지니레코드에서는 불세출의 가수 조영필의 라이브 동영상을 DVD로 만들어 판매하려 한다. DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지되어야 한다. 순서가 바뀌는 것을 우리의 가수 조영필씨가 매우 싫어한다. 즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다. 또한 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.

지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에 이 사업에 낭비되는 DVD를 가급적 줄이려고 한다. 고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기로 하였다. 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다. 그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.

- `입력조건` : 첫째 줄에 자연수 N(1≤N≤1,000), M(1≤M≤N)이 주어진다. 다음 줄에는 조영필이 라이브에서 부른 순서대로 부른 곡의 길이가 분 단위로(자연수) 주어진다. 부른 곡의 길이는 10,000분을 넘지 않는다고 가정하자.

- `출력조건` : 첫 번째 줄부터 DVD의 최소 용량 크기를 출력하세요.

|입력예시|출력예시|
|:------:|:----:|
|9 3</br>1 2 3 4 5 6 7 8 9|17|


</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
    // lt: 곡 중 가장 길이가 긴 곡으로 초기화.
    // why? 한 곡을 나누어 DVD에 나누어 담을 수 없기 때문
    let lt = Math.max(...songs);

    // rt: 모든 노래의 길이의 합을 초기화.
    // DVD에 담을 수 있는 최대 용량은 노래 길이의 총 합보다 작거나 같기 때문
    let rt = songs.reduce((a, b) => a + b, 0);

    while(lt <= rt) {
        let mid = parseInt((lt + rt) / 2);

        if(count(songs, mid) <= dvdCount) {
            answer = mid;
            rt = mid - 1; 
        } else {
            lt = mid + 1;
        }
    }
```
`lt`에는 `Math.max()` 함수를 이용해 가장 큰 값으로 초기화해준다. 하지만 여기서 `Math.max()`메서드는 배열을 직접 인자로 받을 수 없다. 따라서 전개(spread) 연산자 `...`를 사용하여 `songs` 배열의 각 요소를 개별적인 인자로 전달하여 배열에서 가장 큰 값을 뽑아낼 수 있다. `rt`에는 `songs`에 있는 모든 값을 합한 값으로 초기화한다. 

이진 탐색을 통해 문제를 하고 싶었으므로 `lt`와 `rt`를 이용해 `start`, `end` point를 지정해주었으며 이진 탐색은 시작점이 종료점보다 크면 탐색이 끝나므로 while문의 범위를 `lt <= rt`로 지정해주었다. 이진탐색을 하기 위해서는 중간점인 mid가 있어야 하므로 lt, rt의 합을 2로 나누어 혹시나 실수로 값이 나올 수 있으니 `parseInt`를 통해 값을 정수로 변환하여 준다. 

반복문동안 `songs, mid`를 매개변수로 `count()`에 전달하여 매개변수를 이용한 count 값을 return 받고 해당 `return` 값을 지정된 `dvdCount`와 **비교**한다. `count()`의 `return` 값이 `dvdCount`보다 **작으면** `mid`가 **DVD의 최소 용량 크기**가 될 수 있으므로 `answer`에 저장한다. 그리고 rt를 mid - 1로 초기화해 다음 탐색 범위를 줄인다. 만약 더 크다면 lt를 mid + 1로 초기화해준다.

```javascript
// 곡을 담을 수 있는 DVD 개수
function count(songs, capacity) {
    // DVD 개수
    let cnt = 1;
    // DVD에 저장되는 노래들의 길이의 합
    let sum = 0;

    for(let i of songs) {
        // 한 DVD에 노래 저장을 반복하며 그 길이가 capacity(mid)보다 크다면
        if(sum + i > capacity) {
            // 용량이 초과되니까 DVD의 개수가 더 필요.
            cnt++;
            sum = i;
        } else sum += i;
    }
    return cnt;
}
```
곡을 담을 수 있는 DVD 개수를 return하는 `count()` 함수는 `songs, mid`를 매개변수로 받아 사용한다. DVD 개수는 무조건 1개는 존재하므로 `cnt`를 `1`로 초기화 해준다. songs을 for...of 반복문을 통해 탐색하며 `sum + i` 값, 즉 순차적으로 저장해나가는 노래들의 길이의 합이 전달받은 `capacity(mid)`값보다 크다면 **용량이 초과**되는 상황이므로 필요한 DVD 개수(`cnt`)를 `1` 증가시키고 `sum`은 `i`가 된다. 초과하지 않는다면 sum에 i를 더한 값이 sum으로 업데이트 되며 다음 탐색을 하게 된다.

</br>

---

### 🎉 새로 알게된 점은?

### reduce() 메서드

```javascript
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
```
reduce의 동작원리.

```javascript
arr.reduce(callback[, initialValue])
```
`callback`
배열의 각 요소에 대해 실행할 함수.

`accumulator`
콜백의 반환값 누적.

`currentValue`
처리할 현재 요소.

`array` (Optional)
reduce()를 호출한 배열.

`initialValue` (Optional)
callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용한다. (빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생.)

</br>

---

### 🐾 회고