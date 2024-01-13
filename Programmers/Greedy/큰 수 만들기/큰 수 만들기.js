function solution(number, k) {
  let answer = '';
  const arr = [];

  for(let i = 0; i < number.length; i++) {
    while(k > 0 && number[i] > arr[arr.length - 1] && arr.length > 0) {
      k--;
      arr.pop();
    }
    arr.push(number[i]);
  }
  // arr의 인덱스 number.length - k부터 k개 요소 삭제
  arr.splice(number.length - k, k);
  answer = arr.join("");
  return answer;
}