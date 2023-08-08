const cardContainer = document.querySelector('#flashcard-container');
const statusBar = document.querySelector('#status-bar');
const btnPrev = statusBar.querySelector('#prev');
const btnNext = statusBar.querySelector('#next');

// Task 1: flip word/ definition
function flipCard(event) {
    const box = event.currentTarget;
    const word = box.querySelector('.word');
    const def = box.querySelector('.definition');
    word.classList.toggle('hidden');
    def.classList.toggle('hidden');
}

// Task 2: populate data
function createCard(word, definition) {
    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard-box');
    flashcard.classList.add('hidden');
    flashcard.innerHTML = '<div class="flashcard word">' + word + '</div><div class="flashcard definition hidden">' + definition + '</div>';
    flashcard.addEventListener('click', flipCard);
    return flashcard;
}

function populateCards(cardContainer) {
    const cards = [];
    for (const word in KOREAN) {
        const def = KOREAN[word];
        const flashcard = createCard(word, def);
        cardContainer.appendChild(flashcard);
        cards.push(flashcard);
    }
    return cards;
}

const cards = populateCards(cardContainer);

const statusNoWords = statusBar.querySelector('span');

// Task 3: mouse events - navigation
const statusCurrentIndex = statusBar.querySelector('strong');

statusNoWords.textContent = cards.length;
// on start: show first word 

let currentIndex = 0;

function setIndex(index) {
    // check if valid index
    if (index >= 0 && index < statusNoWords.textContent) {
        // hide current card 
        cards[currentIndex].classList.add('hidden');
        // show card at index
        cards[index].classList.remove('hidden');
        // disable/ enable navigating buttons
        btnPrev.disabled = false;
        btnNext.disabled = false;
        if (index == 0) {
            btnPrev.disabled = true;
        }
        if (index == statusNoWords.textContent - 1) {
            btnNext.disabled = true;
        }

        currentIndex = index;
        statusCurrentIndex.textContent = index + 1;
    }
}

setIndex(0);

function prevCard() {
    setIndex(currentIndex - 1);
}

function nextCard() {
    setIndex(currentIndex + 1);
}


// Task 4: keyboard events - navigation
function onKeyDown(event) {
    btnPrev.addEventListener('click', prevCard);
    btnNext.addEventListener('click', nextCard);
}

onKeyDown();