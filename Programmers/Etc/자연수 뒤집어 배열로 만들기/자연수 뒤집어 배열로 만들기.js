function solution(n) {
  let answer = [];
  answer = n.toString().split('').map((str) => Number(str)).reverse();
  return answer;
}