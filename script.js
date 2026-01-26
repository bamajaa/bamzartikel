function hitungKonversi() {
    let f = document.getElementById("input-fahrenheit").value;
    let c = (f - 32) * 5 / 9;
    document.getElementById("hasil-konversi").innerHTML = "Hasil: " + c.toFixed(2) + " °C";
}

let listItems = document.querySelectorAll("#daftar-siswa-list li");

function filterGenap() {
    listItems.forEach((item, index) => {
        if ((index + 1) % 2 === 0) {
            item.style.color = "#ffffff";
            item.style.background = "#0b07fc";
        } else {
            item.style.color = "black";
            item.style.background = "#d0ff00";
        }
    });
}

function filterGanjil() {
    listItems.forEach((item, index) => {
        if ((index + 1) % 2 !== 0) {
            item.style.color = "#ffffff";
            item.style.background = "#ff00ff";
        } else {
            item.style.color = "black";
            item.style.background = "#d0ff00";
        }
    });
}

function filterSemua() {
    listItems.forEach((item) => {
        item.style.color = "black";
        item.style.background = "#d0ff00";
    });
}

function jalankanJam() {
    const now = new Date();
    let h = String(now.getHours()).padStart(2, '0');
    let m = String(now.getMinutes()).padStart(2, '0');
    let s = String(now.getSeconds()).padStart(2, '0');

    const clockElement = document.getElementById("text-jam");
    const container = document.getElementById("box-jam-digital");
    
    if(clockElement) {
        clockElement.innerText = `${h}:${m}:${s}`;
        container.className = (parseInt(s) % 2 !== 0) ? "border-biru" : "border-merah";
    }
}

setInterval(jalankanJam, 1000);
jalankanJam();