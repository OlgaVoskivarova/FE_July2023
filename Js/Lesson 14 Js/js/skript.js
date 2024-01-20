// var x = 10;
// var x = 20;

// console.log(x);

// let y = 1;
// let y = 20;

// console.log(y);

// var x = 5;

// if(x < 6){
//     var x = 10;
// }
// console.log(x);

// let y = 15;

// if(y == 15){
//     let y = 5;

//     // console.log(y);
// }

// console.log(y);


// {
//     var x = 10;
// }

// console.log(x);

// {
//     let y = 20;
// }

// console.log(y);


// let admin = "Jon";
// let pass = "1234";

// // || или
// // && и

// if(admin === "Jon" && pass === "1234"){
//     console.log("Hello,", admin);
// } else if(admin === "Anna"){
//     console.log("Hello, ", admin);
// } else{
//     console.log("Error");
// }

// switch(5){
//         case 2:
//         console.log("Das ist falsche Zahl")
//             break;
//         case 3:
//             console.log("Das ist falsche Zahl");
//             break;
//         case 5:
//             console.log("Alles arbeitet");
//             break;
//         default:
//                 console.log("Es gibt Keine")

// }

// if(5===2){
// console.log ("Das ist falsche Zahl")
// }
// else if (5===3){
//     console.log ("Das ist falsche Zahl")
// }
// else if (5===5){
//     console.log ("Alles arbeitet")
// }
// else {
//     console.log("Es gibt Keine")  
// }


// ZIkLI

// for (let i = 0; i< 3; i++){
//     for (let j = 0; j< 3; j++){
//         for(let k = 0; k<3; k++){
//             console.log(i,j ,k)
//         }
//     }
// }



// объекты 

let car = {
    name:"BMW",
    model: "850xi",
    "year": 2023,
}
console.log(car.name);
console.log(car.year);


// let car = {
//     name: "BMW",
//     model: "850xi",
//     year: 2023,
//     doorCount: 5,
//     "door-color": "black"
// }

// console.log(car.name);
// console.log(car.year);
// console.log(car["door-color"]);

// let user = {
//     name:"Jon"
// }
// let x = "name";
// console.log(user.x);         ne vivodit, osibka

// console.log(user[x])



let phone = {
    name: "Apple",
    model: "14 pro",
    color: "Red",
    price: 1500,
    tools: {
        camera: "21px"
    }
}
console.log(phone.price);
console.log(phone.tools.camera);

let products = [
   {
    id: "1",
    name: "Iphone",
    model: "14 pro max",
    price: 1500
   },
   {
    id: "2",
    name: "Iphone",
    model: "13 pro max",
    price: 900
   },
   {
    id: "3",
    name: "Iphone",
    model: "12 pro ",
    price: 800
   }
];

for ( let i = 0; i < 3; i++)
{
    console.log(products[i].model);
}


let sum = 0;

for(let i = 0; i < products.length; i++) {
sum += products[i].price;
// console.log(sum);
}
console.log(sum);

for (let i= 0; i < products.length; i++){
    if (products[i].price>1000){
        console.log(products[i])
    }
}





























































































