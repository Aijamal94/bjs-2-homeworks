<<<<<<< HEAD
# Домашнее задание к лекции 2 «Функции»

## Задача 1

Написать функцию `getArrayParams(...arr)`, которая получает на вход числа, а возвращает минимальное, максимальное и среднее арифметическое значений массива. Используйте rest-параметр для получения произвольного количества аргументов.

### Что нужно сделать
1. Создайте функцию, которая принимает на ввод массив. 
2. Внутри функции задайте переменные `min, max, sum`, присвоив им некоторые первоначальные значения.
<details>
  <summary>Подсказка. Подумайте, прежде чем открыть.</summary>
Первоначальные значения:
min =  Infinity, 
max = -Infinity.
    Также можно использовать в качестве min и max первый элемент массива.
</details>

3. Пройдите по массиву циклом `for` и для каждого элемента определите:

 * если элемент больше предыдущего максимума, то максимум становится равен элементу;
 * если элемент меньше предыдущего минимума, то минимум становится равен элементу;
 * добавляем элемент к сумме `sum` для последующего вычисления среднего.

4. Для другого подхода можно использовать [Math.max](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/max) и [Math.min](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/min). Для передачи всех аргументов используйте [spread-оператор](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), а для суммирования элементов — метод [reduce](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

5. После прохождения цикла (п. 3) или использования другого подхода (п. 4), функция должна возвращать объект вида `{max:..., min: ..., avg:...}`, то есть минимальное, максимальное и средние значения. Чтобы вычислить среднее, надо сумму элементов поделить на их количество. Среднее надо округлить до двух знаков после запятой. Для округления используйте `toFixed`. Заметьте, `toFixed` возвращает `string`. Так как вам нужно вернуть число (`number`), то необходимо дополнительное преобразование значения к числу.

### Пример
```js
getArrayParams(-99, 99, 10) // { min: -99, max: 99, avg: 3.33 }
getArrayParams(1, 2, 3, -100, 10)  // { min: -100, max: 10, avg: -16.80 }
getArrayParams(5)  // { min: 5, max: 5, avg: 5 }
```

## Задача 2
Представьте, что у вас есть мясорубка с разными насадками. Мясорубка запускает действие, а сам процесс зависит от того, какая будет насадка. Затем мясорубка применяет насадку ко всему мясу, которое в неё поступает, и выдаёт на выход только самый лучший кусок. Используйте rest-параметр для получения произвольного количества аргументов в каждой насадке.

У мясорубки есть несколько насадок-преобразователей:

* насадка суммирования элементов;
* насадка вычисления разницы максимального и минимального элементов;
* насадка вычисления разницы сумм чётных и нечётных элементов;
* насадка вычисления среднего значения чётных элементов.

### Что нужно сделать
1. Напишите функцию `summElementsWorker`, которая должна находить сумму элементов массива и возвращать её. Суммирование элементов можно реализовать аналогично первому заданию c помощью цикла или метода `reduce`.
2. Напишите функцию `differenceMaxMinWorker` для вычисления разницы максимального и минимального элементов.
 
 *    C помощью цикла или методов `Math.max` и `Math.min` найдите максимальное и минимальное значения.
 *    Возвращайте разницу этих значений.
  
3. Напишите функцию `differenceEvenOddWorker` вычисления разницы сумм чётных и нечётных элементов.
 * Объявите две переменные, например, `sumEvenElement` и `sumOddElement`, в которых будут накапливаться чётные и нечётные элементы. Инициализируйте эти переменные начальными значениями — нулями.
 * Реализуйте цикл для перебора всех элементов массива.
 * При переборе каждый элемент проверяйте с помощью конструкции `if / else`.
 * Если элемент чётный, то увеличивайте одну переменную (`sumEvenElement`), а если нечётный, то другую (`sumOddElement`).
 * После выполнения цикла выполняйте возвращение разницы двух элементов.
4. Напишите функцию `averageEvenElementsWorker`, которая будет вычислять среднее значение чётных элементов.
  * Объявите две переменные, например, `sumEvenElement` и `countEvenElement`, в которых будут накапливаться сумма чётных элементов и их количество. Инициализируйте эти переменные начальными значениями — нулями.
  * Реализуйте цикл для перебора всех элементов массива.
  * При переборе каждый элемент проверяйте с помощью конструкции `if`.
  * Если элемент чётный, то увеличивайте одну переменную (`sumEvenElement`) на перебираемый элемент, а другую переменную (`countEvenElement`) — на единицу.
  * После выполнения цикла выполняйте возвращение результата деления суммы элементов на их количество.
5. Во всех функциях должна быть проверка наличия элементов. Если элементы не передавались в функцию, то нет смысла что-либо считать и можно сразу возвращать ноль.

### Пример
```js
// summElementsWorker
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

// differenceMaxMinWorker
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

// differenceEvenOddWorker
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

// averageEvenElementsWorker
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38
```

## Задача 3 
В предыдущем задании вам нужно было написать насадки к мясорубке — преобразователи данных. Теперь необходимо написать саму функцию мясорубки — агрегатор преобразований.

Напишите функцию `makeWork`, которая из массива данных и насадки будет возвращать максимальный результат функции насадки.

1. Функция `makeWork` принимает два аргумента: `arrOfArr` и `func`. В первом аргументе передаётся массив, элементы которого — массивы с данными, которые будут передаваться в функцию-насадку. Вторым аргументом передаётся одна из функций насадок.
2. Инициализируйте переменную (`maxWorkerResult`), в которой будет формироваться максимальный результат, и инициализуйте её начальным значением. Можно использовать самое минимальное числовое значение `-Infinity`, либо использовать результат насадки от самого первого элемента из полученных данных (на позиции ноль массива `arrOfArr`). Используйте [spread-оператор](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) для разделения массива элементов на отдельные элементы.
3. Реализуйте цикл для перебора всех элементов массива `arrOfArr`.
4. Внутри цикла каждый перебираемый элемент передавайте в функцию-насадку. Используйте [spread-оператор](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) для разделения массива элементов на отдельные элементы. Результат функции сохраните в отдельную константу.
5. Добавьте проверку: полученное значение больше переменной, в которой формируется максимальное значение?
6. Если полученное значение больше переменной с максимумом, то переприсваивайте переменную максимума на полученное значение.
7. После выполнение цикла в переменной максимума должно быть максимальное значение результатов насадки. Эту переменную следует возвращать из функции.

### Пример
```js
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
```

## Результат при правильном решении задания
![графическое представление](../Jasmine/results/sucessed_tasks_2.png)

## Требования к выполнению домашней работы
# Домашнее задание к лекции 1 «Основные понятия»

Перед выполнением заданий ознакомьтесь с блоком [перед началом работы над проектом](../README.md#перед-началом-работы-над-проектом). Выполните форк репозитория, разверните его с помощью Github pages и выполните задание [Работа с отладкой в браузере](../0.debugger/README.md).
## Задача 1

Написать программу для решения квадратных уравнений (ax² + bx + c = 0).

### Процесс реализации
1. Активируйте [строгий режим](https://learn.javascript.ru/strict-mode) c помощью строки `"use strict";`.
2. Реализуйте функцию `solveEquation`, которая принимает три аргумента: `a`, `b`, `c` — коэффициенты квадратного уравнения.
3. Вычислите дискриминант по формуле `b²-4*a*c`. Для возведения в степень используйте оператор — `**` или функцию [Math.pow](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/pow).
4. Результатом функции должен быть **массив**.
5. Если дискриминант меньше нуля, то корней нет (пустой массив).
6. Если дискриминант равен нулю, то корень один. Его нужно вычислить и вернуть из функции (массив с одним корнем). Формула для вычисления корня: `-b/(2*a)`.
7. Если дискриминант больше нуля, то существует два решения уравнения. Их нужно вычислить и вернуть из функции — массив с двумя корнями: `(-b + Math.sqrt(d) )/(2*a)` и `(-b - Math.sqrt(d) )/(2*a)`.

## Задача 2

Банку «Капитал Кэпиталс» нужно написать калькулятор для расчёта выплат по ипотеке, и они решили поручить эту задачу вам. 

Напишите функцию, которая будет принимать процентную ставку, сумму первоначального взноса, сумму кредита и срок (длительность кредита в месяцах) в качестве аргументов и выдавать сумму, которую в итоге заплатит клиент (первоначальный взнос, погашение основного долга, проценты за пользование кредитом). 

### Что нужно сделать
1. Реализуйте функцию `calculateTotalMortgage`, которая принимает четыре аргумента: `percent`, `contribution`, `amount` и `countMonths`.
2. Преобразуйте процентную ставку из диапазона от 0 до 100 в диапазон от 0 до 1 и из годовой ставки — в месячную.
3. Посчитайте тело кредита — сумму, которую нужно вернуть банку (сумма кредита минус первоначальный взнос).
4. Ежемесячная оплата рассчитывается по формуле: `Платёж = S * (P + (P / (((1 + P)^n) - 1)))`, где:
`S` — тело кредита, `P` — 1/12 процентной ставки (от 0 до 1), `n` — количество месяцев, `^` — возведение в степень. Для возведения в степень используйте оператор — `**` или функцию [Math.pow](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/pow).
5. Посчитайте общую сумму, которую придётся заплатить клиенту.
6. Округлите результат до двух значений после запятой. Результат округления должен быть **числом**.
7. Верните результат из функции. Результатом функции должно быть значение числового типа.

##### Примеры результатов

Ввод: процент (в диапазоне от 0 до 100), начальный взнос, сумма кредита, срок в месяцах

* Ввод: 10, 0, 50000, 12. Вывод: 52749.53
* Ввод: 10, 1000, 50000, 12. Вывод: 51694.54
* Ввод: 10, 0, 20000, 24. Вывод: 22149.56
* Ввод: 10, 1000, 20000, 24. Вывод: 21042.09
* Ввод: 10, 20000, 20000, 24. Вывод: 0
* Ввод: 10, 0, 10000, 36. Вывод: 11616.19
* Ввод: 15, 0, 10000, 36. Вывод: 12479.52

## Результат при правильном решении задания
![графическое представление](../Jasmine/results/sucessed_tasks_1.png)

## Требования по выполнению домашней работы

1. Все тесты успешно выполняются.
2. Соблюдается [кодстайл](https://github.com/netology-code/codestyle/tree/master/js#%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-javascript-%D0%BA%D0%BE%D0%B4%D0%B0).
3. Решение загружено в форкнутый репозиторий GitHub.
4. Решение опубликовано в GitHub Pages.

## Решение задач
1.  Откройте файл `task.js` в вашем редакторе кода и выполните задание. <br>
2.  Проверьте соблюдение [кодстайла](https://github.com/netology-code/codestyle/tree/master/js#%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-javascript-%D0%BA%D0%BE%D0%B4%D0%B0). Форматируйте ваш код через форматтер https://codebeautify.org/jsviewer.
3.  Добавьте файл `task.js` в индекс `git` с помощью команды `git add %file-path%`, где `%file-path%` — путь до целевого файла `git add ./2.functions/task.js`. <br>
4.  Сделайте коммит, используя команду `git commit -m '%comment%'`, где `%comment%` — это произвольный комментарий к вашему коммиту `git commit -m 'Второе задание полностью готово'`. <br>
5.  Опубликуйте код в репозиторий `homeworks` с помощью команды `git push -u origin main`.<br>
6. На проверку пришлите 2 ссылки. На файл с решением (`task.js`) и на страницу GitHub Pages — страницу с автотестами: `https://%USERNAME%.github.io/bjs-2-homeworks/2.functions`.
1. Откройте файл `task.js` в вашем редакторе кода и выполните задание. <br>
2. Проверьте соблюдение [кодстайла](https://github.com/netology-code/codestyle/tree/master/js#%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-javascript-%D0%BA%D0%BE%D0%B4%D0%B0). Форматируйте ваш код через форматтер https://codebeautify.org/jsviewer.
3. Добавьте файл `task.js` в индекс `git` с помощью команды `git add %file-path%`, где `%file-path%` — путь до целевого файла `git add ./1.base-concepts/task.js`. <br>
4. Сделайте коммит, используя команду `git commit -m '%comment%'`, где `%comment%`, — это произвольный комментарий к вашему коммиту `git commit -m 'Первое задание полностью готово'`. <br>
5. Опубликуйте код в репозиторий `homeworks` с помощью команды `git push -u origin main`.<br>
6. На проверку пришлите 2 ссылки. На файл с решением (`task.js`) и на страницу GitHub Pages — страницу с автотестами: `https://%USERNAME%.github.io/bjs-2-homeworks/1.base-concepts`.
=======
# Домашнее задание к лекции 3 «Массивы»

### Задача 1. Сравнить массивы

Создайте функцию `compareArrays(arr1, arr2)`, которая с помощью функции высшего порядка будет сравнивать значения двух массивов. Если массивы имеют одинаковые значения на одинаковых индексах, `compareArrays` должна выдавать `true` (иначе `false`). Используйте метод `every` для сравнения элементов одного массива с соответствующими элементами другого массива.

Пример вызова:

```javascript
compareArrays([8, 9], [6]) // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]) // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]) // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]) // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]) // true
```

### Задача 2. Фильтрация и преобразование массива

Создайте функцию `getUsersNamesInAgeRange(users, gender)`, которая возвращает среднее значение возраста пользователей одного пола.

1. Используйте метод `filter` для получения нужных пользователей.
2. Используйте метод `map` для получения их возрастов, или сразу формируйте среднее значение в `reduce`.
3. Используйте метод `reduce` для формирования среднего значения возраста.

```js
let result = arr.filter(...).map(...).reduce(...)
```

Пример вызова:

```javascript
const people = [
  {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
  {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
  {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
  {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
  {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
  {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
  {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
  {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
  {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
  {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
  {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
  {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
  {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
  {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
]
console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
console.log(getUsersNamesInAgeRange([], "женский")); // 0
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0
```

## Результат при правильном решении задания
![графическое представление](../Jasmine/results/sucessed_tasks_3.png)

## Требования к выполнению домашней работы

1.  Все тесты успешно выполняются.
2.  Соблюдается [кодстайл](https://github.com/netology-code/codestyle/tree/master/js#%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-javascript-%D0%BA%D0%BE%D0%B4%D0%B0).
3.  Решение загружено в форкнутый репозиторий GitHub.
4.  Решение опубликовано в GitHub Pages.

## Решение задач
1. Откройте файл `task.js` в вашем редакторе кода и выполните задание. <br>
2. Проверьте соблюдение [кодстайла](https://github.com/netology-code/codestyle/tree/master/js#%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-javascript-%D0%BA%D0%BE%D0%B4%D0%B0). Форматируйте ваш код через форматтер https://codebeautify.org/jsviewer.
3. Добавьте файл `task.js` в индекс `git` с помощью команды `git add %file-path%`, где `%file-path%` — путь до целевого файла `git add ./3.arrays/task.js`. <br>
4. Сделайте коммит, используя команду `git commit -m '%comment%'`, где `%comment%` — это произвольный комментарий к вашему коммиту `git commit -m 'Третье задание полностью готово'`. <br>
5. Опубликуйте код в репозиторий `homeworks` с помощью команды `git push -u origin main`.<br>
6. На проверку пришлите 2 ссылки. На файл с решением (`task.js`) и на страницу GitHub Pages — страницу с автотестами: `https://%USERNAME%.github.io/bjs-2-homeworks/3.arrays`.
>>>>>>> first commit

**_Никакие файлы прикреплять не нужно._**

Все задачи обязательны к выполнению для получения зачёта. Можете прислать на проверку как каждую задачу по отдельности, так и все задачи вместе. Во время проверки по частям у вашей домашней работы будет статус «На доработке».

<<<<<<< HEAD
Любые вопросы по решению задач задавайте в чате учебной группы.
# Домашние задания по курсу «Основы Javascript»

0. [Основы отладки](./0.debugger/)

1. [Основные понятия](./1.base-concepts/)

2. [Функции](./2.functions/)

3. [Массивы](./3.arrays/)

4. [Объекты](./4.objects/)

5. [Классы](./5.classes/)

6. [Обработка исключений и замыкания](./6.exception-closure/)

7. [Асинхронность](./7.async/)

8. [Функции декораторы, оператор “...“, call, apply](./8.decorators/)

## Необходимый набор ПО

- браузер (лучше всего подойдет Google Chrome или Яндекс.Браузер);
- редактор кода, например [Sublime][1] или [Visual Studio Code][2];
- аккаунт на [GitHub][7] ([инструкция по регистрации на GitHub][3]);
- система контроля версий [Git][4], установленная локально ([инструкция по установке Git][5]);

## Перед началом работы над проектом

1. Произведите [Fork][0] репозитория с задачами:
После перехода на страницу с домашним заданием из личного кабинета в правом верхнем углу экрана нажмите на кнопку `Fork`:
![](./assets/img/z61OABljKZ.png)
На экране появится окно с выбором предпочтительного репозитория для клонирования проекта. Выбираете ваш аккаунт и после непродолжительного ожидания вы будете перенаправлены на страницу репозитория на вашем аккаунте.

URL адрес этой страницы будет являться URL адресом вашего репозитория. Пример URL адреса репозитория:
`https://github.com/%username%/bjs-2-homeworks`, где `%username%` - имя вашего профиля GitHub, `%bjs-2-homeworks%` - название репозитория.

2. Разверните репозиторий с помощью github-pages по [инструкции](./assets/gh-pages.md)
3. Перейдите в папку (директорию) на вашем компьютере, где будет храниться проект.
4. С помощью терминала, командной строки вашей операционной системы или консоли Git (ПКМ -> `GitBash Here`) откройте выбранную вами директорию.
5. Склонируйте репозиторий с домашними заданиями с помощью команды `git clone https://github.com/%username%/bjs-2-homeworks` в открывшемся терминале или командной строке.
6. Перейдите в директорию склонированного репозитория `cd ./bjs-2-homeworks`.

## Работа над каждым домашним заданием состоит из нескольких этапов

1. Ознакомьтесь с правилами отладки. Данная [инструкция](https://github.com/netology-code/bjs-2-homeworks/tree/main/0.debugger) входит в проект.
2. Ознакомьтесь с папкой задания. В каждой папке находится несколько файлов:
   1. `README.md` - файл с описанием домашнего задания.
   2. `task.js` - файл для реализации домашнего задания. **Домашние задания выполняются в этом файле.**
   3. `tests.js` - файл с тестами.
   4. `index.html` - файл, запускающий тесты.
3. Ознакомьтесь и реализуйте задания.
4. Код из домашних заданий можно вызывать как из консоли, так и со страницы.
5. Проверьте работу ваших заданий, запустив тесты jasmine (открыв файл `index.html` в браузере).
6. В случае успеха прохождения тестов можно сдавать задание.

**!ВНИМАНИЕ!** Прохождение тестов не означает полностью правильную реализацию домашнего задания. Тесты проверяют правильность вычисления задания, но не чистоту кода и правильность выполнения домашнего задания.

## Решение задач

1. Перейдите в папку задания, например, для первого задания `1.base-concepts`.
2. Откройте файл `task.js` в вашем редакторе кода и выполните задание.
3. Добавьте файл `task.js` в индекс `git` с помощью команды `git add %file-path%`, где `%file-path%` - путь до целевого файла, например, для первого задания `git add task.js`.
4. Сделайте коммит, используя команду `git commit -m '%comment%'`, где `%comment%` - это произвольный комментарий к вашему коммиту, например, для первого задания `git commit -m 'Реализовано первое задание'`.
5. Опубликуйте код в репозиторий `homeworks` с помощью команды `git push -u origin main`.
6. Пришлите ссылку на репозиторий через личный кабинет на сайте [Нетологии][6].

[0]: https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D1%80%D0%BA
[1]: https://www.sublimetext.com/
[2]: https://code.visualstudio.com/
[3]: https://github.com/netology-code/guides/tree/master/github
[4]: https://git-scm.com/
[5]: https://github.com/netology-code/guides/blob/master/git/README.md
[6]: https://netology.ru/
[7]: https://github.com/
=======
Любые вопросы по решению задач задавайте в чате учебной группы.
>>>>>>> first commit
