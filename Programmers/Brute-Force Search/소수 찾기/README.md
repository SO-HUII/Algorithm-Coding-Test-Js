## ✍🏻 제목 : 소수 찾기
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

#### 제한사항
- numbers는 길이 1 이상 7 이하인 문자열입니다.
- numbers는 0~9까지 숫자만으로 이루어져 있습니다.
- "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

|numbers|return|
|:------:|:----:|
|"17"|3|
|"011"|2|

입출력 예 설명
- 예제 #1
[1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

- 예제 #2
[0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

11과 011은 같은 숫자로 취급합니다.


</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(numbers) {
    let answer = 0;
    let nums = numbers.split('');
    
    // 중복을 허용하지 않는 유일한 값을 저장
    let set = new Set();
    
    // ""는 초기 문자열
    dfs(set, nums, "");
    
    answer = set.size;
    return answer;
}
```
`Set`은 JavaScript의 내장 객체로 **중복된 값을 저장하지 않는** 특징이 있다. 소수를 찾으며 만약 1, 7이 있다면 1, 7, 17, 71, 7, 1 이렇게 1과 7이 반복되어서 나타날 수 있으므로 Set()을 이용해 동일한 숫자를 여러 번 추가해도 중복이 제거되고 유일한 값만 유지될 수 있도록 돕는다.

dfs의 첫 번째 호출은 **빈 문자열("")**에서 시작하며, `nums` 배열의 각 숫자를 차례대로 선택하여 조합을 생성해야 한다.

```javascript
function dfs(set, nums, str) {
    if(nums.length > 0) {
        for(let i = 0; i < nums.length; i++) {
            let newStr = str + nums[i];
            let newNums = [...nums];

            // newNums 배열에서 i 인덱스 위치에 있는 요소를 제거
            newNums.splice(i, 1);
            
            if(isPrime(Number(newStr))) {
                set.add(Number(newStr));
            }
            dfs(set, newNums, newStr)
        }
    }
}
```
전개하면서 `splice`로 잘라낸 부분을 새로운 `nums`로 전달할 것이기 때문에 nums의 길이는 1씩 감소할 것이다. 따라서 **nums.length가 0**이 되는 순간 dfs는 **종료**되는 종료 조건이다. 

`... 전개 연산자`를 사용해 `nums`의 모든 요소를 새로운 배열인 `newNums`에 복사하고 newNums 배열에서 **i 인덱스 위치에 있는 요소를 제거**해준다. 즉,  dfs 함수를 호출하면서 newStr에 추가한 숫자를 제거하여 모든 가능한 조합을 찾도록 하는 것이다. 새로운 문자열이 만들어졌다면 소수 판별 함수인 `isPrime()`에 `Number()`를 사용해 `newStr`를 문자열에서 **숫자로 변환**시켜 매개변수로 전달한다. 만약 소수로 판별이 되어 `true`라면 `set`에 해당 **문자열을 추가**한다. 모든 과정이 끝나면 다시 `dfs`를 호출한다. 

```javascript
function isPrime(n) {
    if(n < 2) return false;
    for(let i = 2; i * i <= n; i++) {
        if(n % i === 0) return false;
    }
    return true;
}
```
for의 조건식이 `i * i <= n`인 이유는 i의 제곱이 n보다 크면 n은 i로 나누어지지 않으므로 소수가 될 수 있다. 따라서 이 조건을 만족하는 동안 반복문이 실행되기 때문에 조건식을 설정했다. 

또한 **n이 i로 나누어진다**면 **약수를 가졌다**는 의미, 즉, 소수가 아니므로 `false`를 return한다.

</br>

---

### 🎉 새로 알게된 점은?
`add()`는 Set 개체의 맨 뒤에 주어진 value의 새 요소를 추가하는 메서드이다.

</br>

---

### 🐾 회고
종료 조건을 잘 설정해야할 필요가 있을 것 같다. 무한루프에 빠지면 안되니 종료해야하는 시점을 잘 파악하는 능력을 길러야할 것 같다.