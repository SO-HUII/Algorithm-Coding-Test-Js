function solution(strings, n) {
  let answer = [];
  let str = strings.sort();

  answer = str.sort((a, b)=> a[n].charCodeAt() - b[n].charCodeAt());
  return answer;
}