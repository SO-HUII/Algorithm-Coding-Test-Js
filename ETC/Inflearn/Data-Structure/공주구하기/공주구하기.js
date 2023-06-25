function solution(princeNum, num) {
    let answer;
    // 길이가 왕자의 수만큼인 유사배열객체 생성
    // v: value, i: index
    // (v, i) => i + 1 : index에 따른 값을 i + 1(1, 2, 3, ...) 해주기 
    let queue = Array.from({length : princeNum}, (v, i) => i + 1);

    while(queue.length) {
        for(let i = 0; i < num - 1; i++) {
            // 자료구조 큐를 이용하기 때문에 whift를 이용해 배열의 첫번째 요소를 제거해 주어야함.
            // 3을 외친 왕자가 아니기 때문에 다시 queue에 push
            queue.push(queue.shift());
        }
        // 3 외친 왕자 탈락
        queue.shift();
        // 배열 queue에 데이터가 하나(마지막 왕자) 남았을 때
        if(queue.length == 1) answer = queue.shift();
    }
    return answer;
}

let princeNum = 8;
let num = 3;
console.log(solution(princeNum, num));