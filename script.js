```javascript
/* ============================================================
   JURIT MALAM
   GAME PETUALANGAN POS-POSAN

   File:
   script.js

   Semua pengaturan pos berada pada bagian DATA POS.
============================================================ */


/* ============================================================
   KONFIGURASI GAME
============================================================ */

const GAME_CONFIG = {

    // Durasi jalur buntu dalam detik
    deadEndTime: 5 * 60,

    // Jumlah anggota selain ketua
    memberCount: 5

};


/* ============================================================
   DATA POS
============================================================

   UNTUK SEMENTARA DATA INI CONTOH.

   Nanti setelah foto-foto pos kamu kirim,
   bagian ini akan kita sesuaikan.

-------------------------------------------------------------

   Struktur:

   id
   title
   image
   description
   question
   options
   correctAnswer
   correctDestination
   correctMessage
   wrongDestination
   wrongMessage
   isDeadEnd
   deadEndReturn

============================================================ */


const POS_DATA = [

    {
        id: "pos-01",

        title: "Pos 1 — Gerbang Awal",

        image: "assets/pos-01.jpg",

        description:
            "Selamat datang di misi Jurit Malam. " +
            "Temukan tugas yang disembunyikan di pos ini.",

        question:
            "Contoh soal: Manakah yang termasuk kalimat efektif?",

        options: [
            "Para siswa-siswa sedang belajar.",
            "Para siswa sedang belajar.",
            "Para siswa sedang pada belajar.",
            "Siswa-siswa para sedang belajar."
        ],

        correctAnswer: 1,

        correctDestination: "pos-02",

        correctMessage:
            "Jawaban benar! Kalian mendapatkan petunjuk " +
            "untuk melanjutkan perjalanan.",

        wrongDestination: "buntu-01",

        wrongMessage:
            "Jawaban belum tepat. Kalian mengambil jalur " +
            "yang salah."
    },


    {
        id: "pos-02",

        title: "Pos 2 — Persimpangan",

        image: "assets/pos-02.jpg",

        description:
            "Kalian telah sampai di persimpangan. " +
            "Cari pesan berikutnya.",

        question:
            "Contoh soal: Apa fungsi utama sebuah paragraf?",

        options: [
            "Menghias tulisan.",
            "Mengembangkan satu gagasan utama.",
            "Memperpanjang tulisan.",
            "Menghilangkan kalimat utama."
        ],

        correctAnswer: 1,

        correctDestination: "pos-03",

        correctMessage:
            "Benar! Petunjuk berikutnya berhasil ditemukan.",

        wrongDestination: "buntu-02",

        wrongMessage:
            "Jawaban salah. Kalian masuk ke jalur buntu."
    },


    {
        id: "pos-03",

        title: "Pos 3 — Penjaga Pesan",

        image: "assets/pos-03.jpg",

        description:
            "Temukan pesan tersembunyi dan pecahkan tantangannya.",

        question:
            "Contoh soal: Kalimat utama biasanya berisi ...",

        options: [
            "Gagasan utama.",
            "Keterangan tambahan saja.",
            "Contoh-contoh.",
            "Kata penghubung."
        ],

        correctAnswer: 0,

        correctDestination: "pos-04",

        correctMessage:
            "Hebat! Kalian berhasil menemukan jalur yang benar.",

        wrongDestination: "buntu-03",

        wrongMessage:
            "Jawaban salah. Jalur yang kalian pilih tidak tepat."
    },


    {
        id: "pos-04",

        title: "Pos 4 — Jejak Terakhir",

        image: "assets/pos-04.jpg",

        description:
            "Ini adalah salah satu tantangan terakhir.",

        question:
            "Contoh soal terakhir.",

        options: [
            "Pilihan A",
            "Pilihan B",
            "Pilihan C",
            "Pilihan D"
        ],

        correctAnswer: 0,

        correctDestination: "finish",

        correctMessage:
            "Luar biasa! Kalian telah menyelesaikan seluruh misi.",

        wrongDestination: "buntu-04",

        wrongMessage:
            "Jawaban salah. Cari jalan keluar dari jalur buntu."
    }

];


/* ============================================================
   DATA JALUR BUNTU
============================================================ */

const DEAD_END_DATA = {

    "buntu-01": {

        title: "Jalur Buntu 1",

        description:
            "Kalian berada di tempat yang salah. " +
            "Tidak ada pesan lanjutan di sini.",

        returnTo: "pos-01"

    },


    "buntu-02": {

        title: "Jalur Buntu 2",

        description:
            "Tempat ini bukan tujuan berikutnya. " +
            "Cari pesan tersembunyi sebelum waktu habis.",

        returnTo: "pos-02"

    },


    "buntu-03": {

        title: "Jalur Buntu 3",

        description:
            "Kalian mengambil jalur yang keliru.",

        returnTo: "pos-03"

    },


    "buntu-04": {

        title: "Jalur Buntu 4",

        description:
            "Belum menemukan jalan yang benar.",

        returnTo: "pos-04"

    }

};


/* ============================================================
   STATE PERMAINAN
============================================================ */

const GAME_STATE = {

    group: {

        leader: "",

        members: []

    },

    currentPos: "pos-01",

    correctAnswers: 0,

    wrongAnswers: 0,

    completedPositions: [],

    selectedAnswer: null,

    timer: null,

    remainingTime: GAME_CONFIG.deadEndTime,

    inDeadEnd: false

};


/* ============================================================
   ELEMENT DOM
============================================================ */

const screens = {

    start:
        document.getElementById("screen-start"),

    game:
        document.getElementById("screen-game"),

    finish:
        document.getElementById("screen-finish")

};


const elements = {

    leaderName:
        document.getElementById("leaderName"),

    btnStart:
        document.getElementById("btnStart"),

    displayGroupName:
        document.getElementById("displayGroupName"),

    currentPosNumber:
        document.getElementById("currentPosNumber"),

    totalPosNumber:
        document.getElementById("totalPosNumber"),

    posTitle:
        document.getElementById("posTitle"),

    posImage:
        document.getElementById("posImage"),

    posDescription:
        document.getElementById("posDescription"),

    messageBox:
        document.getElementById("messageBox"),

    questionText:
        document.getElementById("questionText"),

    answerOptions:
        document.getElementById("answerOptions"),

    btnAnswer:
        document.getElementById("btnAnswer"),

    resultCard:
        document.getElementById("resultCard"),

    resultIcon:
        document.getElementById("resultIcon"),

    resultTitle:
        document.getElementById("resultTitle"),

    resultText:
        document.getElementById("resultText"),

    btnResultContinue:
        document.getElementById("btnResultContinue"),

    directionCard:
        document.getElementById("directionCard"),

    directionTitle:
        document.getElementById("directionTitle"),

    directionText:
        document.getElementById("directionText"),

    destinationBox:
        document.getElementById("destinationBox"),

    btnContinue:
        document.getElementById("btnContinue"),

    timerBox:
        document.getElementById("timerBox"),

    timer:
        document.getElementById("timer"),

    deadEndCard:
        document.getElementById("deadEndCard"),

    deadEndTimer:
        document.getElementById("deadEndTimer"),

    finishGroup:
        document.getElementById("finishGroup"),

    finishPos:
        document.getElementById("finishPos"),

    finishCorrect:
        document.getElementById("finishCorrect"),

    finishWrong:
        document.getElementById("finishWrong"),

    btnRestart:
        document.getElementById("btnRestart")

};


/* ============================================================
   MULAI GAME
============================================================ */

elements.btnStart.addEventListener(
    "click",
    startGame
);


function startGame() {

    const leader =
        elements.leaderName.value.trim();

    if (!leader) {

        alert(
            "Nama ketua kelompok harus diisi."
        );

        elements.leaderName.focus();

        return;
    }


    const members = [];


    for (
        let i = 1;
        i <= GAME_CONFIG.memberCount;
        i++
    ) {

        const input =
            document.getElementById(
                `member${i}`
            );

        const name =
            input.value.trim();

        if (!name) {

            alert(
                `Nama anggota ${i} harus diisi.`
            );

            input.focus();

            return;
        }

        members.push(name);

    }


    GAME_STATE.group.leader =
        leader;

    GAME_STATE.group.members =
        members;


    GAME_STATE.currentPos =
        "pos-01";

    GAME_STATE.correctAnswers =
        0;

    GAME_STATE.wrongAnswers =
        0;

    GAME_STATE.completedPositions =
        [];

    GAME_STATE.selectedAnswer =
        null;


    elements.displayGroupName.textContent =
        leader;


    elements.totalPosNumber.textContent =
        POS_DATA.length;


    showScreen("game");

    loadPosition(
        GAME_STATE.currentPos
    );

}


/* ============================================================
   PINDAH SCREEN
============================================================ */

function showScreen(screenName) {

    Object.values(screens)
        .forEach(screen => {

            screen.classList.remove(
                "active"
            );

        });


    screens[screenName]
        .classList.add("active");

}


/* ============================================================
   MENCARI DATA POS
============================================================ */

function getPosition(posId) {

    return POS_DATA.find(
        pos => pos.id === posId
    );

}


/* ============================================================
   MENENTUKAN NOMOR POS
============================================================ */

function getPositionNumber(posId) {

    const index =
        POS_DATA.findIndex(
            pos => pos.id === posId
        );

    return index >= 0
        ? index + 1
        : "-";

}


/* ============================================================
   MEMUAT POS
============================================================ */

function loadPosition(posId) {

    stopDeadEndTimer();


    GAME_STATE.currentPos =
        posId;

    GAME_STATE.inDeadEnd =
        false;


    const position =
        getPosition(posId);


    if (!position) {

        finishGame();

        return;
    }


    elements.currentPosNumber.textContent =
        getPositionNumber(posId);


    elements.posTitle.textContent =
        position.title;


    elements.posDescription.textContent =
        position.description;


    /* FOTO POS */

    if (
        position.image &&
        position.image.trim() !== ""
    ) {

        elements.posImage.src =
            position.image;

        elements.posImage.classList.remove(
            "hidden"
        );

        elements.posImage.onerror =
            function () {

                this.classList.add(
                    "hidden"
                );

            };

    } else {

        elements.posImage.classList.add(
            "hidden"
        );

    }


    /* SOAL */

    elements.questionText.textContent =
        position.question;


    elements.answerOptions.innerHTML =
        "";


    GAME_STATE.selectedAnswer =
        null;


    elements.btnAnswer.disabled =
        true;


    position.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-option";


            button.textContent =
                option;


            button.dataset.index =
                index;


            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            elements.answerOptions
                .appendChild(button);

        }
    );


    hideResult();

    hideDirection();

    hideDeadEnd();


    elements.messageBox
        .classList.add("hidden");

}


/* ============================================================
   MEMILIH JAWABAN
============================================================ */

function selectAnswer(
    index,
    button
) {

    GAME_STATE.selectedAnswer =
        index;


    document
        .querySelectorAll(
            ".answer-option"
        )
        .forEach(
            btn => {

                btn.classList.remove(
                    "selected"
                );

            }
        );


    button.classList.add(
        "selected"
    );


    elements.btnAnswer.disabled =
        false;

}


/* ============================================================
   TOMBOL JAWAB
============================================================ */

elements.btnAnswer.addEventListener(
    "click",
    checkAnswer
);


function checkAnswer() {

    if (
        GAME_STATE.selectedAnswer === null
    ) {

        return;
    }


    const position =
        getPosition(
            GAME_STATE.currentPos
        );


    const isCorrect =
        GAME_STATE.selectedAnswer ===
        position.correctAnswer;


    if (isCorrect) {

        handleCorrectAnswer(
            position
        );

    } else {

        handleWrongAnswer(
            position
        );

    }

}


/* ============================================================
   JAWABAN BENAR
============================================================ */

function handleCorrectAnswer(
    position
) {

    GAME_STATE.correctAnswers++;


    if (
        !GAME_STATE.completedPositions
            .includes(position.id)
    ) {

        GAME_STATE.completedPositions
            .push(position.id);

    }


    elements.resultIcon.textContent =
        "✅";


    elements.resultTitle.textContent =
        "JAWABAN BENAR!";


    elements.resultText.textContent =
        position.correctMessage;


    showResult();


    elements.btnResultContinue.onclick =
        function () {

            const destination =
                position.correctDestination;


            if (
                destination === "finish"
            ) {

                finishGame();

                return;
            }


            showDirection(
                destination
            );

        };

}


/* ============================================================
   JAWABAN SALAH
============================================================ */

function handleWrongAnswer(
    position
) {

    GAME_STATE.wrongAnswers++;


    elements.resultIcon.textContent =
        "❌";


    elements.resultTitle.textContent =
        "JAWABAN SALAH";


    elements.resultText.textContent =
        position.wrongMessage;


    showResult();


    elements.btnResultContinue.onclick =
        function () {

            startDeadEnd(
                position.wrongDestination
            );

        };

}


/* ============================================================
   MENAMPILKAN HASIL
============================================================ */

function showResult() {

    elements.questionCard
        .classList.add("hidden");

    elements.resultCard
        .classList.remove("hidden");

}


/* ============================================================
   MENYEMBUNYIKAN HASIL
============================================================ */

function hideResult() {

    elements.questionCard
        .classList.remove("hidden");

    elements.resultCard
        .classList.add("hidden");

}


/* ============================================================
   MENAMPILKAN PETUNJUK
============================================================ */

function showDirection(
    destinationId
) {

    const destination =
        getPosition(destinationId);


    if (!destination) {

        finishGame();

        return;
    }


    elements.directionTitle.textContent =
        "🧭 PETUNJUK BERIKUTNYA";


    elements.directionText.textContent =
        "Jawaban kalian benar. " +
        "Ikuti petunjuk berikut dan datangi lokasi " +
        "yang ditunjukkan oleh pesan permainan.";


    elements.destinationBox.textContent =
        destination.title;


    elements.directionCard
        .classList.remove("hidden");


    elements.questionCard
        .classList.add("hidden");


    elements.btnContinue.onclick =
        function () {

            loadPosition(
                destinationId
            );

        };

}


/* ============================================================
   MENYEMBUNYIKAN PETUNJUK
============================================================ */

function hideDirection() {

    elements.directionCard
        .classList.add("hidden");

}


/* ============================================================
   JALUR BUNTU
============================================================ */

function startDeadEnd(
    deadEndId
) {

    const deadEnd =
        DEAD_END_DATA[
            deadEndId
        ];


    if (!deadEnd) {

        loadPosition(
            GAME_STATE.currentPos
        );

        return;
    }


    GAME_STATE.inDeadEnd =
        true;


    GAME_STATE.remainingTime =
        GAME_CONFIG.deadEndTime;


    elements.questionCard
        .classList.add("hidden");


    elements.resultCard
        .classList.add("hidden");


    elements.directionCard
        .classList.add("hidden");


    elements.deadEndCard
        .classList.remove("hidden");


    elements.timerBox
        .classList.remove("hidden");


    elements.posTitle.textContent =
        deadEnd.title;


    elements.posDescription.textContent =
        deadEnd.description;


    updateTimerDisplay();


    GAME_STATE.timer =
        setInterval(
            deadEndTick,
            1000
        );

}


/* ============================================================
   TIMER JALUR BUNTU
============================================================ */

function deadEndTick() {

    if (
        !GAME_STATE.inDeadEnd
    ) {

        return;
    }


    GAME_STATE.remainingTime--;


    updateTimerDisplay();


    if (
        GAME_STATE.remainingTime <= 0
    ) {

        handleDeadEndTimeout();

    }

}


/* ============================================================
   UPDATE TIMER
============================================================ */

function updateTimerDisplay() {

    const seconds =
        Math.max(
            0,
            GAME_STATE.remainingTime
        );


    const minutes =
        Math.floor(
            seconds / 60
        );


    const remainingSeconds =
        seconds % 60;


    const display =
        String(minutes).padStart(2, "0")
        +
        ":"
        +
        String(
            remainingSeconds
        ).padStart(2, "0");


    elements.timer.textContent =
        display;


    elements.deadEndTimer.textContent =
        display;

}


/* ============================================================
   WAKTU HABIS
============================================================ */

function handleDeadEndTimeout() {

    stopDeadEndTimer();


    GAME_STATE.inDeadEnd =
        false;


    elements.timerBox
        .classList.add("hidden");


    elements.deadEndCard
        .classList.add("hidden");


    const previousPosition =
        GAME_STATE.currentPos;


    alert(
        "⏰ Waktu 5 menit habis!\n\n" +
        "Kalian akan kembali ke pos sebelumnya " +
        "untuk menjawab soal kembali."
    );


    loadPosition(
        previousPosition
    );

}


/* ============================================================
   STOP TIMER
============================================================ */

function stopDeadEndTimer() {

    if (
        GAME_STATE.timer
    ) {

        clearInterval(
            GAME_STATE.timer
        );

        GAME_STATE.timer =
            null;

    }


    GAME_STATE.remainingTime =
        GAME_CONFIG.deadEndTime;


    elements.timerBox
        .classList.add("hidden");

}


/* ============================================================
   SEMBUNYIKAN JALUR BUNTU
============================================================ */

function hideDeadEnd() {

    elements.deadEndCard
        .classList.add("hidden");

}


/* ============================================================
   SELESAI
============================================================ */

function finishGame() {

    stopDeadEndTimer();


    GAME_STATE.inDeadEnd =
        false;


    elements.finishGroup.innerHTML =
        createGroupSummary();


    elements.finishPos.textContent =
        GAME_STATE.completedPositions.length
        +
        " / "
        +
        POS_DATA.length;


    elements.finishCorrect.textContent =
        GAME_STATE.correctAnswers;


    elements.finishWrong.textContent =
        GAME_STATE.wrongAnswers;


    showScreen("finish");

}


/* ============================================================
   RINGKASAN KELOMPOK
============================================================ */

function createGroupSummary() {

    let html = "";


    html += `
        <div class="group-leader">
            <strong>Ketua</strong>
            <br>
            ${escapeHTML(
                GAME_STATE.group.leader
            )}
        </div>
    `;


    html += `
        <div class="group-members">
            <strong>Anggota</strong>
            <ol>
    `;


    GAME_STATE.group.members
        .forEach(member => {

            html += `
                <li>
                    ${escapeHTML(member)}
                </li>
            `;

        });


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
   TOMBOL MAIN LAGI
============================================================ */

elements.btnRestart.addEventListener(
    "click",
    function () {

        stopDeadEndTimer();

        showScreen("start");

    }
);


/* ============================================================
   INISIALISASI
============================================================ */

elements.totalPosNumber.textContent =
    POS_DATA.length;


/* ============================================================
   CATATAN PENGEMBANGAN

   Nanti kita dapat menambahkan:

   1. QR Code di setiap pos.
   2. Validasi bahwa peserta benar-benar
      berada di pos tertentu.
   3. Foto setiap lokasi.
   4. Audio/suara misterius.
   5. Efek suara.
   6. Peta sekolah.
   7. Sistem kode rahasia.
   8. Pesan tersembunyi.
   9. Leaderboard.
   10. Penyimpanan hasil permainan.
   11. Panel panitia.
   12. Waktu keseluruhan permainan.
   13. Banyak jalur berbeda.
   14. Pos palsu.
   15. Pos jebakan.
   16. Sistem skor.
   17. Sistem penalti.
   18. Randomisasi soal.
   19. Randomisasi jalur.
   20. Rekap hasil setiap kelompok.

============================================================ */
```
