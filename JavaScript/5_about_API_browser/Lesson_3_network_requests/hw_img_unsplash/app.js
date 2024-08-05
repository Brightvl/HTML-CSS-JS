const accessKey = '';// API-ключ Unsplash

const imageContainer = document.getElementById('image-container');
const randomImage = document.getElementById('random-image');
const photographerInfo = document.getElementById('photographer-info');
const likeButton = document.getElementById('like-button');
const likeCounter = document.getElementById('like-counter');

// Текущий URL изображения и статус лайка
let currentImageUrl = '';
let likeStatus = false;

// Объект, хранящий лайки для каждого изображения
const likes = JSON.parse(localStorage.getItem('likes')) || {};

// Функция для получения случайного изображения с Unsplash
async function fetchRandomImage() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
        const data = await response.json();
        displayImage(data);
    } catch (error) {
        console.error('Ошибка при получении изображения:', error);
    }
}

// Функция для отображения изображения и информации о фотографе
function displayImage(data) {
    currentImageUrl = data.urls.regular;
    randomImage.src = currentImageUrl;
    photographerInfo.textContent = `Фото: ${data.user.name}`;
    updateLikeStatus();
    saveImageToHistory(data);
}

// Функция для обновления статуса лайка и интерфейса
function updateLikeStatus() {
    likeStatus = likes[currentImageUrl] || false;
    likeButton.textContent = likeStatus ? 'Убрать лайк' : 'Лайк';
    likeCounter.textContent = `Лайков: ${likeStatus ? 1 : 0}`;
}

// Обработчик клика на кнопку лайка
likeButton.addEventListener('click', () => {
    likeStatus = !likeStatus;
    likes[currentImageUrl] = likeStatus;
    localStorage.setItem('likes', JSON.stringify(likes));
    updateLikeStatus();
});

// История просмотренных изображений
const imageHistory = JSON.parse(localStorage.getItem('imageHistory')) || [];

// Функция для сохранения изображения в историю
function saveImageToHistory(imageData) {
    const imageInfo = {
        url: imageData.urls.regular,
        photographer: imageData.user.name,
    };
    imageHistory.push(imageInfo);
    localStorage.setItem('imageHistory', JSON.stringify(imageHistory));
}

// Функция для отображения истории изображений
function displayImageHistory() {
    const historyContainer = document.createElement('div');
    historyContainer.id = 'history-container';
    imageHistory.forEach((imageInfo, index) => {
        const img = document.createElement('img');
        img.src = imageInfo.url;
        img.alt = imageInfo.photographer;
        img.width = 150;
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            displayImageFromHistory(index);
        });
        historyContainer.appendChild(img);
    });
    document.body.appendChild(historyContainer);
}

// Функция для отображения изображения из истории
function displayImageFromHistory(index) {
    const imageInfo = imageHistory[index];
    currentImageUrl = imageInfo.url;
    randomImage.src = currentImageUrl;
    photographerInfo.textContent = `Фото: ${imageInfo.photographer}`;
    updateLikeStatus();
}

// Вызов функций при загрузке страницы
displayImageHistory();
fetchRandomImage();
