function solution(phone_number) {
  let answer = phone_number.split('').fill('*', 0, phone_number.length - 4).join('');
  return answer;
}