## ✍🏻 제목 : 큰 수 만들기
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

#### 제한사항
- number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
- k는 1 이상 number의 자릿수 미만인 자연수입니다.

|number|k|return|
|:------:|:----:|:----:|
|"1924"|2|"94"|
|"1231234"|3|"3234"|
|"4177252841"|4|"775841"|


</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(number, k) {
  let answer = '';
  const arr = [];

  for(let i = 0; i < number.length; i++) {
    while(k > 0 && number[i] > arr[arr.length - 1] && arr.length > 0) {
      k--;
      arr.pop();
    }
    arr.push(number[i]);
  }
  // arr의 인덱스 number.length - k부터 k개 요소 삭제
  arr.splice(number.length - k, k);
  answer = arr.join("");
  return answer;
}
```

우선 반복하여 arr에 수를 쌓아줄건데 이때 while문의 조건이 중요하다. 
1. k 개의 수만큼 원래 수에서 제거해야 하니 k가 0이 되면 조건을 충족했으므로 삭제를 중단해야 하고
2. 현재 탐색 중인 number의 수가 arr의 마지막 배열 값, 즉, 만들고 있는 수의 마지막 자리 수보다 크면 더 큰 숫자를 만들 수 있다는 뜻이므로 arr의 마지막 배열 값을 pop()하여 제거해야 한다.
3. 또한, arr의 길이가 0이라면 현재 탐색 중인 값을 넣어준다. 그렇지 않다면 반복을 계속 진행한다.

모든 숫자의 비교가 끝난 후에도 k가 0보다 크다면 조건에 맞게 제거를 더 해야하므로 splice()를 이용해 남은 k만큼 제거해준다.

</br>

---

### 🎉 새로 알게된 점은?
toSpliced(): 기존 splice() 메서드와 더불어 sort(), reverse() 메서드는 원본 배열을 변경하기 때문에 사이드 이펙트가 발생하고 의도하지 않은 결과가 나타난다는 단점이 있었다. 그렇기 때문에 배열을 먼저 복사하고 변경해야하는 번거로움이 있었다. 이를 해결하기 위해 toSpliced(), toSorted(), toReversed()가 등장했다.

toSpliced()는 배열을 복사한 후 주어진 인덱스가 삭제되거나 대체된 새로운 배열을 반환해주기에 기존의 불편함을 덜 수 있는 장점이 있다. 또한 데이터 불변성을 유지하며 더 안전하고 효율적으로 프로그래밍을 할 수 있도록 돕는다.

ex)
```javascript
const months = ["Jan", "Mar", "Apr", "May"];

// 인덱스 1에 요소 추가
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// 인덱스 2부터 2개의 요소 삭제
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]
```

</br>

---

### 🐾 회고
splice()가 아닌 toSpliced()를 이용해보려고 했는데 프로그래머스에서 해당 메서드는 아직 사용할 수 없어 TypeError가 났다. 비교적 최신 기능이기 때문에 아직 상용화가 덜 된 것 같아서 아쉬웠다. Chrome에서도 이러한 메서드는 버전 110 이후에만 사용할 수 있고 노드는 버전 20.0.0 이후에만 사용할 수 있다고 한다. 프로그래머스에서도 얼른 사용해보고 싶다!