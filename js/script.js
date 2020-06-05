let money = 30000,
    budgetDay = money / 30;
    income = 'web-студия',
    addExpenses = 'КОМУНАЛКА, такси, интернет, телевизор, еда',
    deposit = true,
    mission = 100000,
    period = 4;
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцам');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);