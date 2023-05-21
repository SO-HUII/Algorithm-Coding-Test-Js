function solution(str) {
    let answer = "";
    let mid = 0;

    if(str.length % 2 == 0) {
        mid = str.length / 2 - 1;
        answer = str[mid] + str[mid + 1];
    } else {
        mid = Math.floor(str.length / 2);
        answer = str[mid];
    }
    return answer;
}

let str = "study";
console.log(solution(str));