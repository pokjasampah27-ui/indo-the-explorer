/* =========================================================
   JELAJAH SEKOLAH
   SCRIPT.JS FINAL

   FITUR:
   - 7 POS UTAMA
   - 3 POS BUNTU
   - KODE RAHASIA
   - SOAL
   - TIMER PERMAINAN
   - TIMER JALUR BUNTU 5 MENIT
   - LAPORAN KE GOOGLE APPS SCRIPT
   - VIDEO POS 8 & POS 9
   - CAMERA HP
   - MEDIARECORDER
========================================================= */


/* =========================================================
   KONFIGURASI
========================================================= */

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwlzVK06_kfSbd_EOVEk_y3d_hKK58ftK7MZPXK6tENMExxKACxn-IEYajBnVkulej_/exec";


const ASSET_FOLDER =
    "./assets/";


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

        title:
            "POS 1 — GERBANG PETUALANGAN",

        image:
            "pos1.jpeg",

        clue:
            "Temukan lokasi sesuai foto Pos 1. Setelah sampai, cari pesan yang disembunyikan.",

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

        answer:
            1,

        explanation:
            "Petunjuk harus dibaca dan dipahami terlebih dahulu agar perjalanan sesuai dengan jalur yang ditentukan.",

        next:
            2

    },


    2: {

        title:
            "POS 2 — JEJAK KEDUA",

        image:
            "pos2.jpeg",

        clue:
            "Ikuti petunjuk dari Pos 1 menuju lokasi pada foto Pos 2.",

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

        answer:
            1,

        explanation:
            "Kerja sama membuat anggota tim dapat saling membantu dan menyelesaikan tantangan dengan lebih baik.",

        next:
            3

    },


    3: {

        title:
            "POS 3 — PESAN TERSEMBUNYI",

        image:
            "pos3.jpeg",

        clue:
            "Cari lokasi sesuai foto Pos 3. Temukan pesan yang disembunyikan.",

        secretCode:
            "PESAN",

        question:
            "Jika menemukan pesan yang ditujukan untuk tim, apa yang sebaiknya dilakukan?",

        options: [

            "Membawa pulang pesan tersebut",

            "Merusak pesan agar tim lain tidak menemukannya",

            "Membaca informasi yang diperlukan lalu meninggalkannya di tempat",

            "Menyembunyikannya di tempat lain"

        ],

        answer:
            2,

        explanation:
            "Pesan permainan harus tetap berada di tempatnya agar semua peserta dapat bermain secara adil.",

        next:
            4

    },


    4: {

        title:
            "POS 4 — UJI KETELITIAN",

        image:
            "pos4.jpeg",

        clue:
            "Perhatikan lingkungan sekitar dan cari pesan sesuai petunjuk.",

        secretCode:
            "TELITI",

        question:
            "Apa yang harus dilakukan jika petunjuk permainan terasa belum jelas?",

        options: [

            "Menebak tanpa berpikir",

            "Membaca kembali petunjuk dan mendiskusikannya",

            "Meninggalkan permainan",

            "Mengikuti tim lain"

        ],

        answer:
            1,

        explanation:
            "Membaca ulang dan berdiskusi membantu tim memahami petunjuk dengan lebih tepat.",

        next:
            5

    },


    5: {

        title:
            "POS 5 — LANGKAH BERIKUTNYA",

        image:
            "pos5.jpeg",

        clue:
            "Temukan lokasi Pos 5 berdasarkan foto dan petunjuk perjalanan.",

        secretCode:
            "LANGKAH",

        question:
            "Ketika mendapatkan jawaban berbeda antaranggota tim, apa tindakan yang paling tepat?",

        options: [

            "Memilih secara asal",

            "Berdebat tanpa mendengarkan",

            "Mendiskusikan alasan masing-masing berdasarkan bukti",

            "Mengikuti jawaban tim lain"

        ],

        answer:
            2,

        explanation:
            "Diskusi berdasarkan alasan dan bukti membantu tim mengambil keputusan yang tepat.",

        next:
            6

    },


    6: {

        title:
            "POS 6 — MENDEKATI AKHIR",

        image:
            "pos6.jpeg",

        clue:
            "Kalian semakin dekat dengan akhir perjalanan. Tetap teliti membaca pesan.",

        secretCode:
            "KOMPAS",

        question:
            "Apa yang paling penting dilakukan ketika waktu permainan semakin terbatas?",

        options: [

            "Panik dan berlari tanpa arah",

            "Tetap tenang, membaca petunjuk, dan membagi tugas",

            "Mengabaikan soal",

            "Mengikuti peserta lain"

        ],

        answer:
            1,

        explanation:
            "Ketika waktu terbatas, ketenangan, pembagian tugas, dan ketelitian sangat penting.",

        next:
            7

    },


    7: {

        title:
            "POS 7 — POS TERAKHIR",

        image:
            "pos7.jpeg",

        clue:
            "Ini adalah pos terakhir pada jalur utama. Temukan pesan dan selesaikan tantangannya.",

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

        answer:
            2,

        explanation:
            "Permainan yang baik berakhir dengan sikap sportif, saling menghargai, dan menjaga lingkungan.",

        next:
            null

    },


    8: {

        title:
            "POS 8 — JALUR BUNTU",

        image:
            "pos8.jpeg",

        clue:
            "Kalian masuk ke jalur yang salah. Tidak ada pesan lanjutan di lokasi ini.",

        deadEnd:
            true

    },


    9: {

        title:
            "POS 9 — JALUR BUNTU",

        image:
            "pos9.jpeg",

        clue:
            "Kalian masuk ke jalur yang salah. Periksa lokasi, tetapi pesan tujuan tidak ditemukan.",

        deadEnd:
            true

    },


    10: {

        title:
            "POS 10 — JALUR BUNTU",

        image:
            "pos10.jpeg",

        clue:
            "Jalur ini bukan bagian dari perjalanan utama. Tidak ada pesan lanjutan.",

        deadEnd:
            true

    }

};



/* =========================================================
   STATE
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

    gameStarted: false,

    resultSent: false

};



/* =========================================================
   VIDEO STATE
========================================================= */

const VIDEO_CONFIG = {

    maxDuration:
        60,

    videoBitsPerSecond:
        1200000,

    width:
        1280,

    height:
        720

};


let mediaStream =
    null;


let mediaRecorder =
    null;


let recordedChunks =
    [];


let recordedVideoBlob =
    null;


let recordingTimer =
    null;


let recordingSeconds =
    0;


let currentVideoPos =
    null;


let currentFacingMode =
    "environment";



/* =========================================================
   HELPER
========================================================= */

function $(id) {

    return document.getElementById(id);

}



/* =========================================================
   DOM
========================================================= */

let welcomeScreen;
let teamScreen;
let instructionScreen;
let gameScreen;
let finishScreen;

let startButton;
let beginMissionButton;
let teamForm;

let leaderName;
let memberInputs;

let teamNameDisplay;
let currentPosDisplay;
let timerDisplay;

let progressPercent;
let progressFill;

let posTitle;
let locationImage;
let imageLabel;
let clueText;

let secretArea;
let secretCodeInput;
let secretCodeButton;
let secretMessage;

let questionArea;
let questionCounter;
let questionText;
let optionsContainer;
let answerFeedback;
let submitAnswerButton;

let nextClueArea;
let nextLocationText;
let goNextButton;

let deadEndArea;
let deadEndTimer;
let returnFromDeadEndButton;

let finishLeader;
let finishPosCount;
let finishQuestionCount;
let finishTime;

let restartButton;

let gameModal;
let modalOverlay;
let modalOkButton;
let modalIcon;
let modalTitle;
let modalMessage;

let toast;
let toastIcon;
let toastMessage;



/* =========================================================
   INIT DOM
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initGame
);



function initGame() {

    welcomeScreen =
        $("welcomeScreen");

    teamScreen =
        $("teamScreen");

    instructionScreen =
        $("instructionScreen");

    gameScreen =
        $("gameScreen");

    finishScreen =
        $("finishScreen");


    startButton =
        $("startButton");

    beginMissionButton =
        $("beginMissionButton");

    teamForm =
        $("teamForm");


    leaderName =
        $("leaderName");


    memberInputs = [

        $("member1"),
        $("member2"),
        $("member3"),
        $("member4"),
        $("member5")

    ];


    teamNameDisplay =
        $("teamNameDisplay");

    currentPosDisplay =
        $("currentPosDisplay");

    timerDisplay =
        $("timerDisplay");


    progressPercent =
        $("progressPercent");

    progressFill =
        $("progressFill");


    posTitle =
        $("posTitle");

    locationImage =
        $("locationImage");

    imageLabel =
        $("imageLabel");

    clueText =
        $("clueText");


    secretArea =
        $("secretArea");

    secretCodeInput =
        $("secretCodeInput");

    secretCodeButton =
        $("secretCodeButton");

    secretMessage =
        $("secretMessage");


    questionArea =
        $("questionArea");

    questionCounter =
        $("questionCounter");

    questionText =
        $("questionText");

    optionsContainer =
        $("optionsContainer");

    answerFeedback =
        $("answerFeedback");

    submitAnswerButton =
        $("submitAnswerButton");


    nextClueArea =
        $("nextClueArea");

    nextLocationText =
        $("nextLocationText");

    goNextButton =
        $("goNextButton");


    deadEndArea =
        $("deadEndArea");

    deadEndTimer =
        $("deadEndTimer");

    returnFromDeadEndButton =
        $("returnFromDeadEndButton");


    finishLeader =
        $("finishLeader");

    finishPosCount =
        $("finishPosCount");

    finishQuestionCount =
        $("finishQuestionCount");

    finishTime =
        $("finishTime");


    restartButton =
        $("restartButton");


    gameModal =
        $("gameModal");

    modalOverlay =
        $("modalOverlay");

    modalOkButton =
        $("modalOkButton");

    modalIcon =
        $("modalIcon");

    modalTitle =
        $("modalTitle");

    modalMessage =
        $("modalMessage");


    toast =
        $("toast");

    toastIcon =
        $("toastIcon");

    toastMessage =
        $("toastMessage");


    /*
       EVENT UTAMA
    */

    if (startButton) {

        startButton.addEventListener(
            "click",
            startRegistration
        );

    }


    if (teamForm) {

        teamForm.addEventListener(
            "submit",
            submitTeam
        );

    }


    if (beginMissionButton) {

        beginMissionButton.addEventListener(
            "click",
            startGame
        );

    }


    if (secretCodeButton) {

        secretCodeButton.addEventListener(
            "click",
            verifySecretCode
        );

    }


    if (secretCodeInput) {

        secretCodeInput.addEventListener(
            "keydown",
            function(event) {

                if (
                    event.key ===
                    "Enter"
                ) {

                    event.preventDefault();

                    verifySecretCode();

                }

            }
        );

    }


    if (submitAnswerButton) {

        submitAnswerButton.addEventListener(
            "click",
            checkAnswer
        );

    }


    if (goNextButton) {

        goNextButton.addEventListener(
            "click",
            handleNext
        );

    }


    if (returnFromDeadEndButton) {

        returnFromDeadEndButton.addEventListener(
            "click",
            function() {

                returnToPreviousPosition(
                    false
                );

            }
        );

    }


    if (restartButton) {

        restartButton.addEventListener(
            "click",
            restartGame
        );

    }


    if (modalOkButton) {

        modalOkButton.addEventListener(
            "click",
            closeModal
        );

    }


    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            closeModal
        );

    }


    showScreen(
        welcomeScreen
    );


    timerDisplay.textContent =
        "00:00";


    deadEndTimer.textContent =
        "05:00";


    updateProgress(
        1
    );


    preloadImages();


    console.log(
        "JELAJAH SEKOLAH siap."
    );

}



/* =========================================================
   SCREEN
========================================================= */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(
            function(item) {

                item.classList.remove(
                    "active"
                );

            }
        );


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
   MULAI PENDAFTARAN
========================================================= */

function startRegistration() {

    showScreen(
        teamScreen
    );


    setTimeout(
        function() {

            if (leaderName) {

                leaderName.focus();

            }

        },
        250
    );

}



/* =========================================================
   SIMPAN TIM
========================================================= */

function submitTeam(event) {

    event.preventDefault();


    const leader =
        leaderName.value.trim();


    const members =
        memberInputs.map(
            function(input) {

                return input
                    ? input.value.trim()
                    : "";

            }
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
            function(member) {

                return member === "";

            }
        );


    if (emptyIndex !== -1) {

        showToast(
            "Nama anggota " +
            (emptyIndex + 1) +
            " belum diisi.",
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



/* =========================================================
   MULAI GAME
========================================================= */

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


    loadPosition(
        1
    );


    showToast(
        "Petualangan dimulai!",
        "success"
    );

}



/* =========================================================
   RESET GAME
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

    gameState.resultSent =
        false;


    removeVideoRecorder();

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
            function() {

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
        POS_DATA[
            positionNumber
        ];


    if (!pos) {

        showToast(
            "Data pos tidak ditemukan.",
            "error"
        );

        return;

    }


    gameState.currentPos =
        Number(
            positionNumber
        );


    gameState.selectedAnswer =
        null;


    gameState.secretVerified =
        false;


    /*
       VIDEO
    */

    if (
        Number(positionNumber) === 8 ||
        Number(positionNumber) === 9
    ) {

        activateVideoForPosition(
            Number(positionNumber)
        );

    }
    else {

        removeVideoRecorder();

    }


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
   LOAD POS UTAMA
========================================================= */

function loadCorrectPosition(
    positionNumber
) {

    const pos =
        POS_DATA[
            positionNumber
        ];


    stopDeadEndTimer();


    posTitle.textContent =
        pos.title;


    const imagePath =
        ASSET_FOLDER +
        POS_IMAGES[
            positionNumber
        ];


    locationImage.src =
        imagePath;


    locationImage.alt =
        "Foto lokasi " +
        pos.title;


    imageLabel.textContent =
        "Lokasi Pos " +
        positionNumber;


    locationImage.onerror =
        function() {

            this.onerror =
                null;

            this.src =
                createImagePlaceholder(
                    "Foto Pos " +
                    positionNumber +
                    " tidak ditemukan"
                );

        };


    clueText.textContent =
        pos.clue;


    currentPosDisplay.textContent =
        positionNumber +
        " / 7";


    updateProgress(
        positionNumber
    );


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


    secretCodeInput.value =
        "";


    secretMessage.textContent =
        "";


    answerFeedback.textContent =
        "";


    answerFeedback.className =
        "answer-feedback";


    questionCounter.textContent =
        "Tantangan Pos " +
        positionNumber;


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
            function(button) {

                button.disabled =
                    locked;

            }
        );


    submitAnswerButton.disabled =
        locked ||
        gameState.selectedAnswer === null;

}



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
   RENDER OPTIONS
========================================================= */

function renderOptions(
    options
) {

    optionsContainer.innerHTML =
        "";


    options.forEach(
        function(option, index) {

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


            button.innerHTML =

                '<span class="option-letter">' +

                String.fromCharCode(
                    65 + index
                ) +

                '</span>' +

                '<span class="option-text">' +

                escapeHtml(
                    option
                ) +

                '</span>';


            button.addEventListener(
                "click",
                function() {

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
            function(button, index) {

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
        POS_DATA[
            position
        ];


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
        function(button) {

            button.disabled =
                true;

        }
    );


    submitAnswerButton.disabled =
        true;


    if (
        selected ===
        correct
    ) {

        gameState.correctAnswers++;


        if (buttons[correct]) {

            buttons[correct]
                .classList.add(
                    "correct"
                );

        }


        answerFeedback.className =
            "answer-feedback correct";


        answerFeedback.innerHTML =
            "✓ <strong>Jawaban benar!</strong><br>" +
            escapeHtml(
                pos.explanation
            );


        markPositionCompleted(
            position
        );


        setTimeout(
            function() {

                showNextClue(
                    position
                );

            },
            900
        );


        return;

    }


    /*
       SALAH
    */

    gameState.wrongAnswers++;


    if (buttons[selected]) {

        buttons[selected]
            .classList.add(
                "wrong"
            );

    }


    if (buttons[correct]) {

        buttons[correct]
            .classList.add(
                "correct"
            );

    }


    answerFeedback.className =
        "answer-feedback wrong";


    answerFeedback.innerHTML =
        "✕ <strong>Jawaban belum tepat.</strong> Kalian masuk ke jalur lain.";


    const deadEnd =
        chooseDeadEnd();


    setTimeout(
        function() {

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
            .includes(
                position
            )
    ) {

        gameState.completedPositions
            .push(
                position
            );

    }

}



/* =========================================================
   PETUNJUK BERIKUTNYA
========================================================= */

function showNextClue(
    position
) {

    const pos =
        POS_DATA[
            position
        ];


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
        pos.next ===
        null
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
   NEXT
========================================================= */

function handleNext() {

    const next =
        goNextButton.dataset.next;


    if (
        next ===
        "finish"
    ) {

        finishGame();

        return;

    }


    const nextPosition =
        Number(
            next
        );


    gameState.previousCorrectPos =
        nextPosition;


    loadPosition(
        nextPosition
    );

}



/* =========================================================
   PILIH JALUR BUNTU
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
            .includes(
                selected
            )
    ) {

        gameState.visitedDeadEnds
            .push(
                selected
            );

    }


    return selected;

}



/* =========================================================
   TAMPILKAN JALUR BUNTU
========================================================= */

function showDeadEndRoute(
    deadEndPosition
) {

    gameState.previousCorrectPos =
        gameState.currentPos;


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
        POS_DATA[
            positionNumber
        ];


    if (!pos) {

        return;

    }


    stopDeadEndTimer();


    posTitle.textContent =
        pos.title;


    const imagePath =
        ASSET_FOLDER +
        POS_IMAGES[
            positionNumber
        ];


    locationImage.src =
        imagePath;


    locationImage.alt =
        "Foto " +
        pos.title;


    imageLabel.textContent =
        "JALUR BUNTU";


    locationImage.onerror =
        function() {

            this.onerror =
                null;

            this.src =
                createImagePlaceholder(
                    "Foto Pos " +
                    positionNumber +
                    " tidak ditemukan"
                );

        };


    clueText.textContent =
        pos.clue;


    currentPosDisplay.textContent =
        "BUNTU " +
        positionNumber;


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


    /*
       Pos 8 dan 9:
       video recorder aktif.
    */

    if (
        positionNumber === 8 ||
        positionNumber === 9
    ) {

        activateVideoForPosition(
            positionNumber
        );

    }


    startDeadEndTimer();

}



/* =========================================================
   TIMER BUNTU
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
            300 -
            elapsed
        );


    deadEndTimer.textContent =
        formatCountdown(
            remaining
        );


    if (
        remaining <=
        30
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
        remaining <=
        0
    ) {

        stopDeadEndTimer();


        returnToPreviousPosition(
            true
        );

    }

}



/* =========================================================
   STOP TIMER
========================================================= */

function stopDeadEndTimer() {

    if (
        gameState.deadEndTimer
    ) {

        clearInterval(
            gameState.deadEndTimer
        );

    }


    gameState.deadEndTimer =
        null;


    gameState.deadEndStart =
        null;

}



/* =========================================================
   KEMBALI DARI BUNTU
========================================================= */

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
            "Waktu 5 menit telah habis. Kalian kembali ke " +
            POS_DATA[
                previous
            ].title +
            ".",
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
        function() {

            loadPosition(
                previous
            );

        },
        automatic
            ? 400
            : 100
    );

}



/* =========================================================
   PROGRESS
========================================================= */

function updateProgress(
    position
) {

    const percent =
        Math.min(
            100,
            Math.round(
                (
                    (
                        position -
                        1
                    ) / 7
                ) *
                100
            )
        );


    progressPercent.textContent =
        percent +
        "%";


    progressFill.style.width =
        percent +
        "%";

}



/* =========================================================
   FINISH
========================================================= */

async function finishGame() {

    stopDeadEndTimer();


    clearInterval(
        gameState.mainTimer
    );


    stopCamera();


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


    await sendGameResult();

}



/* =========================================================
   KIRIM HASIL GAME
========================================================= */

async function sendGameResult() {

    if (
        gameState.resultSent
    ) {

        return;

    }


    gameState.resultSent =
        true;


    const elapsed =
        gameState.finishTime -
        gameState.startTime;


    const payload = {

        action:
            "simpanHasilGame",

        leader:
            gameState.leader,

        members:
            gameState.members,

        completedPositions:
            gameState.completedPositions.length,

        totalQuestions:
            gameState.questionAttempts,

        correctAnswers:
            gameState.correctAnswers,

        wrongAnswers:
            gameState.wrongAnswers,

        gameTime:
            formatElapsedTime(
                elapsed
            ),

        deadEndVisits:
            gameState.deadEndVisits,

        visitedDeadEnds:
            gameState.visitedDeadEnds,

        status:
            "SELESAI"

    };


    try {

        await fetch(
            GOOGLE_SCRIPT_URL,
            {

                method:
                    "POST",

                headers: {

                    "Content-Type":
                        "text/plain;charset=utf-8"

                },

                body:
                    JSON.stringify(
                        payload
                    )

            }
        );

    }
    catch (error) {

        console.error(
            "Gagal mengirim hasil:",
            error
        );

    }

}



/* =========================================================
   RESTART
========================================================= */

function restartGame() {

    clearInterval(
        gameState.mainTimer
    );


    clearInterval(
        gameState.deadEndTimer
    );


    stopCamera();


    removeVideoRecorder();


    showScreen(
        welcomeScreen
    );


    timerDisplay.textContent =
        "00:00";


    deadEndTimer.textContent =
        "05:00";


    updateProgress(
        1
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
   TOAST
========================================================= */

let toastTimeout =
    null;


function showToast(
    message,
    type = "info"
) {

    if (!toast) {

        return;

    }


    clearTimeout(
        toastTimeout
    );


    toast.className =
        "toast";


    if (
        type ===
        "success"
    ) {

        toast.classList.add(
            "success"
        );


        toastIcon.textContent =
            "✅";

    }
    else if (
        type ===
        "error"
    ) {

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
            function() {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}



/* =========================================================
   VIDEO
   POS 8 & POS 9
========================================================= */

function isCameraSupported() {

    return !!(
        navigator.mediaDevices &&
        navigator.mediaDevices.getUserMedia &&
        window.MediaRecorder
    );

}



/* =========================================================
   BUAT PANEL VIDEO
========================================================= */

function createVideoRecorderUI(
    posNumber
) {

    const existing =
        document.getElementById(
            "videoRecorderArea"
        );


    if (existing) {

        existing.remove();

    }


    const container =
        document.createElement(
            "div"
        );


    container.id =
        "videoRecorderArea";


    container.className =
        "challenge-card video-recorder-card";


    container.innerHTML = `

        <div class="challenge-title">
            🎥 DOKUMENTASI VIDEO POS ${posNumber}
        </div>

        <p>
            Rekam video langsung menggunakan
            kamera HP sebagai dokumentasi
            penyelesaian tantangan.
        </p>

        <div class="video-preview-wrapper">

            <video
                id="cameraPreview"
                class="camera-preview"
                autoplay
                muted
                playsinline
            ></video>

            <video
                id="recordedPreview"
                class="recorded-preview hidden"
                controls
                playsinline
            ></video>

        </div>

        <div
            id="recordingStatus"
            class="recording-status"
        >
            Kamera belum aktif.
        </div>

        <div
            id="recordingTimer"
            class="recording-timer"
        >
            00:00
        </div>

        <div class="video-button-grid">

            <button
                id="startCameraButton"
                class="secondary-button"
                type="button"
            >
                📷 BUKA KAMERA
            </button>

            <button
                id="switchCameraButton"
                class="secondary-button"
                type="button"
                disabled
            >
                🔄 GANTI KAMERA
            </button>

        </div>

        <button
            id="startRecordingButton"
            class="primary-button"
            type="button"
            disabled
        >
            🔴 MULAI REKAM
        </button>

        <button
            id="stopRecordingButton"
            class="primary-button hidden"
            type="button"
        >
            ⏹️ SELESAI REKAM
        </button>

        <button
            id="sendVideoButton"
            class="primary-button hidden"
            type="button"
        >
            ☁️ SIMPAN VIDEO
        </button>

        <div
            id="videoUploadMessage"
            class="answer-feedback"
        ></div>

    `;


    const nextArea =
        document.getElementById(
            "nextClueArea"
        );


    const gameContainer =
        document.querySelector(
            ".game-container"
        );


    if (
        gameContainer &&
        nextArea
    ) {

        gameContainer.insertBefore(
            container,
            nextArea
        );

    }
    else if (
        gameContainer
    ) {

        gameContainer.appendChild(
            container
        );

    }


    $("startCameraButton")
        .addEventListener(
            "click",
            startCamera
        );


    $("switchCameraButton")
        .addEventListener(
            "click",
            switchCamera
        );


    $("startRecordingButton")
        .addEventListener(
            "click",
            startRecording
        );


    $("stopRecordingButton")
        .addEventListener(
            "click",
            stopRecording
        );


    $("sendVideoButton")
        .addEventListener(
            "click",
            uploadRecordedVideo
        );

}



/* =========================================================
   AKTIFKAN VIDEO
========================================================= */

function activateVideoForPosition(
    posNumber
) {

    currentVideoPos =
        Number(
            posNumber
        );


    if (
        currentVideoPos !== 8 &&
        currentVideoPos !== 9
    ) {

        removeVideoRecorder();

        return;

    }


    createVideoRecorderUI(
        currentVideoPos
    );

}



/* =========================================================
   BUKA KAMERA
========================================================= */

async function startCamera() {

    if (
        !isCameraSupported()
    ) {

        showVideoMessage(
            "Browser HP ini tidak mendukung kamera atau perekaman video.",
            "wrong"
        );

        return;

    }


    try {

        stopCamera();


        mediaStream =
            await navigator
                .mediaDevices
                .getUserMedia({

                    video: {

                        facingMode:
                            currentFacingMode,

                        width: {

                            ideal:
                                VIDEO_CONFIG.width

                        },

                        height: {

                            ideal:
                                VIDEO_CONFIG.height

                        }

                    },

                    audio:
                        true

                });


        const preview =
            $("cameraPreview");


        if (preview) {

            preview.srcObject =
                mediaStream;


            preview.classList.remove(
                "hidden"
            );

        }


        $("startCameraButton")
            .disabled =
            true;


        $("switchCameraButton")
            .disabled =
            false;


        $("startRecordingButton")
            .disabled =
            false;


        showVideoMessage(
            "Kamera siap. Silakan mulai merekam.",
            "correct"
        );

    }
    catch (error) {

        console.error(
            "Camera error:",
            error
        );


        let message =
            "Kamera tidak dapat digunakan.";


        if (
            error.name ===
            "NotAllowedError"
        ) {

            message =
                "Izin kamera/mikrofon ditolak. Izinkan akses kamera pada browser HP.";

        }
        else if (
            error.name ===
            "NotFoundError"
        ) {

            message =
                "Kamera atau mikrofon tidak ditemukan.";

        }
        else if (
            error.name ===
            "NotReadableError"
        ) {

            message =
                "Kamera sedang digunakan aplikasi lain.";

        }
        else if (
            error.name ===
            "SecurityError"
        ) {

            message =
                "Akses kamera membutuhkan koneksi HTTPS.";

        }


        showVideoMessage(
            message,
            "wrong"
        );

    }

}



/* =========================================================
   GANTI KAMERA
========================================================= */

async function switchCamera() {

    if (
        mediaRecorder &&
        mediaRecorder.state ===
        "recording"
    ) {

        showVideoMessage(
            "Tidak dapat mengganti kamera saat sedang merekam.",
            "wrong"
        );

        return;

    }


    currentFacingMode =
        currentFacingMode ===
        "environment"
            ? "user"
            : "environment";


    await startCamera();

}



/* =========================================================
   MULAI REKAM
========================================================= */

function startRecording() {

    if (!mediaStream) {

        showVideoMessage(
            "Aktifkan kamera terlebih dahulu.",
            "wrong"
        );

        return;

    }


    recordedChunks =
        [];


    recordedVideoBlob =
        null;


    recordingSeconds =
        0;


    let mimeType =
        "video/webm;codecs=vp9,opus";


    if (
        !MediaRecorder.isTypeSupported(
            mimeType
        )
    ) {

        mimeType =
            "video/webm;codecs=vp8,opus";

    }


    if (
        !MediaRecorder.isTypeSupported(
            mimeType
        )
    ) {

        mimeType =
            "video/webm";

    }


    try {

        mediaRecorder =
            new MediaRecorder(
                mediaStream,
                {

                    mimeType:
                        mimeType,

                    videoBitsPerSecond:
                        VIDEO_CONFIG
                            .videoBitsPerSecond

                }
            );

    }
    catch (error) {

        showVideoMessage(
            "Gagal menyiapkan perekaman video.",
            "wrong"
        );

        return;

    }


    mediaRecorder.ondataavailable =
        function(event) {

            if (
                event.data &&
                event.data.size >
                0
            ) {

                recordedChunks.push(
                    event.data
                );

            }

        };


    mediaRecorder.onstop =
        function() {

            finishRecording();

        };


    mediaRecorder.onerror =
        function(event) {

            console.error(
                "MediaRecorder error:",
                event
            );


            showVideoMessage(
                "Terjadi kesalahan saat merekam video.",
                "wrong"
            );

        };


    mediaRecorder.start(
        1000
    );


    $("startRecordingButton")
        .classList.add(
            "hidden"
        );


    $("stopRecordingButton")
        .classList.remove(
            "hidden"
        );


    $("sendVideoButton")
        .classList.add(
            "hidden"
        );


    $("recordingStatus")
        .textContent =
        "🔴 Sedang merekam...";


    recordingTimer =
        setInterval(
            function() {

                recordingSeconds++;


                $("recordingTimer")
                    .textContent =
                    formatVideoTime(
                        recordingSeconds
                    );


                if (
                    recordingSeconds >=
                    VIDEO_CONFIG.maxDuration
                ) {

                    stopRecording();

                }

            },
            1000
        );

}



/* =========================================================
   STOP REKAM
========================================================= */

function stopRecording() {

    if (!mediaRecorder) {

        return;

    }


    if (
        mediaRecorder.state !==
        "recording"
    ) {

        return;

    }


    mediaRecorder.stop();


    clearInterval(
        recordingTimer
    );


    recordingTimer =
        null;


    $("recordingStatus")
        .textContent =
        "⏳ Menyiapkan video...";


    $("stopRecordingButton")
        .classList.add(
            "hidden"
        );

}



/* =========================================================
   FINISH RECORDING
========================================================= */

function finishRecording() {

    if (
        recordedChunks.length ===
        0
    ) {

        showVideoMessage(
            "Video tidak berhasil direkam.",
            "wrong"
        );

        return;

    }


    recordedVideoBlob =
        new Blob(
            recordedChunks,
            {

                type:
                    mediaRecorder &&
                    mediaRecorder.mimeType
                        ? mediaRecorder.mimeType
                        : "video/webm"

            }
        );


    const videoURL =
        URL.createObjectURL(
            recordedVideoBlob
        );


    const recordedPreview =
        $("recordedPreview");


    const cameraPreview =
        $("cameraPreview");


    if (recordedPreview) {

        recordedPreview.src =
            videoURL;


        recordedPreview.classList.remove(
            "hidden"
        );

    }


    if (cameraPreview) {

        cameraPreview.classList.add(
            "hidden"
        );

    }


    const startButton =
        $("startRecordingButton");


    if (startButton) {

        startButton.classList.remove(
            "hidden"
        );


        startButton.disabled =
            false;


        startButton.textContent =
            "🔴 REKAM ULANG";

    }


    const sendButton =
        $("sendVideoButton");


    if (sendButton) {

        sendButton.classList.remove(
            "hidden"
        );

    }


    $("recordingStatus")
        .textContent =
        "✅ Video siap disimpan.";


    showVideoMessage(
        "Video berhasil direkam. Periksa hasilnya lalu tekan SIMPAN VIDEO.",
        "correct"
    );

}



/* =========================================================
   UPLOAD VIDEO
========================================================= */

async function uploadRecordedVideo() {

    if (!recordedVideoBlob) {

        showVideoMessage(
            "Belum ada video yang direkam.",
            "wrong"
        );

        return;

    }


    const sendButton =
        $("sendVideoButton");


    sendButton.disabled =
        true;


    sendButton.textContent =
        "⏳ MENYIMPAN VIDEO...";


    showVideoMessage(
        "Video sedang dikirim. Jangan tutup halaman.",
        ""
    );


    try {

        const base64 =
            await blobToBase64(
                recordedVideoBlob
            );


        const mimeType =
            recordedVideoBlob.type ||
            "video/webm";


        const extension =
            mimeType.includes(
                "mp4"
            )
                ? "mp4"
                : "webm";


        const filename =
            createVideoFilename(
                gameState.leader,
                currentVideoPos,
                extension
            );


        const payload = {

            action:
                "simpanVideoPos",

            pos:
                currentVideoPos,

            leader:
                gameState.leader,

            members:
                gameState.members,

            filename:
                filename,

            mimeType:
                mimeType,

            duration:
                recordingSeconds,

            video:
                base64

        };


        const response =
            await fetch(
                GOOGLE_SCRIPT_URL,
                {

                    method:
                        "POST",

                    headers: {

                        "Content-Type":
                            "text/plain;charset=utf-8"

                    },

                    body:
                        JSON.stringify(
                            payload
                        )

                }
            );


        const result =
            await response.json();


        if (
            result.status !==
            "success"
        ) {

            throw new Error(
                result.message ||
                "Video gagal disimpan."
            );

        }


        showVideoMessage(
            "✅ Video berhasil disimpan.",
            "correct"
        );


        sendButton.textContent =
            "✅ VIDEO TERSIMPAN";


        sendButton.disabled =
            true;


        stopCamera();

    }
    catch (error) {

        console.error(
            "Upload video error:",
            error
        );


        showVideoMessage(
            "❌ Video gagal disimpan: " +
            error.message,
            "wrong"
        );


        sendButton.disabled =
            false;


        sendButton.textContent =
            "☁️ SIMPAN VIDEO";

    }

}



/* =========================================================
   BLOB → BASE64
========================================================= */

function blobToBase64(
    blob
) {

    return new Promise(
        function(resolve, reject) {

            const reader =
                new FileReader();


            reader.onloadend =
                function() {

                    const result =
                        reader.result;


                    const parts =
                        String(
                            result
                        ).split(
                            ","
                        );


                    resolve(
                        parts[1]
                    );

                };


            reader.onerror =
                reject;


            reader.readAsDataURL(
                blob
            );

        }
    );

}



/* =========================================================
   NAMA FILE VIDEO
========================================================= */

function createVideoFilename(
    leader,
    pos,
    extension
) {

    const safeLeader =
        String(
            leader ||
            "TIM"
        )
            .trim()
            .replace(
                /[^a-zA-Z0-9_-]/g,
                "_"
            );


    const now =
        new Date();


    const date =
        now.getFullYear() +

        String(
            now.getMonth() + 1
        ).padStart(
            2,
            "0"
        ) +

        String(
            now.getDate()
        ).padStart(
            2,
            "0"
        );


    const time =
        String(
            now.getHours()
        ).padStart(
            2,
            "0"
        ) +

        String(
            now.getMinutes()
        ).padStart(
            2,
            "0"
        ) +

        String(
            now.getSeconds()
        ).padStart(
            2,
            "0"
        );


    return (

        safeLeader +

        "_POS" +

        pos +

        "_" +

        date +

        "_" +

        time +

        "." +

        extension

    );

}



/* =========================================================
   PESAN VIDEO
========================================================= */

function showVideoMessage(
    message,
    type
) {

    const element =
        $("videoUploadMessage");


    if (!element) {

        return;

    }


    element.textContent =
        message;


    element.className =
        "answer-feedback";


    if (
        type ===
        "correct"
    ) {

        element.classList.add(
            "correct"
        );

    }


    if (
        type ===
        "wrong"
    ) {

        element.classList.add(
            "wrong"
        );

    }

}



/* =========================================================
   STOP CAMERA
========================================================= */

function stopCamera() {

    if (mediaRecorder) {

        if (
            mediaRecorder.state ===
            "recording"
        ) {

            try {

                mediaRecorder.stop();

            }
            catch (error) {

                console.warn(
                    error
                );

            }

        }

    }


    if (mediaStream) {

        mediaStream
            .getTracks()
            .forEach(
                function(track) {

                    track.stop();

                }
            );

    }


    mediaStream =
        null;


    mediaRecorder =
        null;


    clearInterval(
        recordingTimer
    );


    recordingTimer =
        null;


    const preview =
        $("cameraPreview");


    if (preview) {

        preview.srcObject =
            null;

    }

}



/* =========================================================
   HAPUS VIDEO RECORDER
========================================================= */

function removeVideoRecorder() {

    stopCamera();


    recordedChunks =
        [];


    recordedVideoBlob =
        null;


    const area =
        document.getElementById(
            "videoRecorderArea"
        );


    if (area) {

        area.remove();

    }


    currentVideoPos =
        null;

}



/* =========================================================
   VIDEO CLEANUP
========================================================= */

window.addEventListener(
    "beforeunload",
    function() {

        stopCamera();

    }
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

        String(
            minutes
        ).padStart(
            2,
            "0"
        ) +

        ":" +

        String(
            secs
        ).padStart(
            2,
            "0"
        )

    );

}



/* =========================================================
   FORMAT VIDEO TIME
========================================================= */

function formatVideoTime(
    seconds
) {

    const minutes =
        Math.floor(
            seconds / 60
        );


    const secs =
        seconds % 60;


    return (

        String(
            minutes
        ).padStart(
            2,
            "0"
        ) +

        ":" +

        String(
            secs
        ).padStart(
            2,
            "0"
        )

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
                totalSeconds %
                3600
            ) / 60
        );


    const seconds =
        totalSeconds %
        60;


    if (
        hours > 0
    ) {

        return (

            String(
                hours
            ).padStart(
                2,
                "0"
            ) +

            ":" +

            String(
                minutes
            ).padStart(
                2,
                "0"
            ) +

            ":" +

            String(
                seconds
            ).padStart(
                2,
                "0"
            )

        );

    }


    return (

        String(
            minutes
        ).padStart(
            2,
            "0"
        ) +

        ":" +

        String(
            seconds
        ).padStart(
            2,
            "0"
        )

    );

}



/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHtml(
    value
) {

    return String(
        value ?? ""
    )
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
   PLACEHOLDER FOTO
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

        encodeURIComponent(
            svg
        )

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
        function(position) {

            const img =
                new Image();


            img.src =
                ASSET_FOLDER +
                POS_IMAGES[
                    position
                ];


            img.onload =
                function() {

                    console.log(
                        "✓ Foto Pos " +
                        position +
                        " berhasil dimuat."
                    );

                };


            img.onerror =
                function() {

                    console.warn(
                        "Foto Pos " +
                        position +
                        " belum ditemukan."
                    );

                };

        }
    );

}
