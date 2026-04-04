
const buttons = document.querySelectorAll('.button');
const formBlock = document.querySelector('.information__item[data-title="Регистрация"]') ||
    document.querySelector('.more__item.before-lg .information__item');


buttons.forEach(button => {
    if (button.textContent.trim() === 'Зарегистрироваться') {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            if (formBlock) {
                formBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
});