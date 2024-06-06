function solution(storey) {
  if (storey < 5) {
      return storey;
  } 
  const remainder = storey % 10;
  const fNum = (storey - fNum) / 10;
  
  return Math.min(remainder + solution(fNum), 10 - remainder + solution(fNum + 1));
}