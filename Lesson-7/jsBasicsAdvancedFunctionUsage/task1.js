

function handleNum(handleEven, handleOdd, number) {
	if (number % 2 === 0) {
		return handleEven(number);
	} else {
		return handleOdd(number);
	}

}
function handleEven() {
	return "This number is even";

}

function handleOdd() {
	return `This number is odd`
}

console.log(handleNum(handleEven, handleOdd, 8));
console.log(handleNum(handleEven, handleOdd, 9));
