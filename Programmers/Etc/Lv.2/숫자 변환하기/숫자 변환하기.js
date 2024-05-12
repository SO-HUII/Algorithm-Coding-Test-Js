function solution(x, y, n) {
  if(x === y) return 0;
  let dp = new Array(y + 1).fill(Infinity);

  for(let i = 0; i <= x; i++) dp[i] = 0;
  for(let i = x; i <= y; i++) {
      for(e of [i - n, i / 2, i / 3]) {
          if(e < x) continue;
          if(dp[e] + 1 < dp[i]) dp[i] = dp[e] + 1;
      }
  }

  return dp[y] !== Infinity ? dp[y] : -1;
}