function solution(arr) {
    let answer = 0;
    let dy = Array.from({ length: arr.length }, () => 0);
    dy[0] = 1;  // 첫 번째 숫자 한 개만 사용 가능.

    for(let i = 1; i < arr.length; i++) {
        let max = 0;
        for(let j = i - 1; j >= 0; j--) {
            // 조건 1. j 인덱스의 값이 i 인덱스의 값보다 작을 시 (i인덱스 값 앞에 위치할 수 있기 때문)
            // 작은 수가 1개 이상이면, 현재 최댓값보다 큰 수일 시
            if(arr[j] < arr[i] && dy[j] > max) {
                max = dy[j];
            }
        }
        dy[i] = max + 1;
        answer = Math.max(answer, dy[i]);
    }
    return answer;
}

const arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));