function isDesktop() {
    return !('ontouchstart' in window) && window.innerWidth > 768;
}

const catBtn = document.getElementById('cat-cursor-btn');
if (!isDesktop()) {
    catBtn.style.display = "none";
} else {
    catBtn.style.display = "block";
}

const catCursor = document.getElementById('cat-cursor');
let catActive = false;
const catMeow = new Audio('/Users/uliana.deshin/Documents/Programmingggg/portfolio-website/sounds/Cat-Meowing.mp3');

catBtn.addEventListener('click', () => {
    catActive = !catActive;
    catCursor.style.display = catActive ? 'block' : 'none';
    document.body.style.cursor = catActive ? 'none' : '';

    // Change button image based on state
    catBtn.src = catActive
        ? './images/cat-cursor-normal-btn_svg.svg'
        : './images/cat-cursor-btn_svg.svg';

    if (catActive) {
        catMeow.volume = 0.3;
        catMeow.currentTime = 0;
        catMeow.play();
    }
});

document.addEventListener('mousemove', (e) => {
    if (catActive) {
        catCursor.style.left = (e.clientX - 24) + 'px';
        catCursor.style.top = (e.clientY - 24) + 'px';
    }
});
