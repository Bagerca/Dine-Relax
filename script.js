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

// Функция для показа уведомлений
function showNotification(message, type = 'success') {
    // Удаляем предыдущие уведомления
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);

    // Анимация появления
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Автоматическое скрытие
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Функция входа
function login() {
    const key = accessKeyInput.value.trim().toUpperCase();
    
    if (!key) {
        showNotification('Пожалуйста, введите ключ доступа', 'error');
        return;
    }

    // Показываем загрузку
    loginBtn.classList.add('loading');
    
    // Имитация задержки сети
    setTimeout(() => {
        const user = users[key];
        
        if (user) {
            // Показываем информацию о пользователе
            userAvatar.textContent = user.avatar;
            userName.textContent = user.name;
            userRole.textContent = user.role;
            userInfo.classList.add('show');
            
            // Дополнительная задержка для плавного перехода
            setTimeout(() => {
                // Обновляем приветствие
                welcomeName.textContent = user.name.split(' ')[0];
                
                // Переходим на главный экран
                loginScreen.classList.add('hidden');
                mainContent.classList.remove('hidden');
                
                // Показываем приветствие
                if (user.role === 'Владелец сайта') {
                    showNotification('Добро пожаловать, создатель! 🎉 Ваш сайт выглядит премиально!');
                } else if (user.role === 'Учитель') {
                    showNotification('Здравствуйте, Лариса Кадыровна! 👩‍🏫 Добро пожаловать!');
                } else {
                    showNotification(`Добро пожаловать, ${user.name.split(' ')[0]}! ✨ Наслаждайтесь эксклюзивным контентом`);
                }

                // Прокрутка к началу контента
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 800);
            
        } else {
            showNotification('Неверный ключ доступа', 'error');
            // Анимация тряски input
            accessKeyInput.style.animation = 'shake 0.5s';
            setTimeout(() => {
                accessKeyInput.style.animation = '';
            }, 500);
        }
        
        // Скрываем загрузку
        loginBtn.classList.remove('loading');
    }, 1200);
}

// Функция выхода
function logout() {
    mainContent.classList.add('hidden');
    loginScreen.classList.remove('hidden');
    
    // Сбрасываем форму
    accessKeyInput.value = '';
    userInfo.classList.remove('show');
    
    showNotification('Вы вышли из системы. Возвращайтесь скорее! 👋');
}

// Обработчики событий
loginBtn.addEventListener('click', login);

accessKeyInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        login();
    }
});

logoutBtn.addEventListener('click', logout);

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

// Фокусируем input при загрузке
window.addEventListener('load', () => {
    accessKeyInput.focus();
});

// Плавная прокрутка для индикатора
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.querySelector('.places-grid').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Анимация появления карточек при скролле
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

// Наблюдаем за карточками после загрузки контента
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const cards = document.querySelectorAll('.place-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
            observer.observe(card);
        });
    }, 100);
});

// Консольная информация для отладки
console.log('🌲 Премиум гид Сосновый Бор - Доступные ключи:');
console.log('⭐ Особые ключи:');
console.log('   B4G5R6T7 - Бебия Баграт (Владелец сайта)');
console.log('   L1A2R3I4 - Албаева Лариса Кадыровна (Учитель)');
console.log('');
console.log('🍽️ Доступные места: Веранда, Хева, Пхали Хинкали, Токио Сити, База отдыха Сосновый Бор');
