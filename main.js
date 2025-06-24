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

window.addEventListener('scroll', function() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  const uliComputer = document.getElementById('uli-computer');
  const uliComputerContainer = document.getElementById('uli-computer-container');
  const computerScreen = document.getElementById('computer-screen');

  if (scrollable - scrolled < 50) { // near bottom
    uliComputerContainer.classList.add('grow');
  } else {
    uliComputerContainer.classList.remove('grow');
  }
});
const showContactBtn = document.getElementById('show-contact-btn');
const contactModal = document.getElementById('contact-modal');
const closeContactModal = document.getElementById('close-contact-modal');

showContactBtn.addEventListener('click', function() {
    contactModal.classList.add('show');
});

closeContactModal.addEventListener('click', function() {
    contactModal.classList.remove('show');
});

// Optional: close modal when clicking outside the content
contactModal.addEventListener('click', function(e) {
    if (e.target === contactModal) {
        contactModal.classList.remove('show');
    }
});

  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      formStatus.textContent = "Sending...";

      const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      }).then(() => {
        formStatus.textContent = "Sent!";
        contactForm.reset();
      }).catch(() => {
        formStatus.textContent = "There was an error.";
      });
    });
  }
