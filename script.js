/* =========================================================
   GAME POS-POSAN / JURIT MALAM EDUKATIF
   FINAL VERSION
   ---------------------------------------------------------
   Pos 1 - 7  : JALUR BENAR
   Pos 8 - 10 : JALUR SALAH / BUNTU
   Timer buntu: 5 menit
   ========================================================= */


/* =========================================================
   KONFIGURASI GAME
   ========================================================= */

const GAME_CONFIG = {
    totalPos: 10,
    posBenarTerakhir: 7,
    waktuBuntu: 5 * 60 * 1000, // 5 menit
    storageKey: "posposan_game_final_v1"
};


/* =========================================================
   DATA POS
   =========================================================
   routeCorrect = pos tujuan jika jawaban benar
   routeWrong   = pos tujuan jika jawaban salah

   secretCode = kode rahasia yang harus ditemukan peserta
   ========================================================= */

const POS_DATA = {

    1: {
        nomor: 1,
        nama: "Pos 1",
        tipe: "awal",
        gambar: "assets/pos1.jpg",

        pesan:
            "Selamat datang di permainan! " +
            "Baca petunjuk dengan teliti dan temukan kode rahasia.",

        kodeRahasia: "MELATI",

        soal: {
            pertanyaan:
                "Kalimat yang digunakan untuk menyampaikan informasi disebut ...",

            pilihan: [
                "Kalimat berita",
                "Kalimat tanya",
                "Kalimat perintah",
                "Kalimat seru"
            ],

            jawaban: 0
        },

        routeCorrect: 2,
        routeWrong: 8
    },


    2: {
        nomor: 2,
        nama: "Pos 2",
        tipe: "benar",
        gambar: "assets/pos2.jpg",

        pesan:
            "Kamu berhasil menemukan Pos 2. " +
            "Cari petunjuk dan jangan sampai salah jalur.",

        kodeRahasia: "GARUDA",

        soal: {
            pertanyaan:
                "Manakah yang merupakan kalimat tanya?",

            pilihan: [
                "Tolong tutup pintu itu!",
                "Siapa ketua kelompokmu?",
                "Mereka belajar di kelas.",
                "Jangan berlari!"
            ],

            jawaban: 1
        },

        routeCorrect: 3,
        routeWrong: 8
    },


    3: {
        nomor: 3,
        nama: "Pos 3",
        tipe: "benar",
        gambar: "assets/pos3.jpg",

        pesan:
            "Bagus! Kamu berada di jalur yang benar. " +
            "Perhatikan setiap pesan yang ditemukan.",

        kodeRahasia: "NUSANTARA",

        soal: {
            pertanyaan:
                "Kalimat 'Tutup pintu itu!' termasuk kalimat ...",

            pilihan: [
                "Berita",
                "Tanya",
                "Perintah",
                "Penjelas"
            ],

            jawaban: 2
        },

        routeCorrect: 4,
        routeWrong: 9
    },


    4: {
        nomor: 4,
        nama: "Pos 4",
        tipe: "benar",
        gambar: "assets/pos4.jpg",

        pesan:
            "Kamu semakin dekat dengan tujuan. " +
            "Kerja sama kelompok sangat diperlukan.",

        kodeRahasia: "PANDU",

        soal: {
            pertanyaan:
                "Kalimat yang mengungkapkan perasaan kuat biasanya disebut ...",

            pilihan: [
                "Kalimat berita",
                "Kalimat seru",
                "Kalimat tanya",
                "Kalimat pasif"
            ],

            jawaban: 1
        },

        routeCorrect: 5,
        routeWrong: 9
    },


    5: {
        nomor: 5,
        nama: "Pos 5",
        tipe: "benar",
        gambar: "assets/pos5.jpg",

        pesan:
            "Hebat! Jalurmu masih benar. " +
            "Jangan lupa mencatat kode rahasia yang ditemukan.",

        kodeRahasia: "SEMANGAT",

        soal: {
            pertanyaan:
                "Dalam sebuah paragraf, kalimat yang menjadi pokok pembahasan disebut ...",

            pilihan: [
                "Kalimat utama",
                "Kalimat penjelas",
                "Kalimat tanya",
                "Kalimat seru"
            ],

            jawaban: 0
        },

        routeCorrect: 6,
        routeWrong: 10
    },


    6: {
        nomor: 6,
        nama: "Pos 6",
        tipe: "benar",
        gambar: "assets/pos6.jpg",

        pesan:
            "Tinggal satu langkah lagi menuju Pos terakhir. " +
            "Tetap teliti!",

        kodeRahasia: "MERDEKA",

        soal: {
            pertanyaan:
                "Fungsi utama kalimat penjelas dalam paragraf adalah ...",

            pilihan: [
                "Menjelaskan kalimat utama",
                "Menggantikan judul",
                "Mengakhiri semua paragraf",
                "Menjadi salam pembuka"
            ],

            jawaban: 0
        },

        routeCorrect: 7,
        routeWrong: 10
    },


    7: {
        nomor: 7,
        nama: "Pos 7",
        tipe: "finish",
        gambar: "assets/pos7.jpg",

        pesan:
            "SELAMAT! Kamu telah menyelesaikan jalur utama " +
            "dan berhasil mencapai Pos 7.",

        kodeRahasia: "JUARA",

        soal: {
            pertanyaan:
                "Paragraf yang baik harus memiliki hubungan antarkalimat yang ...",

            pilihan: [
                "Tidak beraturan",
                "Saling berkaitan",
                "Berbeda topik",
                "Tidak berhubungan"
            ],

            jawaban: 1
        },

        routeCorrect: null,
        routeWrong: 10
    },


    /* =====================================================
       POS BUNTU
       ===================================================== */

    8: {
        nomor: 8,
        nama: "Pos Buntu 8",
        tipe: "buntu",
        gambar: "assets/pos8.jpg",

        pesan:
            "JALUR SALAH! " +
            "Tidak ada pesan lanjutan di sini. " +
            "Temukan petunjuk yang mungkin tersembunyi, " +
            "tetapi waktu kalian hanya 5 menit.",

        kodeRahasia: "BUNTU8",

        soal: null,

        routeCorrect: null,
        routeWrong: 1
    },


    9: {
        nomor: 9,
        nama: "Pos Buntu 9",
        tipe: "buntu",
        gambar: "assets/pos9.jpg",

        pesan:
            "JALUR SALAH! " +
            "Kalian masuk ke jalan yang tidak memiliki pesan berikutnya. " +
            "Waktu pencarian hanya 5 menit.",

        kodeRahasia: "BUNTU9",

        soal: null,

        routeCorrect: null,
        routeWrong: 1
    },


    10: {
        nomor: 10,
        nama: "Pos Buntu 10",
        tipe: "buntu",
        gambar: "assets/pos10.jpg",

        pesan:
            "JALUR SALAH! " +
            "Tidak ditemukan pesan lanjutan. " +
            "Segera kembali setelah waktu habis.",

        kodeRahasia: "BUNTU10",

        soal: null,

        routeCorrect: null,
        routeWrong: 1
    }

};


/* =========================================================
   STATE PERMAINAN
   ========================================================= */

let gameState = {
    started: false,

    ketua: "",
    anggota: [],

    currentPos: 1,

    kodeDitemukan: [],

    posDikunjungi: [],

    jawabanBenar: 0,
    jawabanSalah: 0,

    selesai: false,

    waktuBuntuMulai: null,

    riwayat: []
};


/* =========================================================
   TIMER
   ========================================================= */

let timerInterval = null;


/* =========================================================
   HELPER DOM
   ========================================================= */

function getElement(id) {
    return document.getElementById(id);
}


/* =========================================================
   SIMPAN GAME
   ========================================================= */

function saveGame() {

    try {

        localStorage.setItem(
            GAME_CONFIG.storageKey,
            JSON.stringify(gameState)
        );

    } catch (error) {

        console.error(
            "Gagal menyimpan permainan:",
            error
        );

    }
}


/* =========================================================
   MUAT GAME
   ========================================================= */

function loadGame() {

    try {

        const saved = localStorage.getItem(
            GAME_CONFIG.storageKey
        );

        if (!saved) {
            return false;
        }

        const parsed = JSON.parse(saved);

        if (!parsed) {
            return false;
        }

        gameState = {
            ...gameState,
            ...parsed
        };

        return true;

    } catch (error) {

        console.error(
            "Gagal memuat permainan:",
            error
        );

        return false;
    }
}


/* =========================================================
   HAPUS GAME
   ========================================================= */

function resetGame() {

    clearBuntuTimer();

    localStorage.removeItem(
        GAME_CONFIG.storageKey
    );

    gameState = {
        started: false,

        ketua: "",
        anggota: [],

        currentPos: 1,

        kodeDitemukan: [],

        posDikunjungi: [],

        jawabanBenar: 0,
        jawabanSalah: 0,

        selesai: false,

        waktuBuntuMulai: null,

        riwayat: []
    };

    location.reload();
}


/* =========================================================
   START GAME
   ========================================================= */

function startGame() {

    const ketuaInput =
        getElement("ketua");

    const ketua =
        ketuaInput
            ? ketuaInput.value.trim()
            : "";

    if (!ketua) {

        showMessage(
            "Nama ketua harus diisi.",
            "error"
        );

        return;
    }


    const anggota = [];

    for (let i = 1; i <= 5; i++) {

        const input =
            getElement(`anggota${i}`);

        if (input) {

            const nama =
                input.value.trim();

            if (!nama) {

                showMessage(
                    `Nama anggota ${i} harus diisi.`,
                    "error"
                );

                return;
            }

            anggota.push(nama);
        }
    }


    gameState.started = true;

    gameState.ketua = ketua;

    gameState.anggota = anggota;

    gameState.currentPos = 1;

    gameState.kodeDitemukan = [];

    gameState.posDikunjungi = [];

    gameState.jawabanBenar = 0;

    gameState.jawabanSalah = 0;

    gameState.selesai = false;

    gameState.waktuBuntuMulai = null;

    gameState.riwayat = [];


    saveGame();

    showGameScreen();

    renderPos(1);
}


/* =========================================================
   TAMPILKAN LAYAR GAME
   ========================================================= */

function showGameScreen() {

    const startScreen =
        getElement("startScreen");

    const gameScreen =
        getElement("gameScreen");

    if (startScreen) {
        startScreen.classList.add("hidden");
    }

    if (gameScreen) {
        gameScreen.classList.remove("hidden");
    }
}


/* =========================================================
   TAMPILKAN LAYAR START
   ========================================================= */

function showStartScreen() {

    const startScreen =
        getElement("startScreen");

    const gameScreen =
        getElement("gameScreen");

    if (startScreen) {
        startScreen.classList.remove("hidden");
    }

    if (gameScreen) {
        gameScreen.classList.add("hidden");
    }
}


/* =========================================================
   RENDER POS
   ========================================================= */

function renderPos(posNumber) {

    const pos =
        POS_DATA[posNumber];

    if (!pos) {

        console.error(
            "Data pos tidak ditemukan:",
            posNumber
        );

        return;
    }


    gameState.currentPos = posNumber;


    if (
        !gameState.posDikunjungi.includes(posNumber)
    ) {

        gameState.posDikunjungi.push(
            posNumber
        );
    }


    saveGame();


    /* -----------------------------------------------------
       NAMA POS
       ----------------------------------------------------- */

    setText(
        "posNumber",
        `POS ${pos.nomor}`
    );

    setText(
        "posName",
        pos.nama
    );


    /* -----------------------------------------------------
       GAMBAR
       ----------------------------------------------------- */

    const image =
        getElement("posImage");

    if (image) {

        image.src = pos.gambar;

        image.alt =
            `Foto lokasi ${pos.nama}`;

        image.onerror = function () {

            this.style.display = "none";

        };

        image.onload = function () {

            this.style.display = "block";

        };
    }


    /* -----------------------------------------------------
       PESAN
       ----------------------------------------------------- */

    setText(
        "posMessage",
        pos.pesan
    );


    /* -----------------------------------------------------
       KODE RAHASIA
       ----------------------------------------------------- */

    const codeBox =
        getElement("secretCode");

    if (codeBox) {

        codeBox.textContent =
            "••••••";

        codeBox.dataset.realCode =
            pos.kodeRahasia;
    }


    /* -----------------------------------------------------
       TIPE POS
       ----------------------------------------------------- */

    updatePosType(pos);


    /* -----------------------------------------------------
       SOAL
       ----------------------------------------------------- */

    if (pos.soal) {

        renderQuestion(pos);

    } else {

        hideQuestion();

    }


    /* -----------------------------------------------------
       TIMER
       ----------------------------------------------------- */

    if (pos.tipe === "buntu") {

        startBuntuTimer();

    } else {

        clearBuntuTimer();

    }


    /* -----------------------------------------------------
       PROGRESS
       ----------------------------------------------------- */

    updateProgress();


    /* -----------------------------------------------------
       SCROLL KE ATAS
       ----------------------------------------------------- */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   RENDER SOAL
   ========================================================= */

function renderQuestion(pos) {

    const questionBox =
        getElement("questionBox");

    const questionText =
        getElement("questionText");

    const optionsBox =
        getElement("options");

    if (!questionBox ||
        !questionText ||
        !optionsBox) {

        return;
    }


    questionBox.classList.remove(
        "hidden"
    );


    questionText.textContent =
        pos.soal.pertanyaan;


    optionsBox.innerHTML = "";


    pos.soal.pilihan.forEach(
        (pilihan, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "answer-option";

            button.dataset.index =
                index;

            button.innerHTML = `
                <span class="option-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span class="option-text">
                    ${escapeHTML(pilihan)}
                </span>
            `;


            button.addEventListener(
                "click",
                function () {

                    checkAnswer(
                        index
                    );

                }
            );


            optionsBox.appendChild(
                button
            );
        }
    );
}


/* =========================================================
   SEMBUNYIKAN SOAL
   ========================================================= */

function hideQuestion() {

    const questionBox =
        getElement("questionBox");

    if (questionBox) {

        questionBox.classList.add(
            "hidden"
        );
    }
}


/* =========================================================
   CEK JAWABAN
   ========================================================= */

function checkAnswer(selectedIndex) {

    const pos =
        POS_DATA[
            gameState.currentPos
        ];


    if (!pos || !pos.soal) {
        return;
    }


    const correctIndex =
        pos.soal.jawaban;


    disableAnswerButtons();


    if (selectedIndex === correctIndex) {

        gameState.jawabanBenar++;


        gameState.riwayat.push({
            pos: pos.nomor,
            benar: true,
            waktu: new Date().toISOString()
        });


        saveGame();


        showAnswerFeedback(
            true,
            "Jawaban BENAR! 🎉",
            "Kalian menemukan jalur yang tepat."
        );


        setTimeout(
            function () {

                if (
                    pos.routeCorrect === null
                ) {

                    finishGame();

                    return;
                }


                renderPos(
                    pos.routeCorrect
                );

            },
            1800
        );


    } else {

        gameState.jawabanSalah++;


        gameState.riwayat.push({
            pos: pos.nomor,
            benar: false,
            waktu: new Date().toISOString()
        });


        saveGame();


        showAnswerFeedback(
            false,
            "Jawaban SALAH! ⚠️",
            "Kalian mengambil jalur yang salah!"
        );


        setTimeout(
            function () {

                renderPos(
                    pos.routeWrong
                );

            },
            1800
        );
    }
}


/* =========================================================
   NONAKTIFKAN PILIHAN
   ========================================================= */

function disableAnswerButtons() {

    const buttons =
        document.querySelectorAll(
            ".answer-option"
        );

    buttons.forEach(
        button => {

            button.disabled = true;

        }
    );
}


/* =========================================================
   FEEDBACK JAWABAN
   ========================================================= */

function showAnswerFeedback(
    benar,
    title,
    message
) {

    const modal =
        getElement("feedbackModal");

    const titleElement =
        getElement("feedbackTitle");

    const messageElement =
        getElement("feedbackMessage");


    if (
        !modal ||
        !titleElement ||
        !messageElement
    ) {

        return;
    }


    titleElement.textContent =
        title;

    messageElement.textContent =
        message;


    modal.classList.remove(
        "hidden"
    );


    if (benar) {

        modal.classList.add(
            "correct"
        );

        modal.classList.remove(
            "wrong"
        );

    } else {

        modal.classList.add(
            "wrong"
        );

        modal.classList.remove(
            "correct"
        );
    }


    setTimeout(
        function () {

            modal.classList.add(
                "hidden"
            );

        },
        1500
    );
}


/* =========================================================
   TIMER POS BUNTU
   ========================================================= */

function startBuntuTimer() {

    clearBuntuTimer();


    if (!gameState.waktuBuntuMulai) {

        gameState.waktuBuntuMulai =
            Date.now();

        saveGame();
    }


    updateBuntuTimer();


    timerInterval =
        setInterval(
            updateBuntuTimer,
            1000
        );
}


/* =========================================================
   UPDATE TIMER
   ========================================================= */

function updateBuntuTimer() {

    if (
        gameState.currentPos < 8
    ) {

        clearBuntuTimer();

        return;
    }


    if (
        !gameState.waktuBuntuMulai
    ) {

        gameState.waktuBuntuMulai =
            Date.now();

        saveGame();
    }


    const elapsed =
        Date.now() -
        gameState.waktuBuntuMulai;


    const remaining =
        GAME_CONFIG.waktuBuntu -
        elapsed;


    if (remaining <= 0) {

        clearBuntuTimer();

        handleBuntuTimeout();

        return;
    }


    const minutes =
        Math.floor(
            remaining / 60000
        );

    const seconds =
        Math.floor(
            (remaining % 60000) / 1000
        );


    const timerText =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    setText(
        "buntuTimer",
        timerText
    );


    const timer =
        getElement("buntuTimer");

    if (timer) {

        if (remaining <= 60000) {

            timer.classList.add(
                "danger"
            );

        } else {

            timer.classList.remove(
                "danger"
            );
        }
    }
}


/* =========================================================
   WAKTU BUNTU HABIS
   ========================================================= */

function handleBuntuTimeout() {

    gameState.waktuBuntuMulai =
        null;


    saveGame();


    showTimeoutMessage();


    setTimeout(
        function () {

            renderPos(1);

        },
        2500
    );
}


/* =========================================================
   PESAN WAKTU HABIS
   ========================================================= */

function showTimeoutMessage() {

    const modal =
        getElement("feedbackModal");

    const title =
        getElement("feedbackTitle");

    const message =
        getElement("feedbackMessage");


    if (
        !modal ||
        !title ||
        !message
    ) {

        return;
    }


    title.textContent =
        "⏰ WAKTU HABIS!";


    message.textContent =
        "Kalian tidak menemukan pesan. " +
        "Kembali ke Pos 1 dan jawab soal dengan benar.";


    modal.classList.remove(
        "hidden"
    );


    modal.classList.add(
        "wrong"
    );
}


/* =========================================================
   HENTIKAN TIMER
   ========================================================= */

function clearBuntuTimer() {

    if (timerInterval) {

        clearInterval(
            timerInterval
        );

        timerInterval = null;
    }


    gameState.waktuBuntuMulai =
        null;


    const timer =
        getElement("buntuTimer");

    if (timer) {

        timer.textContent =
            "05:00";

        timer.classList.remove(
            "danger"
        );
    }
}


/* =========================================================
   UPDATE TIPE POS
   ========================================================= */

function updatePosType(pos) {

    const badge =
        getElement("posType");

    if (!badge) {
        return;
    }


    badge.className =
        "pos-type";


    if (pos.tipe === "awal") {

        badge.textContent =
            "🚩 POS AWAL";

        badge.classList.add(
            "awal"
        );

    } else if (
        pos.tipe === "buntu"
    ) {

        badge.textContent =
            "🐍 JALUR BUNTU";

        badge.classList.add(
            "buntu"
        );

    } else if (
        pos.tipe === "finish"
    ) {

        badge.textContent =
            "🏆 POS AKHIR";

        badge.classList.add(
            "finish"
        );

    } else {

        badge.textContent =
            "⭐ JALUR BENAR";

        badge.classList.add(
            "benar"
        );
    }
}


/* =========================================================
   PROGRESS GAME
   ========================================================= */

function updateProgress() {

    const current =
        gameState.currentPos;


    const progress =
        Math.min(
            current,
            GAME_CONFIG.posBenarTerakhir
        );


    const percent =
        (progress /
            GAME_CONFIG.posBenarTerakhir) *
        100;


    const progressBar =
        getElement("progressBar");


    if (progressBar) {

        progressBar.style.width =
            `${percent}%`;
    }


    setText(
        "progressText",
        `Pos ${progress} / ${GAME_CONFIG.posBenarTerakhir}`
    );


    setText(
        "correctCount",
        gameState.jawabanBenar
    );


    setText(
        "wrongCount",
        gameState.jawabanSalah
    );
}


/* =========================================================
   KODE RAHASIA
   ========================================================= */

function revealSecretCode() {

    const pos =
        POS_DATA[
            gameState.currentPos
        ];


    if (!pos) {
        return;
    }


    const code =
        pos.kodeRahasia;


    const secretCode =
        getElement("secretCode");


    if (secretCode) {

        secretCode.textContent =
            code;

        secretCode.classList.add(
            "revealed"
        );
    }


    if (
        !gameState.kodeDitemukan.includes(
            pos.nomor
        )
    ) {

        gameState.kodeDitemukan.push(
            pos.nomor
        );

        saveGame();

        showMessage(
            `Kode rahasia ditemukan: ${code}`,
            "success"
        );
    }
}


/* =========================================================
   VALIDASI KODE RAHASIA
   ========================================================= */

function validateSecretCode() {

    const input =
        getElement("codeInput");


    if (!input) {
        return;
    }


    const entered =
        input.value
            .trim()
            .toUpperCase();


    const pos =
        POS_DATA[
            gameState.currentPos
        ];


    if (!pos) {
        return;
    }


    if (
        entered ===
        pos.kodeRahasia.toUpperCase()
    ) {

        if (
            !gameState.kodeDitemukan.includes(
                pos.nomor
            )
        ) {

            gameState.kodeDitemukan.push(
                pos.nomor
            );
        }


        saveGame();


        input.value = "";


        showMessage(
            "Kode rahasia BENAR! 🔐",
            "success"
        );

    } else {

        showMessage(
            "Kode rahasia belum tepat.",
            "error"
        );
    }
}


/* =========================================================
   FINISH GAME
   ========================================================= */

function finishGame() {

    clearBuntuTimer();


    gameState.selesai = true;

    saveGame();


    const gameScreen =
        getElement("gameScreen");

    const finishScreen =
        getElement("finishScreen");


    if (gameScreen) {

        gameScreen.classList.add(
            "hidden"
        );
    }


    if (finishScreen) {

        finishScreen.classList.remove(
            "hidden"
        );
    }


    setText(
        "finishKetua",
        gameState.ketua
    );


    setText(
        "finishCorrect",
        gameState.jawabanBenar
    );


    setText(
        "finishWrong",
        gameState.jawabanSalah
    );


    setText(
        "finishCodeCount",
        gameState.kodeDitemukan.length
    );


    renderTeamFinish();
}


/* =========================================================
   TAMPILKAN ANGGOTA PADA FINISH
   ========================================================= */

function renderTeamFinish() {

    const container =
        getElement("finishTeam");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    const semuaNama = [
        gameState.ketua,
        ...gameState.anggota
    ];


    semuaNama.forEach(
        (nama, index) => {

            const item =
                document.createElement("div");

            item.className =
                "team-member";


            item.innerHTML = `
                <span class="team-number">
                    ${index + 1}
                </span>

                <span>
                    ${escapeHTML(nama)}
                </span>
            `;


            container.appendChild(
                item
            );
        }
    );
}


/* =========================================================
   PESAN UMUM
   ========================================================= */

function showMessage(
    message,
    type = "info"
) {

    const messageBox =
        getElement("messageBox");


    if (!messageBox) {

        alert(message);

        return;
    }


    messageBox.textContent =
        message;


    messageBox.className =
        `message-box ${type}`;


    messageBox.classList.remove(
        "hidden"
    );


    setTimeout(
        function () {

            messageBox.classList.add(
                "hidden"
            );

        },
        2500
    );
}


/* =========================================================
   SET TEXT
   ========================================================= */

function setText(
    id,
    value
) {

    const element =
        getElement(id);


    if (element) {

        element.textContent =
            value;
    }
}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        value;

    return div.innerHTML;
}


/* =========================================================
   TOGGLE PETUNJUK
   ========================================================= */

function toggleInstruction() {

    const instruction =
        getElement("instructionPanel");


    if (!instruction) {
        return;
    }


    instruction.classList.toggle(
        "hidden"
    );
}


/* =========================================================
   KEMBALI KE POS SEBELUMNYA
   ========================================================= */

function backToCurrentPos() {

    renderPos(
        gameState.currentPos
    );
}


/* =========================================================
   CEK STATUS GAME SAAT HALAMAN DIBUKA
   ========================================================= */

function initializeGame() {

    const adaGame =
        loadGame();


    if (
        adaGame &&
        gameState.started &&
        !gameState.selesai
    ) {

        showGameScreen();

        renderPos(
            gameState.currentPos
        );

    } else if (
        adaGame &&
        gameState.selesai
    ) {

        finishGame();

    } else {

        showStartScreen();
    }
}


/* =========================================================
   EVENT LISTENER
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* -------------------------------------------------
           START GAME
           ------------------------------------------------- */

        const startButton =
            getElement("startGame");


        if (startButton) {

            startButton.addEventListener(
                "click",
                startGame
            );
        }


        /* -------------------------------------------------
           RESET GAME
           ------------------------------------------------- */

        const resetButton =
            getElement("resetGame");


        if (resetButton) {

            resetButton.addEventListener(
                "click",
                function () {

                    const yakin =
                        confirm(
                            "Yakin ingin memulai permainan baru?"
                        );


                    if (yakin) {

                        resetGame();
                    }
                }
            );
        }


        /* -------------------------------------------------
           KODE RAHASIA
           ------------------------------------------------- */

        const revealButton =
            getElement("revealCode");


        if (revealButton) {

            revealButton.addEventListener(
                "click",
                revealSecretCode
            );
        }


        const validateButton =
            getElement("validateCode");


        if (validateButton) {

            validateButton.addEventListener(
                "click",
                validateSecretCode
            );
        }


        const codeInput =
            getElement("codeInput");


        if (codeInput) {

            codeInput.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter"
                    ) {

                        validateSecretCode();
                    }
                }
            );
        }


        /* -------------------------------------------------
           PETUNJUK
           ------------------------------------------------- */

        const instructionButton =
            getElement("instructionButton");


        if (instructionButton) {

            instructionButton.addEventListener(
                "click",
                toggleInstruction
            );
        }


        /* -------------------------------------------------
           TOMBOL KEMBALI KE POS
           ------------------------------------------------- */

        const backButton =
            getElement("backToPos");


        if (backButton) {

            backButton.addEventListener(
                "click",
                backToCurrentPos
            );
        }


        /* -------------------------------------------------
           INIT
           ------------------------------------------------- */

        initializeGame();

    }
);


/* =========================================================
   FUNGSI GLOBAL
   =========================================================
   Dipasang ke window agar tetap bisa dipanggil
   langsung dari onclick="" jika index.html
   menggunakan cara tersebut.
   ========================================================= */

window.startGame =
    startGame;

window.resetGame =
    resetGame;

window.revealSecretCode =
    revealSecretCode;

window.validateSecretCode =
    validateSecretCode;

window.toggleInstruction =
    toggleInstruction;

window.backToCurrentPos =
    backToCurrentPos;


/* =========================================================
   PENCEGAHAN REFRESH SAAT TIMER BUNTU
   ========================================================= */

window.addEventListener(
    "beforeunload",
    function () {

        if (
            gameState.currentPos >= 8 &&
            gameState.currentPos <= 10 &&
            gameState.waktuBuntuMulai
        ) {

            saveGame();
        }
    }
);


/* =========================================================
   DEBUG / ADMIN
   ---------------------------------------------------------
   Bisa digunakan di Console browser untuk memeriksa
   status permainan.
   ========================================================= */

window.PosGame = {

    getState() {
        return gameState;
    },

    getPos(pos) {
        return POS_DATA[pos];
    },

    goTo(pos) {

        if (POS_DATA[pos]) {

            renderPos(pos);

        }
    },

    reset() {
        resetGame();
    },

    showCode() {

        const pos =
            POS_DATA[
                gameState.currentPos
            ];

        if (pos) {

            console.log(
                "Kode:",
                pos.kodeRahasia
            );
        }
    }

};
