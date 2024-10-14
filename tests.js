describe("Домашнее задание к занятию 2 Функции", () => {
  describe("Задача №1 Исследовать массив", () => {
    it("[-99, 99, 10] => { min: -99, max: 99, avg: 3.33 }", () => {
      expect(getArrayParams(-99, 99, 10)).toEqual({ min: -99, max: 99, avg: 3.33 });
    });
    it("[1, 2, 3, -100, 10] => { min: -100, max: 10, avg: -16.80 }", () => {
      expect(getArrayParams(1, 2, 3, -100, 10)).toEqual({ min: -100, max: 10, avg: -16.80 });
    });
    it("[5] => { min: 5, max: 5, avg: 5 }", () => {
      expect(getArrayParams(5)).toEqual({ min: 5, max: 5, avg: 5.00 });
    });
  });

  describe("Задача №2 Насадки преобразователи", () => {
    describe("Насадка суммирования элементов", () => {
      it("[] => 0", () => {
        expect(summElementsWorker()).toEqual(0);
      });
      it("[10, 10, 11, 20, 10] => 61", () => {
        expect(summElementsWorker(10, 10, 11, 20, 10)).toEqual(61);
      });
      it("0, 0, 0, -1, -100 => -101", () => {
        expect(summElementsWorker(0, 0, 0, -1, -100)).toEqual(-101);
      });
    });

    describe("Насадка вычисления разницы максимального и минимального элементов", () => {
      it("[] => 0", () => {
        expect(differenceMaxMinWorker()).toEqual(0);
      });
      it("[10, 10, 11, 20, 10] => 20 - 10 => 10", () => {
        expect(differenceMaxMinWorker(10, 10, 11, 20, 10)).toEqual(10);
      });
      it("0, 0, 0, -1, -100 => 0 - (-100) => 100", () => {
        expect(differenceMaxMinWorker(0, 0, 0, -1, -100)).toEqual(100);
      });
    });

    describe("Насадка вычисления разницы сумм чётных и нечётных элементов", () => {
      it("[] => 0", () => {
        expect(differenceEvenOddWorker()).toEqual(0);
      });
      it("[1, 2, 3, 4, 5, 6, 7, 8, 9] => 20 - 25 => -5", () => {
        expect(differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)).toEqual(-5);
      });
      it("[94, 51, 57, 41, 47, 66, 58, 10, 38, 17] => 266 - 213 => 53", () => {
        expect(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)).toEqual(53);
      });
      it("15, 97, 85, 64, 67, 10, 69, 40, 15, 35 => 114 - 383 => -269", () => {
        expect(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)).toEqual(-269);
      });
    });

    describe("Насадка вычисления среднего значения чётных элементов", () => {
      it("[] => 0", () => {
        expect(averageEvenElementsWorker()).toEqual(0);
      });
      it("[1, 2, 3, 4, 5, 6, 7, 8, 9] => [2, 4, 6, 8] => 5", () => {
        expect(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)).toEqual(5);
      });
      it("[15, 97, 85, 64, 67, 10, 69, 40, 15, 35] => [64, 10, 40] => 38", () => {
        expect(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)).toEqual(38);
      });
    });
  });

  describe("Задача №3 Агрегатор преобразователей", () => {
    it("Насадка суммирования значений", () => {
      const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
      // 61, 206, 328, 284
      expect(makeWork(arr, summElementsWorker)).toEqual(328);
    });
    it("Насадка разницы элементов", () => {
      const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
      // 10, 86, 44, 66
      expect(makeWork(arr, differenceMaxMinWorker)).toEqual(86);
    });
    it("Насадка разницы чётных и нечётных элементов", () => {
      const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
      // 39, -6, -184, 92
      expect(makeWork(arr, differenceEvenOddWorker)).toEqual(92);
    });
    it("Насадка среднего значения чётных элементов", () => {
      const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
      // 12.5, 33.333, 72, 62.666
      expect(makeWork(arr, averageEvenElementsWorker)).toEqual(72);
    });
  });
});

describe('Домашнее задание к занятию 1. «Основные понятия»', () => {
  describe('Задача №1', () => {
    it('должна возвращать 2 корня уравнения', () => {
      expect(solveEquation(1, 5, 4)).toEqual([-1, -4]);
    });
  
    it('должна возвращать 1 корень уравнения', () => {
      expect(solveEquation(1, 2, 1)).toEqual([-1]);
    });

    it('должна вернуть пустой массив', () => {
      expect(solveEquation(1, 2, 10)).toEqual([]);
    });
  });
  
  describe('Задача №2. Функция должна:', () => {
    it('верно считать кредит: кейс #1', () => {
      expect(calculateTotalMortgage(10, 0, 50000, 12)).toEqual(52749.53);
    });

    it('верно считать кредит: кейс #2', () => {
      expect(calculateTotalMortgage(10, 1000, 50000, 12)).toEqual(51694.54);
    });

    it('верно считать кредит: кейс #3', () => {
      expect(calculateTotalMortgage(10, 20000, 20000, 48)).toEqual(0);
    });

    it('верно считать кредит: кейс #4', () => {
      expect(calculateTotalMortgage(10, 0, 10000, 36)).toEqual(11616.19);
    });

    it('верно считать кредит: кейс #5', () => {
      expect(calculateTotalMortgage(15, 0, 10000, 36)).toEqual(12479.52);
    }); 
describe("Домашнее задание к занятию 3 «Массивы»", () => {
  describe("Задача №1 Сравнить массивы", () => {
    it("[1,2,3] === [1,2,3]  true", () => {
      expect(compareArrays([1, 2, 3], [1, 2, 3])).toEqual(true);
    });

    it("[1, 2], [1, 2, 3] false", () => {
      expect(compareArrays([1, 2], [1, 2, 3])).toEqual(false);
    });

    it("[1, 2, 3] === [3, 2, 1] false", () => {
      expect(compareArrays([1, 2, 3], [3, 2, 1])).toEqual(false);
    });

    it("[0, 1, 2] === [0, 1] false", () => {
      expect(compareArrays([0, 1, 2], [0, 1])).toEqual(false);
    });

    it("[0, 1] === [0, 1, 2] false", () => {
      expect(compareArrays([0, 1], [0, 1, 2])).toEqual(false);
    });
    it("[8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5] false", () => {
      expect(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])).toEqual(false);
    });
  });

  describe("Задача №2 Получение среднего возраста пользователей одного пола", () => {
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
    ];

    it("Средний возраст мужчин", () => {
      expect(getUsersNamesInAgeRange(people, "мужской")).toEqual(32);
    });
    it("Средний возраст женщин", () => {
      expect(getUsersNamesInAgeRange(people, "женский")).toEqual(27.4);
    });

    it("Средний возраст мужской пустого массива должен быть равен нулю", () => {
      expect(getUsersNamesInAgeRange([], "мужской")).toEqual(0);
    });

    it("Средний возраст несуществующего пола должен быть равен нулю", () => {
      expect(getUsersNamesInAgeRange(people, "инопланетянин")).toEqual(0);
    });
  });
describe("Домашнее задание к занятию 4 «Объекты»", () => {
  it("Сохранение базовых свойств", () => {
    let student = new Student("Василиса", "женский", 19);
    expect(student.name).toEqual("Василиса");
    expect(student.gender).toEqual("женский");
    expect(student.age).toEqual(19);
    expect(student.marks).toEqual([]);
  });

  it("Установка предмета работает корректно", () => {
    let student = new Student("Василиса", "женский", 19);

    student.setSubject("Algebra");
    expect(student.subject).toEqual("Algebra");
    
    student.setSubject("Geometry");
    expect(student.subject).toEqual("Geometry");
  });

  it("Добавление группы оценок addMarks работает корректно", () => {
    let student = new Student("Василиса", "женский", 19);
    
    expect(student.marks).toEqual([]);

    student.addMarks(5);
    expect(student.marks).toEqual([5]);

    student.addMarks(4, 4);
    expect(student.marks).toEqual([5, 4, 4]);

    student.addMarks(3, 3, 4, 5);
    expect(student.marks).toEqual([5, 4, 4, 3, 3, 4, 5]);
  });

  it("Вычисление среднего работает корректно", () => {
    let student = new Student("Василиса", "женский", 19);

    expect(student.getAverage()).toEqual(0);

    student.addMarks(5, 5, 5);
    expect(student.getAverage()).toEqual(5);

    student.marks = [3, 4, 5];
    expect(student.getAverage()).toEqual(4);
  });

  it("Отчисление студента работает корректно", () => {
    let student = new Student("Василиса", "женский", 19);

    student.exclude('прогулы');
    expect(student.excluded).toEqual('прогулы');

    expect(student.subject).toBeUndefined();
    expect(student.marks).toBeUndefined();
  });

  it("Невозможность добавлять оценки отчисленному студенту", () => {
    let student = new Student("Василиса", "женский", 19);

    student.exclude('прогулы');
    expect(student.excluded).toEqual('прогулы');

    student.addMarks(5, 5, 5);
    expect(student.marks).toBeUndefined();
    expect(student.getAverage()).toEqual(0);
  });
});
