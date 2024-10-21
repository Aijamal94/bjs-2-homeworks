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
    