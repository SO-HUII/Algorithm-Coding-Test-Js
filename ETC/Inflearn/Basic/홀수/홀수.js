function solution(arr) {
    // let answer;
    // let sum = 0;
    // let min = Number.MAX_SAFE_INTEGER;  // 제발 잘 넣어주자...

    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i] % 2 != 0) {
    //         sum += arr[i];
    //         if(min > arr[i]) min = arr[i];
    //     }
    // }
    // answer = sum + "\n" + min;

    let answer = [];
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for(let x of arr) {
        if(x % 2 != 0) {
            sum += x;
            if(min > x) min = x;
        }
    }
    answer.push(sum);
    answer.push(min);

    return answer;
}

let arr = [12, 77, 38, 41, 53, 92, 85]
console.log(solution(arr));