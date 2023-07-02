function solution(numArr) {
    let answer = numArr;
    let minNum = Number.MAX_SAFE_INTEGER;
    
    for(let i = 0; i < numArr.length - 1; i++) {
        minNum = i;
        for(let j = i + 1; j < numArr.length; j++) {
            if(numArr[j] < numArr[minNum]) minNum = j;
        }
        // 배열의 구조분해할당 -> 두 변수에 저장된 값 교환(swaping)
        [numArr[i], numArr[minNum]] = [numArr[minNum], numArr[i]]; 
    }
    return answer;
}

let numArr = [13, 5, 11, 7, 23, 15];
console.log(solution(numArr));