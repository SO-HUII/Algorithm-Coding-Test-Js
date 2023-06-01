function solution(numArr) {
    let answer = "";

    for (let i = 0; i < numArr.length; i++) {
        // parseInt()대신 Number()로 해도 됨
        let numReverse = parseInt(numArr[i].toString().split('').reverse().join(''));
        let isPrime = true;

        if (numReverse == 1) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.floor(Math.sqrt(numReverse)); j++) {
                if (numReverse % j == 0) {
                    isPrime = false;
                }
            }
        }
        
        // isPrime가 true라면 즉, 소수라면
        if (isPrime) {
            answer += numReverse + " ";
        }
    }
    return answer;
}


let numArr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(numArr));