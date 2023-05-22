function solution(str) {
    let answer;
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i].toUpperCase()) {
            count++;
        }
    }
    answer = count 
    return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));