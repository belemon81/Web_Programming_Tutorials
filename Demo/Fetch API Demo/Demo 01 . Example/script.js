function onStreamProcessed(text) {
    const urls = text.split('\n');
    for (const url of urls) {
        const image = document.createElement('img');
        image.src = url;
        document.body.append(image);
    }
    console.log(urls);
}
function onResponse(response) {
    console.log(response.status);
    response.text().then(onStreamProcessed);
}
function onError(error) {
    console.log('Error: ' + error);
}
fetch('images.txt').then(onResponse, onError);