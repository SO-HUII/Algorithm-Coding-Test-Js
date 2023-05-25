function solution(heightArr) {
    let answer;
    let count = 0;
    let max = heightArr[0];  // i의 앞의 있는 사람들 중 가장 키가 큰 사람. 큰 사람의 키보다 자신이 크면 당연히 더 앞 사람들보다 큰 것이기 때문에 보인다.
    count++;

    for(let i = 1; i < heightArr.length; i++) {
            if(heightArr[i] > max) {
                count++;
                max = heightArr[i]; 
            }
    }
    answer = count;
    return answer;    
}

let heightArr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(heightArr));