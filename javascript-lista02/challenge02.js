let budget = {
  incomes: [2500, 3200, 250.43, 360.45],
  outcomes: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array) {
  let total = 0;
  for(let value of array) {
    total += value;
  }
  return total;
}

function calculateBalance() {
  const calculateIncomes = sum(budget.incomes);
  const calculateOutcomes = sum(budget.outcomes);

  const total = calculateIncomes - calculateOutcomes;

  if(total >= 0) {
    console.log("Saldo positivo = " + total.toFixed(2))
  } else {
    console.log("Saldo negativo = " + total.toFixed(2))
  }
}

calculateBalance();