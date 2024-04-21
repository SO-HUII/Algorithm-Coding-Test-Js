function solution(n) {
  let answer = 0;
  let divisor = 1;

  while(divisor <= n) {
    if(n % divisor === 0) answer += divisor;
    divisor++;
  }
  return answer;
}