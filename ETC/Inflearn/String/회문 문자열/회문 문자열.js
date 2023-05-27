function solution(str) {
    let answer = "YES";
    let n = str.length;
    const mid = Math.floor(n);

    for(let i = 0; i < mid; i++) {
        if(str[i].toUpperCase() != str[n-i-1].toUpperCase()) {
            answer ="NO";
        }
    }
    return answer;
}

let str = "gooG";
console.log(solution(str));