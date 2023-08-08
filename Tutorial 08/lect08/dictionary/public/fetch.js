async function onSearch(event) {
    event.preventDefault();

    const input = document.querySelector('#word-input');
    const word = input.value.trim();
    const result = await fetch('/lookup/' + word);
    const json = await result.json();

    const results = document.querySelector('#results');
    const wordDisplay = results.querySelector('#word');
    const defDisplay = results.querySelector('#definition');

    const editForm = document.querySelector('#edit');
    const inputWord = editForm.querySelector('input');
    const textareaDefinition = editForm.querySelector('textarea');
    inputWord.value = json.word;
    textareaDefinition.value = json.definition;

    wordDisplay.textContent = json.word;
    defDisplay.textContent = json.definition;
    results.classList.remove('hidden');
}

const searchForm = document.querySelector('#search');
searchForm.addEventListener('submit', onSearch);

async function onSet(event) {
    event.preventDefault();

    const input = editForm.querySelector('input');
    const word = input.value.trim();
    
    const textarea = editForm.querySelector('textarea');
    const definition = textarea.value.trim();

    const response = await fetch('http://localhost:3000/set/'+word, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            definition: definition
        })
    });

    const json = await response.json();
    if (json.success) {
        alert('Set successfully!');
    }
}

const editForm = document.querySelector('#edit');
editForm.addEventListener('submit', onSet);

