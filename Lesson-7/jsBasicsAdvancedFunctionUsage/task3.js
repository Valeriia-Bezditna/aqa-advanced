function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Ділити на нуль не можна!");

    } if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Один із аргументів не є числом");
    }
    return numerator / denominator;
}

function errorDivide(numerator, denominator, callback) {
    try {
        const resultDivide = callback(numerator, denominator);
        console.log(resultDivide);
    } catch (error) {
        console.error('Сталася помилка:', error.message);
    } finally {
        console.log("Робота завершена");
    }
}
errorDivide(10, 5, divide);
errorDivide(10, 0, divide);
errorDivide(undefined, 5, divide);
errorDivide(10, undefined, divide);
errorDivide("ryryt", 5, divide);










