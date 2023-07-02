function solution(numArr) {
    let answer;
    
    for(let i = 0; i < numArr.length - 1; i++) {
        // i for문이 끝날 때마다 가장 큰 수는 뒤로 배치가 고정되기 때문에 
        // 다음 i for문을 돌 때 굳이 그 위치까지 반복문을 수행할 필요가 없다. 
        for(let j = 0; j < numArr.length - i - 1; j++) {
            if(numArr[j + 1] < numArr[j]) {
                [numArr[j], numArr[j + 1]] = [numArr[j + 1], numArr[j]]; 
            }        
        }
    }
    answer = numArr;
    return answer;
}

let numArr = [13, 15, 11, 7, 23, 5];
console.log(solution(numArr));