function solution(n) {
    let answer = 0;
    n = n.toString();
    let arr = n.split('');

    for(let i = 0; i < arr.length; i++) {
      answer += +arr[i];
    }
    return answer;
}