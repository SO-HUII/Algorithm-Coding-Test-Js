function solution(alphaStr1, alphaStr2) {
    let answer = "YES";
    let alphaMap = new Map();
    
    for(let i of alphaStr1) {
        if(alphaMap.has(i)) alphaMap.set(i, alphaMap.get(i) + 1);
        else alphaMap.set(i, 1);
    }

    for(let i of alphaStr2) {
        if(alphaMap.has(i)) alphaMap.set(i, alphaMap.get(i) - 1);
        else return "NO";
    }

    for(let [key, val] of alphaMap) {
        if(val != 0) answer = "NO";
    }

    return answer;
}

let alphaStr1 = "AbaAeCe";
let alphaStr2 = "baeeACA";
console.log(solution(alphaStr1, alphaStr2));