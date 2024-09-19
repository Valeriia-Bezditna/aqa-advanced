function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Ділити на нуль не можна!");
        return numerator / denominator;
    } else if (isFinite(numerator / denominator)) {
        return numerator / denominator;
    } else{
        throw new Error("Один із аргументів не є числом");
    }
}

try {
    const resultDivide = divide(10, 0);// Код, який може викликати помилку
    console.log(resultDivide);
} catch (error) {
    console.error('Сталася помилка:', error.message);// Обробка помилки
} finally {
    console.log("Робота завершена");
}
try {
    const resultDivide = divide(undefined, 9);
    console.log(resultDivide);
} catch (error) {
    console.error('Сталася помилка:', error.message);
} finally {
    console.log("Робота завершена");
}
try {
    const resultDivide = divide("string", 8);
    console.log(resultDivide);
} catch (error) {
    console.error('Сталася помилка:', error.message);
} finally {
    console.log("Робота завершена");
}
try {
    const resultDivide = divide("5", 8);
    console.log(resultDivide);
} catch (error) {
    console.error('Сталася помилка:', error.message);
} finally {
    console.log("Робота завершена");
}
try {
    const resultDivide = divide(10, undefined);
    console.log(resultDivide);
} catch (error) {
    console.error('Сталася помилка:', error.message);
} finally {
    console.log("Робота завершена");
}
/*


console.log(divide(0, 7));
console.log(divide(undefined, 9));
console.log(divide(10, 7));
console.log(divide(10, undefined));
console.log(divide("string", 8));
console.log(divide("5", 8));
*/






