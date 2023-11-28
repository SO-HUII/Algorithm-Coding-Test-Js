function solution(phone_book) {
    let answer = true;
    phone_book.sort();

    for(let i = 0; i < phone_book.length - 1; i++) {
        if(phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)) {
            answer = false;
        }
    }
    return answer;
}