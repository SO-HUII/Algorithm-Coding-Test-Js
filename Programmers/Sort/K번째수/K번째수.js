function solution(array, commands) {
    var answer = [];
    for(let i = 0; i < commands.length; i++) {
        let nArr = array.slice(commands[i][0] - 1, commands[i][1]);
        
        // 오름차순 정렬
        nArr.sort((a, b) => a - b);
        answer.push(nArr[commands[i][2] - 1]);
    }
    return answer;
}