function compareMaps(str1Map, str2Map) {
    if(str1Map.size != str2Map.size) return false;
    for(let [key, val] of str1Map) {
        // str1Map에 있는 key가 str2Map에도 있는지 확인
        // key는 모두 동일하게 존재하지만 해당 key의 val가 다른 경우
        if(!str2Map.has(key) || str2Map.get(key) != val) return false;
    }
    return true;
}

function solution(str1, str2) {
    let answer;
    let lp = 0;
    let count = 0;

    let str1Map = new Map();
    let str2Map = new Map();
    
    for(let i of str2) {  // a -> 1, b -> 1, c -> 3
        if(str2Map.has(i)) str2Map.set(i, str2Map.get(i) + 1);
        else str2Map.set(i, 1);
    }

    for(let i = 0; i < str2.length - 1; i++) {
        // str2의 문자열보다 하나 적은 값으로 str1Map에 문자 set
        if(str1Map.has(str1[i])) str1Map.set(str1[i], str1Map.get(str1[i]) + 1);
        else str1Map.set(str1[i], 1);
    }

    for(let rp = str2.length -1 ; rp < str1.length; rp++) {
        if(str1Map.has(str1[rp])) str1Map.set(str1[rp], str1Map.get(str1[rp]) + 1);
        else str1Map.set(str1[rp], 1);

        if(compareMaps(str1Map, str2Map)) count++;

        // 비교 후 lp 위치의 문자 수 1 감소
        str1Map.set(str1[lp], str1Map.get(str1[lp]) - 1);
        // 만약 감소 후의 해당 문자 value가 0이라면 해당 문자 삭제
        if(str1Map.get(str1[lp]) == 0) str1Map.delete(str1[lp]);
        // lt 1증가 시켜 오른쪽으로 이동 
        lp++;
    }
    answer = count;
    return answer;
}

let str1 = "bacaAacba";
let str2 = "abc";
console.log(solution(str1, str2));