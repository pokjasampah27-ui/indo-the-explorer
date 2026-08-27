/* =========================================================
   JELAJAH SEKOLAH
   GAME POS-POSAN / JURIT MALAM EDUKATIF
   =========================================================

   ALUR:
   POS 1 → POS 2 → POS 3 → POS 4 → POS 5 → POS 6 → POS 7
             JALUR BENAR

   Jawaban salah:
   POS 8 / POS 9 / POS 10
             ↓
          5 MENIT
             ↓
           POS 1

   ========================================================= */


/* =========================================================
   KONFIGURASI
========================================================= */

const CONFIG = {
    storageKey: "jelajahSekolahGame_vFinal",

    jumlahPosBenar: 7,

    waktuJalurBuntu: 5 * 60,

    totalAnggota: 5
};


/* =========================================================
   DATA POS
========================================================= */

const POS_DATA = {

    /* =====================================================
       POS 1
    ===================================================== */

    1: {
        nomor: 1,

        tipe: "benar",

        nama: "POS 1",

        gambar: "assets/pos1.jpg",

        petunjuk:
            "Temukan lokasi sesuai gambar Pos 1. " +
            "Setelah tiba, cari secarik pesan yang disembunyikan.",

        pesan:
            "Selamat datang di Pos 1. " +
            "Temukan kode rahasia di lokasi ini.",

        kode: "MELATI",

        soal:
            "Kalimat yang digunakan untuk menyampaikan informasi disebut ...",

        pilihan: [
            "Kalimat berita",
            "Kalimat tanya",
            "Kalimat perintah",
            "Kalimat seru"
        ],

        jawaban: 0,

        tujuanBenar: 2,

        tujuanSalah: 8
    },


    /* =====================================================
       POS 2
    ===================================================== */

    2: {
        nomor: 2,

        tipe: "benar",

        nama: "POS 2",

        gambar: "assets/pos2.jpg",

        petunjuk:
            "Ikuti perjalanan menuju Pos 2. " +
            "Perhatikan gambar dan lingkungan sekitar sekolah.",

        pesan:
            "Kalian berhasil sampai di Pos 2. " +
            "Temukan kode rahasia berikutnya.",

        kode: "GARUDA",

        soal:
            "Manakah yang merupakan kalimat tanya?",

        pilihan: [
            "Tolong tutup pintu itu!",
            "Siapa ketua kelompokmu?",
            "Mereka belajar di kelas.",
            "Jangan berlari!"
        ],

        jawaban: 1,

        tujuanBenar: 3,

        tujuanSalah: 8
    },


    /* =====================================================
       POS 3
    ===================================================== */

    3: {
        nomor: 3,

        tipe: "benar",

        nama: "POS 3",

        gambar: "assets/pos3.jpg",

        petunjuk:
            "Cari lokasi Pos 3 berdasarkan foto. " +
            "Sesampainya di sana, cari pesan yang tersembunyi.",

        pesan:
            "Bagus! Kalian masih berada di jalur yang benar.",

        kode: "NUSANTARA",

        soal:
            "Kalimat 'Tutup pintu itu!' termasuk kalimat ...",

        pilihan: [
            "Berita",
            "Tanya",
            "Perintah",
            "Penjelas"
        ],

        jawaban: 2,

        tujuanBenar: 4,

        tujuanSalah: 9
    },


    /* =====================================================
       POS 4
    ===================================================== */

    4: {
        nomor: 4,

        tipe: "benar",

        nama: "POS 4",

        gambar: "assets/pos4.jpg",

        petunjuk:
            "Temukan Pos 4. " +
            "Jangan hanya mengandalkan satu orang. " +
            "Bekerjalah sebagai sebuah kelompok.",

        pesan:
            "Kalian menemukan Pos 4. " +
            "Cari kode rahasia sebelum menjawab soal.",

        kode: "PANDU",

        soal:
            "Kalimat yang mengungkapkan perasaan kuat biasanya disebut ...",

        pilihan: [
            "Kalimat berita",
            "Kalimat seru",
            "Kalimat tanya",
            "Kalimat pasif"
        ],

        jawaban: 1,

        tujuanBenar: 5,

        tujuanSalah: 9
    },


    /* =====================================================
       POS 5
    ===================================================== */

    5: {
        nomor: 5,

        tipe: "benar",

        nama: "POS 5",

        gambar: "assets/pos5.jpg",

        petunjuk:
            "Kalian sudah melewati beberapa tantangan. " +
            "Temukan lokasi Pos 5 berdasarkan foto.",

        pesan:
            "Hebat! Kalian semakin dekat menuju akhir perjalanan.",

        kode: "SEMANGAT",

        soal:
            "Dalam sebuah paragraf, kalimat yang menjadi pokok pembahasan disebut ...",

        pilihan: [
            "Kalimat utama",
            "Kalimat penjelas",
            "Kalimat tanya",
            "Kalimat seru"
        ],

        jawaban: 0,

        tujuanBenar: 6,

        tujuanSalah: 10
    },


    /* =====================================================
       POS 6
    ===================================================== */

    6: {
        nomor: 6,

        tipe: "benar",

        nama: "POS 6",

        gambar: "assets/pos6.jpg",

        petunjuk:
            "Cari Pos 6 sesuai foto. " +
            "Kalian tinggal selangkah lagi menuju Pos terakhir.",

        pesan:
            "Luar biasa! Tinggal satu pos lagi.",

        kode: "MERDEKA",

        soal:
            "Fungsi utama kalimat penjelas dalam paragraf adalah ...",

        pilihan: [
            "Menjelaskan kalimat utama",
            "Menggantikan judul",
            "Mengakhiri semua paragraf",
            "Menjadi salam pembuka"
        ],

        jawaban: 0,

        tujuanBenar: 7,

        tujuanSalah: 10
    },


    /* =====================================================
       POS 7
    ===================================================== */

    7: {
        nomor: 7,

        tipe: "finish",

        nama: "POS 7 — FINISH",

        gambar: "assets/pos7.jpg",

        petunjuk:
            "Ini adalah pos terakhir. " +
            "Temukan kode rahasia dan selesaikan tantangan terakhir.",

        pesan:
            "SELAMAT! Kalian telah mencapai Pos 7.",

        kode: "JUARA",

        soal:
            "Paragraf yang baik harus memiliki hubungan antarkalimat yang ...",

        pilihan: [
            "Tidak beraturan",
            "Saling berkaitan",
            "Berbeda topik",
            "Tidak berhubungan"
        ],

        jawaban: 1,

        tujuanBenar: null,

        tujuanSalah: 10
    },


    /* =====================================================
       POS BUNTU 8
    ===================================================== */

    8: {
        nomor: 8,

        tipe: "buntu",

        nama: "POS BUNTU 8",

        gambar: "assets/pos8.jpg",

        petunjuk:
            "Kalian menemukan salah satu jalur buntu. " +
            "Cari pesan tersembunyi di sekitar lokasi ini.",

        pesan:
            "Tidak ada soal di pos ini. " +
            "Jika pesan tidak ditemukan dalam 5 menit, " +
            "kalian akan dikembalikan ke Pos 1.",

        kode: "BUNTU8",

        tujuan: 1
    },


    /* =====================================================
       POS BUNTU 9
    ===================================================== */

    9: {
        nomor: 9,

        tipe: "buntu",

        nama: "POS BUNTU 9",

        gambar: "assets/pos9.jpg",

        petunjuk:
            "Jalur kalian salah. " +
            "Cari pesan yang mungkin tersembunyi di sekitar lokasi.",

        pesan:
            "Tidak ada tantangan soal di pos ini. " +
            "Waktu kalian hanya 5 menit.",

        kode: "BUNTU9",

        tujuan: 1
    },


    /* =====================================================
       POS BUNTU 10
    ===================================================== */

    10: {
        nomor: 10,

        tipe: "buntu",

        nama: "POS BUNTU 10",

        gambar: "assets/pos10.jpg",

        petunjuk:
            "Kalian berada di jalur yang salah. " +
            "Cari pesan tersembunyi sebelum waktu habis.",

        pesan:
            "Tidak ada soal di pos ini. " +
            "Jika tidak menemukan pesan dalam 5 menit, kembali ke Pos 1.",

        kode: "BUNTU10",

        tujuan: 1
    }

};


/* =========================================================
   STATE PERMAINAN
========================================================= */

let game = {

    started: false,

    teamName: "",

    ketua: "",

    anggota: [],

    currentPos: 1,

    kodeTerbuka: false,

    kodeDitemukan: [],

    posDikunjungi: [],

    jawabanBenar: 0,

    jawabanSalah: 0,

    mulaiWaktu: null,

    selesaiWaktu: null,

    waktuBuntuMulai: null,

    riwayat: [],

    selesai: false
};


/* =========================================================
   TIMER
========================================================= */

let timerInterval = null;


/* =========================================================
   HELPER
========================================================= */

function $(id) {
    return document.getElementById(id);
}


function show(element) {

    if (element) {
        element.classList.remove("hidden");
    }
}


function hide(element) {

    if (element) {
        element.classList.add("hidden");
    }
}


function setText(id, text) {

    const element = $(id);

    if (element) {
        element.textContent = text;
    }
}


function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* =========================================================
   LOCAL STORAGE
========================================================= */

function saveGame() {

    try {

        localStorage.setItem(
            CONFIG.storageKey,
            JSON.stringify(game)
        );

    } catch (error) {

        console.error(
            "Tidak dapat menyimpan permainan:",
            error
        );
    }
}


function loadGame() {

    try {

        const saved =
            localStorage.getItem(
                CONFIG.storageKey
            );

        if (!saved) {
            return false;
        }

        const data =
            JSON.parse(saved);

        if (!data) {
            return false;
        }

        game = {
            ...game,
            ...data
        };

        return true;

    } catch (error) {

        console.error(
            "Tidak dapat memuat permainan:",
            error
        );

        return false;
    }
}


/* =========================================================
   SCREEN
========================================================= */

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

            screen.classList.add("hidden");
        });


    const screen = $(id);

    if (screen) {

        screen.classList.remove("hidden");

        screen.classList.add("active");
    }
}


/* =========================================================
   MULAI
========================================================= */

function startApplication() {

    const loaded =
        loadGame();


    if (
        loaded &&
        game.started &&
        !game.selesai
    ) {

        showScreen("gameScreen");

        renderCurrentPos();

        return;
    }


    if (
        loaded &&
        game.selesai
    ) {

        showFinishScreen();

        return;
    }


    showScreen("startScreen");
}


/* =========================================================
   FORM IDENTITAS
========================================================= */

function openTeamForm() {

    showScreen("teamScreen");
}


function saveTeam() {

    const leader =
        $("leaderName")
            ? $("leaderName").value.trim()
            : "";


    if (!leader) {

        showToast(
            "⚠️ Nama ketua wajib diisi.",
            "error"
        );

        return;
    }


    const members = [];


    for (
        let i = 1;
        i <= CONFIG.totalAnggota;
        i++
    ) {

        const input =
            $(`member${i}`);


        if (!input) {
            continue;
        }


        const value =
            input.value.trim();


        if (!value) {

            showToast(
                `⚠️ Nama anggota ${i} wajib diisi.`,
                "error"
            );

            input.focus();

            return;
        }


        members.push(value);
    }


    game.ketua = leader;

    game.anggota = members;

    game.teamName =
        leader + " & " + members[0];


    saveGame();


    showScreen(
        "instructionScreen"
    );
}


/* =========================================================
   MULAI MISI
========================================================= */

function beginMission() {

    game.started = true;

    game.selesai = false;

    game.currentPos = 1;

    game.kodeTerbuka = false;

    game.kodeDitemukan = [];

    game.posDikunjungi = [];

    game.jawabanBenar = 0;

    game.jawabanSalah = 0;

    game.riwayat = [];

    game.mulaiWaktu =
        Date.now();

    game.selesaiWaktu = null;

    game.waktuBuntuMulai = null;


    saveGame();


    showScreen(
        "gameScreen"
    );


    renderCurrentPos();
}


/* =========================================================
   RENDER POS
========================================================= */

function renderCurrentPos() {

    const pos =
        POS_DATA[
            game.currentPos
        ];


    if (!pos) {

        console.error(
            "Pos tidak ditemukan:",
            game.currentPos
        );

        return;
    }


    game.kodeTerbuka = false;


    if (
        !game.posDikunjungi.includes(
            pos.nomor
        )
    ) {

        game.posDikunjungi.push(
            pos.nomor
        );
    }


    saveGame();


    /* -----------------------------------------------------
       STATUS
    ----------------------------------------------------- */

    setText(
        "teamDisplay",
        game.ketua || "Kelompok"
    );


    setText(
        "currentPosNumber",
        pos.nomor
    );


    setText(
        "totalPosNumber",
        CONFIG.jumlahPosBenar
    );


    /* -----------------------------------------------------
       JUDUL POS
    ----------------------------------------------------- */

    setText(
        "posTitle",
        pos.nama
    );


    /* -----------------------------------------------------
       GAMBAR
    ----------------------------------------------------- */

    const image =
        $("locationImage");


    if (image) {

        image.src =
            pos.gambar;

        image.alt =
            `Foto ${pos.nama}`;

        image.style.display =
            "block";


        image.onerror =
            function () {

                this.style.display =
                    "none";

                console.warn(
                    "Gambar tidak ditemukan:",
                    pos.gambar
                );
            };
    }


    /* -----------------------------------------------------
       PETUNJUK
    ----------------------------------------------------- */

    setText(
        "clueText",
        pos.petunjuk
    );


    /* -----------------------------------------------------
       RESET AREA
    ----------------------------------------------------- */

    hide(
        $("questionArea")
    );


    hide(
        $("nextClueArea")
    );


    hide(
        $("deadEndArea")
    );


    /* -----------------------------------------------------
       KODE
    ----------------------------------------------------- */

    const secretInput =
        $("secretCodeInput");


    const secretArea =
        $("secretArea");


    if (secretArea) {

        show(secretArea);
    }


    if (secretInput) {

        secretInput.value = "";

        secretInput.disabled =
            false;
    }


    setText(
        "secretMessage",
        "Temukan kode rahasia di lokasi pos."
    );


    /* -----------------------------------------------------
       JIKA BUNTU
    ----------------------------------------------------- */

    if (pos.tipe === "buntu") {

        renderDeadEnd(pos);

        return;
    }


    /* -----------------------------------------------------
       JIKA POS NORMAL
    ----------------------------------------------------- */

    stopTimer();

    setText(
        "timerDisplay",
        "—"
    );


    updateProgress();

    updateFinishStats();
}


/* =========================================================
   RENDER JALUR BUNTU
========================================================= */

function renderDeadEnd(pos) {

    hide(
        $("secretArea")
    );


    show(
        $("deadEndArea")
    );


    setText(
        "deadEndText",
        pos.pesan
    );


    game.waktuBuntuMulai =
        Date.now();


    saveGame();


    startTimer();

    updateProgress();
}


/* =========================================================
   KODE RAHASIA
========================================================= */

function verifySecretCode() {

    const input =
        $("secretCodeInput");


    if (!input) {
        return;
    }


    const entered =
        input.value
            .trim()
            .toUpperCase();


    const pos =
        POS_DATA[
            game.currentPos
        ];


    if (!pos) {
        return;
    }


    if (!entered) {

        showToast(
            "🔐 Masukkan kode rahasia terlebih dahulu.",
            "error"
        );

        input.focus();

        return;
    }


    if (
        entered !==
        pos.kode.toUpperCase()
    ) {

        setText(
            "secretMessage",
            "❌ Kode salah. Periksa kembali pesan yang ditemukan."
        );


        showToast(
            "❌ Kode rahasia salah.",
            "error"
        );


        input.select();

        return;
    }


    /* -----------------------------------------------------
       KODE BENAR
    ----------------------------------------------------- */

    game.kodeTerbuka = true;


    if (
        !game.kodeDitemukan.includes(
            pos.nomor
        )
    ) {

        game.kodeDitemukan.push(
            pos.nomor
        );
    }


    saveGame();


    setText(
        "secretMessage",
        "✅ Kode benar! Tantangan berhasil dibuka."
    );


    showToast(
        "🔓 Kode benar!",
        "success"
    );


    input.disabled = true;


    /* -----------------------------------------------------
       BUKA SOAL
    ----------------------------------------------------- */

    setTimeout(
        function () {

            openQuestion(pos);

        },
        500
    );
}


/* =========================================================
   BUKA SOAL
========================================================= */

function openQuestion(pos) {

    if (!pos.soal) {
        return;
    }


    hide(
        $("secretArea")
    );


    show(
        $("questionArea")
    );


    setText(
        "questionText",
        pos.soal
    );


    const container =
        $("optionsContainer");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    pos.pilihan.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "answer-option";


            button.dataset.index =
                index;


            button.innerHTML = `
                <span class="option-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span class="option-text">
                    ${escapeHTML(option)}
                </span>
            `;


            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        index
                    );
                }
            );


            container.appendChild(
                button
            );
        }
    );


    setText(
        "answerFeedback",
        ""
    );


    const answerButton =
        $("answerButton");


    if (answerButton) {

        answerButton.disabled =
            true;
    }
}


/* =========================================================
   PILIH JAWABAN
========================================================= */

let selectedAnswer = null;


function selectAnswer(index) {

    selectedAnswer =
        index;


    document
        .querySelectorAll(
            ".answer-option"
        )
        .forEach(
            button => {

                button.classList.remove(
                    "selected"
                );

            }
        );


    const selected =
        document.querySelector(
            `.answer-option[data-index="${index}"]`
        );


    if (selected) {

        selected.classList.add(
            "selected"
        );
    }


    const answerButton =
        $("answerButton");


    if (answerButton) {

        answerButton.disabled =
            false;
    }
}


/* =========================================================
   PERIKSA JAWABAN
========================================================= */

function checkSelectedAnswer() {

    if (
        selectedAnswer === null
    ) {

        showToast(
            "Pilih salah satu jawaban.",
            "error"
        );

        return;
    }


    const pos =
        POS_DATA[
            game.currentPos
        ];


    if (!pos) {
        return;
    }


    const benar =
        selectedAnswer ===
        pos.jawaban;


    /* -----------------------------------------------------
       MATIKAN TOMBOL
    ----------------------------------------------------- */

    document
        .querySelectorAll(
            ".answer-option"
        )
        .forEach(
            button => {

                button.disabled =
                    true;

            }
        );


    const answerButton =
        $("answerButton");


    if (answerButton) {

        answerButton.disabled =
            true;
    }


    /* -----------------------------------------------------
       JAWABAN BENAR
    ----------------------------------------------------- */

    if (benar) {

        game.jawabanBenar++;


        game.riwayat.push({

            pos: pos.nomor,

            benar: true,

            waktu:
                new Date().toISOString()

        });


        markCorrectAnswer();


        saveGame();


        if (
            pos.tujuanBenar === null
        ) {

            setTimeout(
                finishGame,
                1800
            );

            return;
        }


        setTimeout(
            function () {

                showNextClue(
                    pos.tujuanBenar
                );

            },
            1400
        );


    } else {

        /* -------------------------------------------------
           JAWABAN SALAH
        ------------------------------------------------- */

        game.jawabanSalah++;


        game.riwayat.push({

            pos: pos.nomor,

            benar: false,

            waktu:
                new Date().toISOString()

        });


        markWrongAnswer();


        saveGame();


        setTimeout(
            function () {

                goToPos(
                    pos.tujuanSalah
                );

            },
            1800
        );
    }


    updateFinishStats();
}


/* =========================================================
   FEEDBACK BENAR
========================================================= */

function markCorrectAnswer() {

    const feedback =
        $("answerFeedback");


    if (feedback) {

        feedback.textContent =
            "🎉 JAWABAN BENAR! Kalian menemukan jalur yang tepat.";

        feedback.className =
            "answer-feedback correct";
    }


    document
        .querySelectorAll(
            ".answer-option"
        )
        .forEach(
            button => {

                if (
                    Number(
                        button.dataset.index
                    ) ===
                    POS_DATA[
                        game.currentPos
                    ].jawaban
                ) {

                    button.classList.add(
                        "correct"
                    );
                }
            }
        );


    showToast(
        "🎉 Jawaban benar! Ikuti petunjuk berikutnya.",
        "success"
    );


    playSound(
        "correctSound"
    );
}


/* =========================================================
   FEEDBACK SALAH
========================================================= */

function markWrongAnswer() {

    const feedback =
        $("answerFeedback");


    if (feedback) {

        feedback.textContent =
            "❌ Jawaban salah. Kalian diarahkan ke jalur lain.";

        feedback.className =
            "answer-feedback wrong";
    }


    document
        .querySelectorAll(
            ".answer-option"
        )
        .forEach(
            button => {

                if (
                    Number(
                        button.dataset.index
                    ) ===
                    POS_DATA[
                        game.currentPos
                    ].jawaban
                ) {

                    button.classList.add(
                        "correct"
                    );
                }


                if (
                    Number(
                        button.dataset.index
                    ) ===
                    selectedAnswer
                ) {

                    button.classList.add(
                        "wrong"
                    );
                }
            }
        );


    showToast(
        "❌ Jawaban salah. Kalian masuk jalur berbeda.",
        "error"
    );


    playSound(
        "wrongSound"
    );
}


/* =========================================================
   PETUNJUK POS BERIKUTNYA
========================================================= */

function showNextClue(nextPosNumber) {

    const nextPos =
        POS_DATA[
            nextPosNumber
        ];


    if (!nextPos) {
        return;
    }


    hide(
        $("questionArea")
    );


    hide(
        $("secretArea")
    );


    show(
        $("nextClueArea")
    );


    setText(
        "nextClueText",
        nextPos.petunjuk
    );


    setText(
        "nextLocationName",
        nextPos.nama
    );


    const continueButton =
        $("continueButton");


    if (continueButton) {

        continueButton.onclick =
            function () {

                goToPos(
                    nextPosNumber
                );

            };
    }
}


/* =========================================================
   PINDAH POS
========================================================= */

function goToPos(posNumber) {

    stopTimer();


    game.currentPos =
        posNumber;


    game.kodeTerbuka =
        false;


    game.waktuBuntuMulai =
        null;


    selectedAnswer =
        null;


    saveGame();


    renderCurrentPos();
}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    stopTimer();


    updateTimer();


    timerInterval =
        setInterval(
            updateTimer,
            1000
        );
}


function updateTimer() {

    if (
        game.currentPos < 8
    ) {

        stopTimer();

        return;
    }


    if (
        !game.waktuBuntuMulai
    ) {

        game.waktuBuntuMulai =
            Date.now();

        saveGame();
    }


    const elapsed =
        Math.floor(
            (
                Date.now() -
                game.waktuBuntuMulai
            ) / 1000
        );


    const remaining =
        CONFIG.waktuJalurBuntu -
        elapsed;


    if (
        remaining <= 0
    ) {

        stopTimer();

        returnToPosOne();

        return;
    }


    const minutes =
        Math.floor(
            remaining / 60
        );


    const seconds =
        remaining % 60;


    const time =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    setText(
        "timerDisplay",
        time
    );


    setText(
        "deadEndTimer",
        time
    );


    if (
        remaining <= 60
    ) {

        $("timerDisplay")
            ?.classList.add(
                "danger"
            );

        $("deadEndTimer")
            ?.classList.add(
                "danger"
            );

    } else {

        $("timerDisplay")
            ?.classList.remove(
                "danger"
            );

        $("deadEndTimer")
            ?.classList.remove(
                "danger"
            );
    }
}


function stopTimer() {

    if (timerInterval) {

        clearInterval(
            timerInterval
        );

        timerInterval =
            null;
    }
}


/* =========================================================
   KEMBALI KE POS 1
========================================================= */

function returnToPosOne() {

    game.waktuBuntuMulai =
        null;


    saveGame();


    showToast(
        "⏰ Waktu habis! Kalian kembali ke Pos 1.",
        "error"
    );


    playSound(
        "wrongSound"
    );


    setTimeout(
        function () {

            goToPos(1);

        },
        1800
    );
}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

    let progress =
        game.currentPos;


    if (
        progress > 7
    ) {

        progress =
            1;
    }


    const percent =
        Math.min(
            100,
            Math.max(
                0,
                (
                    (progress - 1) /
                    6
                ) * 100
            )
        );


    const bar =
        $("progressBar");


    if (bar) {

        bar.style.width =
            `${percent}%`;
    }


    setText(
        "progressPercent",
        `${Math.round(percent)}%`
    );
}


/* =========================================================
   STATISTIK
========================================================= */

function updateFinishStats() {

    setText(
        "finishTeamName",
        game.ketua || "-"
    );


    setText(
        "finishCorrectCount",
        game.jawabanBenar
    );


    setText(
        "finishPosCount",
        Math.min(
            game.posDikunjungi
                .filter(
                    pos => pos >= 1 && pos <= 7
                )
                .length,
            7
        )
    );


    if (
        game.mulaiWaktu
    ) {

        const end =
            game.selesaiWaktu ||
            Date.now();


        const seconds =
            Math.floor(
                (
                    end -
                    game.mulaiWaktu
                ) / 1000
            );


        setText(
            "finishTime",
            formatDuration(seconds)
        );
    }
}


function formatDuration(seconds) {

    const hours =
        Math.floor(
            seconds / 3600
        );


    const minutes =
        Math.floor(
            (
                seconds % 3600
            ) / 60
        );


    const secs =
        seconds % 60;


    if (hours > 0) {

        return (
            `${String(hours).padStart(2, "0")}:` +
            `${String(minutes).padStart(2, "0")}:` +
            `${String(secs).padStart(2, "0")}`
        );
    }


    return (
        `${String(minutes).padStart(2, "0")}:` +
        `${String(secs).padStart(2, "0")}`
    );
}


/* =========================================================
   FINISH
========================================================= */

function finishGame() {

    stopTimer();


    game.selesai =
        true;


    game.selesaiWaktu =
        Date.now();


    game.currentPos =
        7;


    saveGame();


    playSound(
        "successSound"
    );


    showFinishScreen();
}


function showFinishScreen() {

    showScreen(
        "finishScreen"
    );


    updateFinishStats();
}


/* =========================================================
   RESTART
========================================================= */

function restartGame() {

    const yakin =
        confirm(
            "Apakah kalian yakin ingin memulai permainan baru?"
        );


    if (!yakin) {
        return;
    }


    stopTimer();


    localStorage.removeItem(
        CONFIG.storageKey
    );


    game = {

        started: false,

        teamName: "",

        ketua: "",

        anggota: [],

        currentPos: 1,

        kodeTerbuka: false,

        kodeDitemukan: [],

        posDikunjungi: [],

        jawabanBenar: 0,

        jawabanSalah: 0,

        mulaiWaktu: null,

        selesaiWaktu: null,

        waktuBuntuMulai: null,

        riwayat: [],

        selesai: false
    };


    selectedAnswer =
        null;


    /* kosongkan form */

    if ($("leaderName")) {

        $("leaderName").value = "";
    }


    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        if ($(`member${i}`)) {

            $(`member${i}`).value =
                "";
        }
    }


    showScreen(
        "startScreen"
    );
}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout = null;


function showToast(
    message,
    type = "info"
) {

    const toast =
        $("toast");


    const text =
        $("toastText");


    const icon =
        $("toastIcon");


    if (!toast || !text) {

        return;
    }


    text.textContent =
        message;


    if (icon) {

        if (type === "success") {

            icon.textContent =
                "✅";

        } else if (
            type === "error"
        ) {

            icon.textContent =
                "⚠️";

        } else {

            icon.textContent =
                "💡";
        }
    }


    toast.className =
        `toast ${type}`;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );
}


/* =========================================================
   MODAL
========================================================= */

function openModal(
    title,
    text,
    icon = "💡"
) {

    const modal =
        $("gameModal");


    if (!modal) {
        return;
    }


    setText(
        "modalTitle",
        title
    );


    setText(
        "modalText",
        text
    );


    setText(
        "modalIcon",
        icon
    );


    modal.classList.add(
        "show"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );
}


function closeModal() {

    const modal =
        $("gameModal");


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "show"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );
}


/* =========================================================
   SUARA
========================================================= */

let soundEnabled =
    true;


function playSound(id) {

    if (!soundEnabled) {
        return;
    }


    const audio =
        $(id);


    if (!audio) {
        return;
    }


    audio.currentTime =
        0;


    audio.play()
        .catch(
            () => {}
        );
}


function toggleSound() {

    soundEnabled =
        !soundEnabled;


    const button =
        $("soundButton");


    if (button) {

        button.textContent =
            soundEnabled
                ? "🔊"
                : "🔇";
    }
}


/* =========================================================
   EVENT LISTENER
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* -------------------------------------------------
           TOMBOL MULAI
        ------------------------------------------------- */

        const startButton =
            $("startButton");


        if (startButton) {

            startButton.addEventListener(
                "click",
                openTeamForm
            );
        }


        /* -------------------------------------------------
           SIMPAN IDENTITAS
        ------------------------------------------------- */

        const saveTeamButton =
            $("saveTeamButton");


        if (saveTeamButton) {

            saveTeamButton.addEventListener(
                "click",
                saveTeam
            );
        }


        /* -------------------------------------------------
           KEMBALI DARI FORM
        ------------------------------------------------- */

        const backStart =
            $("backToStartButton");


        if (backStart) {

            backStart.addEventListener(
                "click",
                function () {

                    showScreen(
                        "startScreen"
                    );

                }
            );
        }


        /* -------------------------------------------------
           MULAI MISI
        ------------------------------------------------- */

        const beginMission =
            $("beginMissionButton");


        if (beginMission) {

            beginMission.addEventListener(
                "click",
                beginMission
            );
        }


        /* -------------------------------------------------
           KODE RAHASIA
        ------------------------------------------------- */

        const verifyCode =
            $("verifyCodeButton");


        if (verifyCode) {

            verifyCode.addEventListener(
                "click",
                verifySecretCode
            );
        }


        const secretInput =
            $("secretCodeInput");


        if (secretInput) {

            secretInput.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter"
                    ) {

                        verifySecretCode();

                    }

                }
            );
        }


        /* -------------------------------------------------
           JAWAB SOAL
        ------------------------------------------------- */

        const answerButton =
            $("answerButton");


        if (answerButton) {

            answerButton.addEventListener(
                "click",
                checkSelectedAnswer
            );
        }


        /* -------------------------------------------------
           SUARA
        ------------------------------------------------- */

        const soundButton =
            $("soundButton");


        if (soundButton) {

            soundButton.addEventListener(
                "click",
                toggleSound
            );
        }


        /* -------------------------------------------------
           MODAL
        ------------------------------------------------- */

        const closeModalButton =
            $("closeModalButton");


        if (closeModalButton) {

            closeModalButton.addEventListener(
                "click",
                closeModal
            );
        }


        const modalOkButton =
            $("modalOkButton");


        if (modalOkButton) {

            modalOkButton.addEventListener(
                "click",
                closeModal
            );
        }


        const modalOverlay =
            document.querySelector(
                ".modal-overlay"
            );


        if (modalOverlay) {

            modalOverlay.addEventListener(
                "click",
                closeModal
            );
        }


        /* -------------------------------------------------
           RESTART
        ------------------------------------------------- */

        const restartButton =
            $("restartButton");


        if (restartButton) {

            restartButton.addEventListener(
                "click",
                restartGame
            );
        }


        /* -------------------------------------------------
           INIT
        ------------------------------------------------- */

        startApplication();

    }
);


/* =========================================================
   HANDLE REFRESH
========================================================= */

window.addEventListener(
    "beforeunload",
    function () {

        saveGame();

    }
);


/* =========================================================
   DEBUG ADMIN
========================================================= */

window.JelajahSekolah = {

    state() {

        console.log(
            game
        );

        return game;
    },


    pos(number) {

        return POS_DATA[
            number
        ];
    },


    pindah(number) {

        if (
            POS_DATA[number]
        ) {

            goToPos(number);

        }
    },


    reset() {

        restartGame();

    }

};
