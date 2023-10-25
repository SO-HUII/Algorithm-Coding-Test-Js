function solution(sizes) {
    let answer = 0;
    const rotateArr = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    
    let maxSize = [0, 0];

    rotateArr.forEach(([w, h]) => {
        if(w > maxSize[0]) maxSize[0] = w;
        if(h > maxSize[1]) maxSize[1] = h;
    });
    answer = maxSize[0] * maxSize[1]; 
    return answer;
}