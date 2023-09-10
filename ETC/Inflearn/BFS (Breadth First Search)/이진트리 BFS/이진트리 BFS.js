function solution() {
    let answer = "";
    let queue = [];
    queue.push(1);

    // queue.length === 0 이면 queue가 비어있다는 의미. break 필요.
    while(queue.length) {
        // queue에서 꺼내기
        let v = queue.shift();
        answer += v + " ";  // v를 answer에 누적.

        // nv: next vertex
        for(let nv of [v * 2, v * 2 + 1]) {
            if(nv > 7) {
                continue;
            }
            queue.push(nv);
        }
    }
    return answer;
}

console.log(solution());