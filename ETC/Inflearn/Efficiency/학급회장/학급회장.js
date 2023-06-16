function solution(voteStr) {
    let answer;
    let voteMap = new Map(); // Map 객체 생성
    let max = Number.MIN_SAFE_INTEGER;

    for(let i of voteStr) {
        // Map 객체에 탐색중인 문자 i가 존재하는지
        if(voteMap.has(i)) {
            // key i를 가져와서 i의 값을 1증가 (해당 문자 수 카운팅)
            voteMap.set(i, voteMap.get(i) + 1);
        } else {
            // 아직 존재하지 않는다면 key를 만들고 값을 1로 저장. (처음 카운팅)
            voteMap.set(i, 1);
        }
    
    }

    // console.log(voteMap);
    // Map(5) { 'B' => 3, 'A' => 3, 'C' => 5, 'D' => 2, 'E' => 2 }

    for(let [key, val] of voteMap) {
        // console.log(key, val);
        // B 3
        // A 3
        // C 5
        // D 2
        // E 2
        if(val > max) {
            max = val;
            answer = key;
        }
    }
    return answer;
}

let voteStr = "BACBACCACCBDEDE"; 
console.log(solution(voteStr));