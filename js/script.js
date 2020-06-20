'use strict';
let
  isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  },
  numValidate = (message, errorMessage, defaultValue) => {
    let output = prompt(message, defaultValue);
    if (!isNumber(output)) {
      do {
        output = prompt(errorMessage, defaultValue);
      } while (!isNumber(output));
    }
    return +output;
  },
  stringValidate = (message, errorMessage, defaultValue) => {
    let output = prompt(message, defaultValue);
    if (isNumber(output) || output === '' || output === null) {
      do {
        output = prompt(errorMessage, defaultValue);
      } while (isNumber(output) || output === '' || output === null);
    }
    return output;
  },
  money,
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
  percentDeposit: 0,
  moneyDeposit: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  mission: 100000,
  period: 4,
  getTargetMonth: function() {
    return Math.ceil(((appData.mission / appData.budgetDay) < 0) ? 'Цель не будет достигнута' : 'Цель будет достигнута за ' + (appData.mission / appData.budgetMonth) + ' месяцев');
  },
  getBudget:  function() {
    appData.budgetMonth = Number(appData.budget - appData.expensesMonth);
    
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  asking: function () {

    if(confirm('Есть ли у вас дополнительный источник заработка?')) {
      let itemIncome = stringValidate('Какой у вас дополнительный заработок?',
      'Данные должны быть строкой! Какой у вас дополнительный заработок?',
      'таксую');
      let cashIncome = numValidate('Сколько в месяц вы на этом зарабатываете?',
      'Данные должны быть числом! Сколько в месяц вы на этом зарабатываете?',
      '10000');
      appData.income[itemIncome] = cashIncome;
    }

    const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Кино, Театр');
    let expensesArticle,
    expensesMoney;

    if (addExpenses !== null) {
      appData.addExpenses = addExpenses.toLowerCase().split(', ');
    }
    
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) { // Сделал две итерации, в ТЗ к домашке не указано точное количество
      expensesArticle = stringValidate('Введите обязательную статью расходов?',
        'Данные должны быть строкой! Введите обязательную статью расходов?',
        'Ипотека');
      expensesMoney = numValidate('Во сколько это обойдётся?',
        'Данные должны быть числом! Во сколько это обойдётся?',
        '10000');
      appData.expenses[expensesArticle] = expensesMoney;
    }
  },
  getExpensesMonth: () => {
    for (let prop in appData.expenses) {
      appData.expensesMonth += appData.expenses[prop];
    }
  },
  getStatusIncome: function () {
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
  },
  showAllProps: () => {
    for (let prop in appData) {
      if (typeof appData[prop] !== 'function') {
        console.log(prop + ': ', appData[prop]);
      }
    }
  },
  getInfoDeposit: function () {
    if(appData.deposit) {
      appData.percentDeposit = numValidate('Какой годовой процент?',
      'Данные должны быть числом! Какой годовой процент?',
      '10');
      appData.moneyDeposit = numValidate('Какая сумма заложена?',
      'Данные должны быть числом! Какая сумма заложена?',
      '10000');
    }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  },
  showAddExpenses: () => {
    const arr = [];
    appData.addExpenses.forEach(item => {
      arr.push(item[0].toUpperCase() + item.substr(1));
    });
    return arr.join(', ');
  }
};
appData.budget = Number(money);
appData.asking();
appData.getBudget();
appData.getInfoDeposit();
appData.getExpensesMonth();

console.log('Расходы на месяц: ' + appData.expensesMonth);
console.log(appData.calcSavedMoney());
console.log(appData.showAddExpenses());

console.log(appData);

appData.getStatusIncome();
console.log('Наша программа включает в себя данные: ')
appData.showAllProps();