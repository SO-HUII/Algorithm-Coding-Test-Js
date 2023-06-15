## ✍🏻 제목 : 아나그램
Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다. 

예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두일치합니다. 즉 어느 한 단어를 재 
배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.

길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요. 아나그램 판별시 대소문자가 구분됩니다.


- `입력조건` : 첫 줄에 첫 번째 단어가 입력되고, 두 번째 줄에 두 번째 단어가 입력됩니다. 단어의 길이는 100을 넘지 않습니다.

- `출력조건` : 두 단어가 아나그램이면 “YES"를 출력하고, 아니면 ”NO"를 출력합니다.

|입력예시|출력예시|
|:------:|:----:|
|AbaAeCe|baeeACA|


</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
let answer = "YES";
    let alphaMap = new Map();
    
    for(let i of alphaStr1) {
        if(alphaMap.has(i)) alphaMap.set(i, alphaMap.get(i) + 1);
        else alphaMap.set(i, 1);
    }

    for(let i of alphaStr2) {
        if(alphaMap.has(i)) alphaMap.set(i, alphaMap.get(i) - 1);
        else return "NO";
    }

    for(let [key, val] of alphaMap) {
        if(val != 0) answer = "NO";
    }
```
우선 객체 하나를 만들어 `set()`, `get()` 메서드를 이용해 `alphaStr1` 문자열의 각각의 **문자**를 `key`로 해당 문자들을 **수**를 `key`의 `value`로 하여 객체에 넣어준다. 

그리고 `alphaStr2` **새롭게 조합**하면 `alphaStr1`이 될 수 있는지 판별하기 위해, 즉 두 문자열이 아나그램인지 확인하기 위해(key와 그 value가 모두 같아야 함) `alphaStr1`의 문자와 문자의 갯수가 담긴 `alphaMap`에 현재 탐색중인 `alphaStr2`의 문자 `i`가 존재하는지 확인해 주고 **존재한다**면 `alphaMap`에서 해당 문자의 `value`를 **1 감소**시켜준다. 만약 문자가 **존재하지 않는다**면 아나그램이 아닌 것이므로 `NO`를 `return`하여 준다. 

문자가 전부 존재하여 반복문을 빠져나왔다면 이제 `value`값을 확인해야한다. `alphaMap` `key`의 `value`가 **전부 0**이라면 alphaStr2에 같은 문자일 뿐 아니라 문자의 갯수까지 동일하게 존재하는 것이므로 **아나그램**임을 확인할 수 있다.

</br>

---

### 🎉 새로 알게된 점은?
```javascript
let [val] of alphaMap
```
마지막 반복문에서 val의 값을 확인할 때 alphaMap에서 val 값만 필요했기 때문에 위의 코드처럼 작성했는데 원하는 값이 나오지 않았다. 왜일까 알아보니...

 Map 객체의 각 요소는 [key, value] 형태의 배열로 구성되어 있다. Map 객체 특성상 Object와 달리 for...of 루프를 사용하여 Map 객체의 각 요소에 접근할 수 있다. `for(let [key, val] of alphaMap)`은 alphaMap의 각 요소를 [key, value] 형태의 배열로 분해하여 구조 분해 할당을 사용해 변수 key와 val에 할당하기 때문에 

