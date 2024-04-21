function solution(s) {
  let stack = [];
  let count = 0;
  
  for(let i = 0; i < s.length; i += 1){
      stack.push(s[i]);
      
      // 현재 첫 번째 문자와 같은 문자들을 필터링
      const same = stack.filter((item) => item === stack[0]);

      // 현재 첫 번째 문자와 다른 문자들을 필터링
      const diff = stack.filter((item) => item !== stack[0]);
      
      if(same.length === diff.length){
          count += 1;  // 분해한 문자열의 개수
          stack = [];
      }
  }
  
  if(stack.length !== 0){
      count += 1;
  }
  
  return count;
}