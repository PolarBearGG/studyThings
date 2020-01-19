document.body.style.backgroundImage = 'url("../Project5.1/img/apple_true.jpg")'; //зміна бекграунду

document.getElementById('title').textContent = 'Мы продаем только подлинную технику Apple'; //зміна заголовку на потрібний

let prom = document.getElementById('prompt'),
    div = document.createElement('div');

    div.classList.add("black");
    prom.appendChild(div);

 let qw = prompt("Какое у вас  отношение к технике apple?", ""); //задати питання і відобразити відповідь на нього в блоці

     div.textContent = qw;      //створення блоку в блоці і внесення туди тексту
    
let col = document.querySelectorAll('.column'),
    adv = document.getElementsByClassName('adv')[0];
    adv.remove(); //видалення реклами

 

 let menuItemTri = document.getElementsByClassName('menu-item')[1], //сортую і додаю 5 пункт
     menuItemFour = document.getElementsByClassName('menu-item')[3],
    menu =  document.getElementsByClassName('menu')[0],
    menuItemFive = document.createElement('li');
    
    //menu.insertBefore(menuItem[2], menuItem[1]); //можна було не перебирати всі кнопки а поміняти місцями дві(на один крок менше роботи)

    menu.appendChild(menuItemTri);
    menu.appendChild(menuItemFour);

    menuItemFive.classList.add("menu-item");
    menu.appendChild(menuItemFive).textContent = 'Пятий пункт';


 



