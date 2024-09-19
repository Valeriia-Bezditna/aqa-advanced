function calculateNum(num) {
console.log(num);
if (num < 0 || num === 0) {
    return 0;
} else {
    return calculateNum(num-1);
}
}
calculateNum(5);
