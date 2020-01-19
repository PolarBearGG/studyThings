'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let required = prompt("Введите обязательную статью расходов в этом месяце", ""),
            requiredBudget = +prompt("Во сколько обойдется?", "");
        if ((typeof (required)) === 'string' && (typeof (required)) != null &&
            (typeof (requiredBudget)) != null && required != '' && requiredBudget != '' && required.length < 50) {
            appData.expenses[required] = requiredBudget;
        } else {
            i--;
        }
    }
}

chooseExpenses();

function detectDayBudget() { // Расчет дневного бюджета
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на день:" + appData.moneyPerDay);
    console.log(appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() { // Расчет уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log("Низкий уровень достатка");
    } else if (appData.moneyPerDay > 100 & appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Високий уровень достатка");
    } else {
        console.log("Error");
    }
}
detectLevel();




function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Сумма накоплений?"),
            percent = +prompt("Процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход с депозита" + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() { // Функция для определения необязательных расходов
    for (let i = 0; i < 3; i++) {
        let noneRequired = prompt("Введите не обязательную статью расходов в этом месяце", ""),
            noneRequiredBudget = +prompt("Во сколько обойдется?", "");
        if ((typeof (noneRequired)) === 'string' && (typeof (noneRequired)) != null &&
            (typeof (noneRequiredBudget)) != null && noneRequired != '' && noneRequiredBudget != '' && noneRequired.length < 50) {
            appData.optionalExpenses[i + 1] = noneRequiredBudget;
        } else {
            i--;
        }
    }
}
chooseOptExpenses();

console.log(appData);