// ZIKLI


// for(let i=0; i<5; i++){
//     console.log(i);
//     if(i == 2){
//         break;
//     }
// }
// for(let i=0; i<5; i++){
//     if(i==2){
//         continue;
//     }
//     console.log(i);
// }

// Составьте программу, которая присваивает переменной d значение 7, а затем выводит на экран: в первой строке - это значение, во второй – квадрат этого значения, в третьей – куб этого значения(for).

// 1 sbosob
// let d=7;
// for (let i=1; i<=3; i++){
//     console.log(d**i)
// }

// 2 sposob
// for (let d=7; d<=343; d*=7){
//     console.log(d);
// }

// for(d = 7; d<=343; d*=7){
//    console.log(d);
// }

// Составьте программу, которая принимает с клавиатуры два целых числа и, если первое больше второго, выводит на экран их сумму, если же наоборот – выводит на экран их произведение. В случае же, если числа одинаковы, программа выводит на экран сообщение "числа одинаковые".

// let num1 = Number (prompt ('enter the number'));
// let num2 = Number (prompt('enter the number'));


// if(num1>num2){
//     console.log(num1+num2);
// }

// else if (num1<num2){
//     console.log(num1*num2);
// }
// else{
//     console.log ('числа одинаковые');
// }

// Составьте программу, которая принимает с клавиатуры целое число и выводит на экран его квадрат – но только в том случае, если введенное число отрицательно. 
// В противном случае – на экран выводится сообщение "ошибка".

// let num1 = Number (prompt ('enter the number'));

// if (num1 <0 ){
//     console.log(num1*num1);
// }
// else {
//     console.log('ошибка');
// }




// Составьте программу, которая выводит на экран все двузначные положительные числа.
// for (let i=10; i<=99; i++)
// {
//     console.log(i);
// }

// Составьте программу, которая выводит на экран все двузначные положительные числа, делящиеся без остатка на 5 (начиная с наименьшего).


// for (let i=5; i<=95; i+=5){
//     console.log(i)

// }
// for (let i=5; i<=95; i++) 

// {if(i%5==0)
//     console.log(i)}



    
// Array massivi

//let fruits =['Appel', 'Banana','Orange'];
//console.log (fruits);
// dlina massiva  length
//console.log(fruits.length);  

//console.log(fruits[0]);     //kluh Appel

//console.log(fruits[2]);  // Orange


//esli mi ne znaem skolko elementov, no nam nuzno vizvat poslednii

//console.log(fruits[fruits.length - 1]); //poslednii
//console.log(fruits[fruints.length - 2]);  //predposlednii element

//massivi nam dayut vozmoznost ese odin Element, kotorogo ne bilo v spiski, ne izmenyy ishidnii massivi

//fruits.push('Apricot'); //Добавление элемента в конец массива

//fruits.unshift('Kiwi'); //Добавление элемента в начало массива


//fruits.pop(); //Удаление последнего элемента массива

//fruits.shift(); //Удаление первого элемента массива


//fruits[1] = 'strawberry'

//console.log(fruits);



// Задание:
// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Замените значение в середине на «Классика». 
// 4. Удалите первый элемент массива.
// 5. Вставьте Рэп и Регги в начало массива



// let style = ['Джаз', 'Блюз'];
// console.log(style);

// style.push('Рок-н-ролл');
// console.log(style);

// style[1] = 'Классика';
// console.log(style);

// style.shift(0);
// console.log(style);


// style.unshift('Рэп', 'Регги');
// console.log(style);

//sbosob odnovremennogo udaleniy i dobovleniy v massiv elementov

let fruits =['Appel', 'Banana','Orange', 'Kiwi','Apricot'];

// fruits.splice(start(index), deletecount(кол/во), element1, element2);



// fruits.splice(1, 1);
// console.log(fruits);

// fruits.splice(1,3);

// console.log(fruits);



// fruits.splice(2,0,'Strawberry');
// console.log(fruits);

// fruits.splice(3,0, 'Avocado');
// console.log(fruits);

// fruits.splice(1,1, 'Kokos');
// console.log(fruits);




let salary1 = [12000, 8000, 30000, 15000, 9000, 1000];
let sum1 = 0;

for(let i=0; i<=salary1.length-1; i++) {
    //console.log(salary[i]);
    sum1 = sum1+salary[i];

}

let salary = [12000, 8000, 30000, 15000, 9000, 1000];

// salary[0]+ salary[1]+....

let sum = 0;

for(let i=0; i<=salary.length-1; i++){
    // console.log(salary[i]);
    sum = sum + salary[i];

}


// sum = 0;

// 1. sum = 0 + 12000 // sum = 12000
// 2. sum = 12000 + 8000 // sum = 20000
// 3. sum = 20000 + 30000 // 50000
// //...
//for(let i=0; i<=salary.length-1; i++){
    //if(salary[i]>10000){
        //sum = sum + salary[i];}
    // console.log(salary[i]);}




















































































