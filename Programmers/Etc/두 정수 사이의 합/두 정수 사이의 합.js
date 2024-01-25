function solution(a, b) {
  let answer = 0;

  if(a > b) [b, a] = [a, b];

  for(let i = a; i <= b; i++) {
    if(a === b) return a;
    else answer += i;
  }
  return answer;
}