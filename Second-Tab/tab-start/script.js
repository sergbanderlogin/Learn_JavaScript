const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(onTabclick);

function onTabclick(item) {
    item.addEventListener('click', function () {

        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {

            tabsBtn.forEach(function (item) {
                item.classList.remove('active',);
            });

            tabsItems.forEach(function (item) {
                item.classList.remove('active',);
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');

        }
    });
};

document.querySelector('.tabs__nav-btn').click();

/*  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
/*  === Покрокове виконання коду ===  */

/*
// 1-й крок створюємо змінну tabsBtn
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
// 6-й крок створюємо змінну tabsBtn
const tabsItems = document.querySelectorAll('.tabs__item');


// 12-й крок для того щоб перший tab був активованим при завагтажені сторінки
// виносимо в окрему функцію та звертаємося до першого селектора button з класом .tabs__nav-btn у кінці коду функції
tabsBtn.forEach(onTabclick);


// 2-й крок створюємо обробник подій
tabsBtn.forEach(function onTabclick(item) {
    item.addEventListener('click', function () {

// 3-й крок присвоюємо змінній currentBtn значення item
        let currentBtn = item;

// 7-й крок у HTML додаємо data-атрибут селекторам button
// та звертаємося до цього атрибуту через змінну tabId
        let tabId = currentBtn.getAttribute('data-tab');

// 8-й крок  оголошуємо змінну currentTab через звернення до неї через селектор id
        let currentTab = document.querySelector(tabId);

// 11- й крок через умовний опереатор if прізначаємо класс active
// якщо  у поточного елемента currentBtn не присвоєно клас active
// та переносимо кроки 4-й, 5-й, 9-й та 10-й до оператора if
        if (!currentBtn.classList.contains('active')) {

            // 5-й крок видаляємо клас active у тих елементів tabsBtn яким цей клас було призначено при дії click
            tabsBtn.forEach(function (item) {
                item.classList.remove('active',);
            });

            // 10-й крок видаляємо клас active у тих елементів tabsItems яким цей клас було призначено при дії click
            tabsItems.forEach(function (item) {
                item.classList.remove('active',);
            });


// 4-й крок добавляємо currentBtn клас active
            currentBtn.classList.add('active');

// 9-й крок добавляємо currentTab клас active
            currentTab.classList.add('active');

        }
    });
});

// 13-й крок звертаємося до перщого елемента button з класом tabs__nav-btn
document.querySelector('.tabs__nav-btn').click();

*/
/*  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */