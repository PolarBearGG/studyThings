let age = document.getElementById('age');
console.log(age.value);
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.age.value);
}
showUser("Korolyk","Vitaliy");