function solution(arr) {
  let answer = [];
  const min = Math.min(...arr);
  arr.splice(arr.indexOf(min), 1);
  answer = arr;
  
  if(answer.length === 0) answer.push(-1);
  return answer;
}