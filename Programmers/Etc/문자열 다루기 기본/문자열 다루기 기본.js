function solution(s) {
  const check = /[a-zA-Z]/g;

  if(s.length === 4 || s.length === 6) {
    if(check.test(s)){
      return false;
    } else {
      return true;
    }
  } else return false;
}