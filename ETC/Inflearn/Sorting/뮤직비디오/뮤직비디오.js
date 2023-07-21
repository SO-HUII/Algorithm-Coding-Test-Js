// 곡을 담을 수 있는 DVD 개수
function count(songs, capacity) {
    // DVD 개수
    let cnt = 1;
    // DVD에 저장되는 노래들의 길이의 합
    let sum = 0;

    for(let i of songs) {
        // 한 DVD에 노래 저장을 반복하며 그 길이가 capacity(mid)보다 크다면
        if(sum + i > capacity) {
            // 용량이 초과되니까 DVD의 개수가 더 필요.
            cnt++;
            sum = i;
        } else sum += i;
    }
    return cnt;
}

function solution(dvdCount, songs) {
    let answer;

    // lt: 곡 중 가장 길이가 긴 곡으로 초기화.
    // why? 한 곡을 나누어 DVD에 나누어 담을 수 없기 때문
    let lt = Math.max(...songs);

    // rt: 모든 노래의 길이의 합을 초기화.
    // DVD에 담을 수 있는 최대 용량은 노래 길이의 총 합보다 작거나 같기 때문
    let rt = songs.reduce((a, b) => a + b, 0);

    while(lt <= rt) {
        let mid = parseInt((lt + rt) / 2);

        if(count(songs, mid) <= dvdCount) {
            answer = mid;
            rt = mid - 1; 
        } else {
            lt = mid + 1;
        }
    }
    return answer;
}

const dvdCount = 3;
const songs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(dvdCount, songs));