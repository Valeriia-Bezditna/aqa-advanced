const car1 = {
	brand: "Audi",
	model: "A6",
	year: 2021

};
const car2 = {
	brand: "Tesla",
	model: "MODEL 3",
	owner: "Lero"
};

const car3 = { ...car1, ...car2 };
console.log(car3);