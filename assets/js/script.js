// Простой скрипт для позиционирования точек
function positionDots() {
    const wrapper = document.querySelector('.program-scroll-wrapper');
    const items = document.querySelectorAll('.program__item');

    if (!wrapper) return;

    const wrapperLeft = wrapper.getBoundingClientRect().left;

    items.forEach(item => {
        const dot = item.querySelector('._dot');
        if (!dot) return;

        const itemTop = item.getBoundingClientRect().top;
        const itemHeight = item.offsetHeight;

        dot.style.position = 'fixed';
        dot.style.left = (wrapperLeft - 12) + 'px';
        dot.style.top = (itemTop + itemHeight / 2) + 'px';
    });
}

// Добавляем точки в HTML
document.querySelectorAll('.program__item').forEach(item => {
    const dot = document.createElement('span');
    dot.className = '_dot';
    dot.style.cssText = 'position:fixed;width:8px;height:8px;border-radius:50%;background:white;';
    document.body.appendChild(dot);
    item._dot = dot;
});

// Обновляем при скролле и resize
window.addEventListener('scroll', positionDots);
window.addEventListener('resize', positionDots);
positionDots();