function solution(X, Y) {
  let answer = '';
  let xArr = X.split('');
  let yArr = Y.split('');

  for(let i = 0; i < xArr.length; i++) {
    if(yArr.includes(xArr[i])) {
      if(answer < xArr[i]) answer += xArr[i];
    }
  }
  if(answer === '') return "-1";
  return answer;
}