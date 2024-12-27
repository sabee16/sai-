// DOM Elements
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const moonYesBtn = document.getElementById('moon-yes');
const moonNoBtn = document.getElementById('moon-no');
const finalBtn = document.getElementById('final-btn');

const popup1 = document.getElementById('popup1');
const popup2 = document.getElementById('popup2');
const popup3 = document.getElementById('popup3');
const popup4 = document.getElementById('popup4');
const popup5 = document.getElementById('popup5');

const textReveal = document.getElementById('new-year-text');
const animationContainer = document.getElementById('hearts-chocolates');

const finalMessage = "Happy New Year, Blessy! I'm so blessed to have you. You mean everything to me, darling. I want to start this year with you and hope our bond stays unbreakable forever. You make me so happy, and I’m grateful to have you in my life. Love you endlessly! 💖🍫🍫🍫";

// Function to create floating emojis
function createFloatingEmoji(type) {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.textContent = type === 'heart' ? '❤️' : '🍫';
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.bottom = '0px';
  animationContainer.appendChild(emoji);

  // Remove emoji after animation
  setTimeout(() => {
    animationContainer.removeChild(emoji);
  }, 1500);
}

// Trigger continuous floating emojis
function startEmojiAnimation() {
  const emojiInterval = setInterval(() => {
    createFloatingEmoji('heart');
    createFloatingEmoji('chocolate');
  }, 300);

  // Stop creating emojis after 10 seconds
  setTimeout(() => {
    clearInterval(emojiInterval);
  }, 10000);
}

// Yes Button Logic
yesBtn.addEventListener('click', () => {
  popup1.style.display = 'block';
  startEmojiAnimation();
});

// No Button Logic
noBtn.addEventListener('click', () => {
  alert('Please click Yes!');
  startEmojiAnimation();
});

// Moon Popup Logic
moonYesBtn.addEventListener('click', () => {
  popup1.style.display = 'none';
  popup2.style.display = 'block';
  startEmojiAnimation();
});

moonNoBtn.addEventListener('click', () => {
  alert('Please click Yes!');
});

// Final Button Logic
finalBtn.addEventListener('click', () => {
  popup2.style.display = 'none';
  popup3.style.display = 'block';
  revealText(finalMessage, textReveal);
  startEmojiAnimation();

  // Show the next popup after text animation
  setTimeout(() => {
    popup3.style.display = 'none';
    popup4.style.display = 'block';
  }, finalMessage.length * 63); // Wait for the text animation to finish
});

// Text Reveal Function
function revealText(message, element) {
  let i = 0;
  element.textContent = ''; // Clear previous content
  const interval = setInterval(() => {
    if (i < message.length) {
      element.textContent += message[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, 50); // Adjust speed as needed
}

// Ice Cream Question Logic
const chocolateBtn = document.getElementById('chocolate-btn');
const vanillaBtn = document.getElementById('vanilla-btn');

chocolateBtn.addEventListener('click', () => {
  alert("I'm sad 😔");
  popup4.style.display = 'none';
  popup5.style.display = 'block';
});

vanillaBtn.addEventListener('click', () => {
  alert("Aww, baby! You understand me better! 🥰");
  popup4.style.display = 'none';
  popup5.style.display = 'block';
});

// Favorite Person Question Logic
const blessBtn = document.getElementById('bless-btn');
const noBlessBtn = document.getElementById('no-bless-btn');

blessBtn.addEventListener('click', () => {
  alert("Aww, I knew it! You're the best! ❤️");
});

noBlessBtn.addEventListener('click', () => {
  alert("Please click bleesy button! 😅");
});
