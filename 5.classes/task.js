// Задача 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state = Math.min(this.state * 1.5, 100);
    }
  
    get state() {
      return this._state;
    }
  
    set state(value) {
      if (value < 0) {
        this._state = 0;
      } else if (value > 100) {
        this._state = 100;
      } else {
        this._state = value;
      }
    }
  }
  
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }
  
  
  const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  );
  
  console.log(sherlock.releaseDate); // 2019
  console.log(sherlock.state); // 100
  sherlock.fix();
  console.log(sherlock.state); // 100
  
  const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); // "Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); // 10
  picknick.fix();
  console.log(picknick.state); // 15
  
  // Задача 2
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      return this.books.find(book => book[type] === value) || null;
    }
  
    giveBookByName(bookName) {
      const index = this.books.findIndex(book => book.name === bookName);
      if (index !== -1) {
        return this.books.splice(index, 1)[0];
      }
      return null;
    }
  }
  
  
  const library = new Library("Библиотека имени Ленина");
  
  library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    )
  );
  
  library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
  );
  
  library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  
  console.log(library.findBookBy("name", "Властелин колец")); // null
  console.log(library.findBookBy("releaseDate", 1924).name); // "Мурзилка"
  
  console.log("Количество книг до выдачи: " + library.books.length); // 4
  const issuedBook = library.giveBookByName("Машина времени");
  console.log("Количество книг после выдачи: " + library.books.length); // 3
  
  issuedBook.state = 10;
  issuedBook.fix();
  console.log(issuedBook.state); // 15
  
  library.addBook(issuedBook); // Не добавится, т.к. состояние < 30
  console.log("Количество книг после попытки вернуть: " + library.books.length); // 3
  function compareArrays(arr1, arr2) {
      return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
    }
    
    console.log(compareArrays([8, 9], [6])); // false
    console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false
    console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false
    console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false
    console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true
    
  
  // Задача 2
    function getUsersNamesInAgeRange(users, gender) {
      const filteredUsers = users.filter(user => user.gender === gender);
      
      if (filteredUsers.length === 0) {
        return 0;
      }
    
      const totalAge = filteredUsers.reduce((acc, user) => acc + user.age, 0);
      return totalAge / filteredUsers.length;
    }
    
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
    
    console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
    console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
    console.log(getUsersNamesInAgeRange([], "женский")); // 0
    console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0
  
  function Student(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.marks = []; 
    }
    
    Student.prototype.setSubject = function (subjectName) {
      this.subject = subjectName;
    };
    
    
    Student.prototype.addMarks = function (...marksToAdd) {
      if (!this.marks) return; // Если студент отчислен, добавление невозможно
      this.marks.push(...marksToAdd);
    };
    
    
    Student.prototype.getAverage = function () {
      if (!this.marks || this.marks.length === 0) return 0; // Если оценок нет, возвращаем 0
      const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
      return sum / this.marks.length;
    };
    
  
    Student.prototype.exclude = function (reason) {
      delete this.subject; 
      delete this.marks;   
      this.excluded = reason; 
    };
    
   // Пример использования
    let student1 = new Student("Василиса", "женский", 19);
    student1.setSubject("Algebra");
    console.log(student1.getAverage()); // 0
    student1.addMarks(4, 5, 4, 5);
    console.log(student1.getAverage()); // 4.5
    console.log(student1); 
    
    let student2 = new Student("Артём", "мужской", 25);
    student2.setSubject("Geometry");
    student2.exclude("плохая учёба");
    console.log(student2);
  