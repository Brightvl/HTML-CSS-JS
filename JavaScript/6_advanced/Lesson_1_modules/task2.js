// Задание 2: Управление заказами ресторана
const chefs = new Map();
chefs.set("Виктор", ["Пицца Маргарита", "Пицца Пепперони"]);
chefs.set("Ольга", ["Суши Филадельфия", "Суши Калифорния"]);
chefs.set("Дмитрий", ["Тирамису", "Чизкейк"]);

const customers = new Map();
const clientAlexey = { name: "Алексей" };
const clientMaria = { name: "Мария" };
const clientIrina = { name: "Ирина" };

customers.set(clientAlexey, ["Пицца Пепперони", "Тирамису"]);
customers.set(clientMaria, ["Суши Калифорния", "Пицца Маргарита"]);
customers.set(clientIrina, ["Чизкейк"]);

for (const [chef, dishes] of chefs) {
    console.log(`${chef} готовит: ${dishes.join(", ")}`);
}

for (const [client, orders] of customers) {
    console.log(`${client.name} заказал(а): ${orders.join(", ")}`);
}
