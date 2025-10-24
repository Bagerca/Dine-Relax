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
    'L1E2O3N4': { name: 'Леонтьева Елизавета', role: 'Ученик', avatar: 'ЕЛ' },
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
        coords: [59.900926, 29.085823],
        address: 'Солнечная ул., 12, Сосновый Бор',
        description: 'Кофейня Veranda — это уютное место с приятной атмосферой, где можно провести время за чашечкой кофе или какао, а также насладиться изысканными десертами, такими как чизкейк «Сан-Себастьян» или трайфл.',
        phone: '+7 (812) 219-15-92',
        workingHours: 'Пн-Чт: 10:00–20:00, Пт-Вс: 10:00–21:00',
        rating: 5.0,
        reviewsCount: 954,
        price: '$$',
        features: ['Еда навынос', 'Оплата картой', 'Wi-Fi'],
        social: 'vk.com/verandacoffee'
    },
    'Кафе «Радуга»': {
        coords: [59.906109, 29.088920],
        address: 'ул. Красных Фортов, 11, Сосновый Бор',
        description: 'Кафе «Радуга» — это уютное место, где можно провести любое мероприятие, будь то день рождения, свадьба или корпоратив.',
        phone: '+7 (81369) 4-26-15',
        workingHours: 'Пн-Вс: 10:00–15:00, 16:00–19:30',
        rating: 4.4,
        reviewsCount: 427,
        price: '$',
        features: ['Проведение банкетов', 'Оплата картой', 'Домашняя кухня'],
        social: 'vk.com/raduganiti',
        category: 'cafe'
    },
    'Ресторан «Мой Сосновый Бор»': {
        coords: [59.896870, 29.085613],
        address: 'Солнечная ул., 9, Сосновый Бор',
        description: 'Ресторан «Мой Сосновый Бор» — это место, где вы можете насладиться разнообразным меню, включающим блюда восточной, итальянской и русской кухни, а также уникальные авторские блюда.',
        phone: '+7 (921) 777-77-50',
        workingHours: 'Пн-Чт: 12:00–23:00, Пт-Сб: 12:00–00:00, Вс: 12:00–23:00',
        rating: 5.0,
        reviewsCount: 2008,
        price: '$$',
        features: ['Доставка еды', 'Еда навынос', 'Оплата картой', 'Wi-Fi'],
        social: 'vk.com/msb_rest'
    },
    'Ресторан «ПхалиХинкали»': {
        coords: [59.897274, 29.078944],
        address: 'Ленинградская ул., 46, Сосновый Бор',
        description: '«ПхалиХинкали» в Сосновом Бору — уютный ресторан грузинской кухни, где подают традиционные блюда, включая хинкали, которые готовят прямо на глазах у посетителей. Заведение делает акцент на гостеприимной атмосфере и радушии.',
        phone: '+7 (812) 219-38-36',
        workingHours: 'Пн-Чт: 12:00–23:00, Пт-Сб: 12:00–03:00, Вс: 12:00–23:00',
        rating: 4.7,
        reviewsCount: 1448,
        price: '$$',
        features: ['Доставка еды', 'Еда навынос', 'Оплата картой', 'Wi-Fi'],
        social: 'phali-hinkali.ru/sbr'
    },
    'Ресторан «Токио-Сити»': {
        coords: [59.900983, 29.085835],
        address: 'Солнечная ул., 12, ТРК Галактика, этаж 3, Сосновый Бор',
        description: '«Токио-City» — это ресторан, который предлагает своим гостям широкий выбор блюд, включая суши, роллы, лапшу и другие блюда японской кухни, а также блюда других кухонь, таких как итальянская, восточноевропейская и китайская.',
        phone: '+7 (812) 677-41-12',
        workingHours: 'Пн-Чт: 12:00–23:00, Пт-Сб: 12:00–01:00, Вс: 12:00–23:00',
        rating: 4.9,
        reviewsCount: 804,
        price: '$$$',
        features: ['Доставка еды', 'Еда навынос', 'Оплата картой'],
        social: 'tokyo-city.ru/spb/restaurants/sosnovyy-bor'
    },
    'Кафе «Багратион»': {
        coords: [59.912736, 29.095742],
        address: 'просп. Героев, 65А, Сосновый Бор',
        description: 'Кафе «Багратион» предлагает своим гостям блюда грузинской кухни, приготовленные по традиционным рецептам.',
        phone: '+7 (965) 752-22-82',
        workingHours: 'Пн-Вс: 11:00–23:00',
        rating: 4.4,
        reviewsCount: 820,
        price: '$$',
        features: ['Wi-Fi', 'Оплата картой', 'Грузинская кухня'],
        social: ''
    },
    'Ресторан «Дюны»': {
        coords: [59.888713, 29.071764],
        address: 'ул. Соколова, 19, Сосновый Бор',
        description: 'Ресторан «Дюны» — это уютное место с приглушенным светом, стильным интерьером и удобными сиденьями. Здесь играет приятная музыка, а официанты всегда готовы помочь с выбором блюд.',
        phone: '+7 (921) 888-88-35',
        workingHours: 'Пн-Пт: 08:00–12:00, 12:30–00:00, Сб-Вс: 08:00–12:00, 12:30–02:00',
        rating: 5.0,
        reviewsCount: 1936,
        price: '$$',
        features: ['Доставка еды', 'Еда навынос', 'Оплата картой', 'Wi-Fi'],
        social: 'vk.com/dune_rest'
    },
    'Кофейня «Мой Сосновый Бор»': {
        coords: [59.896753, 29.086056],
        address: 'Солнечная ул., 9, Сосновый Бор',
        description: 'Кофейня «Мой Сосновый Бор» — это уютное место с интересным интерьером, где можно поиграть в настольные игры, почитать книги и даже поиграть на фортепиано.',
        phone: '+7 (921) 882-40-02',
        workingHours: 'Пн-Пт: 09:00–22:00, Сб-Вс: 10:00–22:00',
        rating: 5.0,
        reviewsCount: 4469,
        price: '$',
        features: ['Доставка еды', 'Еда навынос', 'Оплата картой', 'Wi-Fi', 'Настольные игры'],
        social: 'vk.com/msb_coffee'
    },
    'Территория отдыха Hevaa': {
        coords: [59.894809, 29.059631],
        address: 'Устьинская ул., 11/2, Сосновый Бор',
        description: '«Территория отдыха Hevaa» — это база отдыха, расположенная на берегу Финского залива, в окружении соснового леса. Гостям предлагается проживание в номерах различных категорий, включая номера с антресольным этажом, сауной и балконом с видом на лес.',
        phone: '+7 (812) 220-15-22',
        workingHours: 'Круглосуточно',
        rating: 4.9,
        reviewsCount: 3595,
        price: '$$$',
        features: ['Оплата картой', 'Кафе', 'Wi-Fi', 'Проживание'],
        social: 'hevaa.ru'
    },
    'Кинотеатр «Современник»': {
        coords: [59.891682, 29.092144],
        address: 'Комсомольская ул., 17, Сосновый Бор',
        description: '«Современник» — кинотеатр в городе Сосновый Бор, открытый в 1969 году. Он расположен по адресу Комсомольская улица, 17. При кинотеатре работает суши-бар «КИН-НО», где также проходят караоке-вечеринки.',
        phone: 'Информация уточняется',
        workingHours: 'Пн-Вс: 11:00–00:00',
        rating: 4.1,
        reviewsCount: 1912,
        price: '$$',
        features: ['3D', 'Суши-бар', 'Караоке'],
        social: 'sovremennik.sbor.net'
    }
};

// Данные с изображениями для каждого заведения
const placeImages = {
    'Кофейня «Veranda»': [
        'https://avatars.mds.yandex.net/get-tycoon/1534598/2a0000017c75a99d855d166d202e6686dcd6/priority-headline-main-narrow',
        'https://avatars.mds.yandex.net/get-altay/13054604/2a00000190a77560adb2066c2b0ff460732b/XXXL',
        'https://avatars.mds.yandex.net/get-altay/5110793/2a0000017c7e9bdff287847bfb67a9c8e183/XXXL',
        'https://avatars.mds.yandex.net/get-altay/14014620/2a000001912c9dca1b4e62d778d484446b94/XXXL',
        'https://avatars.mds.yandex.net/get-altay/1871013/2a0000016ae686145185b5d052f875f30745/XXXL'
    ],
    'Кафе «Радуга»': [
        'https://avatars.mds.yandex.net/get-altay/4632172/2a000001792513542f0328995fc9e46cc2bb/XXXL',
        'https://avatars.mds.yandex.net/get-altay/15074774/2a000001957a1df4c69ac99198dfe504569f/XXXL',
        'https://avatars.mds.yandex.net/get-altay/14763372/2a000001946ec8fa77567ade32da2a9fa01c/XXXL',
        'https://avatars.mds.yandex.net/get-altay/6487610/2a00000182e3b9b0601c97e2a9aa13792ef6/XXXL'
    ],
    'Ресторан «Мой Сосновый Бор»': [
        'https://avatars.mds.yandex.net/get-altay/12721348/2a00000199cfaef5350356cb0a4ec5fa88be/XXXL',
        'https://avatars.mds.yandex.net/get-altay/998620/2a0000018775f4bb57efda432a2831e84184/XXXL',
        'https://avatars.mds.yandex.net/get-altay/4699294/2a0000018775f52c744048e818868536f8ed/XXXL',
        'https://avatars.mds.yandex.net/get-altay/758957/2a00000187760686b2d2b4b296e776d735e2/XXXL'
    ],
    'Ресторан «ПхалиХинкали»': [
        'https://avatars.mds.yandex.net/get-altay/13453452/2a0000018ec32f100640d3bdbf8ddc1b2ab6/XXXL',
        'https://avatars.mds.yandex.net/get-altay/16410529/2a00000198fb9e0849ce3b25daae741b1e97/XXXL',
        'https://avatars.mds.yandex.net/get-altay/10328405/2a0000018ec32f0fb983fd4ad170cac3d822/XXXL',
        'https://avatars.mds.yandex.net/get-altay/13220782/2a00000190b2387e80d7d6ad81da7f8b30ae/XXXL'
    ],
    'Ресторан «Токио-Сити»': [
        'https://avatars.mds.yandex.net/get-tycoon/15404746/2a00000195f0a7d36fcc576f9a78125aed3e/priority-headline-background',
        'https://avatars.mds.yandex.net/get-altay/15344725/2a00000199c0fa738d9f35d86cd7a25e64f3/XXXL',
        'https://avatars.mds.yandex.net/get-altay/14839591/2a00000194ccf273ce1efe353a73a9c7e15c/XXXL',
        'https://avatars.mds.yandex.net/get-altay/14007310/2a00000194eb176d06811ee14ceaaf14a265/XXXL'
    ],
    'Кафе «Багратион»': [
        'https://avatars.mds.yandex.net/get-altay/16136409/2a000001977465e2530b06b3fcf721c2637f/XXXL',
        'https://avatars.mds.yandex.net/get-altay/2433982/2a00000174923be0636f93d4200ecdc31bb1/XXXL',
        'https://avatars.mds.yandex.net/get-altay/4464784/2a00000179dc303341139a75ab6f8ee3480d/XXXL',
        'https://avatars.mds.yandex.net/get-altay/9776062/2a0000018ddc50a77be6230c58a74a3c7072/XXXL'
    ],
    'Ресторан «Дюны»': [
        'https://avatars.mds.yandex.net/get-altay/16542720/2a0000019726ab6728440479096ae33c74e5/XXXL',
        'https://avatars.mds.yandex.net/get-altay/15608211/2a00000198fbfe5e6b798ea1014f9c16b0a4/XXXL',
        'https://avatars.mds.yandex.net/get-altay/16465668/2a00000199a9f52de7d8b3992c314ea92f33/XXXL',
        'https://avatars.mds.yandex.net/get-altay/14306639/2a00000191a86262453581d0635980694d14/XXXL'
    ],
    'Кофейня «Мой Сосновый Бор»': [
        'https://avatars.mds.yandex.net/get-altay/1880508/2a0000016fe209c2e75924537280f6362df0/XXXL',
        'https://avatars.mds.yandex.net/get-altay/6057477/2a00000181a401d3c1633b8fdaae334863e5/XXXL',
        'https://avatars.mds.yandex.net/get-altay/1630630/2a0000016fe209d3c0b977c73585855774e4/XXXL',
        'https://avatars.mds.yandex.net/get-altay/2714499/2a000001736b6ac0fd678354ebee86e2052b/XXXL',
        'https://avatars.mds.yandex.net/get-altay/1870294/2a0000016fe20a04c0565e29038d4c800484/XXXL'
    ],
    'Территория отдыха Hevaa': [
        'https://avatars.mds.yandex.net/get-altay/14733519/2a00000197bfa80ed578c99379151bc2ca7a/XXXL',
        'https://avatars.mds.yandex.net/get-altay/16069310/2a00000197bfa8199fac692b343679f24b6e/XXXL',
        'https://avatars.mds.yandex.net/get-altay/16451941/2a00000197bfa735114ea017b6671d60043d/XXXL'
    ],
    'Кинотеатр «Современник»': [
        'https://avatars.mds.yandex.net/get-altay/14675612/2a00000195a89638d7e7895434baa82b9aaf/XXXL',
        'https://avatars.mds.yandex.net/get-altay/12820607/2a00000193af860633f20f0b932a3056b8d7/XXXL',
        'https://avatars.mds.yandex.net/get-altay/11203687/2a00000190264c7b66c2e7b9f64d7386f0ee/XXXL',
        'https://avatars.mds.yandex.net/get-altay/13286098/2a0000018f587149c6f26c27ad031e25bd5a/XXXL'
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

// Система голосования
let votingData = {};
let currentUserKey = '';

// ================== FIREBASE ФУНКЦИИ ==================

// Загрузка данных голосования из Firebase
function loadVotingDataFromFirebase() {
    try {
        console.log('🔄 Загрузка данных из Firebase...');
        const votesRef = window.db.ref('votes');
        votesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            console.log('📊 Данные получены из Firebase:', data);
            
            // ВАЖНО: Нормализуем структуру данных
            votingData = {};
            if (data && typeof data === 'object') {
                Object.keys(data).forEach(key => {
                    const userData = data[key];
                    if (userData && typeof userData === 'object') {
                        // Гарантируем, что votedFor всегда массив
                        votingData[key] = {
                            name: userData.name || 'Неизвестный',
                            role: userData.role || 'Ученик',
                            avatar: userData.avatar || '?',
                            votedFor: Array.isArray(userData.votedFor) ? userData.votedFor : []
                        };
                    }
                });
            }
            
            console.log('📈 votingData после нормализации:', votingData);
            renderVotingResults();
            updateVoteButtons();
        }, (error) => {
            console.error('❌ Ошибка загрузки из Firebase:', error);
            showNotification('Ошибка загрузки данных голосования', 'error');
        });
    } catch (error) {
        console.error('❌ Ошибка в loadVotingDataFromFirebase:', error);
    }
}

// Сохранение голоса в Firebase
function saveVoteToFirebase(userKey, voteData) {
    return new Promise((resolve) => {
        try {
            const updates = {};
            updates['votes/' + userKey] = voteData;
            
            console.log('💾 Сохраняем в Firebase:', updates);
            
            window.db.ref().update(updates)
                .then(() => {
                    console.log('✅ Успешно сохранено в Firebase');
                    resolve(true);
                })
                .catch((error) => {
                    console.error('❌ Ошибка сохранения в Firebase:', error);
                    showNotification('Ошибка сохранения голоса', 'error');
                    resolve(false);
                });
        } catch (error) {
            console.error('❌ Ошибка в saveVoteToFirebase:', error);
            resolve(false);
        }
    });
}

// Обновленная функция голосования
async function handleVote(placeName) {
    console.log('🗳️ Начало голосования за:', placeName, 'пользователь:', currentUserKey);
    
    if (!currentUserKey) {
        showNotification('Для голосования необходимо войти в систему', 'error');
        return;
    }
    
    const currentUser = users[currentUserKey];
    if (!currentUser) {
        showNotification('Ошибка: пользователь не найден', 'error');
        return;
    }
    
    try {
        // ГАРАНТИРУЕМ, что votedFor всегда массив
        const currentUserData = votingData[currentUserKey];
        const userVotes = currentUserData && Array.isArray(currentUserData.votedFor) 
            ? [...currentUserData.votedFor] 
            : [];
        
        const hasVoted = userVotes.includes(placeName);
        
        let newVotes;
        if (hasVoted) {
            // Убираем голос
            newVotes = userVotes.filter(place => place !== placeName);
            showNotification(`Голос за "${placeName}" отменен`, 'success');
        } else {
            // Добавляем голос
            newVotes = [...userVotes, placeName];
            showNotification(`Вы проголосовали за "${placeName}"! 👍`, 'success');
        }
        
        // Создаем объект для сохранения с гарантированной структурой
        const voteData = {
            name: currentUser.name,
            role: currentUser.role,
            avatar: currentUser.avatar,
            votedFor: newVotes
        };
        
        console.log('📝 Новые данные для сохранения:', voteData);
        
        // Сохраняем в Firebase
        const success = await saveVoteToFirebase(currentUserKey, voteData);
        
        if (success) {
            // Обновляем локальные данные
            votingData[currentUserKey] = voteData;
            console.log('🔄 Локальные данные обновлены:', votingData);
            
            // Принудительно обновляем UI
            renderVotingResults();
            updateVoteButtons();
        }
        
    } catch (error) {
        console.error('❌ Ошибка в handleVote:', error);
        showNotification('Ошибка при голосовании', 'error');
    }
}

// Обновленная инициализация системы голосования
function initVotingSystem() {
    console.log('🚀 Инициализация системы голосования...');
    console.log('🔑 currentUserKey при инициализации:', currentUserKey);
    votingData = {}; // Сбрасываем данные
    loadVotingDataFromFirebase(); // Загружаем заново
    setupVotingButtons();
    setupVotesSearch();
}

// ================== ОБНОВЛЕННАЯ ДИАГРАММА ==================

// Рендеринг диаграммы - ГОРИЗОНТАЛЬНАЯ ДИАГРАММА С НАЗВАНИЯМИ ВНУТРИ СТОЛБЦОВ
function renderChart() {
    const canvas = document.getElementById('votes-chart');
    if (!canvas) {
        console.log('❌ Canvas не найден');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    
    // Устанавливаем размеры canvas
    canvas.width = container.clientWidth;
    canvas.height = 400;
    
    // Очищаем canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    console.log('🎨 Рендерим горизонтальную диаграмму с votingData:', votingData);
    
    // Считаем голоса с защитой от ошибок
    const voteCounts = {};
    
    if (votingData && typeof votingData === 'object') {
        Object.values(votingData).forEach(user => {
            if (user && Array.isArray(user.votedFor)) {
                user.votedFor.forEach(place => {
                    if (place) {
                        voteCounts[place] = (voteCounts[place] || 0) + 1;
                    }
                });
            }
        });
    }
    
    console.log('📊 Результаты подсчета:', voteCounts);
    
    // Сортируем по количеству голосов (по убыванию)
    const sortedPlaces = Object.entries(voteCounts)
        .sort(([,a], [,b]) => b - a);
    
    // Обновляем общее количество голосов
    const totalVotes = Object.values(voteCounts).reduce((sum, count) => sum + count, 0);
    const totalVotesElement = document.getElementById('total-votes-count');
    if (totalVotesElement) {
        totalVotesElement.textContent = totalVotes;
    }
    
    if (sortedPlaces.length === 0) {
        // Показываем сообщение когда нет голосов
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary');
        ctx.font = '16px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('Пока нет голосов. Будьте первым!', canvas.width / 2, canvas.height / 2);
        return;
    }
    
    const maxVotes = Math.max(...Object.values(voteCounts));
    
    // Настройки для горизонтальной диаграммы
    const padding = { top: 60, right: 150, bottom: 60, left: 20 }; // Увеличили правый отступ
    const chartWidth = canvas.width - padding.left - padding.right;
    const chartHeight = canvas.height - padding.top - padding.bottom;
    const barHeight = 35;
    const barSpacing = 15;
    
    // Фон для всей диаграммы
    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Рисуем горизонтальные бары
    sortedPlaces.forEach(([place, votes], index) => {
        const y = padding.top + index * (barHeight + barSpacing);
        const barWidth = (votes / maxVotes) * chartWidth;
        
        // Градиент для бара
        const gradient = ctx.createLinearGradient(padding.left, y, padding.left + barWidth, y);
        gradient.addColorStop(0, '#ff6b35');
        gradient.addColorStop(1, '#ff8c5a');
        
        // Бар
        ctx.fillStyle = gradient;
        roundRect(ctx, padding.left, y, barWidth, barHeight, 8);
        
        // Тень
        ctx.shadowColor = 'rgba(255, 107, 53, 0.3)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 5;
        roundRect(ctx, padding.left, y, barWidth, barHeight, 8);
        ctx.shadowColor = 'transparent';
        
        // Название места ВНУТРИ бара (слева)
        const shortName = getShortPlaceName(place);
        ctx.fillStyle = 'white';
        ctx.font = 'bold 14px Inter';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        
        // Обрезаем название если слишком длинное
        let displayName = shortName;
        const maxNameWidth = barWidth - 120; // Оставляем место для процентов и голосов
        let textWidth = ctx.measureText(displayName).width;
        
        if (textWidth > maxNameWidth && barWidth > 150) {
            while (textWidth > maxNameWidth && displayName.length > 8) {
                displayName = displayName.substring(0, displayName.length - 1);
                textWidth = ctx.measureText(displayName + '...').width;
            }
            displayName = displayName + '...';
        }
        
        // Рисуем название только если бар достаточно широк
        if (barWidth > 100) {
            ctx.fillText(displayName, padding.left + 10, y + barHeight / 2);
        }
        
        // Процент голосов ВНУТРИ бара (справа) - только если есть место
        const percentage = totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : 0;
        ctx.fillStyle = 'white';
        ctx.font = 'bold 14px Inter';
        ctx.textAlign = 'right';
        
        // Позиционируем проценты внутри бара, если достаточно места
        if (barWidth > 150) {
            ctx.fillText(`${percentage}%`, padding.left + barWidth - 10, y + barHeight / 2);
        }
        
        // Количество голосов ВСЕГДА СПРАВА ОТ БАРА
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary');
        ctx.font = '12px Inter';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        
        // Позиция справа от бара + отступ
        const votesText = `${votes} голосов`;
        const votesX = padding.left + chartWidth + 10;
        
        ctx.fillText(votesText, votesX, y + barHeight / 2);
        
        // Если проценты не поместились внутри бара, показываем их справа
        if (barWidth <= 150) {
            ctx.fillStyle = 'white';
            ctx.font = 'bold 12px Inter';
            ctx.textAlign = 'left';
            ctx.fillText(`${percentage}%`, votesX, y + barHeight / 2 - 8);
            
            // Сдвигаем голоса ниже
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary');
            ctx.font = '12px Inter';
            ctx.fillText(votesText, votesX, y + barHeight / 2 + 8);
        }
    });
    
    // Ось X (количество голосов)
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border');
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left + chartWidth, padding.top);
    ctx.stroke();
    
    // Засечки на оси X
    for (let i = 0; i <= 5; i++) {
        const x = padding.left + (i / 5) * chartWidth;
        const value = Math.round((i / 5) * maxVotes);
        
        ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border');
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, padding.top - 5);
        ctx.lineTo(x, padding.top);
        ctx.stroke();
        
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary');
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText(value, x, padding.top - 8);
    }
    
    // Заголовок
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-primary');
    ctx.font = 'bold 16px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('Результаты голосования', canvas.width / 2, 30);
}

// Функция для получения короткого названия места (убираем "Кофейня", "Ресторан" и т.д.)
function getShortPlaceName(fullName) {
    // Убираем префиксы типа "Кофейня", "Ресторан", "Кафе-пекарня" и т.д.
    const prefixes = [
        'Кофейня',
        'Ресторан', 
        'Кафе-пекарня',
        'Гранд-кафе',
        'Гастробар',
        'Кинотеатр',
        'Кафе'
    ];
    
    let shortName = fullName;
    
    // Убираем кавычки «»
    shortName = shortName.replace(/«|»/g, '');
    
    // Убираем префиксы
    for (const prefix of prefixes) {
        if (shortName.startsWith(prefix)) {
            shortName = shortName.substring(prefix.length).trim();
            break;
        }
    }
    
    // Убираем лишние пробелы и возвращаем
    return shortName.trim() || fullName;
}

// Вспомогательная функция для скругленных прямоугольников
function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
}

// ================== СИСТЕМА УПРАВЛЕНИЯ КАРТОЧКАМИ ==================

// Инициализация управления карточками для владельца
function initCardManagement() {
    const currentUser = users[currentUserKey];
    if (currentUser && currentUser.role === 'Владелец сайта') {
        addManagementInterface();
        // Добавляем кнопки управления после загрузки DOM
        setTimeout(addManagementButtons, 1000);
    }
}

// Добавление интерфейса управления
function addManagementInterface() {
    // Добавляем кнопку управления в навбар
    const navbar = document.querySelector('.navbar');
    const manageBtn = document.createElement('button');
    manageBtn.className = 'logout-btn management-btn';
    manageBtn.innerHTML = '<i class="fas fa-plus"></i> Добавить место';
    manageBtn.style.marginLeft = '1rem';
    manageBtn.onclick = showAddPlaceModal;
    
    navbar.querySelector('.nav-user').appendChild(manageBtn);
}

// Функции управления карточками для владельца
function addManagementButtons() {
    const currentUser = users[currentUserKey];
    if (currentUser && currentUser.role === 'Владелец сайта') {
        // Добавляем кнопки управления на кастомные карточки
        document.querySelectorAll('.place-card').forEach(card => {
            const placeName = card.querySelector('.card-title').textContent;
            const placeData = placesData[placeName];
            
            if (placeData && placeData.isCustom) {
                // Добавляем кнопки управления
                const managementDiv = document.createElement('div');
                managementDiv.className = 'card-management';
                managementDiv.style.cssText = `
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    display: flex;
                    gap: 5px;
                    z-index: 20;
                `;
                
                const editBtn = document.createElement('button');
                editBtn.innerHTML = '<i class="fas fa-edit"></i>';
                editBtn.title = 'Редактировать';
                editBtn.style.cssText = `
                    background: var(--warning);
                    color: black;
                    border: none;
                    border-radius: 5px;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    font-size: 12px;
                `;
                editBtn.onclick = (e) => {
                    e.stopPropagation();
                    editPlace(placeName);
                };
                
                const deleteBtn = document.createElement('button');
                deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
                deleteBtn.title = 'Удалить';
                deleteBtn.style.cssText = `
                    background: var(--error);
                    color: white;
                    border: none;
                    border-radius: 5px;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    font-size: 12px;
                `;
                deleteBtn.onclick = (e) => {
                    e.stopPropagation();
                    deletePlace(placeName);
                };
                
                managementDiv.appendChild(editBtn);
                managementDiv.appendChild(deleteBtn);
                
                const cardHeader = card.querySelector('.card-header');
                cardHeader.style.position = 'relative';
                cardHeader.appendChild(managementDiv);
            }
        });
    }
}

// Редактирование места
function editPlace(placeName) {
    const placeData = placesData[placeName];
    if (!placeData) return;
    
    const modalHTML = `
        <div class="image-modal show" id="edit-place-modal">
            <div class="image-modal-content" style="max-width: 600px; max-height: 90vh; overflow-y: auto;">
                <button class="close-image-btn" onclick="hideEditPlaceModal()">
                    <i class="fas fa-times"></i>
                </button>
                <div style="padding: 2rem;">
                    <h2 style="font-family: 'Playfair Display', serif; margin-bottom: 1.5rem; text-align: center;">
                        Редактировать место
                    </h2>
                    
                    <div style="display: grid; gap: 1.5rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Название места *
                            </label>
                            <input type="text" id="edit-place-name" 
                                   style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                   value="${placeName}">
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Категория *
                            </label>
                            <select id="edit-place-category" 
                                    style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);">
                                <option value="coffee" ${placeData.category === 'coffee' ? 'selected' : ''}>Кофейня</option>
                                <option value="restaurant" ${placeData.category === 'restaurant' ? 'selected' : ''}>Ресторан</option>
                                <option value="cafe" ${placeData.category === 'cafe' ? 'selected' : ''}>Кафе</option>
                                <option value="bar" ${placeData.category === 'bar' ? 'selected' : ''}>Бар</option>
                                <option value="cinema" ${placeData.category === 'cinema' ? 'selected' : ''}>Кинотеатр</option>
                                <option value="other" ${!placeData.category ? 'selected' : ''}>Другое</option>
                            </select>
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Описание *
                            </label>
                            <textarea id="edit-place-description" rows="3"
                                      style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary); resize: vertical;"
                                      placeholder="Краткое описание заведения">${placeData.description}</textarea>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                    Телефон
                                </label>
                                <input type="text" id="edit-place-phone"
                                       style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                       value="${placeData.phone || ''}">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                    Ценовой диапазон
                                </label>
                                <select id="edit-place-price"
                                        style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);">
                                    <option value="$" ${placeData.price === '$' ? 'selected' : ''}>$ - Бюджетный</option>
                                    <option value="$$" ${placeData.price === '$$' ? 'selected' : ''}>$$ - Средний</option>
                                    <option value="$$$" ${placeData.price === '$$$' ? 'selected' : ''}>$$$ - Премиум</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Время работы
                            </label>
                            <input type="text" id="edit-place-hours"
                                   style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                   value="${placeData.workingHours || ''}">
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Адрес *
                            </label>
                            <input type="text" id="edit-place-address"
                                   style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                   value="${placeData.address}">
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                    Широта
                                </label>
                                <input type="number" step="any" id="edit-place-lat"
                                       style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                       value="${placeData.coords[0]}">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                    Долгота
                                </label>
                                <input type="number" step="any" id="edit-place-lng"
                                       style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                       value="${placeData.coords[1]}">
                            </div>
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Особенности (через запятую)
                            </label>
                            <input type="text" id="edit-place-features"
                                   style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                   value="${placeData.features ? placeData.features.join(', ') : ''}">
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Ссылка на соц. сеть или сайт
                            </label>
                            <input type="text" id="edit-place-social"
                                   style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                   value="${placeData.social || ''}">
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Рейтинг
                            </label>
                            <input type="number" step="0.1" min="0" max="5" id="edit-place-rating"
                                   style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                   value="${placeData.rating || 0}">
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Количество отзывов
                            </label>
                            <input type="number" id="edit-place-reviews"
                                   style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                   value="${placeData.reviewsCount || 0}">
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                        <button onclick="hideEditPlaceModal()" 
                                style="flex: 1; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: var(--text-primary); border-radius: 8px; cursor: pointer;">
                            Отмена
                        </button>
                        <button onclick="updatePlace('${placeName}')" 
                                style="flex: 1; padding: 1rem; background: var(--warning); border: none; color: white; border-radius: 8px; cursor: pointer; font-weight: 600;">
                            <i class="fas fa-save"></i> Сохранить изменения
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    document.body.style.overflow = 'hidden';
}

function hideEditPlaceModal() {
    const modal = document.getElementById('edit-place-modal');
    if (modal) {
        modal.remove();
    }
    document.body.style.overflow = 'auto';
}

async function updatePlace(oldPlaceName) {
    const name = document.getElementById('edit-place-name').value.trim();
    const category = document.getElementById('edit-place-category').value;
    const description = document.getElementById('edit-place-description').value.trim();
    const phone = document.getElementById('edit-place-phone').value.trim();
    const price = document.getElementById('edit-place-price').value;
    const hours = document.getElementById('edit-place-hours').value.trim();
    const address = document.getElementById('edit-place-address').value.trim();
    const lat = parseFloat(document.getElementById('edit-place-lat').value);
    const lng = parseFloat(document.getElementById('edit-place-lng').value);
    const features = document.getElementById('edit-place-features').value.split(',').map(f => f.trim()).filter(f => f);
    const social = document.getElementById('edit-place-social').value.trim();
    const rating = parseFloat(document.getElementById('edit-place-rating').value);
    const reviewsCount = parseInt(document.getElementById('edit-place-reviews').value);
    
    // Валидация
    if (!name || !description || !address) {
        showNotification('Заполните обязательные поля (название, описание, адрес)', 'error');
        return;
    }
    
    if (isNaN(lat) || isNaN(lng)) {
        showNotification('Введите корректные координаты', 'error');
        return;
    }
    
    try {
        // Находим ID места в Firebase
        const customPlacesRef = window.db.ref('customPlaces');
        const snapshot = await customPlacesRef.once('value');
        const customPlaces = snapshot.val();
        
        let placeId = null;
        Object.entries(customPlaces || {}).forEach(([id, place]) => {
            if (place.name === oldPlaceName) {
                placeId = id;
            }
        });
        
        if (!placeId) {
            showNotification('Не удалось найти место для редактирования', 'error');
            return;
        }
        
        // Обновляем объект места
        const updatedPlace = {
            name: name,
            category: category,
            description: description,
            phone: phone || 'Информация уточняется',
            price: price,
            workingHours: hours || 'Информация уточняется',
            address: address,
            coords: [lat, lng],
            features: features,
            social: social,
            rating: rating,
            reviewsCount: reviewsCount,
            isCustom: true
        };
        
        // Сохраняем в Firebase
        await savePlaceToFirebase(placeId, updatedPlace);
        
        // Обновляем локальные данные
        delete placesData[oldPlaceName];
        placesData[name] = updatedPlace;
        
        showNotification(`Место "${name}" успешно обновлено! ✨`, 'success');
        hideEditPlaceModal();
        
        // Перезагружаем страницу
        setTimeout(() => {
            location.reload();
        }, 1500);
        
    } catch (error) {
        console.error('Ошибка при обновлении места:', error);
        showNotification('Ошибка при обновлении места', 'error');
    }
}

// Удаление места
async function deletePlace(placeName) {
    if (!confirm(`Вы уверены, что хотите удалить "${placeName}"? Это действие нельзя отменить.`)) {
        return;
    }
    
    try {
        // Находим ID места в Firebase
        const customPlacesRef = window.db.ref('customPlaces');
        const snapshot = await customPlacesRef.once('value');
        const customPlaces = snapshot.val();
        
        let placeId = null;
        Object.entries(customPlaces || {}).forEach(([id, place]) => {
            if (place.name === placeName) {
                placeId = id;
            }
        });
        
        if (!placeId) {
            showNotification('Не удалось найти место для удаления', 'error');
            return;
        }
        
        // Удаляем из Firebase
        await window.db.ref('customPlaces/' + placeId).remove();
        await window.db.ref('customPlaceImages/' + placeId).remove();
        
        // Удаляем из локальных данных
        delete placesData[placeName];
        delete placeImages[placeName];
        
        showNotification(`Место "${placeName}" успешно удалено! 🗑️`, 'success');
        
        // Перезагружаем страницу
        setTimeout(() => {
            location.reload();
        }, 1500);
        
    } catch (error) {
        console.error('Ошибка при удалении места:', error);
        showNotification('Ошибка при удалении места', 'error');
    }
}

// Показать модальное окно добавления места
function showAddPlaceModal() {
    const modalHTML = `
        <div class="image-modal show" id="add-place-modal">
            <div class="image-modal-content" style="max-width: 600px; max-height: 90vh; overflow-y: auto;">
                <button class="close-image-btn" onclick="hideAddPlaceModal()">
                    <i class="fas fa-times"></i>
                </button>
                <div style="padding: 2rem;">
                    <h2 style="font-family: 'Playfair Display', serif; margin-bottom: 1.5rem; text-align: center;">
                        Добавить новое место
                    </h2>
                    
                    <div style="display: grid; gap: 1.5rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Название места *
                            </label>
                            <input type="text" id="new-place-name" 
                                   style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                   placeholder="Например: Кофейня «Название»">
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Категория *
                            </label>
                            <select id="new-place-category" 
                                    style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);">
                                <option value="coffee">Кофейня</option>
                                <option value="restaurant">Ресторан</option>
                                <option value="cafe">Кафе</option>
                                <option value="bar">Бар/Гастропаб</option>
                                <option value="cinema">Кинотеатр</option>
                                <option value="other">Другое</option>
                            </select>
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Описание *
                            </label>
                            <textarea id="new-place-description" rows="3"
                                      style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary); resize: vertical;"
                                      placeholder="Краткое описание заведения"></textarea>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                    Телефон
                                </label>
                                <input type="text" id="new-place-phone"
                                       style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                       placeholder="+7 (XXX) XXX-XX-XX">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                    Ценовой диапазон
                                </label>
                                <select id="new-place-price"
                                        style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);">
                                    <option value="$">$ - Бюджетный</option>
                                    <option value="$$" selected>$$ - Средний</option>
                                    <option value="$$$">$$$ - Премиум</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Время работы
                            </label>
                            <input type="text" id="new-place-hours"
                                   style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                   placeholder="Пн-Пт: 10:00-22:00, Сб-Вс: 11:00-23:00">
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Адрес *
                            </label>
                            <input type="text" id="new-place-address"
                                   style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                   placeholder="Улица, дом">
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                    Широта
                                </label>
                                <input type="number" step="any" id="new-place-lat"
                                       style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                       placeholder="59.880945" value="59.880945">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                    Долгота
                                </label>
                                <input type="number" step="any" id="new-place-lng"
                                       style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                       placeholder="29.112260" value="29.112260">
                            </div>
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Особенности (через запятую)
                            </label>
                            <input type="text" id="new-place-features"
                                   style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                   placeholder="Wi-Fi, Парковка, Терраса">
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Ссылка на соц. сеть или сайт
                            </label>
                            <input type="text" id="new-place-social"
                                   style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);"
                                   placeholder="vk.com/username или site.ru">
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 500;">
                                Ссылки на фото (каждая с новой строки)
                            </label>
                            <textarea id="new-place-images" rows="3"
                                      style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary); resize: vertical;"
                                      placeholder="https://example.com/photo1.jpg\nhttps://example.com/photo2.jpg"></textarea>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                        <button onclick="hideAddPlaceModal()" 
                                style="flex: 1; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: var(--text-primary); border-radius: 8px; cursor: pointer;">
                            Отмена
                        </button>
                        <button onclick="addNewPlace()" 
                                style="flex: 1; padding: 1rem; background: var(--success); border: none; color: white; border-radius: 8px; cursor: pointer; font-weight: 600;">
                            <i class="fas fa-plus"></i> Добавить место
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    document.body.style.overflow = 'hidden';
    
    // Фокус на первом поле
    setTimeout(() => {
        document.getElementById('new-place-name').focus();
    }, 100);
}

// Скрыть модальное окно добавления места
function hideAddPlaceModal() {
    const modal = document.getElementById('add-place-modal');
    if (modal) {
        modal.remove();
    }
    document.body.style.overflow = 'auto';
}

// Добавить новое место
async function addNewPlace() {
    const name = document.getElementById('new-place-name').value.trim();
    const category = document.getElementById('new-place-category').value;
    const description = document.getElementById('new-place-description').value.trim();
    const phone = document.getElementById('new-place-phone').value.trim();
    const price = document.getElementById('new-place-price').value;
    const hours = document.getElementById('new-place-hours').value.trim();
    const address = document.getElementById('new-place-address').value.trim();
    const lat = parseFloat(document.getElementById('new-place-lat').value);
    const lng = parseFloat(document.getElementById('new-place-lng').value);
    const features = document.getElementById('new-place-features').value.split(',').map(f => f.trim()).filter(f => f);
    const social = document.getElementById('new-place-social').value.trim();
    const images = document.getElementById('new-place-images').value.split('\n').map(url => url.trim()).filter(url => url);
    
    // Валидация
    if (!name || !description || !address) {
        showNotification('Заполните обязательные поля (название, описание, адрес)', 'error');
        return;
    }
    
    if (isNaN(lat) || isNaN(lng)) {
        showNotification('Введите корректные координаты', 'error');
        return;
    }
    
    try {
        // Создаем объект места
        const newPlace = {
            name: name,
            category: category,
            description: description,
            phone: phone || 'Информация уточняется',
            price: price,
            workingHours: hours || 'Информация уточняется',
            address: address,
            coords: [lat, lng],
            features: features,
            social: social,
            rating: 0,
            reviewsCount: 0,
            isCustom: true // Помечаем как кастомное
        };
        
        // Сохраняем в Firebase
        const placeId = 'custom_' + Date.now();
        await savePlaceToFirebase(placeId, newPlace);
        
        // Сохраняем изображения если есть
        if (images.length > 0) {
            await savePlaceImagesToFirebase(placeId, images);
        }
        
        showNotification(`Место "${name}" успешно добавлено! 🎉`, 'success');
        hideAddPlaceModal();
        
        // Перезагружаем страницу чтобы показать новое место
        setTimeout(() => {
            location.reload();
        }, 2000);
        
    } catch (error) {
        console.error('Ошибка при добавлении места:', error);
        showNotification('Ошибка при добавлении места', 'error');
    }
}

// Сохранить место в Firebase
function savePlaceToFirebase(placeId, placeData) {
    return new Promise((resolve, reject) => {
        const updates = {};
        updates['customPlaces/' + placeId] = placeData;
        
        window.db.ref().update(updates)
            .then(() => resolve(true))
            .catch(error => reject(error));
    });
}

// Сохранить изображения места в Firebase
function savePlaceImagesToFirebase(placeId, images) {
    return new Promise((resolve, reject) => {
        const updates = {};
        updates['customPlaceImages/' + placeId] = images;
        
        window.db.ref().update(updates)
            .then(() => resolve(true))
            .catch(error => reject(error));
    });
}

// Загрузка кастомных мест из Firebase
function loadCustomPlaces() {
    return new Promise((resolve) => {
        const customPlacesRef = window.db.ref('customPlaces');
        customPlacesRef.once('value')
            .then(snapshot => {
                const data = snapshot.val();
                if (data) {
                    // Добавляем кастомные места в общий список
                    Object.entries(data).forEach(([id, place]) => {
                        placesData[place.name] = {
                            ...place,
                            isCustom: true
                        };
                    });
                    console.log('✅ Загружены кастомные места:', data);
                }
                resolve();
            })
            .catch(error => {
                console.error('❌ Ошибка загрузки кастомных мест:', error);
                resolve();
            });
    });
}

// Загрузка кастомных изображений из Firebase
function loadCustomPlaceImages() {
    return new Promise((resolve) => {
        const customImagesRef = window.db.ref('customPlaceImages');
        customImagesRef.once('value')
            .then(snapshot => {
                const data = snapshot.val();
                if (data) {
                    Object.entries(data).forEach(([id, images]) => {
                        // Находим название места по ID (нужно сопоставить)
                        const placeEntry = Object.entries(placesData).find(([name, place]) => 
                            place.isCustom && id.includes('custom_')
                        );
                        if (placeEntry) {
                            placeImages[placeEntry[0]] = images;
                        }
                    });
                    console.log('✅ Загружены кастомные изображения:', data);
                }
                resolve();
            })
            .catch(error => {
                console.error('❌ Ошибка загрузки кастомных изображений:', error);
                resolve();
            });
    });
}

// ================== ОСНОВНЫЕ ФУНКЦИИ ==================

// Проверяем, авторизован ли пользователь при загрузке
window.addEventListener('load', () => {
    console.log('🔄 Загрузка страницы...');
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        const user = JSON.parse(savedUser);
        console.log('💾 Сохраненный пользователь:', user);
        showMainContent(user);
    } else {
        console.log('👋 Пользователь не авторизован');
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
    // Специальное приветствие для Надьярной Елизаветы
    if (user.key === 'E9L0I1Z2') {
        return 'Спящая Красавица';
    } else if (user.role === 'Учитель') {
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
    console.log('🔑 Пользователь вошел:', user);
    
    const displayName = formatDisplayName(user);
    welcomeName.textContent = displayName;
    
    // Сохраняем ключ пользователя
    if (users[user.key]) {
        currentUserKey = user.key;
        console.log('✅ currentUserKey установлен из user.key:', currentUserKey);
    } else {
        // Находим ключ по имени (fallback)
        const userEntry = Object.entries(users).find(([key, u]) => u.name === user.name && u.role === user.role);
        if (userEntry) {
            currentUserKey = userEntry[0];
            user.key = currentUserKey; // сохраняем ключ в объекте пользователя
            console.log('🔍 currentUserKey найден по имени:', currentUserKey);
        } else {
            console.warn('⚠️ Не удалось найти ключ пользователя');
        }
    }
    
    console.log('🔐 Текущий ключ пользователя:', currentUserKey);
    console.log('👤 Данные пользователя:', users[currentUserKey]);
    
    loginScreen.style.display = 'none';
    mainContent.style.display = 'block';
    
    // Специальные приветствия
    if (user.key === 'E9L0I1Z2') {
        showNotification('Добро пожаловать, Спящая Красавица! 💫 Проснись и голосуй за любимые места!');
    } else if (user.role === 'Владелец сайта') {
        showNotification('Добро пожаловать, создатель! 🎉 Ваш сайт выглядит премиально!');
    } else if (user.role === 'Учитель') {
        showNotification('Здравствуйте, Лариса Кадыровна! 👩‍🏫 Добро пожаловать!');
    } else {
        showNotification(`Добро пожаловать, ${displayName}! ✨ Теперь вы можете голосовать за любимые места`);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(initCardAnimations, 500);
    
    // Инициализируем систему голосования
    setTimeout(() => {
        initVotingSystem();
        updateVoteButtons();
        setupVotesSearch();
    }, 1000);
    
    // Загружаем кастомные места и изображения
    setTimeout(async () => {
        await loadCustomPlaces();
        await loadCustomPlaceImages();
        
        // Перерисовываем карточки если нужно
        if (Object.keys(placesData).length > 7) { // Если есть кастомные места
            // Можно добавить логику для перерисовки карточек
            console.log('🔄 Обновляем интерфейс с учетом кастомных мест');
        }
        
        // Инициализируем управление карточками для владельца
        initCardManagement();
    }, 1500);
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
            
            // Сохраняем ключ в объекте пользователя
            user.key = key;
            
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

// СИСТЕМА ГОЛОСОВАНИЯ

// Настройка кнопок голосования
function setupVotingButtons() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('vote-btn') || e.target.closest('.vote-btn')) {
            const btn = e.target.classList.contains('vote-btn') ? e.target : e.target.closest('.vote-btn');
            const card = btn.closest('.place-card');
            const placeName = card.querySelector('.card-title').textContent;
            
            handleVote(placeName);
        }
        
        if (e.target.classList.contains('change-vote-btn') || e.target.closest('.change-vote-btn')) {
            showVotingModal();
        }
    });
}

// Обновление кнопок голосования
function updateVoteButtons() {
    const voteButtons = document.querySelectorAll('.vote-btn');
    
    // ГАРАНТИРУЕМ безопасный доступ к данным
    const currentUserData = votingData[currentUserKey];
    const currentUserVotes = currentUserData && Array.isArray(currentUserData.votedFor) 
        ? currentUserData.votedFor 
        : [];
    
    console.log('🔄 Обновление кнопок для пользователя:', currentUserKey, 'голоса:', currentUserVotes);
    
    voteButtons.forEach(btn => {
        const card = btn.closest('.place-card');
        const placeName = card.querySelector('.card-title').textContent;
        const hasVoted = currentUserVotes.includes(placeName);
        
        if (hasVoted) {
            btn.classList.add('voted');
            btn.innerHTML = '<i class="fas fa-check"></i> Ваш выбор';
        } else {
            btn.classList.remove('voted');
            btn.innerHTML = '<i class="fas fa-vote-yea"></i> Голосовать';
        }
    });
}

// Рендеринг результатов голосования
function renderVotingResults() {
    console.log('🎯 Рендеринг результатов голосования...');
    renderChart();
    renderVotesList();
}

// Рендеринг списка голосов
function renderVotesList() {
    const container = document.getElementById('votes-list');
    if (!container) {
        console.log('❌ Контейнер списка голосов не найден');
        return;
    }
    
    const searchTerm = document.getElementById('votes-search')?.value.toLowerCase() || '';
    
    let filteredUsers = votingData ? Object.entries(votingData) : [];
    
    // Фильтрация по поиску
    if (searchTerm) {
        filteredUsers = filteredUsers.filter(([key, user]) => {
            if (!user) return false;
            const userName = user.name || '';
            const userVotes = Array.isArray(user.votedFor) ? user.votedFor : [];
            return userName.toLowerCase().includes(searchTerm) ||
                   userVotes.some(place => place && place.toLowerCase().includes(searchTerm));
        });
    }
    
    console.log('👥 Рендерим список голосов:', filteredUsers);
    
    if (filteredUsers.length === 0) {
        container.innerHTML = `
            <div class="no-votes" style="text-align: center; padding: 2rem; color: var(--text-muted);">
                <i class="fas fa-users" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>${searchTerm ? 'Ничего не найдено' : 'Пока никто не проголосовал'}</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredUsers.map(([key, user]) => {
        if (!user) return '';
        
        const userVotes = Array.isArray(user.votedFor) ? user.votedFor : [];
        
        return `
            <div class="vote-item">
                <div class="voter-avatar">${user.avatar || '?'}</div>
                <div class="voter-info">
                    <div class="voter-name">${user.name || 'Неизвестный'}</div>
                    <div class="voter-role">${user.role || 'Ученик'}</div>
                    ${userVotes.length > 0 ? `
                        <div class="vote-selection">
                            ${userVotes.map(place => `
                                <span class="voted-place">
                                    <i class="fas fa-map-marker-alt"></i>
                                    ${place}
                                </span>
                            `).join('')}
                        </div>
                    ` : '<div class="vote-selection" style="color: var(--text-muted); font-size: 0.9rem;">Ещё не голосовал</div>'}
                </div>
                ${key === currentUserKey ? `
                    <div class="vote-actions">
                        <button class="change-vote-btn">
                            <i class="fas fa-edit"></i>
                            Изменить
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

// Модальное окно для изменения голосов
function showVotingModal() {
    // ГАРАНТИРУЕМ безопасный доступ к данным
    const currentUserData = votingData[currentUserKey];
    const currentUserVotes = currentUserData && Array.isArray(currentUserData.votedFor) 
        ? currentUserData.votedFor 
        : [];
    
    let modalHTML = `
        <div class="image-modal show" id="voting-modal">
            <div class="image-modal-content" style="max-width: 600px;">
                <button class="close-image-btn" onclick="hideVotingModal()">
                    <i class="fas fa-times"></i>
                </button>
                <div style="padding: 2rem;">
                    <h2 style="font-family: 'Playfair Display', serif; margin-bottom: 1.5rem; text-align: center;">
                        Ваши голоса
                    </h2>
                    <div style="margin-bottom: 2rem; color: var(--text-secondary); text-align: center;">
                        Выберите заведения, которые вам нравятся
                    </div>
                    <div class="voting-options" style="display: grid; gap: 1rem; max-height: 400px; overflow-y: auto;">
    `;
    
    Object.keys(placesData).forEach(placeName => {
        const isVoted = currentUserVotes.includes(placeName);
        modalHTML += `
            <div class="voting-option" style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid ${isVoted ? 'var(--accent)' : 'var(--border)'};">
                <label style="display: flex; align-items: center; gap: 1rem; cursor: pointer; flex: 1;">
                    <input type="checkbox" ${isVoted ? 'checked' : ''} value="${placeName}" 
                           style="accent-color: var(--accent); transform: scale(1.2);">
                    <span style="color: var(--text-primary); font-weight: 500;">${placeName}</span>
                </label>
            </div>
        `;
    });
    
    modalHTML += `
                    </div>
                    <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                        <button onclick="hideVotingModal()" style="flex: 1; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: var(--text-primary); border-radius: 8px; cursor: pointer;">
                            Отмена
                        </button>
                        <button onclick="saveVotesFromModal()" style="flex: 1; padding: 1rem; background: var(--gradient-primary); border: none; color: white; border-radius: 8px; cursor: pointer; font-weight: 600;">
                            Сохранить выбор
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Добавляем модальное окно в body
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    document.body.style.overflow = 'hidden';
}

function hideVotingModal() {
    const modal = document.getElementById('voting-modal');
    if (modal) {
        modal.remove();
    }
    document.body.style.overflow = 'auto';
}

function saveVotesFromModal() {
    const checkboxes = document.querySelectorAll('.voting-option input[type="checkbox"]:checked');
    const selectedPlaces = Array.from(checkboxes).map(cb => cb.value);
    
    if (!votingData[currentUserKey]) {
        const currentUser = users[currentUserKey];
        votingData[currentUserKey] = {
            name: currentUser.name,
            role: currentUser.role,
            avatar: currentUser.avatar,
            votedFor: []
        };
    }
    
    votingData[currentUserKey].votedFor = selectedPlaces;
    
    // Сохраняем в Firebase
    saveVoteToFirebase(currentUserKey, votingData[currentUserKey]);
    hideVotingModal();
    showNotification('Ваши голоса сохранены! 🗳️', 'success');
}

// Функция для сброса всех голосов (используйте осторожно!)
function resetAllVotes() {
    if (confirm('⚠️ Вы уверены, что хотите сбросить ВСЕ голосования? Это действие нельзя отменить!')) {
        const updates = {};
        Object.keys(users).forEach(key => {
            updates['votes/' + key] = {
                name: users[key].name,
                role: users[key].role,
                avatar: users[key].avatar,
                votedFor: []
            };
        });
        
        window.db.ref().update(updates)
            .then(() => {
                showNotification('Все голосования сброшены! 🔄', 'success');
                setTimeout(() => location.reload(), 1500);
            })
            .catch(error => {
                console.error('❌ Ошибка сброса:', error);
                showNotification('Ошибка при сбросе голосований', 'error');
            });
    }
}

// Поиск в списке голосов
function setupVotesSearch() {
    const searchInput = document.getElementById('votes-search');
    if (searchInput) {
        searchInput.addEventListener('input', renderVotesList);
    }
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
        
        // Закрытие модального окна голосования
        const votingModal = document.getElementById('voting-modal');
        if (votingModal) {
            hideVotingModal();
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

// Показ уведомления о новом голосовании
window.addEventListener('storage', (e) => {
    if (e.key === 'sborVotingData') {
        showNotification('Результаты голосования обновлены! 🔄', 'success');
        loadVotingDataFromFirebase();
        renderVotingResults();
        updateVoteButtons();
    }
});

// Консольная информация для отладки
console.log('🌲 Премиум гид Сосновый Бор - Доступные ключи:');
console.log('⭐ Особые ключи:');
console.log('   B4G5R6T7 - Бебия Баграт (Владелец сайта)');
console.log('   L1A2R3I4 - Албаева Лариса Кадыровна (Учитель)');
console.log('   E9L0I1Z2 - Надьярная Елизавета (Спящая Красавица)');
console.log('');
console.log('🏪 Доступные места на карте:');
Object.keys(placesData).forEach(place => {
    console.log(`   📍 ${place} - ${placesData[place].address}`);
});
console.log('');
console.log('🗳️ Система голосования с Firebase активирована!');
console.log('Доступные команды:');
console.log('   - showVotingModal() - открыть окно выбора голосов');
console.log('   - renderVotingResults() - перерисовать результаты');
console.log('   - resetAllVotes() - сбросить все голосования (осторожно!)');
console.log('   - debugUserInfo() - отладочная информация');

// Функция для отладки информации о пользователе
function debugUserInfo() {
    console.log('🔍 Отладочная информация:');
    console.log('   currentUserKey:', currentUserKey);
    console.log('   votingData[currentUserKey]:', votingData[currentUserKey]);
    console.log('   localStorage currentUser:', localStorage.getItem('currentUser'));
}
