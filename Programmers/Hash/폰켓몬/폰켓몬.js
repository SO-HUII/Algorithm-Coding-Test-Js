function solution(nums) {
    let answer = 0;
    const arr = [...new Set(nums)];

    answer = Math.min(arr.length, nums.length / 2);
    return answer;
}