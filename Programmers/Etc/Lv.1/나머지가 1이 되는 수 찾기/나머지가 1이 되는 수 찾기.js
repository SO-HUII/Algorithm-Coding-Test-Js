function solution(n) {
  let answer = 0;

  for(let i = 2; i < n; i++) {
    if(n % i === 1) return i;
  }
  return answer;
}