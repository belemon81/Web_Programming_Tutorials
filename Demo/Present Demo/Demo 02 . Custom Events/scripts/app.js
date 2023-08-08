class App {
    constructor(presentContainer, titleContainer) {
      this.presentContainer = presentContainer;
      this.titleContainer = titleContainer;
      
      this.presents = [];
      this._fillPresentContainer = this._fillPresentContainer.bind(this);
      this._onPresentOpened = this._onPresentOpened.bind(this);
      this._fillPresentContainer();
      
      this.openedCount = 0;
      
      document.addEventListener('present-opened', this._onPresentOpened);
    } 
    
    _fillPresentContainer() {
      for (const source of PRESENT_SOURCES) {
        const present = new Present(this.presentContainer, source);
        this.presents.push(present);
      }
    }
    
    _onPresentOpened() {
      this.openedCount++;
      if (this.openedCount === this.presents.length) {
        this.titleContainer.textContent = 'Enjoy your presents!';
      }
    } 
  }
  
  
  