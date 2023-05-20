function solution(arr) {
    let answer = arr;  // 얕은 복사. 주소만 복사.
    let sum = 0;
    let num = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    num = sum - 100;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            if(arr[i] + arr[j] == num) {
                answer.splice(j, 1); // j번째 원소 제거
                answer.splice(i, 1); // i번째 원소 제거
                // 왜 pop()을 하면 안될까? -> 맨뒤에서 부터 제거
                break;
            }
        }
    }
    return answer;

}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr).join(' '));