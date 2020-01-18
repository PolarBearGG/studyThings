let begin = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	btnStart1 = document.getElementsByTagName('button')[0],
	btnStart2 = document.getElementsByTagName('button')[1],
	btnCount = document.getElementsByTagName('button')[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	chooseIncome = document.querySelector('.choose-income'),
	savings = document.querySelector('#savings'), //# - це id, . - це class
	summa = document.querySelector('#sum'),
	percent = document.querySelector('#percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value'),

	allBtns = document.querySelectorAll('button');
console.log(allBtns);


let money, time;


begin.addEventListener('click', function () {
	btnStart1.disabled = false;
	btnStart2.disabled = false;
	btnCount.disabled = false;
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	money = +prompt('Ваш бюджет на месяц?', '');

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '');
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDay();
});

btnStart1.addEventListener("click", function () {
	let sum = 0;
	for (let i = 0; i < expensesItem.length; i++) {
		let required = expensesItem[i].value,
			requiredBudget = expensesItem[++i].value;
		if ((typeof (required)) === 'string' && (typeof (required)) != null &&
			(typeof (requiredBudget)) != null && required != '' && requiredBudget != '' && required.length < 50) {
			appData.expenses[required] = requiredBudget;
			sum += +requiredBudget;
		} else {
			i--;
		}
	}
	expensesValue.textContent = sum;
});

btnStart2.addEventListener('click', function () {
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let noneRequired = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = noneRequired;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

btnCount.addEventListener('click', function () {
	if (appData.budget != undefined) {
		appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
		daybudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Низкий уровень достатка";
		} else if (appData.moneyPerDay > 100 & appData.moneyPerDay < 2000) {
			levelValue.textContent = "Средний уровень достатка";
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = "Високий уровень достатка";
		} else {
			levelValue.textContent = "Error";
		}
	} else {
		daybudgetValue.textContent = "Error";
	}
});

chooseIncome.addEventListener('input', function () {
	let item = chooseIncome.value;
	appData.income = item.split(', ');
	incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function () {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

summa.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +summa.value,
			percentage = +percent.value;
		appData.monthIncome = sum / 100 / 12 * percentage;
		appData.yearIncome = sum / 100 * percentage;
		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percent.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +summa.value,
			percentage = +percent.value;
		appData.monthIncome = sum / 100 / 12 * percentage;
		appData.yearIncome = sum / 100 * percentage;
		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});



let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

btnStart1.disabled = true;
btnStart2.disabled = true;
btnCount.disabled = true;