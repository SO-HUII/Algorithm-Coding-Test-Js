function solution(strArr) {
    let answer = "";
    
    for(let i of strArr) {
        if(answer.indexOf(i) == -1) answer += i + "\n";
    }
    return answer;
}

let strArr = ["good", "time", "good", "time", "student"];
console.log(solution(strArr));