## ✍🏻 제목 : 회의실 배정
한 개의 회의실이 있는데 이를 사용하고자 하는 n개의 회의들에 대하여 회의실 사용표를 만들려고 한다. 각 회의에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하
면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라. 단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.

- `입력조건` : 첫째 줄에 회의의 수 n(1 <= n <= 100,000)이 주어진다. 둘째 줄부터 n + 1 줄까지 각 회의의 정보가 주어지는데 이것은 공백을 사이에 두고 회의의 시작시간과 끝나는 시간이 주어진다. 회의의 시작시간과 끝나는 시간의 조건은 (시작시간 <= 끝나는 시간)입니다.

- `출력조건` : 첫째 줄에 최대 사용할 수 있는 회의 수를 출력하여라. 

|입력예시|출력예시|
|:------:|:----:|
|1 4</br>2 3</br>3 5</br>4 6</br>5 7|3|


</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
timelineArr.sort((a, b) => {
    // endTime이 같은 회의가 있는 상황 고려
    if(a[1] == b[1]) return a[0] - b[0];
    else return a[1] - b[1];
})
let endT = 0;
for(let i of timelineArr) {
    // startTime이 endTime보다 크거나 같다면 
    if(i[0] >= endT) {
        // 다음 회의가 될 수 있으므로 count +1
        count++;
        // endTime을 다음 회의의 endTime으로 초기화
        endT = i[1]
    }
}
```
이중 배열 timelineArr의 첫 번째 인덱스의 요소는 회의 시작 시간(startTime), 두 번째 인덱스 요소는 회의 종료 시간(endTime)으로 지정하여 시작하였다. endTime을 기준으로 회의 시간을 오름차순 정렬 해주고 만약 endTime이 같다면 startTime을 기준으로 오름차순 정렬을 해준다. 

endTime이 담길 변수인 endT을 0로 초기화 한 다음 timelineArr를 탐색하며 endT보다 현재 탐색중인 회의의 startTime이 크거나 같다면 다음 회의가 될 수 있는 회의 중 하나가 되므로 count를 1 증가시켜 세어주고 endT을 해당 회의의 endTime으로 초기화해 뒤이어 회의를 할 수 있는 가능성이 있는 시간대를 탐색하기 위한 변수로 사용한다.

</br>

---

### 🐾 회고
우연히도 인턴십 코딩 테스트를 풀며 비슷한 문제가 나왔다. 해당 문제는 한 회의실만 있는 것이 아니라 여러 회의실이 있기에 그 상황도 고려해야 했는데 해당 문제를 풀이하고 이 문제를 푼 더 수월하게 느껴졌다. 인턴십 문제가 좋았던 것이 test를 통해 여러 예외 상황을 마주할 수 있어 내가 생각하지 못했던 상황에 대해 생각하고 그 과정에서 해결 능력을 더 키울 수 있었던 것 같다. 