let age = document.getElementById('age');
console.log(age.value);
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.age.value);
}
showUser("Korolyk","Vitaliy");



// Второе задание

// let age = document.getElementById('age');
 
// function showUser(surname, name) {
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
 
// showUser.apply(age, ["Горький","Максим"]);