function solution(hPos, cPos) {
    let answer = 0;
    let check = Array.from({ length: 10001 }, () => 0);
    let dis = Array.from({ length: 10001 }, () => 0);
    let queue = [];
    check[hPos] = 1;
    queue.push(hPos);  // 현수의 위치 push
    dis[hPos] = 0;

    while(queue.length) {
        let x = queue.shift();  // 첫 출발 좌표 꺼내기 (5)

        // nx: next x
        for(let nx of [x - 1, x + 1, x + 5]) {
            // 송아지 위치 도달시
            // 지금까지 점프한 값(dis[x])에 nx까지 왔으니 +1
            if(nx === cPos) return dis[x] + 1;
            // 좌표 안에 있으면서 이미 탐색한 값이 아닐 때
            if(nx > 0 && nx <= 10000 && check[nx] === 0) {
                check[nx] = 1;
                queue.push(nx);
                dis[nx] = dis[x] + 1;
            }
        }
    }
    return answer;
}

const hPos = 5;
const cPos = 14;
console.log(solution(hPos, cPos));