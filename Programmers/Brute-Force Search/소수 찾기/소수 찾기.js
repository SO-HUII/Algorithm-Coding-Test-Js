function isPrime(n) {
    if(n < 2) return false;
    for(let i = 2; i * i <= n; i++) {
        if(n % i === 0) return false;
    }
    return true;
}

function dfs(set, nums, str) {
    if(nums.length > 0) {
        for(let i = 0; i < nums.length; i++) {
            let newStr = str + nums[i];
            let newNums = [...nums];

            // newNums 배열에서 i 인덱스 위치에 있는 요소를 제거
            newNums.splice(i, 1);
            
            if(isPrime(Number(newStr))) {
                set.add(Number(newStr));
            }
            dfs(set, newNums, newStr)
        }
    }
}

function solution(numbers) {
    let answer = 0;
    let nums = numbers.split('');
    
    // 중복을 허용하지 않는 유일한 값을 저장
    let set = new Set();
    
    // ""는 초기 문자열
    dfs(set, nums, "");
    
    answer = set.size;
    return answer;
}