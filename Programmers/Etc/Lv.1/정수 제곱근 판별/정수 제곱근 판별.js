function solution(n) {
  let answer = 0;
  answer = Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;

  return answer;
}