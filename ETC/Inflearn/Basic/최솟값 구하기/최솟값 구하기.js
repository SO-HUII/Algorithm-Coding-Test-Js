function solution(arr) {
    let answer;
    // 안정적인 큰 정수값 대입
    let min = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < arr.length; i++) {
        if(min > arr[i]) min = arr[i];
    }

    // let min = Math.min(arr);  // 내장함수 값으로 배열같은 객체가 넘어가면 안됨. 인자가 넘어가야함.
    // let min = Math.min(...arr);  // ... : 전개 연산자. 배열 혹은 객체를 하나하나 넘기는 용도로 사용.
    // let min  = Math.min.apply(null, arr);  
    answer = min;
    return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));