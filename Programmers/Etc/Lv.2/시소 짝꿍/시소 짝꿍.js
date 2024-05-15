function solution(weights) {
  let answer = 0;
  const store ={};
  const ratio = [1, 3 / 2, 2, 4 / 3];

  weights.sort((a, b) => b - a).forEach(w => {
    let s;

    ratio.forEach(r => {
      if(s = w * r, store[s]) {
        answer += store[s];
      }
    });

    if(!store[w]) store[w] = 1;
    else store[w]++;
  });
  
  return answer;
}