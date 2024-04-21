function solution(arr) {
  let answer = 0;
  let len = arr.length;

  for(let i = 0; i < len; i++) {
    answer += arr[i];
  }
  return answer / len;
}