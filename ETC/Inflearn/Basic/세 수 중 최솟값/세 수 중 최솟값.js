function solution(a, b, c) {
    let answer;

    // if (a < b) {
    //     if(b < c) {
    //         answer = a;
    //     } else {
    //         if(a > c) {
    //             answer = c;
    //         } else {
    //             answer = a;
    //         }                                                                                                                                                
    //     }  
    // } else {
    //     if(a < c) {
    //         answer = b;
    //     }else {
    //         if(b > c) {
    //             answer = c;
    //         } else {
    //             answer = b;
    //         }  
    //     }
    // }

    if(a < b) answer = a;
    else answer = b;
    if(c < answer) answer = c;
    
    return answer;
}

console.log(solution(6, 5, 11));