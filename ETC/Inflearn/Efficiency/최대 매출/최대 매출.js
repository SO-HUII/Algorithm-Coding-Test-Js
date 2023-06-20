function solution(day, saleArr) {
    let answer;
    let start = 0;
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;

    
    for(let end = 0; end < day; end++) {
        sum += saleArr[end];
    }
    max = sum;

    for(let end = day; end < saleArr.length; end++) {
        sum = sum + saleArr[end] - saleArr[start++];
        if(sum > max) max = sum;
    }
    answer = max;
    return answer;
}

let day = 3;
let saleArr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(day, saleArr));