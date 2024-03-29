## ✍🏻 제목 : 바둑이 승차
철수는 그의 바둑이들을 데리고 시장에 가려고 한다. 그런데 그의 트럭은 C킬로그램 넘게 태울수가 없다. 철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.

N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하는 프로그램을 작성하세요.

- `입력조건` : 첫 번째 줄에 자연수 C(1<=C<=100,000,000)와 N(1<=N<=30)이 주어집니다. 둘째 줄부터 N마리 바둑이의 무게가 주어진다.

- `출력조건` : 첫 번째 줄에 가장 무거운 무게를 출력한다.

|입력예시|출력예시|
|:------:|:----:|
|259 5</br>81</br>58</br>42</br>33</br>61|242|

</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(maxW, dogN, dogsW) {
    let answer = Number.MIN_SAFE_INTEGER;

    function DFS(L, sum) {
        // 트럭이 감당할 수 있는 무게 초과시 return
        if(sum > maxW) return;
        if(L == dogN) {
            // 트럭에 태울 수 있는 가장 무거운 무게 max()로 비교해 찾기
            answer = Math.max(answer, sum)
        } else {
            DFS(L + 1, sum + dogsW[L]);
            DFS(L + 1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}
```
`if(sum > maxW) return;` 해당 조건이 없을 시 `maxWeight`를 초과한 바둑이 집합의 무게도 포함되니 주의해야한다. 이진트리를 이용하여 문제를 해결하기 위해 재귀 함수를 이용하여 바둑이 무게를 포함, 미포함 시켜주어 무게의 합을    `max()`로 비교하여 그 중 가장 높은 무게의 집합을 찾을 수 있도록 하였다. 