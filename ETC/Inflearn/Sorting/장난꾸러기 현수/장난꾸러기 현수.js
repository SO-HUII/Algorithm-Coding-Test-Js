function solution(heightArr) {
    let answer = [];
    let sortArr = heightArr.slice();
    sortArr.sort((a, b) =>  a - b);  // callback함수없이 sort()만 사용한다면 sort()는 문자열 정렬이기 때문에 숫자 정렬시 큰 실수를 범할 수 있다.
    
    // 정렬된 키(height) 배열(sortArr)과 heightArr의 각 동일한 인덱스의 값이 같지 않다며 해당 위치가 자리를 바꾼 학생의 위치
    for(let i = 0; i < heightArr.length; i++) {
        if(heightArr[i] != sortArr[i]) answer.push(i + 1);  // 순서이기 때문에 0이 아닌 1부터 세어주기 때문에 +1
    }
    return answer;
}

let heightArr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(heightArr));