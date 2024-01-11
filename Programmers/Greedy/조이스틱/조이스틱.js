function solution(name) {
  let answer = 0;

  // min: A의 아스키코드, max: Z의 아스키코드 + 1
  const min = 65;
  const max = 90 + 1;

  // A에서 특정 알파벳을 만드는 최소 조작
  const charToNum = (n) => {
    // 찾고자하는 문자의 아스키코드
    const num = n.charCodeAt();
    
    if(num < 78) return num - 65; // n === B ~ M
    else return 91 - num; // n === N ~ Z
  }

  const charArr = name.split('').map((c) => charToNum(c));
  let minMove = charArr.length - 1;

  charArr.forEach((nowCur, index) => {
    answer += nowCur;
    let nextCur = index + 1;

    // 연속되는 A길이 만큼 nextCur 증가
    while(nextCur < charArr.length && charArr[nextCur] === 0) {
      nextCur++;
    }

    const toBack = charArr.length - nextCur;
    minMove = Math.min(minMove, (index * 2) + toBack, index + (2 * toBack));
  });

  return answer + minMove;
}