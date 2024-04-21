function solution(d, budget) {
  let answer = 0;
  const priceArr = d.sort((a, b) => a - b);
  let result = 0;

  for(let i = 0; i < priceArr.length; i++) {
    if(answer < budget) {
      if(answer + priceArr[i] > budget) return result; 
      else {
        answer += priceArr[i];
        result++;
      }
    }
  }
  return result;
}