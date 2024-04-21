function solution(n) {
  let answer = 0;
  const arr = Array.from({ length: n + 1 }).fill(true);
  arr[0] = arr[1] = false;
  const sqrt = parseInt(Math.sqrt(n));

  for(let i = 2; i <= sqrt; i++) {
    if(arr[i] === true) {
      for(let j = 2; i * j <= n; j++) {
        arr[i * j] = false;
      }
    }
  }
  answer = arr.filter((v) => v === true).length;
  return answer;
}