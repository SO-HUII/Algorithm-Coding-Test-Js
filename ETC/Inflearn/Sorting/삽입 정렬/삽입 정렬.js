function solution(numArr) {
    let answer = numArr;

    for(let i = 1; i < numArr.length; i++) {
        let tmp = numArr[i];
        let j;
        for(j = i - 1; j >= 0; j--) {
            if(tmp < numArr[j]) numArr[j + 1] = numArr[j];
            // numArr[j]이 tmp보다 작음
            else break;
        }
        numArr[j + 1] = tmp;
    }
    return answer;
}

let numArr = [11, 7, 5, 6, 10, 9];
console.log(solution(numArr));