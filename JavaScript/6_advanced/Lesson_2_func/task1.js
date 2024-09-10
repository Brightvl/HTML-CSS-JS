// Задание 1: Класс для управления библиотекой
class Library {
    // Приватное свойство для хранения списка книг
    #books = [];

    // Конструктор принимает начальный список книг и проверяет дубликаты
    constructor(initialBooks = []) {
        if (new Set(initialBooks).size !== initialBooks.length) {
            throw new Error("Список книг содержит дубликаты!");
        }
        this.#books = [...initialBooks];
    }

    // Геттер для получения списка всех книг
    get allBooks() {
        return [...this.#books];
    }

    // Метод для добавления книги
    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error(`Книга "${title}" уже существует в библиотеке.`);
        }
        this.#books.push(title);
    }

    // Метод для удаления книги
    removeBook(title) {
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error(`Книги "${title}" нет в библиотеке.`);
        }
        this.#books.splice(index, 1);
    }

    // Метод для проверки наличия книги
    hasBook(title) {
        return this.#books.includes(title);
    }
}

// Пример использования
const myLibrary = new Library(["Гарри Поттер", "Властелин Колец"]);
console.log(myLibrary.allBooks); // ["Гарри Поттер", "Властелин Колец"]

myLibrary.addBook("1984");
console.log(myLibrary.allBooks); // ["Гарри Поттер", "Властелин Колец", "1984"]

console.log(myLibrary.hasBook("1984")); // true
myLibrary.removeBook("1984");
console.log(myLibrary.hasBook("1984")); // false
