function isUserAdult(age) {
    if (age >= 18) {
        console.log("Особа є дорослою");
        return true;

    }
    else {
        console.log("Особа є неповнолітньою");
    }

}
isUserAdult(15);
isUserAdult(25);



// Використання тернарного оператора


function isUserAdult1(age) {
    const userAge = age >= 18 ? "Adult" : "Minor";
        return userAge;


}
console.log(isUserAdult1(15));
console.log(isUserAdult1(25));