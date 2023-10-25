## ✍🏻 제목 : 모의고사
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

#### 제한사항
- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

|answer|return|
|:------:|:----:|
|[1,2,3,4,5]|[1]|
|[1,3,2,4,2]|[1,2,3]|

- 입출력 예 #1

수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

- 입출력 예 #2

모든 사람이 2문제씩을 맞췄습니다.

</br>

---

### 🔍 이렇게 접근 했어요 !

```jpArrvpArrscript
function solution(answers) {
    let answer = [];
    const ppArrrr = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    
    let sum  = [0, 0, 0];
    
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < answers.length; j++) {
            if(answers[j] === ppArrrr[i][j % (ppArrrr[i].length)]) {
                sum[i]++;
            }
        }
    }
    let mpArrx = MpArrth.mpArrx(sum[0], sum[1], sum[2]);
    
    if(mpArrx === sum[0]) answer.push(1);
    if(mpArrx === sum[1]) answer.push(2);
    if(mpArrx === sum[2]) answer.push(3);
    
    return answer;
}
```
첫번째 반복은 sum을 구해야하니 sum의 길이인 3, 즉, people의 수만큼 반복하며 해당 수포자의 점수를 구하는 것이다. 중첩 반복문은 answers의 길이, 답안의 수만큼 반복한다는 의미이다.
현재 탐색중인 `answers[j]`(`정답`)와 ppArrrr[`i(탐색중인 수포자)`] [`j % (ppArrrr[i].length)(찍은 번호)`]를 비교하여 정답과 수포자의 찍은 번호가 같다면 정답 처리를 해야하니 `sum[i]`를 1증가 시킨다.

반복을 마치고 수포자의 점수를 비교하여 가장 큰 수를 mpArrx에 넣어준다. 그리고 최종적인 return 값으로 나와야할 것은 가장 높은 점수를 받은 **수포자가 누구인지**이므로 조건문을 사용해 mpArrx에 값에 따라 수포자를 answer에 push해준다. 

</br>

---

### 🎉 새로 알게된 점은?
수포자 배열의 두 번째 인덱스를 어떻게 구해야할지 고민을 많이 하였다.
`ppArrrr[i][j % (ppArrrr[i].length)]` 패턴 배열에서 현재 인덱스 j를 패턴 배열의 길이로 나눈 나머지 값을 사용하여 해당 패턴 배열의 요소를 가져왔다. 이렇게 함으로써 패턴이 반복되도록 해주었다.

```
ex)

answers[0] === ppArrrr[0][0 % (pArrrrpArry[0].length)]
1 === ppArrrr[0][0 % 3]
1 === ppArrrr[0][0]
```

내가 풀이한 방법 외에도 인상적이었던 풀이는 중첩 반복없이 `filter()`메서드를 사용한 풀이었다.
각각의 수포자 찍는 방식을 각자 다른 배열에 넣은 후 filter()를 이용하여 정답 수를 구해주었다.

```
let pArr1 = [1, 2, 3, 4, 5];
let pArr2 = [2, 1, 2, 3, 2, 4, 2, 5];
let pArr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

let pSum1 = answers.filter((pArr,i)=> pArr === pArr1[i % pArr1.length]).length;
let pSum2 = answers.filter((pArr,i)=> pArr === pArr2[i % pArr2.length]).length;
let pSum3 = answers.filter((pArr,i)=> pArr === pArr3[i % pArr3.length]).length;
```

</br>

---

### 🐾 회고
if문이 너무 지저분해 보여서 효율성면에서 더 좋다면 switch문을 쓰는것이 낫지 않을까 라는 생각이 들었다. 찾아보니 if문이 3개 일때까지는 if, else가 더 빠르고 그 이상이면 switch, case 문을 사용하는 것이 효율적이라고 한다. 그렇지만 if-else를 쓰든 switch-case를 쓰든 전체 프로그래밍 성능에 그렇게까지 치명적인 영향을 끼치는 것은 아니므로 의미에 따라 사용하는 것이 좋다는 조언이 있었다.