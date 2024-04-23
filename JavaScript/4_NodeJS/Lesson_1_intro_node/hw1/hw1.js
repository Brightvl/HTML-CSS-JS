// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую
// страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на
// первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно
// увеличиваться на единицу каждый раз, когда загружается страница.

const http = require('http');

let pageCounter = {
    '/': 0,
    '/about': 0
};

function onRequest(req, res) {
    const url = req.url;

    // Увеличиваем счетчик просмотров страницы
    if (pageCounter[url] !== undefined) {
        pageCounter[url]++;
    }

    // Отправляем разные ответы в зависимости от URL
    if (url === '/') {
        res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
        res.write(`
<html>
<body>
<h1>Home Page</h1>
<p>Views: ${pageCounter[url]}</p>
<a href="/about">About Page</a>
</body>
</html>`);
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
        res.write(`
<html>
<body>
<h1>About Page</h1>
<p>Views: ${pageCounter[url]}</p>
<a href="/">Home Page</a>
</body>
</html>`);
        res.end();
    } else {
        // Обработка несуществующих роутов
        res.writeHead(404, {"Content-Type": "text/plain; charset=UTF-8"});
        res.end("404 Not Found");
    }
}

http.createServer(onRequest).listen(3000);
console.log("Server is renned");