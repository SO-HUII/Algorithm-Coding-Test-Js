function solution(participant, completion) {
    let answer = '';
    const n = participant.length;

    participant.sort();
    completion.sort();

    for(let i = 0; i < n; i++) {
        if(participant[i] !== completion[i]) {
            answer = participant[i];
        }
    }
    return answer;
}