async function getPlanets(){
	try {
		const responce = await fetch('https://swapi.dev/api/planets/1/');
		if (!responce.ok) {
			throw new Error("Упс, щось пішло не те з запитом");
		}
		return await  responce.json();
	}
	catch (error) {
		console.error('Error:', error);
		throw error;
	}
}

async function getUser() {
	try {
		const responce = await fetch('https://jsonplaceholder.typicode.com/users/1');
		if (!responce.ok) {
			throw new Error("Упс, щось пішло не так");
		}
		return await  responce.json();
	}
	catch (error) {
		console.error('Error:', error);
		throw error;
	}

}

async function fetchPromiseAll() {
	try {
		const [planet, user] = await Promise.all([getPlanets(), getUser()]);
		console.log("Результат з Promise all:", {planet, user});
	} catch (error) {
		console.error("Помилка з Promise all:", error);
	}
}

async function fetchPromiseRace(){
	try {
		const result = await Promise.race([getPlanets(), getUser()]);
		console.log("Результат з Promise race:", result);
	} catch (error) {
		console.error("Помилка з Promise race:", error);
	}
}

fetchPromiseAll();
fetchPromiseRace();