function solution(n, lost, reserve) {
    let answer = 0;

    // 체육복을 도난당해 여벌 X 학생
    const lostStudent = lost.sort((a, b) => a - b).filter((lost) => !reserve.includes(lost));

    // 체육복 여벌 O 도난당하지 않은 학생 
    let haveClothes = reserve.sort((a, b) => a - b).filter((reserve) => !lost.includes(reserve));

    // 체육복이 없어 체육 수업을 듣지 못하는 학생 
    const finalLost = lostStudent.filter((lost) => {
        // 체육복을 첫번째로 빌려줄 수 있는 학생
        const clothLend = haveClothes.find((reserve) => Math.abs(reserve - lost) === 1);

        if(!clothLend) return lost;

        // 여벌옷을 가진 사람 중에서 옷을 빌려준 사람 제외하기
        haveClothes = haveClothes.filter((reserve) => reserve !== clothLend);
    });
    answer = n - finalLost.length;
    return answer;
}