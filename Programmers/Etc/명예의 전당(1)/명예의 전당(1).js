function solution(k, score) {
  let answer = [];
  let numArr = [];
  
  score.forEach(num => {
      numArr.push(num);
      numArr.sort((a,b) => b-a).splice(k);
      answer.push(Math.min.apply(null, numArr));
  });

  return answer;
}