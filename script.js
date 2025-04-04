const audio = document.getElementById("audio");

function togglePlay() {
    if (audio.paused) {
        audio.play();
        console.log("Reproduzindo...");
    } else {
        audio.pause();
        console.log("Pausado...");
    }
}

function rewind() {
    audio.currentTime -= 10; 
    console.log("Retrocedendo 10s");
}

function forward() {
    audio.currentTime += 10;
    console.log("Avançando 10s");
}

function setVolume(value) {
    audio.volume = value;
    console.log("Volume:", value);
}
