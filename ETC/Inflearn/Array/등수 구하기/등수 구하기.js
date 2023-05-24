function solution(scoreArr) {
    let answer = [];
    let count = 1;

    for(let i = 0; i < scoreArr.length; i++) {
        for(let j = 0; j < scoreArr.length; j++) {
            if(scoreArr[i] < scoreArr[j]) {
                count++;
            }
        }
        answer.push(count);
        count = 1;
    }
    return answer;    
}

let scoreArr = [87, 89, 92, 100, 76]
console.log(solution(scoreArr));