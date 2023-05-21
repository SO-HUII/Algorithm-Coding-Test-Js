function solution(strArr) {
    let answer;
    let longest = "";
    
    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i].length > longest.length) longest = strArr[i];
    }

    answer = longest;
    return answer;
}

let strArr = ["teacher", "time", "beautiful", "student", "good"]
console.log(solution(strArr));