## ✍🏻 제목 : 시소 짝꿍
어느 공원 놀이터에는 시소가 하나 설치되어 있습니다. 이 시소는 중심으로부터 2(m), 3(m), 4(m) 거리의 지점에 좌석이 하나씩 있습니다.

이 시소를 두 명이 마주 보고 탄다고 할 때, 시소가 평형인 상태에서 각각에 의해 시소에 걸리는 토크의 크기가 서로 상쇄되어 완전한 균형을 이룰 수 있다면 그 두 사람을 시소 짝꿍이라고 합니다. 즉, 탑승한 사람의 무게와 시소 축과 좌석 간의 거리의 곱이 양쪽 다 같다면 시소 짝꿍이라고 할 수 있습니다.

사람들의 몸무게 목록 weights이 주어질 때, 시소 짝꿍이 몇 쌍 존재하는지 구하여 return 하도록 solution 함수를 완성해주세요.

#### 제한사항
- 2 ≤ weights의 길이 ≤ 100,000
- 100 ≤ weights[i] ≤ 1,000
  - 몸무게 단위는 N(뉴턴)으로 주어집니다.
  - 몸무게는 모두 정수입니다.

|weights|result|
|:------:|:----:|
|[100,180,360,100,270]|4|

**입출력 예 설명**

{100, 100} 은 서로 같은 거리에 마주보고 앉으면 균형을 이룹니다. <br>
{180, 360} 은 각각 4(m), 2(m) 거리에 마주보고 앉으면 균형을 이룹니다. <br>
{180, 270} 은 각각 3(m), 2(m) 거리에 마주보고 앉으면 균형을 이룹니다. <br>
{270, 360} 은 각각 4(m), 3(m) 거리에 마주보고 앉으면 균형을 이룹니다.

</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(weights) {
  let answer = 0;
  const store ={};
  const ratio = [1, 3 / 2, 2, 4 / 3];

  weights.sort((a, b) => b - a).forEach(w => {
    let s;

    ratio.forEach(r => {
      if(s = w * r, store[s]) {
        answer += store[s];
      }
    });

    if(!store[w]) store[w] = 1;
    else store[w]++;
  });
  
  return answer;
}
```
**가능한 비율 CASE**

- a = b * 1
- a * 2 = b * 3
- a * 2 = b * 4
- a * 3 = b * 4

`const ratio = [1, 3 / 2, 2, 4 / 3]`

큰 값부터 모든 case에 대해 짝꿍 가능 여부를 판단하기 위해 내림차순 정렬한 뒤, 모든 비율을 적용해 시소 짝꿍을 찾는다. 해당 비율을 곱한 값이 store에 존재할 경우 현재 사람의 몸무게와 균형을 이루는 짝꿍이 있다는 의미이므로 answer에 store[s]를 더한다.

만약 store[w]에 값이 존재하지 않는다면, 현재 사람의 몸무게를 1로 초기화한다.