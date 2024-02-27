function solution(n) {
  let answer = 0;
  answer = Number(Array.from(String(n)).sort((a, b) => b - a).join(''));
  return answer;
}