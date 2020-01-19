'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    appData = {
        budget : money,
        timeData : time,
        expenses : {},
        optionalExpenses : {},
        income : [],
        savings : false
    };

 let required1 = prompt("Введите обязательную статью расходов в этом месяце"),
     requiredBudget1 = prompt("Во сколько обойдется?"),
     required2 = prompt("Введите обязательную статью расходов в этом месяце"),
     requiredBudget2 = prompt("Во сколько обойдется?");


appData.expenses[required1] = requiredBudget1;
appData.expenses[required2] = requiredBudget2;

let daybudget = money / 30;
alert(daybudget);











    console.log(appData);
    