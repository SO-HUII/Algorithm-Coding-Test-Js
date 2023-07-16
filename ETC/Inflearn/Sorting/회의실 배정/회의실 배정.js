function solution(timelineArr) {
    let answer;
    let count = 0;

    timelineArr.sort((a, b) => {
        // endTime이 같은 회의가 있는 상황 고려
        if(a[1] == b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    })
    let endT = 0;
    for(let i of timelineArr) {
        // startTime이 endTime보다 크거나 같다면 
        if(i[0] >= endT) {
            // 다음 회의가 될 수 있으므로 count +1
            count++;
            // endTime을 다음 회의의 endTime으로 초기화
            endT = i[1]
        }
    }
    answer = count;
    return answer;
}

// [startTime, endTime]
let timelineArr = [[2, 8], [3, 7],[4, 6], [1, 9], [2, 5]]
// [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];

// 예제 2
// let timelineArr = [[3, 3], [1, 3], [2, 3]];
console.log(solution(timelineArr));