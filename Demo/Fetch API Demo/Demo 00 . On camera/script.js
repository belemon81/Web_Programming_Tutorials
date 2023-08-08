const video = document.querySelector('video');

function onCameraOpen(stream) {
  video.srcObject = stream;
}
function onError(error) {
  console.log(error);
}

// use callbacks -> deprecated
// navigator.getUserMedia({ video: true }).then(onCameraOpen, onError);

// return Promise
navigator.mediaDevices.getUserMedia({ video: true }).then(onCameraOpen, onError);
