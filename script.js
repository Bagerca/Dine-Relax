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
        coords: [59.9085, 29.0855],
        address: 'Сосновый Бор, Ленинградская область',
        description: 'Элегантная кофейня с панорамным видом'
    },
    'Кофейня «Мой Сосновый Бор»': {
        coords: [59.9012, 29.0801],
        address: 'Сосновый Бор, центральный район',
        description: 'Уютное место в центре города'
    },
    'Ресторан «ПхалиХинкали»': {
        coords: [59.897295, 29.079061],
        address: 'Сосновый Бор, улица Ленинградская',
        description: 'Аутентичная грузинская кухня'
    },
    'Ресторан «Токио-Сити»': {
        coords: [59.9005, 29.0923],
        address: 'Сосновый Бор, торговый комплекс',
        description: 'Японская кухня премиум-класса'
    },
    'Территория отдыха «Хеваа»': {
        coords: [59.9156, 29.0654],
        address: 'Сосновый Бор, берег Финского залива',
        description: 'Премиальный комплекс на берегу залива'
    }
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

// Функция показа основного контента
function showMainContent(user) {
    welcomeName.textContent = user.name.split(' ')[0];
    
    loginScreen.style.display = 'none';
    mainContent.style.display = 'block';
    
    if (user.role === 'Владелец сайта') {
        showNotification('Добро пожаловать, создатель! 🎉 Ваш сайт выглядит премиально!');
    } else if (user.role === 'Учитель') {
        showNotification('Здравствуйте, Лариса Кадыровна! 👩‍🏫 Добро пожаловать!');
    } else {
        showNotification(`Добро пожаловать, ${user.name.split(' ')[0]}! ✨ Наслаждайтесь эксклюзивным контентом`);
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
        zoom: 15,
        controls: ['zoomControl', 'fullscreenControl']
    }, {
        searchControlProvider: 'yandex#search'
    });

    // Добавляем метку
    const placemark = new ymaps.Placemark(place.coords, {
        balloonContent: `
            <div style="padding: 10px;">
                <h3 style="margin: 0 0 8px 0; color: #333;">${placeName}</h3>
                <p style="margin: 0; color: #666;">${place.description}</p>
                <p style="margin: 8px 0 0 0; color: #888;">${place.address}</p>
            </div>
        `
    }, {
        preset: 'islands#redDotIcon'
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

// Закрытие модального окна при клике вне его
mapModal.addEventListener('click', (e) => {
    if (e.target === mapModal) {
        hideMap();
    }
});

// Закрытие модального окна по ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mapModal.classList.contains('show')) {
        hideMap();
    }
});

// Обработчики для кнопок действий
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('action-btn') || 
        e.target.closest('.action-btn')) {
        const btn = e.target.classList.contains('action-btn') ? e.target : e.target.closest('.action-btn');
        const card = btn.closest('.place-card');
        const placeName = card.querySelector('.card-title').textContent;
        
        if (btn.classList.contains('primary')) {
            showNotification('Функция бронирования скоро будет доступна! 📅');
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
