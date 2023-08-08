const cardContainer = document.querySelector('#flashcard-container');
const statusBarContainer = document.querySelector('#status-bar');

function onJsObject(jsObject) {
    const words = jsObject;
    const app = new App(cardContainer, statusBarContainer, words);
}

//dynamic data
function onResponse(response) {
    // response body stream -> json string
    // convert json string -> JS object 
    return response.json().then(onJsObject);
}

function onFail(error) {
    console.log(error);
}

fetch("https://wpr-quiz-api.herokuapp.com/words/").then(onResponse).then(onFail);
// query dns -> ip address
// connect cp -> ip address
// send http message
// http response


//const app = new App(cardContainer, statusBarContainer, WORDS);