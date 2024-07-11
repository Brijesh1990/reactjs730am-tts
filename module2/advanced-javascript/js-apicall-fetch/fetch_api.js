// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/albums')
// .then(response=>response.json())
// .then(json=>console.log(json))


fetch('http://127.0.0.1:5500/employee.json')
.then(response=>response.json())
.then(json=>console.log(json))