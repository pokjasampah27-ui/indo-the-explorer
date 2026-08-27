/* =========================================================
   JELAJAH SEKOLAH
   GAME POS-POSAN EDUKATIF
   SCRIPT.JS FINAL
   ========================================================= */


/* =========================================================
   KONFIGURASI GAME
========================================================= */

const GAME_CONFIG = {

    /* Jumlah pos utama */
    TOTAL_CORRECT_POS: 7,

    /* Pos buntu */
    DEAD_END_POSITIONS: [8, 9, 10],

    /* Waktu jalur buntu */
    DEAD_END_TIME: 5 * 60,

    /* Nama aset */
    ASSET_PATH: "assets/",

    /* Nama file aset */
    POS_IMAGES: {
        1: "pos1.jpg",
        2: "pos2.jpg",
        3: "pos3.jpg",
        4: "pos4.jpg",
        5: "pos5.jpg",
        6: "pos6.jpg",
        7: "pos7.jpg",
        8: "pos8.jpg",
        9: "pos9.jpg",
        10: "pos10.jpg"
    }
};


/* =========================================================
   DATA POS
=========================================================

   Pos 1-7 = jalur benar.

   Pos 8-10 = jalur buntu.

   Alur:
   Pos 1
      ↓ benar
   Pos 2
      ↓ benar
   Pos 3
      ↓ benar
   Pos 4
      ↓ benar
   Pos 5
      ↓ benar
   Pos 6
      ↓ benar
   Pos 7
      ↓
   SELESAI

   Jawaban salah pada pos utama:
      → salah satu pos buntu
      → timer 5 menit
      → kembali ke pos asal
========================================================= */

const POS_DATA = {

    1: {
        title: "POS 1 — GERBANG PETUALANGAN",

        image: "pos1.jpg",

        location:
            "Temukan lokasi Pos 1 sesuai foto petunjuk.",

        clue:
            "Perhatikan lingkungan sekitar dan cari tempat yang memiliki kesesuaian dengan foto pos ini.",

        secretCode:
            "MULAI",

        question:
            "Apa langkah paling tepat sebelum mengikuti sebuah petunjuk dalam permainan pos-posan?",

        options: [
            "Langsung berlari tanpa membaca petunjuk",
            "Membaca dan memahami petunjuk dengan teliti",
            "Mengikuti kelompok lain",
            "Menebak lokasi secara acak"
        ],

        answer: 1,

        explanation:
            "Petunjuk harus dibaca dan dipahami terlebih dahulu agar perjalanan sesuai dengan jalur yang ditentukan.",

        next: 2
    },


    2: {
        title: "POS 2 — JEJAK KEDUA",

        image: "pos2.jpg",

        location:
            "Ikuti petunjuk dari Pos 1 menuju lokasi pada foto.",

        clue:
            "Cari lokasi yang sesuai dengan foto. Setelah menemukan pesan, baca tugas dan kode rahasianya.",

        secretCode:
            "JEJAK",

        question:
            "Mengapa peserta permainan harus bekerja sama dalam sebuah tim?",

        options: [
            "Agar tugas dapat dibebankan kepada satu orang",
            "Agar semua anggota dapat saling membantu menyelesaikan tantangan",
            "Agar dapat bergerak tanpa aturan",
            "Agar dapat mengabaikan petunjuk"
        ],

        answer: 1,

        explanation:
            "Kerja sama membuat anggota tim dapat saling membantu, berbagi informasi, dan menyelesaikan tantangan dengan lebih baik.",

        next: 3
    },


    3: {
        title: "POS 3 — PESAN TERSEMBUNYI",

        image: "pos3.jpg",

        location:
            "Cari lokasi sesuai foto Pos 3.",

        clue:
            "Pesan di lokasi ini menjadi petunjuk penting untuk melanjutkan perjalanan.",

        secretCode:
            "PESAN",

        question:
            "Jika menemukan pesan yang ditujukan untuk tim, apa yang sebaiknya dilakukan?",

        options: [
            "Membawa pulang pesan tersebut",
            "Merusak pesan agar tim lain tidak menemukannya",
            "Membaca, mencatat informasi yang diperlukan, lalu meninggalkannya tetap pada tempatnya",
            "Menyembunyikannya di tempat lain"
        ],

        answer: 2,

        explanation:
            "Pesan permainan harus tetap berada di tempatnya agar semua peserta memperoleh kesempatan bermain secara adil.",

        next: 4
    },


    4: {
        title: "POS 4 — UJI KETELITIAN",

        image: "pos4.jpg",

        location:
            "Temukan lokasi pada foto Pos 4.",

        clue:
            "Jangan terburu-buru. Perhatikan lingkungan dan cari pesan yang disembunyikan.",

        secretCode:
            "TELITI",

        question:
            "Apa yang harus dilakukan jika petunjuk permainan terasa belum jelas?",

        options: [
            "Menebak tanpa berpikir",
            "Membaca kembali petunjuk dan mendiskusikannya dengan anggota tim",
            "Meninggalkan permainan",
            "Mengikuti tim lain"
        ],

        answer: 1,

        explanation:
            "Membaca ulang dan berdiskusi membantu tim memahami petunjuk dengan lebih tepat.",

        next: 5
    },


    5: {
        title: "POS 5 — LANGKAH BERIKUTNYA",

        image: "pos5.jpg",

        location:
            "Ikuti petunjuk dan cari lokasi sesuai foto Pos 5.",

        clue:
            "Setiap pos memiliki pesan yang menjadi bagian dari perjalanan. Pastikan tidak melewatkan petunjuk.",

        secretCode:
            "LANGKAH",

        question:
            "Ketika mendapatkan jawaban berbeda antaranggota tim, apa tindakan yang paling tepat?",

        options: [
            "Memilih secara asal",
            "Berdebat tanpa mendengarkan",
            "Mendiskusikan alasan masing-masing dan menentukan jawaban berdasarkan bukti",
            "Mengikuti jawaban tim lain"
        ],

        answer: 2,

        explanation:
            "Diskusi berdasarkan alasan dan bukti membantu tim mengambil keputusan secara rasional.",

        next: 6
    },


    6: {
        title: "POS 6 — MENDEKATI AKHIR",

        image: "pos6.jpg",

        location:
            "Temukan lokasi Pos 6 berdasarkan foto.",

        clue:
            "Kalian sudah semakin dekat dengan akhir perjalanan. Tetap teliti membaca pesan.",

        secretCode:
            "KOMPAS",

        question:
            "Apa yang paling penting dilakukan ketika waktu permainan semakin terbatas?",

        options: [
            "Panik dan berlari tanpa arah",
            "Tetap tenang, membaca petunjuk, dan membagi tugas dengan baik",
            "Mengabaikan soal",
            "Mengikuti peserta lain"
        ],

        answer: 1,

        explanation:
            "Ketika waktu terbatas, ketenangan, pembagian tugas, dan ketelitian justru semakin penting.",

        next: 7
    },


    7: {
        title: "POS 7 — POS TERAKHIR",

        image: "pos7.jpg",

        location:
            "Inilah pos terakhir pada jalur utama. Temukan pesan dan selesaikan tantangannya.",

        clue:
            "Kalian telah sampai di ujung perjalanan. Pastikan semua tugas terakhir diselesaikan.",

        secretCode:
            "JUARA",

        question:
            "Sikap terbaik setelah berhasil menyelesaikan permainan adalah ...",

        options: [
            "Mengejek tim lain",
            "Merusak lokasi permainan",
            "Menghargai semua peserta dan menjaga lingkungan",
            "Menyembunyikan semua pesan permainan"
        ],

        answer: 2,

        explanation:
            "Permainan yang baik berakhir dengan sikap sportif, saling menghargai, dan menjaga lingkungan.",

        next: null
    },


    /* =====================================================
       POS BUNTU
    ===================================================== */

    8: {
        title: "POS 8 — JALUR BUNTU",

        image: "pos8.jpg",

        location:
            "Kalian masuk ke jalur yang salah.",

        clue:
            "Periksa lokasi ini. Pesan tujuan tidak ditemukan di sini.",

        deadEnd: true,

        returnToPrevious: true
    },


    9: {
        title: "POS 9 — JALUR BUNTU",

        image: "pos9.jpg",

        location:
            "Kalian masuk ke jalur yang salah.",

        clue:
            "Tidak ada pesan lanjutan untuk tim kalian di lokasi ini.",

        deadEnd: true,

        returnToPrevious: true
    },


    10: {
        title: "POS 10 — JALUR BUNTU",

        image: "pos10.jpg",

        location:
            "Kalian masuk ke jalur yang salah.",

        clue:
            "Jalur ini bukan bagian dari perjalanan utama. Tunggu sampai waktu selesai.",

        deadEnd: true,

        returnToPrevious: true
    }

};


/* =========================================================
   STATE GAME
========================================================= */

const gameState = {

    leader: "",

    members: [],

    currentPos: 1,

    previousCorrectPos: 1,

    selectedAnswer: null,

    questionAttempts: 0,

    correctAnswers: 0,

    wrongAnswers: 0,

    deadEndVisits: 0,

    startTime: null,

    finishTime: null,

    deadEndStart: null,

    deadEndTimer: null,

    mainTimer: null,

    secretVerified: false,

    completedPositions: [],

    visitedDeadEnds: [],

    gameStarted: false
};


/* =========================================================
   DOM ELEMENTS
========================================================= */

const $ = (id) => document.getElementById(id);


/* Screens */

const welcomeScreen =
    $("welcomeScreen");

const teamScreen =
    $("teamScreen");

const instructionScreen =
    $("instructionScreen");

const gameScreen =
    $("gameScreen");

const finishScreen =
    $("finishScreen");


/* Buttons */

const startButton =
    $("startButton");

const beginMissionButton =
    $("beginMissionButton");

const secretCodeButton =
    $("secretCodeButton");

const submitAnswerButton =
    $("submitAnswerButton");

const goNextButton =
    $("goNextButton");

const returnFromDeadEndButton =
    $("returnFromDeadEndButton");

const restartButton =
    $("restartButton");


/* Form */

const teamForm =
    $("teamForm");


/* Team */

const leaderName =
    $("leaderName");


const memberInputs = [
    $("member1"),
    $("member2"),
    $("member3"),
    $("member4"),
    $("member5")
];


/* Status */

const teamNameDisplay =
    $("teamNameDisplay");

const currentPosDisplay =
    $("currentPosDisplay");

const timerDisplay =
    $("timerDisplay");

const progressPercent =
    $("progressPercent");

const progressFill =
    $("progressFill");


/* Pos */

const posTitle =
    $("posTitle");

const locationImage =
    $("locationImage");

const imageLabel =
    $("imageLabel");

const clueText =
    $("clueText");


/* Secret */

const secretArea =
    $("secretArea");

const secretCodeInput =
    $("secretCodeInput");

const secretMessage =
    $("secretMessage");


/* Question */

const questionArea =
    $("questionArea");

const questionText =
    $("questionText");

const optionsContainer =
    $("optionsContainer");

const answerFeedback =
    $("answerFeedback");


/* Next */

const nextClueArea =
    $("nextClueArea");

const nextLocationText =
    $("nextLocationText");


/* Dead end */

const deadEndArea =
    $("deadEndArea");

const deadEndTimer =
    $("deadEndTimer");


/* Finish */

const finishLeader =
    $("finishLeader");

const finishPosCount =
    $("finishPosCount");

const finishQuestionCount =
    $("finishQuestionCount");

const finishTime =
    $("finishTime");


/* Modal */

const gameModal =
    $("gameModal");

const modalOverlay =
    $("modalOverlay");

const modalCloseButton =
    $("modalCloseButton");

const modalOkButton =
    $("modalOkButton");

const modalIcon =
    $("modalIcon");

const modalTitle =
    $("modalTitle");

const modalMessage =
    $("modalMessage");


/* Toast */

const toast =
    $("toast");

const toastIcon =
    $("toastIcon");

const toastMessage =
    $("toastMessage");


/* =========================================================
   SCREEN MANAGEMENT
========================================================= */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach((item) => {
            item.classList.remove("active");
        });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout = null;


function showToast(
    message,
    type = "info"
) {

    clearTimeout(toastTimeout);

    toast.className = "toast";

    if (type === "success") {
        toast.classList.add("success");
        toastIcon.textContent = "✅";
    }
    else if (type === "error") {
        toast.classList.add("error");
        toastIcon.textContent = "⚠️";
    }
    else {
        toastIcon.textContent = "💡";
    }

    toastMessage.textContent = message;

    toast.classList.add("show");

    toastTimeout = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);
}


/* =========================================================
   MODAL
========================================================= */

function showModal(
    title,
    message,
    icon = "💡"
) {

    modalTitle.textContent = title;

    modalMessage.textContent = message;

    modalIcon.textContent = icon;

    gameModal.classList.add("show");

    document.body.classList.add("no-scroll");
}


function closeModal() {

    gameModal.classList.remove("show");

    document.body.classList.remove("no-scroll");
}


/* =========================================================
   START
========================================================= */

startButton.addEventListener(
    "click",
    () => {

        showScreen(teamScreen);

        setTimeout(() => {
            leaderName.focus();
        }, 300);

    }
);


/* =========================================================
   FORM TIM
========================================================= */

teamForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        const leader =
            leaderName.value.trim();

        const members =
            memberInputs.map(
                input => input.value.trim()
            );


        if (!leader) {

            showToast(
                "Nama ketua belum diisi.",
                "error"
            );

            leaderName.focus();

            return;
        }


        const emptyMember =
            members.findIndex(
                member => !member
            );


        if (emptyMember !== -1) {

            showToast(
                `Nama anggota ${emptyMember + 1} belum diisi.`,
                "error"
            );

            memberInputs[emptyMember].focus();

            return;
        }


        gameState.leader =
            leader;

        gameState.members =
            members;


        teamNameDisplay.textContent =
            leader;


        showScreen(
            instructionScreen
        );

    }
);


/* =========================================================
   MULAI MISI
========================================================= */

beginMissionButton.addEventListener(
    "click",
    () => {

        startGame();

    }
);


function startGame() {

    resetGameState();

    gameState.gameStarted = true;

    gameState.startTime =
        Date.now();

    startMainTimer();

    showScreen(gameScreen);

    loadPosition(1);

    showToast(
        "Petualangan dimulai! Temukan Pos 1.",
        "success"
    );
}


/* =========================================================
   RESET STATE
========================================================= */

function resetGameState() {

    clearInterval(
        gameState.deadEndTimer
    );

    clearInterval(
        gameState.mainTimer
    );


    gameState.currentPos = 1;

    gameState.previousCorrectPos = 1;

    gameState.selectedAnswer = null;

    gameState.questionAttempts = 0;

    gameState.correctAnswers = 0;

    gameState.wrongAnswers = 0;

    gameState.deadEndVisits = 0;

    gameState.startTime = null;

    gameState.finishTime = null;

    gameState.deadEndStart = null;

    gameState.secretVerified = false;

    gameState.completedPositions = [];

    gameState.visitedDeadEnds = [];

    gameState.gameStarted = false;
}


/* =========================================================
   MAIN TIMER
========================================================= */

function startMainTimer() {

    clearInterval(
        gameState.mainTimer
    );


    gameState.mainTimer =
        setInterval(() => {

            if (!gameState.startTime) {
                return;
            }


            const elapsed =
                Date.now() -
                gameState.startTime;


            timerDisplay.textContent =
                formatElapsedTime(
                    elapsed
                );

        }, 1000);
}


/* =========================================================
   LOAD POS
========================================================= */

function loadPosition(
    positionNumber
) {

    const pos =
        POS_DATA[positionNumber];


    if (!pos) {

        showToast(
            "Data pos tidak ditemukan.",
            "error"
        );

        return;
    }


    gameState.currentPos =
        positionNumber;


    gameState.secretVerified =
        false;

    gameState.selectedAnswer =
        null;


    /* Jika pos buntu */

    if (pos.deadEnd) {

        loadDeadEnd(
            positionNumber
        );

        return;
    }


    /* Pos normal */

    loadCorrectPosition(
        positionNumber
    );
}


/* =========================================================
   LOAD POS JALUR BENAR
========================================================= */

function loadCorrectPosition(
    positionNumber
) {

    const pos =
        POS_DATA[positionNumber];


    stopDeadEndTimer();


    posTitle.textContent =
        pos.title;


    locationImage.src =
        GAME_CONFIG.ASSET_PATH +
        pos.image;


    locationImage.alt =
        `Foto ${pos.title}`;


    imageLabel.textContent =
        `Lokasi ${positionNumber}`;


    clueText.textContent =
        pos.clue;


    currentPosDisplay.textContent =
        `${positionNumber} / ${GAME_CONFIG.TOTAL_CORRECT_POS}`;


    updateProgress(
        positionNumber
    );


    /* Reset area */

    nextClueArea.classList.add(
        "hidden"
    );

    deadEndArea.classList.add(
        "hidden"
    );

    questionArea.classList.remove(
        "hidden"
    );

    secretArea.classList.remove(
        "hidden"
    );


    secretCodeInput.value =
        "";

    secretMessage.textContent =
        "";


    answerFeedback.textContent =
        "";

    answerFeedback.className =
        "answer-feedback";


    submitAnswerButton.disabled =
        true;


    /* Tampilkan soal */

    questionText.textContent =
        pos.question;


    renderOptions(
        pos.options
    );


    /*
       Kode rahasia wajib diverifikasi
       sebelum soal dapat dijawab.
    */

    setSecretLockedState(
        true
    );
}


/* =========================================================
   SECRET CODE
========================================================= */

function setSecretLockedState(
    locked
) {

    const buttons =
        optionsContainer.querySelectorAll(
            ".answer-option"
        );


    buttons.forEach(
        button => {
            button.disabled =
                locked;
        }
    );


    submitAnswerButton.disabled =
        locked ||
        gameState.selectedAnswer === null;
}


secretCodeButton.addEventListener(
    "click",
    verifySecretCode
);


secretCodeInput.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter"
        ) {

            event.preventDefault();

            verifySecretCode();
        }
    }
);


function verifySecretCode() {

    const position =
        gameState.currentPos;


    const pos =
        POS_DATA[position];


    if (!pos || pos.deadEnd) {
        return;
    }


    const entered =
        secretCodeInput.value
            .trim()
            .toUpperCase();


    if (!entered) {

        secretMessage.textContent =
            "Masukkan kode rahasia terlebih dahulu.";

        return;
    }


    if (
        entered ===
        pos.secretCode
            .toUpperCase()
    ) {

        gameState.secretVerified =
            true;


        secretMessage.textContent =
            "✓ Kode benar. Tantangan dapat dikerjakan.";


        secretMessage.style.color =
            "#176b5f";


        setSecretLockedState(
            false
        );


        showToast(
            "Kode rahasia benar!",
            "success"
        );


        optionsContainer
            .querySelectorAll(
                ".answer-option"
            )
            .forEach(
                button => {
                    button.disabled =
                        false;
                }
            );

    }
    else {

        gameState.secretVerified =
            false;


        secretMessage.textContent =
            "✕ Kode salah. Periksa kembali pesan di lokasi.";


        secretMessage.style.color =
            "#b84b34";


        setSecretLockedState(
            true
        );


        showToast(
            "Kode rahasia salah.",
            "error"
        );
    }
}


/* =========================================================
   RENDER PILIHAN
========================================================= */

function renderOptions(
    options
) {

    optionsContainer.innerHTML =
        "";


    options.forEach(
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
                    ${escapeHtml(option)}
                </span>
            `;


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        index
                    );

                }
            );


            optionsContainer.appendChild(
                button
            );

        }
    );
}


/* =========================================================
   PILIH JAWABAN
========================================================= */

function selectAnswer(
    answerIndex
) {

    if (
        !gameState.secretVerified
    ) {

        showToast(
            "Masukkan kode rahasia terlebih dahulu.",
            "error"
        );

        return;
    }


    gameState.selectedAnswer =
        answerIndex;


    optionsContainer
        .querySelectorAll(
            ".answer-option"
        )
        .forEach(
            (button, index) => {

                button.classList.toggle(
                    "selected",
                    index === answerIndex
                );

            }
        );


    submitAnswerButton.disabled =
        false;
}


/* =========================================================
   SUBMIT JAWABAN
========================================================= */

submitAnswerButton.addEventListener(
    "click",
    checkAnswer
);


function checkAnswer() {

    if (
        gameState.selectedAnswer ===
        null
    ) {

        showToast(
            "Pilih salah satu jawaban.",
            "error"
        );

        return;
    }


    if (
        !gameState.secretVerified
    ) {

        showToast(
            "Kode rahasia belum diverifikasi.",
            "error"
        );

        return;
    }


    const position =
        gameState.currentPos;


    const pos =
        POS_DATA[position];


    if (!pos) {
        return;
    }


    gameState.questionAttempts++;


    const selected =
        gameState.selectedAnswer;


    const correct =
        pos.answer;


    const optionButtons =
        optionsContainer.querySelectorAll(
            ".answer-option"
        );


    optionButtons.forEach(
        button => {
            button.disabled =
                true;
        }
    );


    submitAnswerButton.disabled =
        true;


    /* =========================================
       JAWABAN BENAR
    ========================================= */

    if (
        selected === correct
    ) {

        gameState.correctAnswers++;


        optionButtons[correct]
            .classList.add(
                "correct"
            );


        answerFeedback.className =
            "answer-feedback correct";


        answerFeedback.innerHTML =
            `✓ <strong>Jawaban benar!</strong><br>${escapeHtml(pos.explanation)}`;


        markPositionCompleted(
            position
        );


        setTimeout(() => {

            showNextClue(
                position
            );

        }, 900);


        return;
    }


    /* =========================================
       JAWABAN SALAH
    ========================================= */

    gameState.wrongAnswers++;


    optionButtons[selected]
        .classList.add(
            "wrong"
        );


    optionButtons[correct]
        .classList.add(
            "correct"
        );


    answerFeedback.className =
        "answer-feedback wrong";


    answerFeedback.innerHTML =
        `✕ <strong>Jawaban belum tepat.</strong> Kalian diarahkan ke jalur lain.`;


    /*
       Pilih pos buntu secara bergantian
       agar ketiga pos buntu dapat digunakan.
    */

    const deadEnd =
        chooseDeadEnd();


    setTimeout(() => {

        showDeadEndRoute(
            deadEnd
        );

    }, 1200);
}


/* =========================================================
   POSISI SELESAI
========================================================= */

function markPositionCompleted(
    position
) {

    if (
        !gameState.completedPositions
            .includes(position)
    ) {

        gameState.completedPositions
            .push(position);
    }
}


/* =========================================================
   NEXT CLUE
========================================================= */

function showNextClue(
    position
) {

    const pos =
        POS_DATA[position];


    questionArea.classList.add(
        "hidden"
    );

    secretArea.classList.add(
        "hidden"
    );


    nextClueArea.classList.remove(
        "hidden"
    );


    if (
        pos.next === null
    ) {

        nextLocationText.textContent =
            "MISI SELESAI";

        goNextButton.textContent =
            "🏆 SELESAIKAN MISI";

        goNextButton.dataset.next =
            "finish";

        return;
    }


    nextLocationText.textContent =
        POS_DATA[pos.next].title;


    goNextButton.textContent =
        "🏃 MENUJU POS BERIKUTNYA";


    goNextButton.dataset.next =
        String(pos.next);
}


/* =========================================================
   NEXT BUTTON
========================================================= */

goNextButton.addEventListener(
    "click",
    () => {

        const next =
            goNextButton.dataset.next;


        if (
            next === "finish"
        ) {

            finishGame();

            return;
        }


        const nextPosition =
            Number(next);


        gameState.previousCorrectPos =
            nextPosition;


        loadPosition(
            nextPosition
        );

    }
);


/* =========================================================
   MEMILIH POS BUNTU
========================================================= */

function chooseDeadEnd() {

    const deadEnds =
        GAME_CONFIG.DEAD_END_POSITIONS;


    /*
       Gunakan pos buntu bergantian.
    */

    const index =
        gameState.deadEndVisits %
        deadEnds.length;


    const selected =
        deadEnds[index];


    gameState.deadEndVisits++;


    if (
        !gameState.visitedDeadEnds
            .includes(selected)
    ) {

        gameState.visitedDeadEnds
            .push(selected);
    }


    return selected;
}


/* =========================================================
   MASUK JALUR BUNTU
========================================================= */

function showDeadEndRoute(
    deadEndPosition
) {

    const originalPosition =
        gameState.currentPos;


    /*
       Simpan pos yang benar.
       Ini adalah pos yang harus
       dikunjungi kembali.
    */

    gameState.previousCorrectPos =
        originalPosition;


    gameState.currentPos =
        deadEndPosition;


    loadDeadEnd(
        deadEndPosition
    );
}


/* =========================================================
   LOAD DEAD END
========================================================= */

function loadDeadEnd(
    positionNumber
) {

    const pos =
        POS_DATA[positionNumber];


    if (!pos) {
        return;
    }


    posTitle.textContent =
        pos.title;


    locationImage.src =
        GAME_CONFIG.ASSET_PATH +
        pos.image;


    locationImage.alt =
        `Foto ${pos.title}`;


    imageLabel.textContent =
        "JALUR BUNTU";


    clueText.textContent =
        pos.clue;


    currentPosDisplay.textContent =
        `BUNTU ${positionNumber}`;


    questionArea.classList.add(
        "hidden"
    );


    secretArea.classList.add(
        "hidden"
    );


    nextClueArea.classList.add(
        "hidden"
    );


    deadEndArea.classList.remove(
        "hidden"
    );


    startDeadEndTimer();
}


/* =========================================================
   TIMER JALUR BUNTU
========================================================= */

function startDeadEndTimer() {

    stopDeadEndTimer();


    gameState.deadEndStart =
        Date.now();


    updateDeadEndTimer();


    gameState.deadEndTimer =
        setInterval(
            updateDeadEndTimer,
            1000
        );
}


function updateDeadEndTimer() {

    if (
        !gameState.deadEndStart
    ) {
        return;
    }


    const elapsed =
        Math.floor(
            (
                Date.now() -
                gameState.deadEndStart
            ) / 1000
        );


    const remaining =
        Math.max(
            0,
            GAME_CONFIG.DEAD_END_TIME -
            elapsed
        );


    deadEndTimer.textContent =
        formatCountdown(
            remaining
        );


    if (
        remaining <= 30
    ) {

        deadEndTimer.classList.add(
            "danger"
        );

    }
    else {

        deadEndTimer.classList.remove(
            "danger"
        );

    }


    if (
        remaining <= 0
    ) {

        stopDeadEndTimer();


        returnToPreviousPosition(
            true
        );
    }
}


/* =========================================================
   STOP DEAD END TIMER
========================================================= */

function stopDeadEndTimer() {

    if (
        gameState.deadEndTimer
    ) {

        clearInterval(
            gameState.deadEndTimer
        );

        gameState.deadEndTimer =
            null;
    }


    gameState.deadEndStart =
        null;
}


/* =========================================================
   RETURN DARI POS BUNTU
========================================================= */

returnFromDeadEndButton.addEventListener(
    "click",
    () => {

        returnToPreviousPosition(
            false
        );

    }
);


function returnToPreviousPosition(
    automatic = false
) {

    stopDeadEndTimer();


    const previous =
        gameState.previousCorrectPos ||
        1;


    if (automatic) {

        showModal(
            "Waktu Habis!",
            `Pesan tidak ditemukan dalam 5 menit. Tim kembali ke ${POS_DATA[previous].title}. Jawab kembali tantangan dengan lebih teliti.`,
            "⏰"
        );

    }
    else {

        showToast(
            "Kembali ke pos sebelumnya.",
            "info"
        );
    }


    deadEndArea.classList.add(
        "hidden"
    );


    setTimeout(
        () => {

            loadPosition(
                previous
            );

        },
        automatic ? 500 : 100
    );
}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress(
    position
) {

    const percent =
        Math.round(
            (
                (position - 1) /
                GAME_CONFIG.TOTAL_CORRECT_POS
            ) * 100
        );


    progressPercent.textContent =
        `${percent}%`;


    progressFill.style.width =
        `${percent}%`;
}


/* =========================================================
   FINISH
========================================================= */

function finishGame() {

    stopDeadEndTimer();


    clearInterval(
        gameState.mainTimer
    );


    gameState.finishTime =
        Date.now();


    const totalElapsed =
        gameState.finishTime -
        gameState.startTime;


    finishLeader.textContent =
        gameState.leader;


    finishPosCount.textContent =
        gameState.completedPositions.length;


    finishQuestionCount.textContent =
        gameState.questionAttempts;


    finishTime.textContent =
        formatElapsedTime(
            totalElapsed
        );


    showScreen(
        finishScreen
    );


    showToast(
        "Selamat! Misi berhasil diselesaikan.",
        "success"
    );
}


/* =========================================================
   RESTART
========================================================= */

restartButton.addEventListener(
    "click",
    () => {

        clearInterval(
            gameState.mainTimer
        );

        clearInterval(
            gameState.deadEndTimer
        );


        showScreen(
            welcomeScreen
        );

    }
);


/* =========================================================
   MODAL EVENTS
========================================================= */

modalCloseButton.addEventListener(
    "click",
    closeModal
);


modalOkButton.addEventListener(
    "click",
    closeModal
);


modalOverlay.addEventListener(
    "click",
    closeModal
);


/* =========================================================
   FORMAT WAKTU
========================================================= */

function formatCountdown(
    totalSeconds
) {

    const minutes =
        Math.floor(
            totalSeconds / 60
        );


    const seconds =
        totalSeconds % 60;


    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0")
    );
}


function formatElapsedTime(
    milliseconds
) {

    const totalSeconds =
        Math.floor(
            milliseconds / 1000
        );


    const hours =
        Math.floor(
            totalSeconds / 3600
        );


    const minutes =
        Math.floor(
            (
                totalSeconds % 3600
            ) / 60
        );


    const seconds =
        totalSeconds % 60;


    if (hours > 0) {

        return (
            String(hours).padStart(2, "0") +
            ":" +
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0")
        );
    }


    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0")
    );
}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHtml(
    value
) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


/* =========================================================
   ERROR FOTO
========================================================= */

locationImage.addEventListener(
    "error",
    () => {

        locationImage.src =
            createImagePlaceholder(
                "Foto pos tidak ditemukan"
            );

    }
);


function createImagePlaceholder(
    text
) {

    const svg =
        `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="500"
            viewBox="0 0 800 500"
        >

            <rect
                width="800"
                height="500"
                fill="#dce3eb"
            />

            <text
                x="400"
                y="245"
                text-anchor="middle"
                font-family="Arial"
                font-size="28"
                fill="#64748b"
            >
                ${text}
            </text>

        </svg>
        `;


    return (
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg)
    );
}


/* =========================================================
   PRELOAD FOTO
========================================================= */

function preloadImages() {

    Object.values(
        GAME_CONFIG.POS_IMAGES
    )
    .forEach(
        filename => {

            const image =
                new Image();

            image.src =
                GAME_CONFIG.ASSET_PATH +
                filename;

        }
    );
}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        preloadImages();


        /*
           Pastikan halaman awal
           selalu Welcome Screen.
        */

        showScreen(
            welcomeScreen
        );


        /*
           Progress awal.
        */

        updateProgress(1);


        /*
           Timer awal.
        */

        timerDisplay.textContent =
            "00:00";


        deadEndTimer.textContent =
            "05:00";

    }
);
