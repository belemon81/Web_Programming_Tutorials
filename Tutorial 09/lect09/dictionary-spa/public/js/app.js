class App {
  constructor() {
    const urlPathString = window.location.pathname;
    const parts = urlPathString.split('/');
    if (parts.length > 1 && parts[1].length > 0) {
      const word = parts[1];
      this._showWordView(word);
    } else {
      this._showSearchView();
    }
  }

  _showSearchView() {
    const viewContainer = document.querySelector('#main-view');
    const searchView = new SearchView(viewContainer);
  }

  _showWordView(word) {
    const viewContainer = document.querySelector('#word-view');
    const wordView = new WordView(viewContainer, word);
  }
}
