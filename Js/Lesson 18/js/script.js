//document.body.style.background = 'red';


// let paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);
// console.log(paragraphs[0]);


// let classparagraph = document.querySelectorAll('p1');
// console.log(classparagraph);


// let idparagraph = document.querySelectorAll('p2');
// console.log(idparagraph);


//primer s vlozenim selektorom

// let paragraph = document.querySelectorAll('.block1>p');
// console.log(paragraph);



// let paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);

// for (let elem of paragraphs) {
//     console.log(elem)
// }


//let paragraph = document.querySelector('p');
// console.log(paragraph);
//paragraph[0]

// let paragraph = document.querySelector('.p1');

// console.log(paragraph);

// let paragraph = document.querySelector('#p2');
 //console.log(paragraph);

//  console.log(paragraph.innerHTML)

//  paragraph.innerHTML = 'My id is #p2'

 // let paragraph = document.querySelector('.p3');

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<a href="#">Text</a>';

// console.log(paragraph.innerText);

// paragraph.innerText = '<a href="#">Text</a>';




//Задача: Написать программу, которая находит параграф по классу и заменяет в нем текст на “привет”.

// let paragraph = document.querySelector('.p1');
// console.log(paragraph);
// paragraph.innerHTML = 'Hello';
// console.log(paragraph.innerHTML);



// Primer 

// let paragraphs = document.querySelectorAll('p');

// console.log(paragraphs);

// paragraphs[1].innerText = 'Hello';

// Задача: Написать программу, которая находит параграфы и заменяет в каждом из них текст на “привет”.


// let paragraphs = document.querySelectorAll('p');
// for (let elem of paragraphs)
// {elem.innerText = 'Hello';
// console.log(elem)};



// let paragraphs = document.querySelectorAll('p');

// // console.log(paragraphs);

// for(let i=0; i<paragraphs.length; i++){
//     console.log(paragraphs[i].innerText)
// }

// for (let elem of paragraphs) {
//     console.log(elem.innerText);
// }

// Задача: Написать скрипт, который находит параграфы и первым 3 параграфам меняет текст на “привет”.

// let paragraphs = document.querySelectorAll('p')

// for (let i =0; i<3; i++)
// {paragraphs[i].innerText='Hello'}
// console,log(paragraphs[i].innerText)



// Задача: Написать скрипт, который находит параграфы и последним 3 параграфам меняет текст на указанные пользователем значения.


// let paragraphs = document.querySelectorAll('p');
// console.log(paragraphs)

// for (let i = paragraphs.length-3; i<=paragraphs.length-1; i++){
//     paragraphs[i].innerText=prompt('enter the text')
// }
// console.log(paragraphs[1].innerText)



// Задача: Написать скрипт, который находит параграфы и четным параграфам меняет текст на 'Я четный';

let paragraphs = document.querySelectorAll('p')
for (let i =1; i< paragraphs.length; i+=2)
{
    paragraphs[i].innerText= 'Я четный'
}
console.log(paragraphs[i].innerText)













































