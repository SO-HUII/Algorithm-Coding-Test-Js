function solution(n, cardArr) {
    let answer;
    let tmp = [];

    // cardArr.length - 2 (11까지만 돌면되기 때문에, i가 11일때 j는 26, k는 42이기 때문에)
    for(let i = 0; i < cardArr.length; i++) {
        // 자기 자신과 합하면 안되기 때문에 i + 1로 i 다음부터 반복
        // // cardArr.length - 1
        for(let j = i + 1; j < cardArr.length; j++) {
            for(let k = j + 1; k < cardArr.length; k++) {
                if(!tmp.includes(cardArr[i] + cardArr[j] + cardArr[k])) {
                    tmp.push(cardArr[i] + cardArr[j] + cardArr[k]);
                }
            }
        }
    }
    // 내림차순 정렬
    tmp.sort(function(a, b)  {
        return b - a;
    });

    // 배열 인덱스는 0부터 시작하기 때문에 n번째 큰 수를 구하고 싶으면 n보다 1 작은 인덱스에 원하는 수가 위치할 것.
    answer = tmp[n - 1];
    return answer;
}

let cardArr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(3, cardArr));