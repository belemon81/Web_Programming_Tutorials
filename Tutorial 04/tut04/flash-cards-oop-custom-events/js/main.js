const cardContainer = document.querySelector('#flashcard-container');
const statusBar = document.querySelector('#status-bar');
const btnPrev = statusBar.querySelector('#prev');
const btnNext = statusBar.querySelector('#next');

function populateCards(cardContainer) {
    const cards = [];
    for (const word in KOREAN) {
        const definition = KOREAN[word];
        const flashcard = new FlashCard(word, definition);
        const box = flashcard.createCard();
        cardContainer.appendChild(box);
        cards.push(box);
    }
    return cards;
}

const cards = populateCards(cardContainer);
const statusNoWords = statusBar.querySelector('span'); 
statusNoWords.textContent = cards.length; 
const statusCurrentIndex = statusBar.querySelector('strong');

const navbar = new NavBar(statusCurrentIndex, statusNoWords, btnPrev, btnNext);
const app = new App(cards, navbar);
app.setIndex(0);
app.onKeyDown();