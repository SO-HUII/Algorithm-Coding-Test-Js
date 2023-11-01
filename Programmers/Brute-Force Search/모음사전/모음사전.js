function solution(word) {
    const result = [];
    const str = "";

    // 모든 경우의 수 조합
    for(let i = 1; i <= 5; i++) {
        dfs(str, i, result);
    }
    return result.sort().indexOf(word) + 1;
}

function dfs(str, len, res) {
    // ['A', 'E', 'I', 'O', 'U']
    const vowels = [..."AEIOU"];

    if(len === str.length) {
        res.push(str);
        return;
    }
    vowels.forEach((vowels) => {
        dfs(str + vowels, len, res);
    });
}