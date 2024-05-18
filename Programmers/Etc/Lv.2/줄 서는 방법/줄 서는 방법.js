function solution(n, k) {
  let answer = [];
  let arr = Array.from({length: n}, (_, i) => i + 1);
  let fac = arr.reduce((ac, v) => ac * v, 1);
  k--;

  while(answer.length !== n) {
    fac /= arr.length;
    let temp = arr[Math.floor(k / fac)];
    answer.push(temp);

    k %= fac;
    arr = arr.filter(v => v !== temp);
  }
  return answer;
}