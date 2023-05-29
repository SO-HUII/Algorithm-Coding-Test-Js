function solution(str) {
    let answer = "";
    let count = 1;

    for(let i = 0; i < str.length; i++) {       
        if(str[i] == str[i + 1]) {
            count++;
        } else {
            answer += str[i];
            if (count != 1) {
                answer += count;
            }
            // count 1로 초기화
            count = 1;
        } 
    }
    return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));