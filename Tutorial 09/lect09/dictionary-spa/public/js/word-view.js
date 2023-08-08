class WordView {
  constructor(containerElement, word) {
    this.containerElement = containerElement;
    this._onSearch(word);
  }

  async _onSearch(word) {
    const result = await fetch('/lookup/' + word);
    const json = await result.json();

    const wordTitle = document.querySelector('#word-view h1');
    const wordDisplay = document.querySelector('#wv-word');
    const defDisplay = document.querySelector('#wv-def');
    wordTitle.textContent = json.word;
    wordDisplay.textContent = json.word;
    defDisplay.textContent = json.definition;

    this.containerElement.classList.remove('hidden');
  }
}
