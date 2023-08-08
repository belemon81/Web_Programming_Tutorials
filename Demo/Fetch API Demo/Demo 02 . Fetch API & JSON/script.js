function onJsonReady(json) {
    console.log(json);
    console.log(json.albums);
}
function onResponse(response) {
    return response.json();
}
fetch('images.json').then(onResponse).then(onJsonReady);