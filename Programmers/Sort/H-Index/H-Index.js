function solution(citations) {
    let answer = 0;
    const len = citations.length;

    // 내림차순 정렬
    citations.sort((a, b) => {return b - a});

    for(let i = 0; i < len; i++) {
        if(i + 1 <= citations[i]) {
            answer++;
        }
    }
    return answer;
}