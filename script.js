// База данных пользователей и их ключей
const users = {
    // Ученики
    'S0F1A2B3': { name: 'Айрапетянц София', role: 'Ученик', avatar: 'СА' },
    'B4G5R6T7': { name: 'Бебия Баграт', role: 'Владелец сайта', avatar: 'ББ' },
    'D8M9T0R1': { name: 'Беляев Дмитрий', role: 'Ученик', avatar: 'ДБ' },
    'A2R3T4M5': { name: 'Божеский Артём', role: 'Ученик', avatar: 'АБ' },
    'V6E7R8O9': { name: 'Бунковская Вероника', role: 'Ученик', avatar: 'ВБ' },
    'U1L2Y3A4': { name: 'Валеева Ульяна', role: 'Ученик', avatar: 'УВ' },
    'E5L6I7Z8': { name: 'Воробель Елизавета', role: 'Ученик', avatar: 'ЕВ' },
    'K9A0R1I2': { name: 'Гатикоева Карина', role: 'Ученик', avatar: 'КГ' },
    'P3O4L5I6': { name: 'Герасимова Полина', role: 'Ученик', avatar: 'ПГ' },
    'M7A8X9I0': { name: 'Горлов Максим', role: 'Ученик', avatar: 'МГ' },
    'V1E2R3O4': { name: 'Демидович Вероника', role: 'Ученик', avatar: 'ВД' },
    'A5N6D7R8': { name: 'Дрыбалов Андрей', role: 'Ученик', avatar: 'АД' },
    'K9I0R1A2': { name: 'Елсукова Кира', role: 'Ученик', avatar: 'КЕ' },
    'Z3H4A5N6': { name: 'Ермуханов Жанахмед', role: 'Ученик', avatar: 'ЖЕ' },
    'L7I8A9N0': { name: 'Калинина Лиана', role: 'Ученик', avatar: 'ЛК' },
    'E1V2G3E4': { name: 'Кочмар Евгения', role: 'Ученик', avatar: 'ЕК' },
    'E5L6I7Z8': { name: 'Леонтьева Елизавета', role: 'Ученик', avatar: 'ЕЛ' },
    'E9L0I1Z2': { name: 'Надьярная Елизавета', role: 'Ученик', avatar: 'ЕН' },
    'K3S4E5N6': { name: 'Очакова Ксения', role: 'Ученик', avatar: 'КО' },
    'A7L8I9N0': { name: 'Пяжиева Алина', role: 'Ученик', avatar: 'АП' },
    'K1I2R3I4': { name: 'Радивилов Кирилл', role: 'Ученик', avatar: 'КР' },
    'G5R6I7G8': { name: 'Рыбак Григорий', role: 'Ученик', avatar: 'ГР' },
    'K9I0R1I2': { name: 'Шарин Кирилл', role: 'Ученик', avatar: 'КШ' },
    'E3K4A5T6': { name: 'Шилова Екатерина', role: 'Ученик', avatar: 'ЕШ' },
    'P7O8L9I0': { name: 'Янцевич Полина', role: 'Ученик', avatar: 'ПЯ' },
    
    // Учитель
    'L1A2R3I4': { name: 'Албаева Лариса Кадыровна', role: 'Учитель', avatar: 'ЛА' }
};

// Данные о местах с координатами
const placesData = {
    'Кофейня «Veranda»': {
        coords: [59.880945, 29.112260],
        address: 'Сосновый Бор, Солнечная улица, 12, ТРК «Галактика»',
        description: 'Спешелти кофейня со свежеобжаренным зерном, домашними десертами и вегетарианскими блюдами',
        phone: '+7 (921) 904-69-20',
        workingHours: 'Пн-Чт: 10:00–20:00, Пт-Вс: 10:00–21:00',
        rating: 4.8,
        reviewsCount: 334,
        price: '$$',
        features: ['Wi-Fi', 'Парковка', 'Терраса', 'Доступно с животными', 'Бесплатная вода'],
        social: 'vk.com/verandacoffee'
    },
    'Кафе-пекарня «Мой Сосновый Бор»': {
        coords: [59.880816, 29.112933],
        address: 'Сосновый Бор, Солнечная улица, 9',
        description: 'Уютная кофейня-пекарня с большой выбором десертов, сытных блюд и детской комнатой',
        phone: '+7 (921) 882-40-02',
        workingHours: 'Пн-Пт: 09:00–22:00, Сб-Вс: 10:00–22:00',
        rating: 4.5,
        reviewsCount: 390,
        price: '$$',
        features: ['Wi-Fi', 'Парковка', 'Летняя веранда', 'Детская комната', 'Доставка'],
        social: 'vk.com/coffeesbor'
    },
    'Ресторан «ПхалиХинкали»': {
        coords: [59.880479, 29.117188],
        address: 'Сосновый Бор, Ленинградская улица, 46',
        description: 'Аутентичный ресторан грузинской кухни, известный сочными хинкали и традиционными блюдами',
        phone: '+7 (812) 904-44-90',
        workingHours: 'Пн-Чт: 12:00–23:00, Пт-Сб: 12:00–00:00, Вс: 12:00–23:00',
        rating: 4.6,
        reviewsCount: 1382,
        price: '$$',
        features: ['Детская площадка', 'Банкетный зал', 'Доставка', 'Живая музыка'],
        social: 'phali-hinkali.ru/sbr'
    },
    'Ресторан «Токио-Сити»': {
        coords: [59.880945, 29.112260],
        address: 'Сосновый Бор, Солнечная улица, 12, ТРК «Галактика», 3 этаж',
        description: 'Ресторан с широким выбором блюд японской, итальянской, мексиканской и других кухонь',
        phone: '+7 (812) 677-41-12',
        workingHours: 'Пн-Чт: 12:00–23:00, Пт-Сб: 12:00–01:00, Вс: 12:00–23:00',
        rating: 3.9,
        reviewsCount: 26,
        price: '$$',
        features: ['600+ позиций в меню', 'Доставка', 'Бронирование', 'Детское меню'],
        social: 'tokyo-city.ru/spb/restaurants/sosnovyy-bor'
    },
    'Гастробар «Хеваа»': {
        coords: [59.897457, 29.117188],
        address: 'Сосновый Бор, Устьинская улица, 11/2',
        description: 'Гриль-бар при комплексе Hevaa с блюдами на гриле, бургерами, стейками и уютной атмосферой у моря',
        phone: '+7 (812) 220-15-22',
        workingHours: 'Круглосуточно',
        rating: 4.3,
        reviewsCount: 1213,
        price: '$$',
        features: ['Круглосуточно', 'Беседки', 'Летняя площадка', 'Гриль', 'Коктейли'],
        social: 'hevaa.ru'
    },
    'Гранд-кафе «Багратион»': {
        coords: [59.886361, 29.117621],
        address: 'Сосновый Бор, Проспект Героев, 65А',
        description: 'Гранд-кафе с разнообразной европейской и грузинской кухней, живой музыкой и уютной атмосферой',
        phone: '+7 (965) 752-22-82',
        workingHours: 'Пн-Чт: 11:00–23:00, Пт-Сб: 11:00–01:00, Вс: 11:00–23:00',
        rating: 4.3,
        reviewsCount: 260,
        price: '$$',
        features: ['Живая музыка', 'Доставка', 'Бесплатная парковка', 'Европейская кухня'],
        social: ''
    },
    'Кинотеатр «Современник»': {
        coords: [59.91185, 29.07062],
        address: 'Сосновый Бор, Комсомольская улица, 17',
        description: 'Городской кинотеатр с суши-баром «Кин-но». Удобные кресла, хорошее качество звука. Идеальное место для отдыха с просмотром фильмов и японской кухней.',
        phone: '+7 (81369) 2-12-32',
        workingHours: 'Кинотеатр: 11:00–00:00, Бар «Кин-но»: 12:00–02:00 (до 03:00 Пт-Сб)',
        rating: 3.9,
        reviewsCount: 1000,
        price: '$$',
        features: ['Суши-бар «Кин-но»', 'Удобные кресла', 'Хороший звук', 'Несколько залов', 'Японская кухня'],
        social: 'sovremennik.sbor.net'
    }
};

// Данные с изображениями для каждого заведения
const placeImages = {
    'Кофейня «Veranda»': [
        'https://example.com/veranda-interior.jpg',
        'https://example.com/veranda-coffee.jpg',
        'https://example.com/veranda-desserts.jpg'
    ],
    'Кафе-пекарня «Мой Сосновый Бор»': [
        'https://example.com/moy-sbor-interior.jpg',
        'https://example.com/moy-sbor-bakery.jpg'
    ],
    'Ресторан «ПхалиХинкали»': [
        'https://example.com/phali-dishes.jpg',
        'https://example.com/phali-interior.jpg',
        'https://example.com/phali-hinkali.jpg'
    ],
    'Ресторан «Токио-Сити»': [
        'https://example.com/tokyo-interior.jpg',
        'https://example.com/tokyo-sushi.jpg'
    ],
    'Гранд-кафе «Багратион»': [
        'https://example.com/bagration-hall.jpg',
        'https://example.com/bagration-food.jpg'
    ],
    'Гастробар «Хеваа»': [
        'https://example.com/hevaa-terrace.jpg',
        'https://example.com/hevaa-grill.jpg',
        'https://example.com/hevaa-cocktails.jpg'
    ],
    'Кинотеатр «Современник»': [
        'https://example.com/sovremennik-building.jpg',
        'https://example.com/sovremennik-hall.jpg',
        'https://example.com/sovremennik-bar.jpg'
    ]
};

// DOM элементы
const loginScreen = document.getElementById('login-screen');
const mainContent = document.getElementById('main-content');
const accessKeyInput = document.getElementById('access-key');
const loginBtn = document.getElementById('login-btn');
const userInfo = document.getElementById('user-info');
const userAvatar = document.getElementById('user-avatar');
const userName = document.getElementById('user-name');
const userRole = document.getElementById('user-role');
const welcomeName = document.getElementById('welcome-name');
const logoutBtn = document.getElementById('logout-btn');

// Элементы карты
const mapModal = document.getElementById('map-modal');
const mapContainer = document.getElementById('map-container');
const mapPlaceTitle = document.getElementById('map-place-title');
const mapAddressText = document.getElementById('map-address-text');
const closeMapModal = document.getElementById('close-map-modal');

// Элементы для изображений
const imageModal = document.getElementById('image-modal');
const fullscreenImage = document.getElementById('fullscreen-image');
const imageModalTitle = document.getElementById('image-modal-title');
const closeImageModal = document.getElementById('close-image-modal');
const prevImageBtn = document.getElementById('prev-image');
const nextImageBtn = document.getElementById('next-image');
const currentImageElement = document.getElementById('current-image');
const totalImagesElement = document.getElementById('total-images');

// Переменные для управления изображениями
let currentImages = [];
let currentImageIndex = 0;
let currentPlaceName = '';

// Переменная для хранения карты
let ymap = null;
let currentPlace = null;

// Проверяем, авторизован ли пользователь при загрузке
window.addEventListener('load', () => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        const user = JSON.parse(savedUser);
        showMainContent(user);
    } else {
        accessKeyInput.focus();
    }
});

// Функция для показа уведомлений
function showNotification(message, type = 'success') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Функция форматирования имени для приветствия
function formatDisplayName(user) {
    if (user.role === 'Учитель') {
        return 'Лариса К.';
    } else if (user.role === 'Владелец сайта') {
        return 'Баграт';
    } else {
        const nameParts = user.name.split(' ');
        const lastName = nameParts[0];
        const firstNameInitial = nameParts[1] ? nameParts[1].charAt(0) + '.' : '';
        return `${lastName} ${firstNameInitial}`;
    }
}

// Функция показа основного контента
function showMainContent(user) {
    const displayName = formatDisplayName(user);
    welcomeName.textContent = displayName;
    
    loginScreen.style.display = 'none';
    mainContent.style.display = 'block';
    
    if (user.role === 'Владелец сайта') {
        showNotification('Добро пожаловать, создатель! 🎉 Ваш сайт выглядит премиально!');
    } else if (user.role === 'Учитель') {
        showNotification('Здравствуйте, Лариса Кадыровна! 👩‍🏫 Добро пожаловать!');
    } else {
        showNotification(`Добро пожаловать, ${displayName}! ✨ Наслаждайтесь эксклюзивным контентом`);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(initCardAnimations, 500);
}

// Функция входа
function login() {
    const key = accessKeyInput.value.trim().toUpperCase();
    
    if (!key) {
        showNotification('Пожалуйста, введите ключ доступа', 'error');
        return;
    }

    loginBtn.classList.add('loading');
    
    setTimeout(() => {
        const user = users[key];
        
        if (user) {
            userAvatar.textContent = user.avatar;
            userName.textContent = user.name;
            userRole.textContent = user.role;
            userInfo.classList.add('show');
            
            setTimeout(() => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                showMainContent(user);
            }, 800);
            
        } else {
            showNotification('Неверный ключ доступа', 'error');
            accessKeyInput.style.animation = 'shake 0.5s';
            setTimeout(() => {
                accessKeyInput.style.animation = '';
            }, 500);
        }
        
        loginBtn.classList.remove('loading');
    }, 1200);
}

// Функция выхода
function logout() {
    localStorage.removeItem('currentUser');
    accessKeyInput.value = '';
    userInfo.classList.remove('show');
    mainContent.style.display = 'none';
    loginScreen.style.display = 'flex';
    accessKeyInput.focus();
    showNotification('Вы вышли из системы. Возвращайтесь скорее! 👋');
}

// Функция инициализации карты
function initMap(placeName) {
    const place = placesData[placeName];
    if (!place) return;

    currentPlace = place;

    // Очищаем контейнер карты
    mapContainer.innerHTML = '';
    
    // Создаем карту
    ymap = new ymaps.Map(mapContainer, {
        center: place.coords,
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl']
    }, {
        searchControlProvider: 'yandex#search'
    });

    // Создаем содержимое балуна
    const balloonContent = `
        <div style="padding: 15px; max-width: 300px; font-family: Arial, sans-serif;">
            <h3 style="margin: 0 0 10px 0; color: #333; font-size: 18px;">${placeName}</h3>
            <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">${place.description}</p>
            <div style="margin: 8px 0;">
                <strong style="color: #333;">📞 Телефон:</strong> 
                <span style="color: #666;">${place.phone}</span>
            </div>
            <div style="margin: 8px 0;">
                <strong style="color: #333;">🕒 Время работы:</strong> 
                <span style="color: #666;">${place.workingHours}</span>
            </div>
            <div style="margin: 8px 0;">
                <strong style="color: #333;">⭐ Рейтинг:</strong> 
                <span style="color: #666;">${place.rating} (${place.reviewsCount} отзывов)</span>
            </div>
            <div style="margin: 8px 0;">
                <strong style="color: #333;">📍 Адрес:</strong> 
                <span style="color: #666;">${place.address}</span>
            </div>
        </div>
    `;

    // Добавляем метку
    const placemark = new ymaps.Placemark(place.coords, {
        balloonContent: balloonContent
    }, {
        preset: 'islands#redDotIcon',
        balloonCloseButton: true,
        hideIconOnBalloonOpen: false
    });

    ymap.geoObjects.add(placemark);
    
    // Открываем балун
    placemark.balloon.open();

    // Обновляем информацию в модальном окне
    mapPlaceTitle.textContent = placeName;
    mapAddressText.textContent = place.address;
}

// Функция показа карты
function showMap(placeName) {
    if (!placeName || !placesData[placeName]) {
        showNotification('Информация о местоположении временно недоступна', 'error');
        return;
    }

    mapModal.classList.add('show');
    document.body.style.overflow = 'hidden';

    // Если Яндекс Карты уже загружены, инициализируем карту
    if (window.ymaps) {
        ymaps.ready(() => initMap(placeName));
    } else {
        // Загружаем Яндекс Карты
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        script.onload = () => {
            ymaps.ready(() => initMap(placeName));
        };
        document.head.appendChild(script);
    }
}

// Функция скрытия карты
function hideMap() {
    mapModal.classList.remove('show');
    document.body.style.overflow = 'auto';
    
    if (ymap) {
        ymap.destroy();
        ymap = null;
    }
}

// Функция переключения между иконкой и фото
function toggleImage(card) {
    const cardImage = card.querySelector('.card-image');
    const placeholder = cardImage.querySelector('.image-placeholder');
    const realImage = cardImage.querySelector('.real-image');
    const toggleBtn = cardImage.querySelector('.toggle-image-btn');
    
    if (realImage.classList.contains('active')) {
        // Возвращаем иконку
        realImage.classList.remove('active');
        placeholder.classList.remove('hidden');
        toggleBtn.innerHTML = '<i class="fas fa-camera"></i> Фото';
    } else {
        // Показываем фото
        const placeName = card.querySelector('.card-title').textContent;
        const images = placeImages[placeName];
        
        if (images && images.length > 0) {
            // Устанавливаем первое изображение
            realImage.style.backgroundImage = `url(${images[0]})`;
            realImage.classList.add('active');
            placeholder.classList.add('hidden');
            toggleBtn.innerHTML = '<i class="fas fa-palette"></i> Иконка';
        } else {
            showNotification('Фотографии для этого заведения скоро появятся! 📸', 'error');
        }
    }
}

// Функция показа полноэкранного изображения с возможностью перелистывания
function showFullscreenImage(placeName) {
    const images = placeImages[placeName];
    if (!images || images.length === 0) {
        showNotification('Фотографии для этого заведения скоро появятся! 📸', 'error');
        return;
    }
    
    currentImages = images;
    currentImageIndex = 0;
    currentPlaceName = placeName;
    
    updateFullscreenImage();
    imageModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Функция обновления полноэкранного изображения
function updateFullscreenImage() {
    if (currentImages.length === 0) return;
    
    fullscreenImage.src = currentImages[currentImageIndex];
    imageModalTitle.textContent = currentPlaceName;
    
    // Обновляем счетчик
    currentImageElement.textContent = currentImageIndex + 1;
    totalImagesElement.textContent = currentImages.length;
    
    // Показываем/скрываем кнопки навигации
    prevImageBtn.classList.toggle('hidden', currentImages.length <= 1);
    nextImageBtn.classList.toggle('hidden', currentImages.length <= 1);
    
    // Скрываем счетчик если только одно изображение
    document.querySelector('.image-counter').style.display = 
        currentImages.length <= 1 ? 'none' : 'block';
}

// Функция перехода к следующему изображению
function nextImage() {
    if (currentImages.length <= 1) return;
    
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    updateFullscreenImage();
}

// Функция перехода к предыдущему изображению
function prevImage() {
    if (currentImages.length <= 1) return;
    
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    updateFullscreenImage();
}

// Функция скрытия полноэкранного изображения
function hideFullscreenImage() {
    imageModal.classList.remove('show');
    document.body.style.overflow = 'auto';
    fullscreenImage.src = '';
    currentImages = [];
    currentImageIndex = 0;
}

// Анимации карточек
function initCardAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.place-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Обработчики событий
loginBtn.addEventListener('click', login);

accessKeyInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        login();
    }
});

logoutBtn.addEventListener('click', logout);

closeMapModal.addEventListener('click', hideMap);

closeImageModal.addEventListener('click', hideFullscreenImage);

prevImageBtn.addEventListener('click', prevImage);
nextImageBtn.addEventListener('click', nextImage);

// Закрытие модальных окон при клике вне их
mapModal.addEventListener('click', (e) => {
    if (e.target === mapModal) {
        hideMap();
    }
});

imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        hideFullscreenImage();
    }
});

// Закрытие модальных окон по ESC и навигация по изображениям
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (mapModal.classList.contains('show')) {
            hideMap();
        }
        if (imageModal.classList.contains('show')) {
            hideFullscreenImage();
        }
    }
    
    // Навигация по изображениям с помощью клавиш
    if (imageModal.classList.contains('show')) {
        if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    }
});

// Обработчики для кнопок действий
document.addEventListener('click', (e) => {
    // Кнопка переключения фото/иконки
    if (e.target.classList.contains('toggle-image-btn') || 
        e.target.closest('.toggle-image-btn')) {
        const btn = e.target.classList.contains('toggle-image-btn') ? 
                   e.target : e.target.closest('.toggle-image-btn');
        const card = btn.closest('.place-card');
        toggleImage(card);
    }
    
    // Кнопка развернуть фото (теперь в левом верхнем углу)
    if (e.target.classList.contains('expand-image-btn') || 
        e.target.closest('.expand-image-btn')) {
        const btn = e.target.classList.contains('expand-image-btn') ? 
                   e.target : e.target.closest('.expand-image-btn');
        const card = btn.closest('.place-card');
        const placeName = card.querySelector('.card-title').textContent;
        showFullscreenImage(placeName);
    }
    
    // Остальные кнопки действий
    if (e.target.classList.contains('action-btn') || 
        e.target.closest('.action-btn')) {
        const btn = e.target.classList.contains('action-btn') ? e.target : e.target.closest('.action-btn');
        const card = btn.closest('.place-card');
        const placeName = card.querySelector('.card-title').textContent;
        const place = placesData[placeName];
        
        if (btn.classList.contains('primary')) {
            if (btn.querySelector('.fa-vk') && place.social) {
                // Открываем VK
                if (place.social.includes('vk.com')) {
                    window.open(`https://${place.social}`, '_blank');
                } else {
                    window.open(place.social, '_blank');
                }
            } else if (btn.querySelector('.fa-globe') && place.social) {
                // Открываем сайт
                window.open(`https://${place.social}`, '_blank');
            } else if (btn.querySelector('.fa-phone') && place.phone) {
                // Звонок
                window.open(`tel:${place.phone.replace(/[^0-9+]/g, '')}`, '_self');
            } else {
                showNotification('Контактная информация скоро будет доступна! 📞');
            }
        } else if (btn.querySelector('.fa-map-marker-alt') || btn.textContent.includes('карте')) {
            showMap(placeName);
        } else {
            showNotification('Функция скоро будет доступна! ⚡');
        }
    }
});

// Анимация тряски для ошибок
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// Консольная информация для отладки
console.log('🌲 Премиум гид Сосновый Бор - Доступные ключи:');
console.log('⭐ Особые ключи:');
console.log('   B4G5R6T7 - Бебия Баграт (Владелец сайта)');
console.log('   L1A2R3I4 - Албаева Лариса Кадыровна (Учитель)');
console.log('');
console.log('🏪 Доступные места на карте:');
Object.keys(placesData).forEach(place => {
    console.log(`   📍 ${place} - ${placesData[place].address}`);
});
