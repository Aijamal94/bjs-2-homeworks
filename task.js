//Задание 1
function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  let roots = [];

  if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push(root1, root2);
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    roots.push(root);
  }

  return roots;
}


//Задание 2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразуем параметры в числа
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseInt(countMonths, 10);
  
  // Проверяем, удалось ли преобразовать параметры в числа
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  // Переводим процентную ставку из диапазона от 0 до 100 в месячную ставку (доля от 1)
  let monthlyRate = (percent / 100) / 12;

  // Рассчитываем тело кредита (сумма кредита минус первоначальный взнос)
  let loanBody = amount - contribution;


  // Если тело кредита меньше или равно нулю, возврат 0
  if (loanBody <= 0) {
    return 0;
  }

  // Рассчитываем ежемесячный платеж по формуле
  let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));

  // Рассчитываем общую сумму выплат
  let totalAmount = monthlyPayment * countMonths + contribution;

  // Округляем результат до двух знаков после запятой и возвращаем
  return +totalAmount.toFixed(2);
}
