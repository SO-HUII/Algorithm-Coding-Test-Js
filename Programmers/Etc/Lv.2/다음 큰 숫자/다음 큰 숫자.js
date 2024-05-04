function solution(n) {
  let numOne = n.toString(2).split("1").length;
  while (true) {
    n++;
    if (n.toString(2).split("1").length === numOne) return n;
  }
}