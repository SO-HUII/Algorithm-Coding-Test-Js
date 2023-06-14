## ✍🏻 제목 : 모든 아나그램
S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

- `입력조건` : 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다. S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

- `출력조건` : S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

|입력예시|출력예시|
|:------:|:----:|
|bacaAacba</br>abc|3|

</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
for(let i of str2) {  // a -> 1, b -> 1, c -> 3
    if(str2Map.has(i)) str2Map.set(i, str2Map.get(i) + 1);
    else str2Map.set(i, 1);
}

for(let i = 0; i < str2.length - 1; i++) {
    // str2의 문자열보다 하나 적은 값으로 str1Map에 문자 set
    if(str1Map.has(str1[i])) str1Map.set(str1[i], str1Map.get(str1[i]) + 1);
    else str1Map.set(str1[i], 1);
}
```
`Map` 객체에 `str2`의 문자를 전부 넣어주고 해당 문자가 존재한다면 그 key(문자)의 value를 1증가 시켜주어 수를 세어준다. 만약 문자가 존재하지 않고 처음 추가시에는 set()을 이용해 해당 문자를 key로 넣고 value를 1로 초기화해준다.

`str1`은 `str2` 문자열의 길이보다 항상 **1 작은** 값의 범위까지만 반복문을 이용해 `Map` 객체에 넣어준다. 문자 유무에 따른 key와 value의 삽입은 위의 내용과 같다.

```javascript
for(let rp = str2.length -1 ; rp < str1.length; rp++) {
    if(str1Map.has(str1[rp])) str1Map.set(str1[rp], str1Mapget(str1[rp]) + 1);
    else str1Map.set(str1[rp], 1);
    if(compareMaps(str1Map, str2Map)) count++;

    // 비교 후 lp 위치의 문자 수 1 감소
    str1Map.set(str1[lp], str1Map.get(str1[lp]) - 1);

    // 만약 감소 후의 해당 문자 value가 0이라면 해당 문자 삭제
    if(str1Map.get(str1[lp]) == 0) str1Map.delete(str1[lp]);

    // lt 1증가 시켜 오른쪽으로 이동 
    lp++;
}
```
**투포인터**를 이용해 `str1`에서 `str2`의 **문자열의 집합**이 얼마나 있는지, 부분 문자열 **개수**를 구하기 위해 반복문의 시작은 str2 문자열의 길이의 -1 부터 시작해야한다. 해당 문제에서 예시로 사용한 str1은 bacaAacba인데 strMap1에 str2.length -1 전까지, 즉, ba까지 저장하였으니 **시작**을 `str2.length -1`(이 문제에서는 2)로 하여 `str1[rp](str1[str2.length -1])` 하도록 한다. 

Map 객체에 key, value를 채워주는 방식은 위와 같으며 `compareMaps()`를 이용해 **두 Map을 비교**했을때 그 `return` 값이 `ture`이면 `count`를 **1증가**하여 부분 문자열의 수를 세어준다.

```javascript
function compareMaps(str1Map, str2Map) {
    if(str1Map.size != str2Map.size) return false;
    
    for(let [key, val] of str1Map) {
        // str1Map에 있는 key가 str2Map에도 있는지 확인
        // key는 모두 동일하게 존재하지만 해당 key의 val가 다른 경우
        if(!str2Map.has(key) || str2Map.get(key) != val) return false;
    }
    return true;
}
```
부분 문자열의 수를 구하기 위해 두 개의 `Map`의 **일치 여부**를 판별하는 `compareMaps` 함수이다. 특정 조건일 때 `false`를 반환하는 조건식만을 구현하여 두 조건식 모두 통과한다면 자동적으로 반환값은 true로 되도록 해주었다. 

반환값이 `false`가 되는 **첫번째 조건**은 두 `Map`의 `size`가 **일치하지 않을 때** 이다. size가 같지 않다는 것은 str1Map에서 총 문자 수는 str2와 같지만 중복되는 문자가 있어 문자가 str2보다 적게 들어있는 상태 등일 때 이런 상황이 발생한다. **두 번째 조건**으로는 size는 일치하지만 들어있는 **문자가 다를때**이다. 예를 들어 str2Map에는 a, b, c가 있는데 str1Map에는 b, c, d가 있는 경우가 그러하다. 

</br>

---

### 🐾 회고
투포인터부터 해쉬, 슬라이딩 윈도우까지 배운 내용을 전부 사용하려니 힘이 부치긴 했다. 코드도 긴만큼 변수들을 어떻게 눈에 복잡해보이지 않을까에 대한 고민도 많이 한 것 같다. 두 맵을 비교하는 코드를 문제 해결을 위한 함수와 분리한 것이 좋았던 것 같다. 코드가 길어질 수록 가독성이 떨어지니 분리할 수 있고, 특정 기능이 분명한 코드는 따로 함수로 분리하며 코드를 더 깔끔하게 만들 수 있었던 것 같다.. 휴 정리하는데에도 오랜 시간이 걸렸던 문제를 해결하니 속이 시원 !