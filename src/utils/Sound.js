
function loadAudio() {
    const base64audio = getBase64Audio();
    const blob = audioToBlob(base64audio);
    return getBlobUrl(blob);
}

function getBase64Audio() {
    //Ask user to choose audio file

    //Convert audio file into base64 string
}

function audioToBlob(base64audio) {
    return new Blob([base64audio], {type : 'audio/ogg'});
}

function getBlobUrl(blob) {
    return URL.createObjectURL(blob);
}

export { loadAudio }