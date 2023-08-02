// 배치할 수 있는 말의 수를 return하는 함수
function count(stallArr, distance) {
    // 한 마리는 무조건 배치
    let cnt = 1;
    // point: 직전 말을 배치한 위치
    let point = stallArr[0];

    // 해당 지점에 말을 배치할 수 있는지 없는지 stallArr의 원소를 모두 탐색하며 검사
    for(let i = 1; i < stallArr.length; i++) {
        if(stallArr[i] - point >= distance) {
            cnt++;
            // 해당 지점에 말 배치
            point = stallArr[i];
        }
    }
    return cnt;
}

function solution(horse, stallArr) {
    let answer;
    stallArr.sort((a, b) => a - b);
    let lt = 1;
    // stallArr 배열의 마지막 원소
    let rt = stallArr[stallArr.length - 1];

    while(lt <= rt) {
        // mid: 가장 가까운 말의 거리 
        let mid = parseInt((lt + rt) / 2);

        if(count(stallArr, mid) >= horse) {
            answer = mid;
            lt = mid + 1;
        } else rt = mid - 1;
    }
    return answer;
}

let horse = 3;
let stallArr = [1, 2, 8, 4, 9] 
console.log(solution(horse, stallArr));