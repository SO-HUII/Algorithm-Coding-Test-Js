function solution(cacheSize, workArr) {
    let answer;
    let cache = Array.from({length: cacheSize}, () => 0);

    workArr.forEach(x => {
        let pos = -1;
        for(let i = 0; i < cacheSize; i++) {
            // Cache Hit
            if(x == cache[i]) pos = i;
        }
        // Cache Miss면 pos = -1 
        if(pos == -1) {
            for(let i = cacheSize - 1; i >= 1; i--) {
                // Cache Miss일 시 앞에 새로운 작업 추가 후 원래 값들은 뒤로 한 칸씩 밀려남
                cache[i] = cache[i - 1];
            }
        } else {
            // Cache Hit
            // Hit 발생 시점부터 반복문 시작
            for(let i = pos; i >= 1; i--) {
                cache[i] = cache[i - 1];
            }
        }
        cache[0] = x;
    });
    answer = cache;
    return answer;
}

let cacheSize = 5;
let workArr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(cacheSize, workArr));