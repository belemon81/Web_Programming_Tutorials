class App {
  constructor(presentContainer, titleContainer) {
    this.presentContainer = presentContainer;
    this.titleContainer = titleContainer;
    
    this.presents = [];
    this._fillPresentContainer = this._fillPresentContainer.bind(this);
    this.onPresentOpened = this.onPresentOpened.bind(this);
    this._fillPresentContainer();
    this.openedCount = 0;
  } 
  
  _fillPresentContainer() {
    for (const source of PRESENT_SOURCES) {
      const present = new Present(this.presentContainer, source, this);
      this.presents.push(present);
    }
  }
  
	onPresentOpened() {
    this.openedCount++;
    if (this.openedCount === this.presents.length) {
      this.titleContainer.textContent = 'Enjoy your presents!';
    }
  } 
}


