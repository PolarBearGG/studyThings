'use strict';


var number = 5;
var string = "hello!";
var sym = Symbol();
null;
undefined;
var obj = {};

console.log(4 / 0);
console.log('sting' / 9);
let something;
console.log(something);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
}

console.log(persone["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[2]);

//alert("Hello World!");

// let answer = confirm("Are you here?");
// console.log(answer);

// let answer = prompt("Are you here?", "Yes");
// console.log(typeof (answer));


let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

let i = 5;
let b = i = 2;
console.log( null || 2 && 3 || 4);