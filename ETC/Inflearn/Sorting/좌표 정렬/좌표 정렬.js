function solution(coor) {
    let answer = coor;
    
    coor.sort((a, b) => {
        // x좌표가 같으면 y좌표를 비교해 오름차순 정렬
        if(a[0] == b[0]) return a[1] - b[1];
        
        // x좌표가 다르면 x좌표 기준으로 먼저 오름차순 정렬 
        else return a[0] - b[0];
    })


    return answer;
}
let coor = [[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(coor));

