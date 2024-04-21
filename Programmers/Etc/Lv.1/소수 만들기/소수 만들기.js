const isPrime = (sum) => {
  for(let i= 2; i <= Math.sqrt(sum); i++) {
    if(sum % i === 0) return false;
  }
  return true;
} 

function solution(nums) {
  let answer = 0;
  const n = nums.length;
  
  for(let i = 0; i < n - 2; i++) {
    for(let j = i + 1; j < n - 1; j++) {
      for(let k = j + 1; k < n; k++) {
        if(isPrime(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }
  
  return answer;
}