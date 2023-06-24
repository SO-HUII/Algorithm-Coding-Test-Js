function solution(board, moves) {
    let answer;
    let count = 0;
    let basket = [];

    // 크래인의 현재 위치 탐색
    moves.forEach(pos => {
        for(let i = 0; i < board.length; i++) {
            // 인형 catch
            if(board[i][pos - 1] != 0) {
                let doll = board[i][pos - 1];
                board[i][pos - 1] = 0;
                if(doll == basket[basket.length - 1]) {
                    basket.pop();
                    count += 2;  // 인형 두 개 pop
                } 
                else basket.push(doll);
                break;  // 인형 한 개를 꺼낸뒤 break 해주지 않으면 해당 열의 있는 인형 전부를 꺼내도록 동작함.
            }
        }
    });
    answer = count;
    return answer;
}

let board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
let moves = [1,5,3,5,1,2,1,4];      
console.log(solution(board, moves));