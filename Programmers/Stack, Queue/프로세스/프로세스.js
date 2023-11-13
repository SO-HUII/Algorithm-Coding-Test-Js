function solution(priorities, location) {
    let answer = 0;
    const queue = priorities.map((priority, index) => ({ priority, index }));

    while (queue.length > 0) {
        const cur = queue.shift();
        if (queue.some(item => item.priority > cur.priority)) {
            queue.push(cur);
        } else {
            answer += 1;
            if (cur.index === location) {
                return answer;
            }
        }
    }
    return answer;
}