// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}
console.log("\nЗадание 1\n" + Object.values(numbers).filter(item => item >= 3));

// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым
// приписан комментарий, в консоль.

const post =
    {
        author: "John", // вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2, // вывести это число
                },
            },
            {
                userId: 5, // вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", // вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1,
                },
            },
        ],
    };
console.log("\nЗадание 2.1\n" + post.author)
console.log("Задание 2.2\n" + post.comments[0].rating.dislikes)
console.log("Задание 2.3\n" + post.comments[1].userId, post.comments[1].text)

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(product => product.price *= 0.85);
console.log("\nЗадание 3")
console.log(products)

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография
// используя метод filter. Исходные данные - массив products.
const product = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];
console.log("\nЗадание 4.1")
console.log(product.filter(prod => prod.photos && prod.photos.length > 0));

// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
product.sort((a, b) => a.price - b.price);
console.log("\nЗадание 4.2")
console.log(product)

// **Задание 5**
// Дано 2 массива
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// Вам необходимо объединить два этих массива, чтобы значения первого массива были ключами,
// а значения второго массива — значениями.
let week = {};
if (en.length === ru.length) {
    for (let i = 0; i < en.length; i++) {
        week[en[i]] = ru[i];
    }
}
console.log("\n**Задание 5**")
console.log(week)