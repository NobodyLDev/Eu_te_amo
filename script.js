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
function atualizarContador() {
    const dataInicio = new Date("2022-02-12T00:00:00");
    const agora = new Date();
    const diff = agora - dataInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("contador").textContent =
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador(); // chama ao carregar a página