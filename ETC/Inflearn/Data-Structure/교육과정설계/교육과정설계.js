function solution(strOrder, str) {
    let answer = "YES";
    let queue = strOrder.split('');

    for(let i of str) {
        if(queue.includes(i)) {
            if(i != queue.shift()) return "NO";
        }
    }
    if(queue.length > 0) return "NO";
    return answer;
}

let strOrder = "CBA";
let str = "CBDAGE";
console.log(solution(strOrder, str));