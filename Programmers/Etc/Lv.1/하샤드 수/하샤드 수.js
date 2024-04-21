function solution(x) {
  let sum = 0;
  let numArr = String(x).split('');

  for(let i = 0; i < numArr.length; i++) {
    sum += Number(numArr[i]);
  }

  if(x % sum === 0) return true;
  else return false;
}