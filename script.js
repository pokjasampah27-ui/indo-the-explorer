/* ============================================================
   JURIT MALAM
   GAME POS-POSAN DIGITAL
   ============================================================

   STRUKTUR:
   POS 01 - 07 = JALUR BENAR
   POS 08 - 10 = JALUR SALAH / BUNTU

   Alur utama:
   POS 1 → POS 2 → POS 3 → POS 4 → POS 5 → POS 6 → POS 7
   → SELESAI

   Jalur salah:
   POS 8 → POS 9 → POS 10 → kembali POS 1

   ============================================================ */


/* ============================================================
   KONFIGURASI
   ============================================================ */

const GAME_CONFIG = {

    // Waktu maksimal mencari pesan di jalur salah
    deadEndTime: 5 * 60,

    // Ketua + 5 anggota
    totalMembers: 5,

    // Pos pertama
    startPosition: "pos-01"

};


/* ============================================================
   DATA PERMAINAN
   ============================================================

   CATATAN:

   question       = soal
   options        = pilihan jawaban
   correctAnswer  = nomor jawaban benar, dimulai dari 0

   next           = pos berikutnya jika benar
   wrongNext      = jalur salah jika jawaban salah

   code           = kode rahasia yang terdapat pada pesan fisik
                    di lokasi tersebut

   ============================================================ */


const POS_DATA = {

    /* ========================================================
       POS 01
       ======================================================== */

    "pos-01": {

        id: "pos-01",

        number: 1,

        type: "correct",

        title: "POS 1 — GERBANG AWAL",

        image: "assets/pos-01.jpg",

        description:
            "Selamat datang dalam misi Jurit Malam. " +
            "Temukan pesan yang disembunyikan di lokasi ini.",

        question:
            "Manakah kalimat yang paling efektif?",

        options: [
            "Para siswa-siswa sedang belajar.",
            "Para siswa sedang belajar.",
            "Para siswa sedang pada belajar.",
            "Siswa-siswa para sedang belajar."
        ],

        correctAnswer: 1,

        next: "pos-02",

        wrongNext: "pos-08"

    },


    /* ========================================================
       POS 02
       ======================================================== */

    "pos-02": {

        id: "pos-02",

        number: 2,

        type: "correct",

        title: "POS 2 — JEJAK PERTAMA",

        image: "assets/pos-02.jpg",

        description:
            "Kalian telah sampai di lokasi kedua. " +
            "Cari pesan berikutnya dengan teliti.",

        question:
            "Apa yang dimaksud dengan gagasan utama?",

        options: [
            "Gagasan yang menjadi inti pembahasan.",
            "Kalimat tambahan dalam paragraf.",
            "Kata terakhir dalam paragraf.",
            "Contoh yang digunakan dalam paragraf."
        ],

        correctAnswer: 0,

        next: "pos-03",

        wrongNext: "pos-08"

    },


    /* ========================================================
       POS 03
       ======================================================== */

    "pos-03": {

        id: "pos-03",

        number: 3,

        type: "correct",

        title: "POS 3 — PERSIMPANGAN",

        image: "assets/pos-03.jpg",

        description:
            "Perjalanan berlanjut. Jangan sampai salah memilih jalur.",

        question:
            "Kalimat utama dalam sebuah paragraf biasanya memuat ...",

        options: [
            "Gagasan utama.",
            "Gagasan tambahan saja.",
            "Contoh.",
            "Keterangan waktu."
        ],

        correctAnswer: 0,

        next: "pos-04",

        wrongNext: "pos-08"

    },


    /* ========================================================
       POS 04
       ======================================================== */

    "pos-04": {

        id: "pos-04",

        number: 4,

        type: "correct",

        title: "POS 4 — JEJAK TERSEMBUNYI",

        image: "assets/pos-04.jpg",

        description:
            "Perhatikan lingkungan sekitar. " +
            "Pesan berikutnya menunggu kalian.",

        question:
            "Salah satu ciri paragraf yang baik adalah ...",

        options: [
            "Memiliki gagasan yang tidak berhubungan.",
            "Memiliki kesatuan gagasan.",
            "Tidak memiliki kalimat utama.",
            "Menggunakan sebanyak mungkin kalimat."
        ],

        correctAnswer: 1,

        next: "pos-05",

        wrongNext: "pos-09"

    },


    /* ========================================================
       POS 05
       ======================================================== */

    "pos-05": {

        id: "pos-05",

        number: 5,

        type: "correct",

        title: "POS 5 — TAMAN RAHASIA",

        image: "assets/pos-05.jpg",

        description:
            "Kalian sudah semakin dekat. " +
            "Temukan pesan yang tersembunyi di lokasi ini.",

        question:
            "Kalimat penjelas berfungsi untuk ...",

        options: [
            "Menjelaskan gagasan utama.",
            "Menghapus gagasan utama.",
            "Menggantikan judul.",
            "Mengakhiri semua paragraf."
        ],

        correctAnswer: 0,

        next: "pos-06",

        wrongNext: "pos-09"

    },


    /* ========================================================
       POS 06
       ======================================================== */

    "pos-06": {

        id: "pos-06",

        number: 6,

        type: "correct",

        title: "POS 6 — JALAN TERAKHIR",

        image: "assets/pos-06.jpg",

        description:
            "Tinggal satu langkah lagi sebelum mencapai tujuan.",

        question:
            "Hubungan antara kalimat utama dan kalimat penjelas adalah ...",

        options: [
            "Tidak saling berhubungan.",
            "Kalimat penjelas mendukung gagasan utama.",
            "Kalimat utama selalu lebih panjang.",
            "Kalimat penjelas menggantikan judul."
        ],

        correctAnswer: 1,

        next: "pos-07",

        wrongNext: "pos-10"

    },


    /* ========================================================
       POS 07
       ======================================================== */

    "pos-07": {

        id: "pos-07",

        number: 7,

        type: "correct",

        title: "POS 7 — GARIS FINISH",

        image: "assets/pos-07.jpg",

        description:
            "Ini adalah tantangan terakhir. " +
            "Jawab dengan teliti untuk menyelesaikan misi.",

        question:
            "Sebuah paragraf yang baik seharusnya memiliki ...",

        options: [
            "Gagasan yang saling berkaitan.",
            "Kalimat yang tidak berhubungan.",
            "Hanya satu kata.",
            "Tidak memiliki gagasan utama."
        ],

        correctAnswer: 0,

        next: "finish",

        wrongNext: "pos-10"

    },


    /* ========================================================
       POS 08
       JALUR SALAH
       ======================================================== */

    "pos-08": {

        id: "pos-08",

        number: 8,

        type: "wrong",

        title: "POS 8 — JALUR MISTERI",

        image: "assets/pos-08.jpg",

        description:
            "Kalian menemukan lokasi yang tidak sesuai. " +
            "Cari pesan tersembunyi di tempat ini.",

        returnTo: "pos-01",

        nextWrong: "pos-09"

    },


    /* ========================================================
       POS 09
       JALUR SALAH
       ======================================================== */

    "pos-09": {

        id: "pos-09",

        number: 9,

        type: "wrong",

        title: "POS 9 — JEJAK TERSESAT",

        image: "assets/pos-09.jpg",

        description:
            "Tempat ini bukan bagian dari jalur utama. " +
            "Periksa sekitar dan cari pesan.",

        returnTo: "pos-01",

        nextWrong: "pos-10"

    },


    /* ========================================================
       POS 10
       JALUR SALAH
       ======================================================== */

    "pos-10": {

        id: "pos-10",

        number: 10,

        type: "wrong",

        title: "POS 10 — JALAN BUNTU",

        image: "assets/pos-10.jpg",

        description:
            "Kalian telah masuk terlalu jauh ke jalur yang salah. " +
            "Jika pesan tidak ditemukan dalam waktu 5 menit, " +
            "kalian harus kembali ke Pos 1.",

        returnTo: "pos-01",

        nextWrong: "pos-01"

    }

};


/* ============================================================
   STATE PERMAINAN
   ============================================================ */

const GAME = {

    group: {

        leader: "",

        members: []

    },

    currentPosition: "pos-01",

    previousPosition: "pos-01",

    correctAnswers: 0,

    wrongAnswers: 0,

    visitedPositions: [],

    selectedAnswer: null,

    deadEndTimer: null,

    remainingTime: GAME_CONFIG.deadEndTime,

    inWrongRoute: false

};


/* ============================================================
   DOM
   ============================================================ */

const $ = id =>
    document.getElementById(id);


/* ============================================================
   MULAI GAME
   ============================================================ */

function startGame() {

    const leader =
        $("leaderName").value.trim();

    if (!leader) {

        alert(
            "Silakan isi nama ketua kelompok."
        );

        $("leaderName").focus();

        return;

    }


    const members = [];


    for (
        let i = 1;
        i <= GAME_CONFIG.totalMembers;
        i++
    ) {

        const input =
            $(`member${i}`);

        const name =
            input.value.trim();


        if (!name) {

            alert(
                `Silakan isi nama Anggota ${i}.`
            );

            input.focus();

            return;

        }


        members.push(name);

    }


    GAME.group.leader =
        leader;

    GAME.group.members =
        members;


    GAME.currentPosition =
        GAME_CONFIG.startPosition;

    GAME.previousPosition =
        GAME_CONFIG.startPosition;

    GAME.correctAnswers =
        0;

    GAME.wrongAnswers =
        0;

    GAME.visitedPositions =
        [];

    GAME.selectedAnswer =
        null;


    $("displayGroupName").textContent =
        leader;


    $("totalPosNumber").textContent =
        7;


    showScreen("game");


    loadPosition(
        GAME.currentPosition
    );

}


/* ============================================================
   TAMPILKAN SCREEN
   ============================================================ */

function showScreen(name) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove(
                "active"
            );

        });


    const target =
        $(`screen-${name}`);


    if (target) {

        target.classList.add(
            "active"
        );

    }

}


/* ============================================================
   MEMUAT POS
   ============================================================ */

function loadPosition(
    positionId
) {

    stopDeadEndTimer();


    const position =
        POS_DATA[positionId];


    if (!position) {

        finishGame();

        return;

    }


    GAME.currentPosition =
        positionId;


    GAME.selectedAnswer =
        null;


    /* ==========================================
       STATUS JALUR
       ========================================== */

    GAME.inWrongRoute =
        position.type === "wrong";


    /* ==========================================
       NOMOR POS
       ========================================== */

    $("currentPosNumber").textContent =
        position.number;


    /* ==========================================
       JUDUL
       ========================================== */

    $("posTitle").textContent =
        position.title;


    /* ==========================================
       DESKRIPSI
       ========================================== */

    $("posDescription").textContent =
        position.description;


    /* ==========================================
       FOTO
       ========================================== */

    const image =
        $("posImage");


    image.src =
        position.image;


    image.classList.remove(
        "hidden"
    );


    image.onerror =
        function () {

            this.classList.add(
                "hidden"
            );

        };


    /* ==========================================
       POS BENAR
       ========================================== */

    if (
        position.type === "correct"
    ) {

        showCorrectPosition(
            position
        );

    }


    /* ==========================================
       POS SALAH
       ========================================== */

    if (
        position.type === "wrong"
    ) {

        showWrongPosition(
            position
        );

    }

}


/* ============================================================
   POS JALUR BENAR
   ============================================================ */

function showCorrectPosition(
    position
) {

    $("questionCard")
        .classList.remove("hidden");


    $("deadEndCard")
        .classList.add("hidden");


    $("directionCard")
        .classList.add("hidden");


    $("resultCard")
        .classList.add("hidden");


    $("timerBox")
        .classList.add("hidden");


    $("questionText").textContent =
        position.question;


    createAnswerOptions(
        position
    );


    $("btnAnswer").disabled =
        true;

}


/* ============================================================
   POS JALUR SALAH
   ============================================================ */

function showWrongPosition(
    position
) {

    $("questionCard")
        .classList.add("hidden");


    $("directionCard")
        .classList.add("hidden");


    $("resultCard")
        .classList.add("hidden");


    $("deadEndCard")
        .classList.remove("hidden");


    $("timerBox")
        .classList.remove("hidden");


    startDeadEndTimer();

}


/* ============================================================
   MEMBUAT PILIHAN JAWABAN
   ============================================================ */

function createAnswerOptions(
    position
) {

    const container =
        $("answerOptions");


    container.innerHTML =
        "";


    position.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "answer-option";


            button.textContent =
                option;


            button.dataset.index =
                index;


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            container.appendChild(
                button
            );

        }
    );

}


/* ============================================================
   PILIH JAWABAN
   ============================================================ */

function selectAnswer(
    index,
    button
) {

    GAME.selectedAnswer =
        index;


    document
        .querySelectorAll(
            ".answer-option"
        )
        .forEach(btn => {

            btn.classList.remove(
                "selected"
            );

        });


    button.classList.add(
        "selected"
    );


    $("btnAnswer").disabled =
        false;

}


/* ============================================================
   PERIKSA JAWABAN
   ============================================================ */

$("btnAnswer").addEventListener(
    "click",
    checkAnswer
);


function checkAnswer() {

    const position =
        POS_DATA[
            GAME.currentPosition
        ];


    if (
        GAME.selectedAnswer === null
    ) {

        return;

    }


    const correct =
        GAME.selectedAnswer ===
        position.correctAnswer;


    if (correct) {

        processCorrectAnswer(
            position
        );

    } else {

        processWrongAnswer(
            position
        );

    }

}


/* ============================================================
   JAWABAN BENAR
   ============================================================ */

function processCorrectAnswer(
    position
) {

    GAME.correctAnswers++;


    if (
        !GAME.visitedPositions
            .includes(position.id)
    ) {

        GAME.visitedPositions
            .push(position.id);

    }


    $("resultCard")
        .classList.remove("hidden");


    $("questionCard")
        .classList.add("hidden");


    $("resultIcon").textContent =
        "✅";


    $("resultTitle").textContent =
        "JAWABAN BENAR!";


    $("resultText").textContent =
        "Hebat! Kalian menemukan jalur yang benar. " +
        "Ikuti petunjuk menuju lokasi berikutnya.";


    $("btnResultContinue").onclick =
        function () {

            if (
                position.next === "finish"
            ) {

                finishGame();

                return;

            }


            showDirection(
                position.next
            );

        };

}


/* ============================================================
   JAWABAN SALAH
   ============================================================ */

function processWrongAnswer(
    position
) {

    GAME.wrongAnswers++;


    GAME.previousPosition =
        position.id;


    $("questionCard")
        .classList.add("hidden");


    $("resultCard")
        .classList.remove("hidden");


    $("resultIcon").textContent =
        "❌";


    $("resultTitle").textContent =
        "JAWABAN SALAH";


    $("resultText").textContent =
        "Kalian mengambil jalur yang salah. " +
        "Ikuti petunjuk menuju lokasi berikutnya. " +
        "Jika pesan tidak ditemukan dalam 5 menit, " +
        "kalian akan kembali ke Pos 1.";


    $("btnResultContinue").onclick =
        function () {

            startWrongRoute(
                position.wrongNext
            );

        };

}


/* ============================================================
   PETUNJUK POS BERIKUTNYA
   ============================================================ */

function showDirection(
    destinationId
) {

    const destination =
        POS_DATA[
            destinationId
        ];


    if (!destination) {

        finishGame();

        return;

    }


    $("resultCard")
        .classList.add("hidden");


    $("directionCard")
        .classList.remove("hidden");


    $("directionTitle").textContent =
        "🧭 PETUNJUK BERIKUTNYA";


    $("directionText").textContent =
        "Kalian harus meninggalkan lokasi ini " +
        "dan mencari tempat berikutnya berdasarkan " +
        "petunjuk yang terdapat pada pesan fisik.";


    $("destinationBox").textContent =
        "Cari lokasi berikutnya";


    $("btnContinue").onclick =
        function () {

            loadPosition(
                destinationId
            );

        };

}


/* ============================================================
   MEMULAI JALUR SALAH
   ============================================================ */

function startWrongRoute(
    wrongPositionId
) {

    GAME.inWrongRoute =
        true;


    GAME.currentPosition =
        wrongPositionId;


    loadPosition(
        wrongPositionId
    );

}


/* ============================================================
   TIMER JALUR SALAH
   ============================================================ */

function startDeadEndTimer() {

    stopDeadEndTimer();


    GAME.remainingTime =
        GAME_CONFIG.deadEndTime;


    updateTimer();


    GAME.deadEndTimer =
        setInterval(
            function () {

                GAME.remainingTime--;


                updateTimer();


                if (
                    GAME.remainingTime <= 0
                ) {

                    deadEndTimeout();

                }

            },
            1000
        );

}


/* ============================================================
   UPDATE TIMER
   ============================================================ */

function updateTimer() {

    const seconds =
        Math.max(
            0,
            GAME.remainingTime
        );


    const minutes =
        Math.floor(
            seconds / 60
        );


    const remainingSeconds =
        seconds % 60;


    const text =
        String(minutes)
            .padStart(2, "0")
        +
        ":"
        +
        String(remainingSeconds)
            .padStart(2, "0");


    $("timer").textContent =
        text;


    $("deadEndTimer").textContent =
        text;

}


/* ============================================================
   WAKTU HABIS
   ============================================================ */

function deadEndTimeout() {

    stopDeadEndTimer();


    GAME.inWrongRoute =
        false;


    $("deadEndCard")
        .classList.add("hidden");


    $("timerBox")
        .classList.add("hidden");


    $("resultCard")
        .classList.remove("hidden");


    $("resultIcon").textContent =
        "⏰";


    $("resultTitle").textContent =
        "WAKTU HABIS";


    $("resultText").textContent =
        "Kalian tidak menemukan pesan dalam waktu " +
        "5 menit. Kelompok harus kembali ke Pos 1 " +
        "dan mengulang tantangan.";


    $("btnResultContinue").onclick =
        function () {

            loadPosition(
                "pos-01"
            );

        };

}


/* ============================================================
   STOP TIMER
   ============================================================ */

function stopDeadEndTimer() {

    if (
        GAME.deadEndTimer
    ) {

        clearInterval(
            GAME.deadEndTimer
        );

        GAME.deadEndTimer =
            null;

    }


    GAME.remainingTime =
        GAME_CONFIG.deadEndTime;

}


/* ============================================================
   SELESAI
   ============================================================ */

function finishGame() {

    stopDeadEndTimer();


    GAME.inWrongRoute =
        false;


    $("finishGroup").innerHTML =
        createGroupSummary();


    $("finishPos").textContent =
        "7 / 7";


    $("finishCorrect").textContent =
        GAME.correctAnswers;


    $("finishWrong").textContent =
        GAME.wrongAnswers;


    showScreen(
        "finish"
    );

}


/* ============================================================
   RINGKASAN KELOMPOK
   ============================================================ */

function createGroupSummary() {

    let html = "";


    html += `
        <div class="group-leader">
            <strong>Ketua:</strong>
            <br>
            ${escapeHTML(
                GAME.group.leader
            )}
        </div>
    `;


    html += `
        <div class="group-members">
            <strong>Anggota:</strong>
            <ol>
    `;


    GAME.group.members
        .forEach(
            member => {

                html += `
                    <li>
                        ${escapeHTML(
                            member
                        )}
                    </li>
                `;

            }
        );


    html += `
            </ol>
        </div>
    `;


    return html;

}


/* ============================================================
   KEAMANAN HTML
   ============================================================ */

function escapeHTML(
    text
) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        text;


    return div.innerHTML;

}


/* ============================================================
   MAIN LAGI
   ============================================================ */

$("btnRestart")
    .addEventListener(
        "click",
        function () {

            stopDeadEndTimer();

            showScreen(
                "start"
            );

        }
    );


/* ============================================================
   INISIALISASI
   ============================================================ */

$("totalPosNumber")
    .textContent = 7;


/* ============================================================
   END
============================================================ */
