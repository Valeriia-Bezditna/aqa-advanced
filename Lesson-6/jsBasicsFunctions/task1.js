console.log ("Function declaration")
function calculateAreaRectangle(width, height){
    return width * height;


}

console.log(calculateAreaRectangle(5, 12));

console.log("function expression");

const areaRectangle = function (width, height) {
    return width * height;
}

console.log(areaRectangle(30, 45));

console.log("Arrow function");

const areaRectangle1 = (width, height) => width * height;
console.log(areaRectangle1(10, 7));
