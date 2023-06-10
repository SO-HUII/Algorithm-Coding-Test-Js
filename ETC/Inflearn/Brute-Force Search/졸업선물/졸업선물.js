function solution(money, presentArr) {
    let answer = 0;
    let stuNum = presentArr.length;

    // [0] -> 상품가격, [1] -> 배송비 
    presentArr.sort((a, b) => (a[0] +a[1]) - (b[0] + b[1]));

    // 모든 상품의 할인 경우의 수 따져보기
    for(let i = 0; i < stuNum; i++) {
        // 전체 예산에서 할인받은 금액 빼기
        let changes = money - (presentArr[i][0] / 2 + presentArr[i][1]);
        // 선물 구매 갯수 카운트
        let count = 1;

        for(let j = 0; j < stuNum; j++) {
            if(presentArr[j][0] + presentArr[j][1] > changes) break;
            
            // i는 이미 할인되었으니 j와 같지 않아야 함
            // 선물 가격 + 배송비 <= 남은 예산
            if((presentArr[j][0] + presentArr[j][1]) <= changes) {
                changes -= presentArr[j][0] + presentArr[j][1];
                count++;
            }
        }
        answer = Math.max(answer, count);
    }
    return answer;
}

let presentArr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]]
console.log(solution(28, presentArr));