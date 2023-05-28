function solution(strArr) {
    let answer = "YES";
    let n = strArr.length;
    const mid = Math.floor(n);

    for(let i = 0; i < mid; i++) {
        if(strArr[i].split('').reverse().join('').toUpperCase() != strArr[n - i - 1].toUpperCase()) {
            answer ="NO";
        }
    }
    
    return answer;
}

let strArr = ["found7", "time", "study", "Yduts", "emit", "7Dnuof"];
console.log(solution(strArr));