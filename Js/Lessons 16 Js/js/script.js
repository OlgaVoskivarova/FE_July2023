// let car = {
//     model: 'BMW x5',
//     color: 'black', 
//     price: 30000
// }

// console.log(car.price);  //console.log(car['price']) tak toze mozno

// car.color = 'blue';

// car.isAvailable = true;

// delete car.price;

// console.log(car);



// //primer sinteksisa pri vivode v console

// let user = {
//     'first name': 'John',
//     lastName: 'Smith', 
//     age: 30
// };

// console.log(user.lastName);
// console.log(user.age);
// console.log(user["first name"]);




// let country = {
//     name : 'Deutschland',
//     language: 'Deutsch',
//     capital: {
//         name: 'Berlin',
//         population: 400000,
//         year: 1237
//     }
// }
// //primeri vivoda population v console
// console.log(country.capital['population']);
// console.log(country.capital.population);
// console.log(country['capital']['population']);



// let users = {
//     firsName: ['John', 'Tom', 'Laura'],
//     lastName: ['Smith', 'hardy', 'Ashley']
// } 

// console.log(users.firsName[1]);
// console.log(lastName[1]);





//Zikli for in



let user = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    isAdmin: false
};

for (let key in user){
    // console.log(key)   zdes mi poluhili kluhi
    console.log(user[key]); // znahenia
}

2. //У нас есть объект, в котором хранятся зарплаты нашей команды:

        let salaries = {
                John: 100,
                Ann: 160,
                Pete: 130
        }
//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.

// let sum = 0;
// for (let key in salaries){
//     sum+=salaries[key]
// }
// console.log(sum);

// 2. Создать объект product с названием(productname) и ценой(productprice) продукта и выведите данные в консоль.

// 3. Добавить в объект product свойства productquantity и productquality.


let product = {
    productname: 'Iphone 13',
    price: 1200,
};

for(let key in product){
    console.log(product[key]);
}

product.productquantity = 10;
product.productquality = 'good';

console.log(product);



//Function!!!!!!

// function showMessage(){
//     console.log('Hello');
// }
// showMessage();
// let num1= 0 ;

// console.log(num1);

// showMessage();



function showMessage(){
    let name = prompt('Enter your name');
    console.log('Hello' + name);
}


for (let i= 0; i< 5; i++){
    showMessage()
}
// showMessage()
// let num1 = 0

// console.log(num1);
// showMessage()
// showMessage()



// function showMessage(name){
//     console.log('Hello' + name);

// }
// showMessage ('John');
// showMessage('Tom');


// showMessage (); //undefined



function showMessage(firstname, lastname){
    console.log('Hello ' + firstname + ' ' + lastname);
}

showMessage('John', 'Smith');
showMessage('Tom', 'Hardy');

showMessage('John'); //Hello John undefined
showMessage(); // Hello undefined undefined





function showMessage(firstname = 'Name', lastname = 'Surname'){
    console.log('Hello ' + firstname + ' ' + lastname);
}

showMessage('John', 'Smith'); // Hello John Smith
showMessage('Tom', 'Hardy'); // Hello Tom Hardy
showMessage(); // Hello Name Surname
showMessage('John'); // Hello John Surname
showMessage(undefined, 'Smith'); // Hello Name Smith
















































































