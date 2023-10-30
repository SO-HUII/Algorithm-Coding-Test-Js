function solution(k, dungeons) {
    let answer = 0;
    // 방문 유무 확인 array
    let visited = Array.from({ length: dungeons.length } ,() => false)

    // hp: 남은 피로도, L: 탐색 Level
    function dfs(hp, L) {
        for(let i = 0; i < dungeons.length; i++) {
            if(visited[i] === false && hp >= dungeons[i][0]) {
                visited[i] = true;
                dfs(hp - dungeons[i][1], L + 1);
                visited[i] = false;
            }
        }
        answer = Math.max(answer, L);
    }
    dfs(k, 0);
    return answer;
}