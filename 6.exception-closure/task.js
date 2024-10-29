// Задача 1
function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error("Невалидное значение");
    }
    return parsedValue;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }
  

// Задача 2
  class Triangle {
    constructor(a, b, c) {
      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
  
      // Сохранение сторон треугольника
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      const p = this.perimeter / 2;
      const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return +area.toFixed(3);
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);  // Пытаемся создать треугольник
    } catch (error) {
      // Если поймали исключение, возвращаем объект с геттерами, возвращающими сообщение об ошибке


    getarea() {
      const p = this.perimeter / 2;  // Полупериметр
      const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return +area.toFixed(3);  // Округление до 3 знаков
    }
  }
  
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);  
    } catch (error) {
    
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        }
      };
    }
  }
  


  let triangle1 = getTriangle(3, 4, 5);  // Валидный треугольник
  console.log("Периметр:", triangle1.perimeter);  // Вывод: 12
  console.log("Площадь:", triangle1.area);        // Вывод: 6.000
  
  let triangle2 = getTriangle(1, 2, 10);  // Невалидный треугольник
  console.log("Периметр:", triangle2.perimeter);  // Вывод: Ошибка! Треугольник не существует
  console.log("Площадь:", triangle2.area);        // Вывод: Ошибка! Треугольник не существует
