let money = prompt('Ваш месячный доход?'),
    income = 'web-студия',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 = prompt('Введите обязательную статью расходов?'),
    amount1 = prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount2 = prompt('Во сколько это обойдется?'),
    budgetMonth = Number(money - amount1 - amount2);
    budgetDay = budgetMonth / 30;
    mission = 100000;
    period = 4;
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцам');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Бюджет на месяц: ', budgetMonth);
console.log('Цель будет достигнута за: ' + Math.ceil(mission / budgetMonth) + ' месяцев');
console.log('Бюджет на день: ', Math.floor(budgetDay));
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