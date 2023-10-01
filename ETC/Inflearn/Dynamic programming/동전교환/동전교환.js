function solution(m, coin) {
    let answer = 0;
    let dy = Array.from({ length: m + 1 }, () => 1000);
    dy[0] =0;  // 초기화

    for(let i = 0; i < coin.length; i++) {
        // 현재 coin 단위부터 반복 시작
        // 거슬러줘야하는 돈 m원까지 반복 
        for(let j = coin[i]; j <= m; j++) {
            // dy[j]: j금액을 거슬러 줄 때 사용되는 동전의 최소 개수 (Math.min() 사용)
            dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
        }
    }
    answer = dy[m];
    return answer;
}

const wonArr = [1, 2, 5];
const price = 15;
console.log(solution(price, wonArr));