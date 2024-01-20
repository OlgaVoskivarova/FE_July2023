// function showmessage(name){

// }


// function calcSum(num1, num2) {
//     // console.log(num1, num2)
//     return num1 + num2;
// }
// // calcSum(12,4);

// let sum = calcSum(12, 4);
// console.log(sum);
// console.log(calcSum(13, 25));


//Proverayem vozrast
// function checkAge(age) {
//     if(age>18){
//         return true;
//     }
//     else {
//         return false;
//     }  
// }
// let user_age =Number(prompt('Enter your age'));
// if(checkAge(user_age)==true){
//     console.log('Ja');
// }
// else {
//     console.log('Nein');
// }





// function concat(message, firsname, lastname, age, weight, height) {
//     return (message + '' + firsname + '' + lastname + '' + age + '' 
//     + weight + '' + height);
// }


// function getMax(a , b) {
//     if(a>b){
//         return b;
//     }
// }

// console.log(getMax(12, 0));
// console.log(getMax(12, 20));
// console.log(getMax(20, 20));



// function getMax(a, b, c){
//         if(a>=b && a>=c){
//             return a;
//         }
//         else if(b>=a && b>=c){
//             return b;
//         }
//         return c;
//     }

// console.log(getMax(12, 0, 50));
// console.log(getMax(12, 20, - 7));
// console.log(getMax(20, 20, 20));


//Напишите функцию min(a, b), которая возвращает меньшее из чисел a и b.

// function getMin(a, b){
//     if(a < b){
//         return a;
//     }
//     else if (a > b){
//         return b;
//     }
// }
// console.log(getMin(12, 50));
// console.log(getMin(12, 20, ));
// console.log(getMin(20, 10,));


// let users = [
//     {
//         firstname : 'John',
//         lastnmae : 'Smith',
//         age: 30
//     },
//     {
//         firstname : 'Karen',
//         lastnmae : 'Hardy',
//         age: 12
//     },
//     {
//         firstname : 'Laura',
//         lastnmae : 'Ashley',
//         age: 27
//     },
//     {
//         firstname : 'Ann',
//         lastnmae : 'Smith',
//         age: 31
//     }
// ]
// for (let i = 0; i<users.length; i++){
//     for(let key in users[i]){
//         console.log(users[i] [key]);
//     }
// }

let array = 
            [
                {
                    id: 1,
                    title: "bicycle",
                    price: 45000,
                    discount: 10
                },
                {
                    id: 2,
                    title: "roller-skates",
                    price: 15000,
                    discount: 5
                },
                {
                    id: 3,
                    title: "Kick scooter",
                    price: 10000,
                    discount: 30
                },
                {
                    id: 4,
                    title: "skis",
                    price: 25000,
                    discount: 20
                },
                {
                    id: 5,
                    title: "skate",
                    price: 10000,
                    discount: 0
                }
            ]
// Написать цикл, который выводит только названия товаров

// for (let a = 0; a < array.length; a++)
// {
//     for (let key in array [a]) {
//         console.log(array[a][title]);
//     }
// }
// 1.	Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.



// function getArray1(a, b)

// {let array1 = [];
//     if (a>b){
//         for(let i = b; i <=a; i++)
//         {array1.push(i)}
//     }
//     else if (a<b){
//         for(let i =a; i <=b; i++){
//             array1.push(i)
//         }
//     }
    
//     return array1
    
// }
// console.log(getArray1(10, 15))


//2.	Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему.


// function getArray1(a, b)

// {let array1 = [];
//     if (a>b){
//         for(let i = b; i <=a; i++)
//         {array1.unshift(i)}
//     }
//     else if (a<b){
//         for(let i =a; i <=b; i++){
//             array1.unshift(i)
//         }
//     }
    
//     return array1
    
// }
// console.log(getArray1(10, 15))





// Напишите функцию, которая в качестве аргумента получает число и возвращает массив из чисел от 0 до указанного числа.
// function getArray(a){
//     let array = [];
//     for(let i=0; i<=a; i++){
//         array.push(i);
//     }
//     return array;
// }

// console.log(getArray(8));


// В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.

// let list = [13, -7, 0, 12, 40, -10, 23, -45, 0, 12, -2];

// let sum = 0;
// for( let i = 0; i<list.length; i++){
//     if(list [i]>0){
//         sum = sum + list[i];
//     }
// }
// console.log(sum)






//Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.


let sum = 0;
for( let k = 0; k <=50 ; k++){
    if(k%5==0){
        sum = sum + k;
    }
}
console.log(sum)


















































