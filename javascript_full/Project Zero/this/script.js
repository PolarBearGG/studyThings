// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello!' + this.name);
//     };
// }

// User.prototype.exit = function(name) {
// console.log("User " + this.name + " gone");
// };

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 25);

//     console.log(ivan);
//     console.log(alex);
//     ivan.hello();
//     ivan.exit();

// 'use strict';
// function showThis (a, b) {
//     console.log(this);
//     function sum() {
//        console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// console.log(showThis(4,5));
// console.log(showThis(5,5));

// let obj = {
//     a : 20,
//     b : 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }


// }
// obj.sum();



// let obj = {
//     name: "John"
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// console.log(sayName.call(obj, ' Smith'));
// console.log(sayName.apply(obj, [' Snow']));


// function count (number) {
//     return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));



let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor='red';
    function showThis() {
        console.log(this);

    }
    showThis();
});
// 1) простий визов функції - window/undefind
// 2) метод обєка - this = обєкт
// 3) Конструктор - this = новий створений обєкт
// 4) Указаніє конкретного контексту- call, apply, bind
