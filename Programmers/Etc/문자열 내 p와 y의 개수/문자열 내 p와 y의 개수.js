function solution(s){
  s = s.toLowerCase();
  let numP = 0;
  let numY= 0;

  for(let i = 0; i < s.length; i++) {
    if(s[i] === 'p') numP++;
    if(s[i] === 'y') numY++;
  }

  if(numP === numY) return true;
  else return false;
}