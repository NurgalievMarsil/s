let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}


let money,
    income = 'web-студия',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 100000,
    period = 4;

do {
  money = prompt('Ваш месячный доход?');
} while(!isNumber(money));

let showTypeOf = function(data) {
  console.log(data, typeof(data));
};
showTypeOf(Number(money));
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];

let getExpensesMonth = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную стать расходов?');

        sum += +prompt('Во сколько это обойдется?');
    }
    console.log(expenses);
    return sum;
};
let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

let getAccumulatedMonth = function() {
  return  money - expensesAmount;
};
let accumulatedMonth = getAccumulatedMonth();
budgetDay = accumulatedMonth / 30;
console.log(accumulatedMonth);
console.log(budgetDay);
let getTargetMonth = function() {
  return Math.ceil(mission / accumulatedMonth);
}


console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцам');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Бюджет на день: ', Math.floor(budgetDay));

let getStatusIncome = function () {
  switch (true) {
    case budgetDay >= 1200:
      ('У вас высокий уровень дохода!');
      break;
    case budgetDay >= 600 && budgetDay < 1200:
      console.log('У вас средний уровень дохода');
      break;
    case budgetDay >= 0 && budgetDay < 600:
      console.log('К сожалению у вас уровень дохода ниже среднего');
      break;
    default:
      console.log('Что то пошло не так');
  }
}
getStatusIncome();
