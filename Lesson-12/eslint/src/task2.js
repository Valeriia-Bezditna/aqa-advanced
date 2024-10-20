function getPlanets() {
	return fetch('https://swapi.dev/api/planets/1/')
		.then((  response) => response.json()   )
		.then((data) => 
			// console.log('GET Response: Planet', data);
			data
		)
		.catch((error) => {
			console.error(   'Error:', error  );
		});
}
// getPlanets();

function getUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => response.json())
		.then((data) => 
			// console.log('GET Response: User', data);
			data
		)
		.catch((error) => {
			console.error('Error:', error);
		});
}

// getUser();

// Promise all

const planetPromise = getPlanets();
const userPromise = getUser();

Promise.all([userPromise, planetPromise])
	.then(([userData, planetData]) => {
		console.log('Результати Promise.all:');
		console.log('User:', userData);
		console.log('Planet:', planetData);
	})
	.catch((error) => {
		console.error('Сталася помилка:', error);
	});

// Promise race

const planets = getPlanets().then((result) => ({ type: 'Planet', data: result }));
const users = getUser().then((result) => ({ type: 'User', data: result }));

Promise.race([planets, users])
	.then((result) => {
		console.log(`Результат Promise race:`, result);
	})
	.catch((error) => {
		console.error('Помилка при виконанні запитів:', error);
	});
