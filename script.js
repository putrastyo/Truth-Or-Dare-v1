function result(){
    const load = setInterval(function(){
        random();
    }, 50)

    const hitung = document.getElementById("hitung");
    a = 4;
    
    let countDown = setInterval(function(){
        hitung.innerHTML = `${a}`;
        --a;
    }, 1000)

    setTimeout(function(){
        clearInterval(load);
        clearInterval(countDown);
    }, 5000)

    const cd = document.getElementById("countDown");
    cd.style.opacity = "1";
}

function resultDare(){
    const loadDare = setInterval(function(){
        randomDare();
    }, 50)

    const hitung = document.getElementById("hitung");
    a = 4;
    
    let countDown = setInterval(function(){
        hitung.innerHTML = `${a}`;
        --a;
    }, 1000)

    setTimeout(function(){
        clearInterval(loadDare);
        clearInterval(countDown);
    }, 5000)

    const cd = document.getElementById("countDown");
    cd.style.opacity = "1";
}

// DARE
function randomDare(){
    const pertanyaan = ["PERAGAKAN SUATU HEWAN DAN BIARKAN TEMANMU MENJAWAB!",
                        "NYANYIKAN LAGU BALONKU TAPI SEMUA HURUF VOKALNYA DIGANTI MENJADI 'I'.",
                        "BERIKAN SATU PANTUN",
                        "JOGET PARGOY 5 DETIK",
                        "PLANK 15 DETIK SAMBIL NYANYI BEBAS", //ganti
                        "PERAGAKAN SATU EMOT FREE FIRE",
                        "JOGET KEJU 10 DETIK"];
    const soal = document.getElementById("soal");
    const result = randomArray(pertanyaan);
    soal.innerHTML = `${result}`;
}

// TRUTH
function random(){
    const pertanyaan = ["APA ALASAN KAMU MEMILIH SMKN 12?", 
                        "KALAU ADA JIN KASIH KAMU 3 PERMINTAAN, KAMU AKAN MINTA APA?",
                        "KARAKTER FIKSI MANA YANG INGIN KAMU NIKAHI?",
                        "KALAU KAMU DIBERI KEKUATAN DAPAT MENGHENTIKAN WAKTU, APA YANG AKAN KAMU LAKUKAN?",
                        "SEBUTIN HAL MEMALUKAN YANG PERNAH KAMU ALAMI DI SEKOLAH",
                        "KAPAN TERAKHIR KALI KAMU MENGOMPOL?",
                        "HAL APA YANG PENGEN BANGET KAMU RUBAH DARI DIRI SENDIRI?",
                        "FIRST IMPRESION KAMU TENTANG SMKN 12?",
                        "SIAPA ORANG YANG PALING SERING KAMU CHAT?",
                        "APA YANG MEMBUATMU SANGAT KETAKUTAN?"];
    const soal = document.getElementById("soal");
    const result = randomArray(pertanyaan);
    soal.innerHTML = `${result}`;
}

function berhentiAcak(){
    clearInterval(load);
}

function randomArray(arr){
    const randIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randIndex];

    return item;
}