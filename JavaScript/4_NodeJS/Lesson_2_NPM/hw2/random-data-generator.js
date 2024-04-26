
// Генерация случайного имени
function generateRandomName() {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace'];
    return names[Math.floor(Math.random() * names.length)];
}

// Генерация случайного адреса
function generateRandomAddress() {
    const addresses = ['123 Main St', '456 Elm St', '789 Oak St', '101 Maple St'];
    return addresses[Math.floor(Math.random() * addresses.length)];
}

// Генерация случайной даты
function generateRandomDate() {
    return new Date(Date.now() - Math.floor(Math.random() * 10000000000));
}

// Генерация случайного числа
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    generateRandomName,
    generateRandomAddress,
    generateRandomDate,
    generateRandomNumber
};