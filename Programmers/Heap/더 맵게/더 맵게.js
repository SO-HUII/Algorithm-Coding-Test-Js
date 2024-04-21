function solution(scoville, K) {
  let answer = 0;
  let mix = 0;
  const n = scoville.length;

  while() {
    scoville.sort((a, b) => b - a);
    mix = scoville[n - 1] + scoville[n - 2];
    scoville.push(mix);
  }

  return answer;
}