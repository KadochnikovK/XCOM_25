function setEqualHeight() {

    const speakers = document.querySelector('.speakers');
    const place = document.querySelector('.place');
    const programScrollWrapper = document.querySelector('.program-scroll-wrapper');

    if (speakers && programScrollWrapper) {
        const speakersHeight = speakers.offsetHeight;
        const placesHeight = place.offsetHeight;
        programScrollWrapper.style.maxHeight = (speakersHeight + placesHeight) + 'px';
    }
}


window.addEventListener('load', setEqualHeight);
window.addEventListener('resize', setEqualHeight);