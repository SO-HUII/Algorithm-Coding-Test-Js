function solution(a, b) {
  let answer = '';
  // monthIndex는 1월이 0부터 시작되므로 a에서 1을 빼줘야 함.
  let date = new Date(2016, a - 1, b);

  answer = date.toString().slice(0, 3).toUpperCase();
  return answer;
}