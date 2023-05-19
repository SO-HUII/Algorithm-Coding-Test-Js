function solution(num, car) {
    let answer;
    let count = 0;

    for(let i of car) {
        if(i % 10 == num) {
            count++;
        }
    }
    answer = count;

    return answer;
}

let num = 3;
let car = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(num, car));