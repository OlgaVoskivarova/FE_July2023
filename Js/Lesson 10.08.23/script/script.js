// let img1 = document.querySelector('.img1');
// let img2 = document.querySelector('.img2');

// // console.log(img1);
// // console.log(img2);


// img1.setAttribute('src', 'https://www.purina.co.uk/sites/default/files/2023-03/Hero%20Pedigree%20Cats.jpg');

// img2.setAttribute('src', 'https://media.4-paws.org/5/b/8/b/5b8bca3f74342210ccca652c651f2d7e23288753/VIER%20PFOTEN_2019-12-13_209-2890x2000.jpg');


// console.log(img2.getAttribute('src')); 
// //получает значение атрибута
// console.log(img2.getAttribute('alt')); 
// //получает значение атрибута
// console.log(img2.hasAttribute('alt'));
// //проверяет наличие атрибута
// console.log(img1.hasAttribute('alt'));
// //проверяет наличие атрибута
// img2.removeAttribute('src');
// //удаляет атрибут


// let link = document.querySelector('.link1');

// link.innerText = 'Google';
// link.setAttribute('href', 'https://www.google.com/');
// link.setAttribute('target', '_blank');

// let link1 = document.querySelector('.link2');
// link1.innerText = 'Facebook';
// link1.setAttribute('href', 'https://www.facebook.com/');
// link1.setAttribute('target', '_blank');  



// let links = document.querySelectorAll('a');

// // console.log(links);

// for (let link of links) {
//     link.setAttribute('href', 'https://www.google.com');
//     link.innerText = "Google";
//     link.setAttribute('target', '_blank');
// }

// for(let i=0; i<2; i++){
//     links[i].setAttribute('href', 'https://www.facebook.com');
//     links[i].innerText = 'Facebook';
// }




// Задача: Написать скрипт, который находит картинки в блоке с классом main и первым 5 картинкам меняет url на указанное значение.

// let img = 'https://t3.ftcdn.net/jpg/03/31/21/08/360_F_331210846_9yjYz8hRqqvezWIIIcr1sL8UB4zyhyQg.jpg'

// let img = document.querySelectorAll('.main>img');
// console.log(img);
// for (let i = 0; i< 5; i++);
// img[i].getAttribute('src', 'https://t3.ftcdn.net/jpg/03/31/21/08/360_F_331210846_9yjYz8hRqqvezWIIIcr1sL8UB4zyhyQg.jpg');
// console.log(img[i])

// Задача: Написать скрипт, который находит все ссылки на странице и формирует массив со всеми адресами. В итоге этот массив необходимо вывести в консоль.

// let links = document.querySelectorAll('a');
// let links_array = []

// for( let i =0; i<links.length; i++){
//     links_array.push(links[i].getAttribute('href', ));
// }
// console.log(links_array)




// sozdanie udalenie claasov

// 1 Metod 
// className

// let paragraph = document.querySelector('p');

// console.log(paragraph.class.Name);
// paragraph.className = 'text1'


// metod 2
// classList

// elem.classList.add/remove("class") – добавить/удалить класс.
// elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
// elem.classList.contains("class") – проверка наличия класса, возвращает true/false.

// let paragraph = document.querySelector('p')
//  paragraph.classList.add('text1');
//  paragraph.classList.remove ('p1')
//  console.log(paragraph.classList.contains('p1'));
//  console.log(paragraph.classList.contains('text'));
//  paragraph.classList.toggle('text');
//  paragraph.classList.toggle('text');
//  paragraph.classList.replace('text1', 'p1')


// Создание элемента(тега)

// let paragarph = document.createElement('p');

// paragarph.innerText = 'Hello';

// paragarph.classList.add('p1');

// document.body.append(paragarph);
//document.body.prepend(paragarph);


// document.body.append(paragarph);
// document.body.prepend(paragarph);

// let block1 = document.querySelector('.main');
// 
//block1.prepend(paragarph); //добавляет тег в начало
//block1.append(paragarph); //добавляет тег в конец
// block1.before(paragarph); //добавляет тег до блока
//block1.after(paragarph); //добавляет тег после блока

// ul>10 li >Text(promt)
//sozdat elem i dobavit ego s vivodom prompt

// let list = document.createElement('ul');

// document.body.prepend(list);

// for( let i=0; i<10; i++){
//     let list_element = document.createElement('li');
//     list_element.innerText = prompt();
//     list.append(list_element);
// }


//udalenie elementov

// let p1 = document.querySelector('p1');
// p1.remove();


//udalenie pervih trex elementov (tegov)

// let paragraphs = document.querySelectorAll('p');

// for(let i=0; i<3; i++){
//     paragraphs[i].remove();
// }

let paragraphs = document.querySelectorAll('p');
for(let i=0; i<paragraphs.length; i++){
    if(i%2==0) {
        paragraphs[i].remove()}
}
























































                                
















