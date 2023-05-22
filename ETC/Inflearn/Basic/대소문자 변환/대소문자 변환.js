function solution(str) {
    let answer = "";

    for(let i of str) {
        if(i == i.toUpperCase()) answer += i.toLowerCase();
        else answer += i.toUpperCase();
    }
    return answer;
}

let str = "StuDYisFuNNY";
console.log(solution(str));