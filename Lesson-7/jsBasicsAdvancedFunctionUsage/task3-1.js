function divide(numerator, denominator, callback){
    try {
        if (denominator === 0) {
            throw new Error("Ділити на нуль не можна!");
        }
        if (typeof numerator !== "number" || typeof denominator !== "number") {
            throw new Error("Один із аргументів не є числом");
        }
        const result = numerator / denominator
        if (callback && typeof callback === "function") {
            callback(result)
        }

    } catch (error) {
        console.error('Сталася помилка:', error.message);// Обробка помилки
    } finally {
        console.log("Робота завершена");
    }
}

const textResult = (result) => {
    console.log(result);
}
divide(10, 0, textResult);
divide(10, "gjgj", textResult);
divide(undefined, 3, textResult);
divide(10, 5, textResult);