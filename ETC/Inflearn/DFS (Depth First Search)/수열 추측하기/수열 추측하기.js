function solution(c, endN) {
    let answer, flag = 0;
    let dy = Array.from(Array(11), () => Array(11).fill(0));
    let check = Array.from({ length: c + 1 }, () => 0);
    let p = Array.from({ length: c },() => 0);
    // 조합의 값을 담을 배열
    let b = Array.from({ length: c }, () => 0);

    function comb(n, r) {
        if(dy[n][r] > 0) return dy[n][r];
        if(n == r || r == 0) return 1;
        else return dy[n][r] = comb(n - 1, r - 1) + comb(n - 1, r);
    }

    function DFS(L, sum) {
        if(flag) return;
        if(L == c && sum == endN) {
            answer = p.slice();
            flag = 1;
        } else {
            for(let i = 1; i <= c; i++) {
                if(check[i] == 0) {
                    check[i] = 1;
                    p[L] = i;
                    DFS(L + 1, sum + (b[L] * p[L]));
                    check[i] = 0;
                }
            }
        }
    }

    for(let i = 0; i < c; i++) {
        b[i] = comb(c - 1, i);
    }

    DFS(0, 0);
    return answer;
}

const count = 4;
const endNum = 16;
console.log(solution(count, endNum));