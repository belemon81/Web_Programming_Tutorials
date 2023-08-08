const cardContainer = document.querySelector('#flashcard-container');
const statusBarContainer = document.querySelector('#status-bar');

async function main() {
    const response = await fetch("http://localhost:3000/words/");
    const words = await response.json();
    const app = new App(cardContainer, statusBarContainer, words); 
}
main();