function isUserAdult(age) {
    if (age >= 18) {
        console.log("Особа є дорослою");
        return true;

    }
    if (age < 18) {
        console.log("Особа є неповнолітньою");
        return false;

    }

}
isUserAdult(15);
isUserAdult(25);


