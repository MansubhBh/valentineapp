// ====================
// Floating Hearts Animation
// ====================

function createFloatingHeart() {
    const heartsContainer = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';

    // Random horizontal position
    heart.style.left = Math.random() * 100 + '%';

    // Random animation duration for variation
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';

    // Random delay for staggered effect
    heart.style.animationDelay = Math.random() * 2 + 's';

    heartsContainer.appendChild(heart);

    // Remove heart after animation completes to prevent memory leak
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Create hearts continuously
function startFloatingHearts() {
    // Create initial batch of hearts
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 500);
    }

    // Continue creating hearts every 2 seconds
    setInterval(() => {
        createFloatingHeart();
    }, 2000);
}

// Start hearts on page load
startFloatingHearts();


// ====================
// Scroll Fade-In Animation
// ====================

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections
const memoriesSection = document.getElementById('memories-section');
const messageSection = document.getElementById('message-section');
const questionSection = document.getElementById('question-section');

if (memoriesSection) observer.observe(memoriesSection);
if (messageSection) observer.observe(messageSection);
if (questionSection) observer.observe(questionSection);


// ====================
// YES/NO Button Interactions
// ====================

const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const finalMessage = document.getElementById('final-message');

// YES Button - Trigger confetti and show final message
yesButton.addEventListener('click', () => {
    // Trigger confetti celebration
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const colors = ['#ff69b4', '#ff1493', '#ff6eb4', '#ffc0cb', '#ff4757'];

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    // Show final message with animation
    setTimeout(() => {
        finalMessage.classList.remove('hidden-section');
        finalMessage.classList.add('show-section');

        // Scroll to final message smoothly
        finalMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 500);

    // Disable buttons after YES is clicked
    yesButton.disabled = true;
    noButton.disabled = true;
    yesButton.classList.add('opacity-50', 'cursor-not-allowed');
    noButton.classList.add('opacity-50', 'cursor-not-allowed');
});

// NO Button - Playfully move away on hover (makes it nearly impossible to click)
noButton.addEventListener('mouseenter', () => {
    moveNoButton();
});

// Also move on mouse move near the button for extra difficulty
noButton.addEventListener('mousemove', () => {
    moveNoButton();
});

// For mobile - handle touch events
noButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Function to move the NO button to a random position
function moveNoButton() {
    const container = noButton.parentElement;
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate maximum movement range
    const maxX = Math.min(300, viewportWidth * 0.3);
    const maxY = Math.min(200, viewportHeight * 0.2);

    // Generate random position (much larger range)
    const randomX = (Math.random() - 0.5) * maxX * 2;
    const randomY = (Math.random() - 0.5) * maxY * 2;

    // Apply transform
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;

    // Add a slight rotation for fun
    const randomRotation = (Math.random() - 0.5) * 20;
    noButton.style.transform += ` rotate(${randomRotation}deg)`;
}

// Prevent clicking the NO button (just in case they manage to click it)
noButton.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();

    // Optional: Make YES button pulse to draw attention
    yesButton.style.animation = 'pulse 0.5s ease-in-out';
    setTimeout(() => {
        yesButton.style.animation = '';
    }, 500);
});


// ====================
// Typing Animation for Love Message
// ====================

function typeMessage() {
    const messageElement = document.querySelector('#message-section p');
    const fullText = messageElement.textContent;
    messageElement.textContent = '';

    let charIndex = 0;

    function type() {
        if (charIndex < fullText.length) {
            messageElement.textContent += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(type, 15);
        } else {
            // Typing animation completed - now show the question section
            setTimeout(() => {
                const questionSection = document.getElementById('question-section');
                questionSection.classList.remove('hidden-section');
                questionSection.classList.add('show-section');
            }, 500); // Small delay after typing completes
        }
    }

    // Start typing when message section is visible
    const messageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                type();
                messageObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    messageObserver.observe(messageSection);
}

// Initialize typing animation
typeMessage();


// ====================
// Optional: Background Music (Commented Out)
// ====================

/*
// Uncomment this section if you add background music
const audio = new Audio('assets/music/romantic-song.mp3');
audio.loop = true;
audio.volume = 0.3;

// Create a music toggle button
const musicButton = document.createElement('button');
musicButton.innerHTML = '🔇';
musicButton.className = 'fixed bottom-4 right-4 bg-rose-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-rose-600 transition';

let isPlaying = false;

musicButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicButton.innerHTML = '🔇';
        isPlaying = false;
    } else {
        audio.play();
        musicButton.innerHTML = '🔊';
        isPlaying = true;
    }
});

document.body.appendChild(musicButton);
*/
