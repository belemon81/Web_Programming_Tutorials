class FlashCard {
    constructor(word, definition) { 
        const wordBox = document.createElement('div');
        const defBox = document.createElement('div');
        wordBox.classList.add('flashcard');wordBox.classList.add('word');
        wordBox.textContent = word;
        defBox.classList.add('flashcard');defBox.classList.add('definition');defBox.classList.add('hidden');
        defBox.textContent = definition;
        this.word = wordBox;
        this.definition = defBox;
        this._flipCard = this._flipCard.bind(this);
        this.createCard = this.createCard.bind(this);
    }  
    _flipCard() {
        this.word.classList.toggle('hidden');
        this.definition.classList.toggle('hidden');
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('flashcard-box');
        card.classList.add('hidden');
        card.append(this.word); 
        card.append(this.definition); 
        card.addEventListener('click', this._flipCard);
        return card;
    }
}