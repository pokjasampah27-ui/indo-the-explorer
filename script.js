/* =========================================================
   JELAJAH SEKOLAH
   GAME POS-POSAN
   SCRIPT.JS FINAL
   TANPA AUDIO
   ========================================================= */


/* =========================================================
   KONFIGURASI ASET
   ========================================================= */

const ASSET_FOLDER = "./assets/";


const POS_IMAGES = {
    1: "pos1.jpeg",
    2: "pos2.jpeg",
    3: "pos3.jpeg",
    4: "pos4.jpeg",
    5: "pos5.jpeg",
    6: "pos6.jpeg",
    7: "pos7.jpeg",
    8: "pos8.jpeg",
    9: "pos9.jpeg",
    10: "pos10.jpeg"
};


/* =========================================================
   DATA POS
========================================================= */

const POS_DATA = {

    1: {
        title: "POS 1 — GERBANG PETUALANGAN",

        image: "pos1.jpeg",

        clue:
            "Temukan lokasi sesuai foto Pos 1. Setelah sampai, cari pesan yang disembunyikan.",

        secretCode: "MULAI",

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

        image: "pos2.jpeg",

        clue:
            "Ikuti petunjuk dari Pos 1 menuju lokasi pada foto Pos 2.",

        secretCode: "JEJAK",

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
            "Kerja sama membuat anggota tim dapat saling membantu dan menyelesaikan tantangan dengan lebih baik.",

        next: 3
    },


    3: {
        title: "POS 3 — PESAN TERSEMBUNYI",

        image: "pos3.jpeg",

        clue:
            "Cari lokasi sesuai foto Pos 3. Temukan pesan yang disembunyikan.",

        secretCode: "PESAN",

        question:
            "Jika menemukan pesan yang ditujukan untuk tim, apa yang sebaiknya dilakukan?",

        options: [
            "Membawa pulang pesan tersebut",
            "Merusak pesan agar tim lain tidak menemukannya",
            "Membaca informasi yang diperlukan lalu meninggalkannya di tempat",
            "Menyembunyikannya di tempat lain"
        ],

        answer: 2,

        explanation:
            "Pesan permainan harus tetap berada di tempatnya agar semua peserta dapat bermain secara adil.",

        next: 4
    },


    4: {
        title: "POS 4 — UJI KETELITIAN",

        image: "pos4.jpeg",

        clue:
            "Perhatikan lingkungan sekitar dan cari pesan sesuai petunjuk.",

        secretCode: "TELITI",

        question:
            "Apa yang harus dilakukan jika petunjuk permainan terasa belum jelas?",

        options: [
            "Menebak tanpa berpikir",
            "Membaca kembali petunjuk dan mendiskusikannya",
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

        image: "pos5.jpeg",

        clue:
            "Temukan lokasi Pos 5 berdasarkan foto dan petunjuk perjalanan.",

        secretCode: "LANGKAH",

        question:
            "Ketika mendapatkan jawaban berbeda antaranggota tim, apa tindakan yang paling tepat?",

        options: [
            "Memilih secara asal",
            "Berdebat tanpa mendengarkan",
            "Mendiskusikan alasan masing-masing berdasarkan bukti",
            "Mengikuti jawaban tim lain"
        ],

        answer: 2,

        explanation:
            "Diskusi berdasarkan alasan dan bukti membantu tim mengambil keputusan yang tepat.",

        next: 6
    },


    6: {
        title: "POS 6 — MENDEKATI AKHIR",

        image: "pos6.jpeg",

        clue:
            "Kalian semakin dekat dengan akhir perjalanan. Tetap teliti membaca pesan.",

        secretCode: "KOMPAS",

        question:
            "Apa yang paling penting dilakukan ketika waktu permainan semakin terbatas?",

        options: [
            "Panik dan berlari tanpa arah",
            "Tetap tenang, membaca petunjuk, dan membagi tugas",
            "Mengabaikan soal",
            "Mengikuti peserta lain"
        ],

        answer: 1,

        explanation:
            "Ketika waktu terbatas, ketenangan, pembagian tugas, dan ketelitian sangat penting.",

        next: 7
    },


    7: {
        title: "POS 7 — POS TERAKHIR",

        image: "pos7.jpeg",

        clue:
            "Ini adalah pos terakhir pada jalur utama. Temukan pesan dan selesaikan tantangannya.",

        secretCode: "JUARA",

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

        image: "pos8.jpeg",

        clue:
            "Kalian masuk ke jalur yang salah. Tidak ada pesan lanjutan di lokasi ini.",

        deadEnd: true
    },


    9: {
        title: "POS 9 — JALUR BUNTU",

        image: "pos9.jpeg",

        clue:
            "Kalian masuk ke jalur yang salah. Periksa lokasi, tetapi pesan tujuan tidak ditemukan.",

        deadEnd: true
    },


    10: {
        title: "POS 10 — JALUR BUNTU",

        image: "pos10.jpeg",

        clue:
            "Jalur ini bukan bagian dari perjalanan utama. Tidak ada pesan lanjutan.",

        deadEnd: true
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

    completedPositions: [],

    visitedDeadEnds: [],

    startTime: null,

    finishTime: null,

    deadEndStart: null,

    deadEndTimer: null,

    mainTimer: null,

    secretVerified: false,

    gameStarted: false
};


/* =========================================================
   HELPER
========================================================= */

function $(id) {
    return document.getElementById(id);
}


/* =========================================================
   DOM
========================================================= */

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


const teamForm =
    $("teamForm");

const leaderName =
    $("leaderName");


const memberInputs = [
    $("member1"),
    $("member2"),
    $("member3"),
    $("member4"),
    $("member5")
];


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


const posTitle =
    $("posTitle");

const locationImage =
    $("locationImage");

const imageLabel =
    $("imageLabel");

const clueText =
    $("clueText");


const secretArea =
    $("secretArea");

const secretCodeInput =
    $("secretCodeInput");

const secretMessage =
    $("secretMessage");


const questionArea =
    $("questionArea");

const questionText =
    $("questionText");

const optionsContainer =
    $("optionsContainer");

const answerFeedback =
    $("answerFeedback");


const nextClueArea =
    $("nextClueArea");

const nextLocationText =
    $("nextLocationText");


const deadEndArea =
    $("deadEndArea");

const deadEndTimer =
    $("deadEndTimer");


const finishLeader =
    $("finishLeader");

const finishPosCount =
    $("finishPosCount");

const finishQuestionCount =
    $("finishQuestionCount");

const finishTime =
    $("finishTime");


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


const toast =
    $("toast");

const toastIcon =
    $("toastIcon");

const toastMessage =
    $("toastMessage");


/* =========================================================
   SCREEN
========================================================= */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(item => {

            item.classList.remove(
                "active"
            );

        });


    if (screen) {

        screen.classList.add(
            "active"
        );
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout;


function showToast(
    message,
    type = "info"
) {

    clearTimeout(
        toastTimeout
    );


    toast.className =
        "toast";


    if (type === "success") {

        toast.classList.add(
            "success"
        );

        toastIcon.textContent =
            "✅";

    }
    else if (type === "error") {

        toast.classList.add(
            "error"
        );

        toastIcon.textContent =
            "⚠️";

    }
    else {

        toastIcon.textContent =
            "💡";
    }


    toastMessage.textContent =
        message;


    toast.classList.add(
        "show"
    );


    toastTimeout =
        setTimeout(
            () => {

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

function showModal(
    title,
    message,
    icon = "💡"
) {

    modalTitle.textContent =
        title;

    modalMessage.textContent =
        message;

    modalIcon.textContent =
        icon;

    gameModal.classList.add(
        "show"
    );

    document.body.classList.add(
        "no-scroll"
    );
}


function closeModal() {

    gameModal.classList.remove(
        "show"
    );

    document.body.classList.remove(
        "no-scroll"
    );
}


/* =========================================================
   MULAI
========================================================= */

startButton.addEventListener(
    "click",
    () => {

        showScreen(
            teamScreen
        );

        setTimeout(
            () => {
                leaderName.focus();
            },
            300
        );

    }
);


/* =========================================================
   FORM TIM
========================================================= */

teamForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const leader =
            leaderName.value.trim();


        const members =
            memberInputs.map(
                input =>
                    input.value.trim()
            );


        if (!leader) {

            showToast(
                "Nama ketua belum diisi.",
                "error"
            );

            leaderName.focus();

            return;
        }


        const emptyIndex =
            members.findIndex(
                member =>
                    member === ""
            );


        if (emptyIndex !== -1) {

            showToast(
                `Nama anggota ${emptyIndex + 1} belum diisi.`,
                "error"
            );

            memberInputs[
                emptyIndex
            ].focus();

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
    startGame
);


function startGame() {

    resetGameState();


    gameState.gameStarted =
        true;


    gameState.startTime =
        Date.now();


    teamNameDisplay.textContent =
        gameState.leader;


    startMainTimer();


    showScreen(
        gameScreen
    );


    loadPosition(1);


    showToast(
        "Petualangan dimulai!",
        "success"
    );
}


/* =========================================================
   RESET
========================================================= */

function resetGameState() {

    clearInterval(
        gameState.mainTimer
    );

    clearInterval(
        gameState.deadEndTimer
    );


    gameState.currentPos =
        1;

    gameState.previousCorrectPos =
        1;

    gameState.selectedAnswer =
        null;

    gameState.questionAttempts =
        0;

    gameState.correctAnswers =
        0;

    gameState.wrongAnswers =
        0;

    gameState.deadEndVisits =
        0;

    gameState.completedPositions =
        [];

    gameState.visitedDeadEnds =
        [];

    gameState.startTime =
        null;

    gameState.finishTime =
        null;

    gameState.deadEndStart =
        null;

    gameState.deadEndTimer =
        null;

    gameState.mainTimer =
        null;

    gameState.secretVerified =
        false;

    gameState.gameStarted =
        false;
}


/* =========================================================
   TIMER UTAMA
========================================================= */

function startMainTimer() {

    clearInterval(
        gameState.mainTimer
    );


    gameState.mainTimer =
        setInterval(
            () => {

                if (
                    !gameState.startTime
                ) {
                    return;
                }


                const elapsed =
                    Date.now() -
                    gameState.startTime;


                timerDisplay.textContent =
                    formatElapsedTime(
                        elapsed
                    );

            },
            1000
        );
}


/* =========================================================
   LOAD POSITION
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


    gameState.selectedAnswer =
        null;


    gameState.secretVerified =
        false;


    if (pos.deadEnd) {

        loadDeadEnd(
            positionNumber
        );

        return;
    }


    loadCorrectPosition(
        positionNumber
    );
}


/* =========================================================
   LOAD POS BENAR
========================================================= */

function loadCorrectPosition(
    positionNumber
) {

    const pos =
        POS_DATA[positionNumber];


    stopDeadEndTimer();


    posTitle.textContent =
        pos.title;


    /*
       =====================================================
       BAGIAN FOTO
       =====================================================
    */

    const imagePath =
        ASSET_FOLDER +
        POS_IMAGES[positionNumber];


    locationImage.src =
        imagePath;


    locationImage.alt =
        `Foto lokasi ${pos.title}`;


    imageLabel.textContent =
        `Lokasi Pos ${positionNumber}`;


    /*
       Jika foto belum ditemukan
    */

    locationImage.onerror =
        function () {

            console.error(
                "Foto tidak ditemukan:",
                imagePath
            );


            this.onerror =
                null;


            this.src =
                createImagePlaceholder(
                    `Foto Pos ${positionNumber} tidak ditemukan`
                );

        };


    clueText.textContent =
        pos.clue;


    currentPosDisplay.textContent =
        `${positionNumber} / 7`;


    updateProgress(
        positionNumber
    );


    /*
       Tampilkan area
    */

    questionArea.classList.remove(
        "hidden"
    );

    secretArea.classList.remove(
        "hidden"
    );

    nextClueArea.classList.add(
        "hidden"
    );

    deadEndArea.classList.add(
        "hidden"
    );


    /*
       Reset kode
    */

    secretCodeInput.value =
        "";

    secretMessage.textContent =
        "";


    /*
       Reset soal
    */

    answerFeedback.textContent =
        "";

    answerFeedback.className =
        "answer-feedback";


    questionText.textContent =
        pos.question;


    renderOptions(
        pos.options
    );


    submitAnswerButton.disabled =
        true;


    setSecretLockedState(
        true
    );
}


/* =========================================================
   KODE RAHASIA
========================================================= */

function setSecretLockedState(
    locked
) {

    optionsContainer
        .querySelectorAll(
            ".answer-option"
        )
        .forEach(
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
    event => {

        if (
            event.key === "Enter"
        ) {

            event.preventDefault();

            verifySecretCode();

        }

    }
);


function verifySecretCode() {

    const pos =
        POS_DATA[
            gameState.currentPos
        ];


    if (
        !pos ||
        pos.deadEnd
    ) {
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


        setSecretLockedState(
            false
        );


        showToast(
            "Kode rahasia benar!",
            "success"
        );

    }
    else {

        gameState.secretVerified =
            false;


        secretMessage.textContent =
            "✕ Kode salah. Periksa kembali pesan di lokasi.";


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
   PILIHAN JAWABAN
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


            const letter =
                String.fromCharCode(
                    65 + index
                );


            button.innerHTML = `
                <span class="option-letter">
                    ${letter}
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
   PERIKSA JAWABAN
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


    gameState.questionAttempts++;


    const selected =
        gameState.selectedAnswer;


    const correct =
        pos.answer;


    const buttons =
        optionsContainer
            .querySelectorAll(
                ".answer-option"
            );


    buttons.forEach(
        button => {
            button.disabled =
                true;
        }
    );


    submitAnswerButton.disabled =
        true;


    /*
       =====================================================
       BENAR
       =====================================================
    */

    if (
        selected === correct
    ) {

        gameState.correctAnswers++;


        buttons[correct]
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


        setTimeout(
            () => {

                showNextClue(
                    position
                );

            },
            900
        );


        return;
    }


    /*
       =====================================================
       SALAH
       =====================================================
    */

    gameState.wrongAnswers++;


    buttons[selected]
        .classList.add(
            "wrong"
        );


    buttons[correct]
        .classList.add(
            "correct"
        );


    answerFeedback.className =
        "answer-feedback wrong";


    answerFeedback.innerHTML =
        "✕ <strong>Jawaban belum tepat.</strong> Kalian masuk ke jalur lain.";


    const deadEnd =
        chooseDeadEnd();


    setTimeout(
        () => {

            showDeadEndRoute(
                deadEnd
            );

        },
        1200
    );
}


/* =========================================================
   POS SELESAI
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
   PETUNJUK BERIKUTNYA
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
        POS_DATA[
            pos.next
        ].title;


    goNextButton.textContent =
        "🏃 MENUJU POS BERIKUTNYA";


    goNextButton.dataset.next =
        String(
            pos.next
        );
}


/* =========================================================
   MENUJU POS BERIKUTNYA
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
   PILIH POS BUNTU
========================================================= */

function chooseDeadEnd() {

    const deadEnds = [
        8,
        9,
        10
    ];


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
   JALUR BUNTU
========================================================= */

function showDeadEndRoute(
    deadEndPosition
) {

    /*
       Simpan posisi tempat jawaban salah.
    */

    gameState.previousCorrectPos =
        gameState.currentPos;


    gameState.currentPos =
        deadEndPosition;


    loadDeadEnd(
        deadEndPosition
    );
}


/* =========================================================
   LOAD POS BUNTU
========================================================= */

function loadDeadEnd(
    positionNumber
) {

    const pos =
        POS_DATA[positionNumber];


    if (!pos) {
        return;
    }


    stopDeadEndTimer();


    posTitle.textContent =
        pos.title;


    /*
       FOTO POS BUNTU
    */

    const imagePath =
        ASSET_FOLDER +
        POS_IMAGES[positionNumber];


    locationImage.src =
        imagePath;


    locationImage.alt =
        `Foto ${pos.title}`;


    imageLabel.textContent =
        "JALUR BUNTU";


    locationImage.onerror =
        function () {

            console.error(
                "Foto tidak ditemukan:",
                imagePath
            );


            this.onerror =
                null;


            this.src =
                createImagePlaceholder(
                    `Foto Pos ${positionNumber} tidak ditemukan`
                );

        };


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
   TIMER 5 MENIT
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
            300 - elapsed
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
   STOP TIMER BUNTU
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
   KEMBALI
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
    automatic
) {

    stopDeadEndTimer();


    const previous =
        gameState.previousCorrectPos ||
        1;


    if (automatic) {

        showModal(
            "Waktu Habis!",
            `Pesan tidak ditemukan dalam 5 menit. Kalian kembali ke ${POS_DATA[previous].title}. Silakan jawab kembali tantangan.`,
            "⏰"
        );

    }
    else {

        showToast(
            "Kembali ke pos sebelumnya.",
            "info"
        );
    }


    setTimeout(
        () => {

            loadPosition(
                previous
            );

        },
        automatic ? 400 : 100
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
                7
            ) * 100
        );


    progressPercent.textContent =
        `${percent}%`;


    progressFill.style.width =
        `${percent}%`;
}


/* =========================================================
   SELESAI
========================================================= */

function finishGame() {

    stopDeadEndTimer();


    clearInterval(
        gameState.mainTimer
    );


    gameState.finishTime =
        Date.now();


    const elapsed =
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
            elapsed
        );


    showScreen(
        finishScreen
    );


    showToast(
        "Misi berhasil diselesaikan!",
        "success"
    );
}


/* =========================================================
   MAIN LAGI
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
   MODAL
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
   FORMAT COUNTDOWN
========================================================= */

function formatCountdown(
    seconds
) {

    const minutes =
        Math.floor(
            seconds / 60
        );


    const secs =
        seconds % 60;


    return (
        String(minutes)
            .padStart(2, "0") +
        ":" +
        String(secs)
            .padStart(2, "0")
    );
}


/* =========================================================
   FORMAT WAKTU
========================================================= */

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
            String(hours)
                .padStart(2, "0") +
            ":" +
            String(minutes)
                .padStart(2, "0") +
            ":" +
            String(seconds)
                .padStart(2, "0")
        );
    }


    return (
        String(minutes)
            .padStart(2, "0") +
        ":" +
        String(seconds)
            .padStart(2, "0")
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
   PLACEHOLDER JIKA FOTO TIDAK ADA
========================================================= */

function createImagePlaceholder(
    text
) {

    const svg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="500"
            viewBox="0 0 800 500"
        >

            <rect
                width="800"
                height="500"
                fill="#e5e7eb"
            />

            <text
                x="400"
                y="245"
                text-anchor="middle"
                font-family="Arial"
                font-size="28"
                fill="#64748b"
            >
                ${escapeHtml(text)}
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

    Object.keys(
        POS_IMAGES
    )
    .forEach(
        position => {

            const img =
                new Image();


            img.src =
                ASSET_FOLDER +
                POS_IMAGES[position];


            img.onload =
                () => {

                    console.log(
                        `✓ Foto Pos ${position} berhasil dimuat:`,
                        img.src
                    );

                };


            img.onerror =
                () => {

                    console.error(
                        `✕ Foto Pos ${position} tidak ditemukan:`,
                        img.src
                    );

                };

        }
    );
}


/* =========================================================
   INIT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
           Preload seluruh foto
        */

        preloadImages();


        /*
           Halaman awal
        */

        showScreen(
            welcomeScreen
        );


        /*
           Status awal
        */

        timerDisplay.textContent =
            "00:00";


        deadEndTimer.textContent =
            "05:00";


        updateProgress(
            1
        );


        console.log(
            "================================="
        );

        console.log(
            "JELAJAH SEKOLAH"
        );

        console.log(
            "Game berhasil dimuat."
        );

        console.log(
            "Folder aset:",
            ASSET_FOLDER
        );

        console.log(
            "================================="
        );

    }
);
