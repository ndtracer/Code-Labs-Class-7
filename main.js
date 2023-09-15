// Exercise 1

// class Subject {
// 	constructor() {
// 		this.observers = [];
// 	}
//    	// Add methods here
// }

// class Observer {
// 	update() {
// 		console.log('Observer updated!');
// 	}
// }



// Exercise 2

// const person = {
//     name: 'John',
//     age: 30,
//     address: {
//         city: 'New York',
//         country: 'USA'
//     },

// };

// const fruits = ['apple', 'banana', 'cherry', 'date'];

// const { name, age } = person;
// const [ a, b, c, d ] = fruits;
// const { city, country } = person.address;


// console.log(name,age)
// console.log(a,d)
// console.log(city, country)

// Exercise 3
async function fetchPosts() {
	const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
try {
    const data = await fetch(url);
    console.log(data);
    const res = await data.json();
    console.log ('ASYNC/AWAIT:', res);
    return res;
} catch (err) {
    console.log('err:', err);
}
const [ 'body', 'id', 'title', 'userId' ] = ;
console.log(body);

	// Your async/await code here
}

// const [ body, id, title, userId ] = 
// Call the function to fetch posts
fetchPosts();
// console.log(body)



// Exercise 4
// class Subject {
// 	constructor() {
// 		this.observers = [];
// 	}

// 	addObserver(observer) {
// 		// TODO: Add observer to the list
// 	}

// 	removeObserver(observer) {
// 		// TODO: Remove observer from the list
// 	}

// 	notifyObservers(data) {
// 		// TODO: Notify all observers with given data
// 	}

// 	async fetchAndNotify() {
// 		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

// 		// TODO: Fetch data from the API and notify observers
// 	}
// }

// class Observer {
// 	update(data) {
// 		// TODO: Handle the received data. If it's an error message, log it.
// 		// If it's the list of posts, destructure and log the title of the first post.
// 	}
// }

// // TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method

