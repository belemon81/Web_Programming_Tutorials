class App {
    constructor(flashcards, nav) {
        this.flashcards = flashcards;
        this.nav = nav;
        this.currentIndex = 0;

        this.setIndex = this.setIndex.bind(this);
        this.prevCard = this.prevCard.bind(this);
        this.nextCard = this.nextCard.bind(this); 
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    setIndex(index) {
        if (index >= 0 && index < this.nav.statusNoWords.textContent) {
            this.flashcards[this.currentIndex].classList.add('hidden');
            this.flashcards[index].classList.remove('hidden');
            this.nav.btnPrev.disabled = false;
            this.nav.btnNext.disabled = false;
            if (index == 0) {
                this.nav.btnPrev.disabled = true;
            }
            if (index == this.nav.statusNoWords.textContent - 1) {
                this.nav.btnNext.disabled = true;
            }
            this.currentIndex = index;
            this.nav.statusCurrentIndex.textContent = index + 1;
        }
    }

    prevCard() { 
        this.setIndex(this.currentIndex - 1);
    }

    nextCard() {
        this.setIndex(this.currentIndex + 1);
    }

    onKeyDown() { 
        this.nav.btnPrev.addEventListener('click', this.prevCard);
        this.nav.btnNext.addEventListener('click', this.nextCard);
    }
}