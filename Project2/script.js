'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

for (let i = 0; i < 2; i++) {
    let required = prompt("Введите обязательную статью расходов в этом месяце", ""),
        requiredBudget = +prompt("Во сколько обойдется?", "");
    if ((typeof (required)) === 'string' && (typeof (required)) != null &&
        (typeof (requiredBudget)) != null && required != '' && requiredBudget != '' && required.length < 50) {
        appData.expenses[required] = requiredBudget;
    } else {
        i = i - 1;
    }
}

// let i = 0;
// while ( i < 2) {
//     let required = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         requiredBudget = +prompt("Во сколько обойдется?", "");
//     if ((typeof (required)) === 'string' && (typeof (required)) != null &&
//         (typeof (requiredBudget)) != null && required != '' && requiredBudget != '' && required.length < 50) {
//         appData.expenses[required] = requiredBudget;
//     } else {
//         i = i - 1;
//     }
//     i++;
// }

// let i = 0;
// do {
//     let required = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         requiredBudget = +prompt("Во сколько обойдется?", "");
//     if ((typeof (required)) === 'string' && (typeof (required)) != null &&
//         (typeof (requiredBudget)) != null && required != '' && requiredBudget != '' && required.length < 50) {
//         appData.expenses[required] = requiredBudget;
//     } else {
//         i = i - 1;
//     }
//     i++;
// } while ( i < 2);

appData.moneyPerDay = appData.budget / 30;
alert("Бюджет на день:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Низкий уровень достатка");
} else if (appData.moneyPerDay > 100 & appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Високий уровень достатка");
} else {
    console.log("Error");
}

console.log(appData);