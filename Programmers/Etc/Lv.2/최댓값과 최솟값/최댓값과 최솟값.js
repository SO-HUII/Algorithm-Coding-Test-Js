function solution(s) {
  let answer = '';

  let arr = s.split(' ');
  answer = Math.min(...arr) + ' ' + Math.max(...arr);

  return answer;
}