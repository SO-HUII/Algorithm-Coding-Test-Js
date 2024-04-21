function solution(s, n) {
  let answer = '';
  let next = 0;

  for(let i = 0; i < s.length; i++) {
    if(s[i] === ' ') {
      answer += ' ';
    } else {
      let ascii = s.charCodeAt(i);
      
      if(ascii >= 65 && ascii <= 90) next = (ascii - 65 + n) % 26 + 65; // 알파벳 대문자
      else if(ascii >= 97 && ascii <= 122) next = (ascii - 97 + n) % 26 + 97; // 알파벳 소문자

      answer += String.fromCharCode(next);
    }
  }
  return answer;
}