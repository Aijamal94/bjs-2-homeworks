function getArrayParams(...arr) {
  // Задаем начальные значения
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  // Проходим по каждому элементу массива
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  // Вычисляем среднее значение
  let avg = (sum / arr.length).toFixed(2);  // Округляем до двух знаков
  avg = parseFloat(avg);  // Преобразуем строку обратно в число

  // Возвращаем объект с min, max и avg
  return { min: min, max: max, avg: avg };
}

// Примеры использования:
console.log(getArrayParams(-99, 99, 10));  // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10));  // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5));  // { min: 5, max: 5, avg: 5 }

// Задание 2
function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;  // Проверяем наличие элементов
  return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];  // Чётные элементы
    } else {
      sumOddElement += arr[i];   // Нечётные элементы
    }
  }
  
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];   // Сумма чётных элементов
      countEvenElement++;         // Количество чётных элементов
    }
  }
  
  if (countEvenElement === 0) return 0;  // Если чётных элементов нет
  return sumEvenElement / countEvenElement;
}

console.log("Test with values: -99, 99, 10");
console.log("Summation: ", summElementsWorker(-99, 99, 10));  // 10
console.log("Max-Min difference: ", differenceMaxMinWorker(-99, 99, 10));  // 198
console.log("Even-Odd difference: ", differenceEvenOddWorker(-99, 99, 10));  // 10 (только один чётный элемент)
console.log("Average of even elements: ", averageEvenElementsWorker(-99, 99, 10));  // 10

console.log("\nTest with values: 1, 2, 3, -100, 10");
console.log("Summation: ", summElementsWorker(1, 2, 3, -100, 10));  // -84
console.log("Max-Min difference: ", differenceMaxMinWorker(1, 2, 3, -100, 10));  // 110
console.log("Even-Odd difference: ", differenceEvenOddWorker(1, 2, 3, -100, 10));  // -90
console.log("Average of even elements: ", averageEvenElementsWorker(1, 2, 3, -100, 10));  // -29.33

console.log("\nTest with values: 5");
console.log("Summation: ", summElementsWorker(5));  // 5
console.log("Max-Min difference: ", differenceMaxMinWorker(5));  // 0
console.log("Even-Odd difference: ", differenceEvenOddWorker(5));  // -5
console.log("Average of even elements: ", averageEvenElementsWorker(5));  // 0 (нет чётных элементов)

// Задание 3
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;  // Инициализируем минимальным значением
  
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);  // Применяем функцию к текущему массиву
    if (result > maxWorkerResult) {
      maxWorkerResult = result;  // Обновляем максимум
    }
  }
  
  return maxWorkerResult;
}

const arr = [
  [10, 10, 11, 20, 10], 
  [67, 10, 2, 39, 88], 
  [72, 75, 51, 87, 43], 
  [30, 41, 55, 96, 62]
];

// Пример с насадкой summElementsWorker
console.log(makeWork(arr, summElementsWorker));  // максимум из 61, 206, 328, 284 => 328

// Пример с насадкой differenceMaxMinWorker
console.log(makeWork(arr, differenceMaxMinWorker));  // максимум из 10, 86, 44, 66 => 86

// Пример с насадкой differenceEvenOddWorker
console.log(makeWork(arr, differenceEvenOddWorker));  // максимум из 39, -6, -184, 92 => 92

// Пример с насадкой averageEvenElementsWorker
console.log(makeWork(arr, averageEvenElementsWorker));  // максимум из 12.5, 33.333, 72, 62.666 => 72
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