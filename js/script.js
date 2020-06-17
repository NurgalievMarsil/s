'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
let money,
    start = function(){
      do {
        money = prompt('Ваш месячный доход?');
      } while(!isNumber(money) || money === '' || money === null);
    }
  start();


let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  budget: 30000,
  deposit: false,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  mission: 100000,
  period: 4,
  getExpensesMonth: function() {

    for (let i = 0; i < 2; i++) {

        appData.expenses[i] = prompt('Введите обязательную стать расходов?');

        appData.expensesMonth += +prompt('Во сколько это обойдется?');
    }
    return appData.expensesMonth;
  },
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
  }
}
appData.budget = Number(money);
appData.asking();
appData.expensesAmount = appData.getExpensesMonth()
console.log(appData);
appData.getAccumulatedMonth =  function() {
  appData.budgetMonth = appData.budget - appData.expensesMonth;
  
  appData.budgetDay = Math.floor(appData.budgetMonth / 30);
}
appData.getAccumulatedMonth();

console.log('Расходы за месяц: ' + appData.expensesAmount);

appData.getTargetMonth = function() {
  return (Math.ceil(appData.mission / appData.budgetMonth) < 0) ?
  'Цель не будет достигнута' : 'Цель будет достигнута за ' + (appData.mission / appData.budgetMonth) + ' месяцев';
}

console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяца');

appData.getStatusIncome = function () {
  switch (true) {
    case appData.budgetDay >= 1200:
      console.log('У вас высокий уровень дохода!');
      break;
    case appData.budgetDay >= 600 && appData.budgetDay < 1200:
      console.log('У вас средний уровень дохода');
      break;
    case appData.budgetDay >= 0 && appData.budgetDay < 600:
      console.log('К сожалению у вас уровень дохода ниже среднего');
      break;
    default:
      console.log('Что то пошло не так');
  }
}
appData.getStatusIncome();
console.log('Наша программа включает в себя данные: ')
for (let key in appData) {
  console.log(key + ' Значение :' + appData[key]);
}