function solution(target, numArr) {
    numArr = numArr.sort((a, b) => a - b);

    let start = 0;
    let end = numArr.length - 1;
    let mid;

    while(start <= end) {
        mid = parseInt((start + end) / 2);

        if(target == numArr[mid]) return mid + 1;
        else {
            if(target > numArr[mid]) start = mid + 1;
            else end = mid - 1;
        }
    }
    return mid + 1;
}

const target = 32;
const numArr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(target, numArr));