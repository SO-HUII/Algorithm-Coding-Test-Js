function solution(brown, yellow) {
    let answer = [];
    let sum = brown + yellow;

    for(let h = 3; h <= brown; h++) {
        if(sum % h === 0) {
            let w = sum / h;

            if((h - 2) * (w - 2) === yellow) {
                return [w, h];
            }
        }
    }
    return answer;
}