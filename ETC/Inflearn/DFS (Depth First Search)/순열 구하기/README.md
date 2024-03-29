## ✍🏻 제목 : 순열 구하기
10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

- `입력조건` : 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다. 두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.

- `출력조건` : 첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다. 출력순서는 사전순으로 오름차순으로 출력합니다.

|입력예시|출력예시|
|:------:|:----:|
|3 2</br>3 6 9|3 6</br>3 9</br>6 3</br>6 9</br>9 3</br>9 6</br>6|

</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function DFS(L) {
    if(L == c) {
        answer.push(tmp.slice());
    } else {
        for(let i = 0; i < n; i++) {
            // nArr의 i번째 원소를 사용할 수 있는지 판별
            if(check[i] == 0) {
                check[i] = 1;
                tmp[L] = nArr[i];
                DFS(L + 1);

                //DFS(L + 1)이 종료된 후 check 상태 해제
                check[i] = 0;
            }
        }
    }
}
```

`check`배열을 통해 check[i]가 1이면 nArr의 i번째 원소가 이미 사용되었다는 것을, 0이면 사용 전이므로 사용할 수 있다는 것을 알 수 있다. check[i]가 0이면 사용하기 위해 check[i]를 1로 만들어주고 현재 탐색중인 레벨(L)을 인덱스로 하는 `tmp`배열에 nArr[i] 값을 넣어준다. `tmp`는 자연수 집합을 구성하기 위한 배열이다. 그리고 다음 레벨로 넘어가 똑같이 탐색한다. 집합은 c만큼 구성될 수 있으므로 레벨이 c와 같은 수가 되면 집합이 완성된 것이다.