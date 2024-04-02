function solution(numbers) {
  let answer = 0;
  const numArr = numbers.sort((a, b) => a - b);

  for(let i = 0; i < 10; i++) {
    if(!numbers.includes(i)) answer += i;
  }
  return answer;
}