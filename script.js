```javascript
/* =========================================================
   JELAJAH SEKOLAH
   GAME EDUKATIF BAHASA INDONESIA
   SCRIPT.JS - FINAL
========================================================= */


/* =========================================================
   DATA POS
========================================================= */

const POSITIONS = [

    {
        id: 1,
        name: "Pos 1",
        title: "Gerbang Sekolah",
        badge: "POS AWAL",
        image: "",
        clue: "Mulailah perjalanan dari gerbang sekolah. Temukan petunjuk dan selesaikan tantangan Bahasa Indonesia.",
        questions: [1, 2, 3, 4]
    },

    {
        id: 2,
        name: "Pos 2",
        title: "Perpustakaan",
        badge: "POS 2",
        image: "",
        clue: "Tempat penuh buku dan pengetahuan. Selesaikan tantangan berikutnya untuk melanjutkan perjalanan.",
        questions: [5, 6, 7, 8]
    },

    {
        id: 3,
        name: "Pos 3",
        title: "Ruang Kelas",
        badge: "POS 3",
        image: "",
        clue: "Di tempat belajar ini, kemampuanmu memahami fungsi kalimat dan kelas kata akan diuji.",
        questions: [9, 10, 11, 12]
    },

    {
        id: 4,
        name: "Pos 4",
        title: "Taman Sekolah",
        badge: "POS 4",
        image: "",
        clue: "Perhatikan lingkungan di sekitarmu. Tantangan berikut akan menguji ketelitianmu dalam memahami bahasa.",
        questions: [13, 14, 15, 16]
    },

    {
        id: 5,
        name: "Pos 5",
        title: "Lapangan Sekolah",
        badge: "POS AKHIR",
        image: "",
        clue: "Ini adalah pos terakhir. Tuntaskan seluruh tantangan HOTS dan buktikan kemampuanmu!",
        questions: [17, 18, 19, 20]
    }

];


/* =========================================================
   BANK SOAL
========================================================= */

const QUESTION_BANK = [

    {
        id: 1,
        level: "LOTS",
        question: "Paragraf yang kalimat utamanya terletak di awal paragraf dan diikuti oleh kalimat-kalimat penjelas disebut paragraf ....",
        options: [
            "induktif",
            "deduktif",
            "campuran",
            "naratif",
            "deskriptif"
        ],
        answer: 1
    },


    {
        id: 2,
        level: "LOTS",
        question:
`Perhatikan paragraf berikut!

Membaca memiliki banyak manfaat bagi siswa. Kegiatan membaca dapat menambah wawasan, memperkaya kosakata, dan melatih kemampuan memahami informasi. Selain itu, membaca secara rutin dapat membantu siswa mengembangkan kemampuan berpikir kritis.

Kalimat utama paragraf tersebut adalah ....`,
        options: [
            "Membaca memiliki banyak manfaat bagi siswa.",
            "Kegiatan membaca dapat menambah wawasan.",
            "Membaca dapat memperkaya kosakata siswa.",
            "Membaca dapat melatih kemampuan memahami informasi.",
            "Membaca secara rutin dapat membantu siswa mengembangkan kemampuan berpikir kritis."
        ],
        answer: 0
    },


    {
        id: 3,
        level: "LOTS",
        question:
`Perhatikan paragraf berikut!

Sampah plastik sulit terurai secara alami. Sampah tersebut dapat mencemari tanah dan perairan. Selain itu, pembakaran sampah plastik dapat menghasilkan zat yang berbahaya bagi kesehatan. Oleh karena itu, penggunaan plastik sekali pakai perlu dikurangi.

Jenis paragraf tersebut adalah ....`,
        options: [
            "deduktif",
            "induktif",
            "campuran",
            "naratif",
            "argumentatif"
        ],
        answer: 1
    },


    {
        id: 4,
        level: "LOTS",
        question:
`Dalam kalimat "Rina membaca buku di perpustakaan", kata "membaca" berfungsi sebagai ....`,
        options: [
            "subjek",
            "predikat",
            "objek",
            "pelengkap",
            "keterangan"
        ],
        answer: 1
    },


    {
        id: 5,
        level: "LOTS",
        question:
`Kata "keindahan" dalam kalimat "Keindahan alam Indonesia menarik perhatian wisatawan" termasuk kelas kata ....`,
        options: [
            "verba",
            "adjektiva",
            "nomina",
            "adverbia",
            "pronomina"
        ],
        answer: 2
    },


    {
        id: 6,
        level: "LOTS",
        question:
`Kata "sangat" dalam kalimat "Pemandangan itu sangat indah" termasuk kelas kata ....`,
        options: [
            "nomina",
            "verba",
            "adjektiva",
            "adverbia",
            "konjungsi"
        ],
        answer: 3
    },


    {
        id: 7,
        level: "MOTS",
        question:
`Perhatikan paragraf berikut!

Kedisiplinan siswa perlu dibangun melalui kebiasaan sehari-hari. Siswa yang datang tepat waktu akan terbiasa menghargai waktu. Siswa yang mengerjakan tugas sesuai jadwal akan belajar bertanggung jawab. Demikian pula, siswa yang menaati tata tertib akan terbiasa mematuhi aturan.

Pola pengembangan paragraf tersebut adalah ....`,
        options: [
            "induktif, karena simpulan terdapat di akhir",
            "deduktif, karena gagasan utama terdapat di awal",
            "campuran, karena gagasan utama terdapat di awal dan akhir",
            "induktif, karena kalimat penjelas lebih banyak daripada kalimat utama",
            "campuran, karena semua kalimat memiliki kedudukan yang sama"
        ],
        answer: 1
    },


    {
        id: 8,
        level: "MOTS",
        question:
`Perhatikan paragraf berikut!

Pemerintah perlu meningkatkan kualitas transportasi umum. Transportasi umum yang nyaman dapat mengurangi penggunaan kendaraan pribadi. Berkurangnya kendaraan pribadi dapat membantu mengurangi kemacetan. Selain itu, penggunaan transportasi umum dapat menekan tingkat pencemaran udara. Dengan demikian, peningkatan kualitas transportasi umum memberikan banyak manfaat bagi masyarakat.

Hubungan kalimat pertama dan terakhir dalam paragraf tersebut menunjukkan pola ....`,
        options: [
            "deduktif",
            "induktif",
            "campuran",
            "kronologis",
            "deskriptif"
        ],
        answer: 2
    },


    {
        id: 9,
        level: "MOTS",
        question:
`Perhatikan paragraf berikut!

Banyak siswa menggunakan telepon pintar untuk mencari informasi pembelajaran. Mereka dapat mengakses buku digital, video pembelajaran, dan berbagai sumber pengetahuan lainnya. Namun, penggunaan telepon pintar tanpa pengawasan dapat mengganggu konsentrasi belajar. Oleh sebab itu, penggunaan telepon pintar untuk belajar harus dilakukan secara bijaksana.

Kalimat utama paragraf tersebut adalah ....`,
        options: [
            "Banyak siswa menggunakan telepon pintar untuk mencari informasi pembelajaran.",
            "Mereka dapat mengakses buku digital, video pembelajaran, dan berbagai sumber pengetahuan lainnya.",
            "Penggunaan telepon pintar tanpa pengawasan dapat mengganggu konsentrasi belajar.",
            "Penggunaan telepon pintar untuk belajar harus dilakukan secara bijaksana.",
            "Buku digital dan video pembelajaran dapat diakses melalui telepon pintar."
        ],
        answer: 3
    },


    {
        id: 10,
        level: "MOTS",
        question:
`Perhatikan kalimat berikut!

Para siswa sedang membersihkan halaman sekolah.

Fungsi unsur "Para siswa" dan "halaman sekolah" berturut-turut adalah ....`,
        options: [
            "predikat dan objek",
            "subjek dan pelengkap",
            "subjek dan objek",
            "objek dan keterangan",
            "pelengkap dan objek"
        ],
        answer: 2
    },


    {
        id: 11,
        level: "MOTS",
        question:
`Perhatikan kalimat berikut!

Ayah membeli sepatu baru untuk adik.

Unsur "untuk adik" berfungsi sebagai ....`,
        options: [
            "subjek",
            "predikat",
            "objek",
            "pelengkap",
            "keterangan"
        ],
        answer: 4
    },


    {
        id: 12,
        level: "MOTS",
        question:
`Perhatikan kalimat berikut!

Siswa itu menjadi ketua kelas.

Fungsi unsur "ketua kelas" adalah ....`,
        options: [
            "subjek",
            "predikat",
            "objek",
            "pelengkap",
            "keterangan"
        ],
        answer: 3
    },


    {
        id: 13,
        level: "MOTS",
        question:
`Perhatikan kelompok kata berikut!

1. rumah
2. berlari
3. indah
4. mereka
5. dengan cepat

Urutan kelas kata yang tepat adalah ....`,
        options: [
            "nomina – verba – adjektiva – pronomina – frasa adverbial",
            "verba – nomina – adjektiva – pronomina – frasa preposisional",
            "nomina – verba – adverbia – pronomina – frasa adjektival",
            "nomina – adjektiva – verba – pronomina – frasa adverbial",
            "nomina – verba – adjektiva – numeralia – frasa adverbial"
        ],
        answer: 0
    },


    {
        id: 14,
        level: "MOTS",
        question:
`Perhatikan kalimat berikut!

Mereka berjalan sangat cepat menuju lapangan.

Kata "sangat" dan "cepat" secara berturut-turut termasuk ....`,
        options: [
            "adverbia dan adjektiva",
            "adjektiva dan adverbia",
            "verba dan adjektiva",
            "adverbia dan verba",
            "nomina dan adjektiva"
        ],
        answer: 0
    },


    {
        id: 15,
        level: "HOTS",
        question:
`Perhatikan paragraf berikut!

(1) Penggunaan kendaraan pribadi di kota-kota besar terus meningkat.

(2) Kondisi tersebut menyebabkan jumlah kendaraan di jalan raya semakin padat.

(3) Kepadatan kendaraan kemudian menimbulkan kemacetan pada berbagai ruas jalan.

(4) Kemacetan menyebabkan waktu perjalanan masyarakat menjadi lebih lama.

(5) Dengan demikian, peningkatan penggunaan kendaraan pribadi dapat memperburuk persoalan transportasi di perkotaan.

Jika kalimat (5) dihilangkan, jenis paragraf berdasarkan posisi gagasan utamanya akan berubah menjadi ....`,
        options: [
            "deduktif karena kalimat (1) merupakan gagasan utama",
            "induktif karena kalimat (1)–(4) berisi fakta khusus",
            "campuran karena kalimat (2) dan (4) menjadi gagasan utama",
            "deskriptif karena seluruh kalimat menggambarkan kemacetan",
            "naratif karena terdapat hubungan sebab-akibat"
        ],
        answer: 1
    },


    {
        id: 16,
        level: "HOTS",
        question:
`Perhatikan dua paragraf berikut!

Paragraf A

Menjaga kebersihan lingkungan merupakan tanggung jawab bersama. Lingkungan yang bersih membuat masyarakat merasa nyaman. Kebersihan juga dapat mengurangi risiko munculnya berbagai penyakit.

Paragraf B

Lingkungan yang kotor dapat menjadi tempat berkembangnya berbagai sumber penyakit. Sampah yang menumpuk juga dapat menimbulkan bau tidak sedap dan mencemari lingkungan. Oleh karena itu, menjaga kebersihan lingkungan merupakan tanggung jawab bersama.

Pernyataan yang paling tepat adalah ....`,
        options: [
            "Paragraf A dan B sama-sama induktif karena memiliki simpulan.",
            "Paragraf A deduktif, sedangkan paragraf B induktif.",
            "Paragraf A induktif, sedangkan paragraf B deduktif.",
            "Paragraf A dan B sama-sama deduktif karena membahas topik yang sama.",
            "Paragraf A campuran, sedangkan paragraf B induktif."
        ],
        answer: 1
    },


    {
        id: 17,
        level: "HOTS",
        question:
`Perhatikan kalimat berikut!

Di ruang kelas, siswa mendiskusikan masalah lingkungan secara serius.

Analisis fungsi kalimat yang tepat adalah ....`,
        options: [
            "Di ruang kelas = objek, siswa = subjek, mendiskusikan = predikat",
            "Di ruang kelas = keterangan, siswa = subjek, mendiskusikan = predikat, masalah lingkungan = objek, secara serius = keterangan",
            "Di ruang kelas = pelengkap, siswa = subjek, masalah lingkungan = predikat",
            "siswa = objek, mendiskusikan = predikat, masalah lingkungan = subjek",
            "secara serius = objek karena menerangkan tindakan mendiskusikan"
        ],
        answer: 1
    },


    {
        id: 18,
        level: "HOTS",
        question:
`Perhatikan kalimat berikut!

Kegiatan membaca sangat bermanfaat bagi perkembangan kemampuan berpikir siswa.

Seorang siswa mengidentifikasi "sangat bermanfaat" sebagai objek karena berada setelah subjek. Pernyataan yang paling tepat untuk memperbaiki analisis tersebut adalah ....`,
        options: [
            "Benar, karena semua unsur setelah subjek merupakan objek.",
            "Benar, karena bermanfaat merupakan kata kerja transitif.",
            "Salah, karena sangat bermanfaat berfungsi sebagai predikat.",
            "Salah, karena sangat bermanfaat berfungsi sebagai subjek.",
            "Salah, karena sangat merupakan kata benda."
        ],
        answer: 2
    },


    {
        id: 19,
        level: "HOTS",
        question:
`Perhatikan kalimat berikut!

Ketiga siswa itu berhasil menyelesaikan tugas kelompok dengan cepat.

Pernyataan yang tepat mengenai kelas kata dalam kalimat tersebut adalah ....`,
        options: [
            "ketiga = nomina, siswa = verba, berhasil = adjektiva",
            "ketiga = numeralia, siswa = nomina, menyelesaikan = verba",
            "ketiga = pronomina, siswa = adjektiva, berhasil = verba",
            "itu = nomina, berhasil = adverbia, dengan = konjungsi",
            "cepat = verba, tugas = adjektiva, kelompok = pronomina"
        ],
        answer: 1
    },


    {
        id: 20,
        level: "HOTS",
        question:
`Perhatikan paragraf berikut!

Membaca secara rutin dapat meningkatkan kemampuan literasi siswa. Dengan membaca, siswa memperoleh kosakata baru dan mengenal berbagai struktur kalimat. Kegiatan tersebut juga membantu siswa memahami informasi secara lebih kritis. Kebiasaan membaca yang dilakukan secara konsisten pada akhirnya akan memperkuat kemampuan literasi siswa.

Berdasarkan posisi kalimat utama dan hubungan antargagasannya, alasan paling tepat bahwa paragraf tersebut termasuk paragraf campuran adalah ....`,
        options: [
            "kalimat pertama merupakan fakta, sedangkan kalimat terakhir merupakan opini.",
            "terdapat lebih dari satu kalimat yang membahas kegiatan membaca.",
            "gagasan utama disampaikan pada awal paragraf, kemudian ditegaskan kembali pada akhir paragraf dengan bentuk yang berbeda.",
            "semua kalimat memiliki informasi yang sama pentingnya.",
            "kalimat kedua dan ketiga merupakan kalimat utama karena menjelaskan manfaat membaca."
        ],
        answer: 2
    }

];


/* =========================================================
   GAME STATE
========================================================= */

const gameState = {

    teamName: "",

    members: [],

    currentPosition: 0,

    currentQuestionIndex: 0,

    currentQuestionIds: [],

    selectedAnswer: null,

    answered: false,

    score: 0,

    correct: 0,

    wrong: 0,

    totalQuestions: 20,

    startTime: null,

    elapsedSeconds: 0,

    timerInterval: null,

    deadEndInterval: null,

    recordingSeconds: 0,

    recordingInterval: null,

    mediaStream: null,

    mediaRecorder: null,

    recordedChunks: [],

    videoBlob: null

};


/* =========================================================
   DOM HELPER
========================================================= */

function $(id) {
    return document.getElementById(id);
}


/* =========================================================
   SCREEN MANAGEMENT
========================================================= */

function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const screen = $(screenId);

    if (screen) {
        screen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    bindEvents();

    resetGame();

});


/* =========================================================
   EVENT LISTENERS
========================================================= */

function bindEvents() {

    if ($("startButton")) {
        $("startButton").addEventListener("click", () => {
            showScreen("teamScreen");
        });
    }


    if ($("continueTeamButton")) {
        $("continueTeamButton").addEventListener(
            "click",
            handleTeamSubmit
        );
    }


    if ($("beginGameButton")) {
        $("beginGameButton").addEventListener(
            "click",
            startGame
        );
    }


    if ($("submitAnswerButton")) {
        $("submitAnswerButton").addEventListener(
            "click",
            submitAnswer
        );
    }


    if ($("nextButton")) {
        $("nextButton").addEventListener(
            "click",
            nextPosition
        );
    }


    if ($("retryButton")) {
        $("retryButton").addEventListener(
            "click",
            retryCurrentPosition
        );
    }


    if ($("restartButton")) {
        $("restartButton").addEventListener(
            "click",
            () => {
                resetGame();
                showScreen("welcomeScreen");
            }
        );
    }


    if ($("checkSecretButton")) {
        $("checkSecretButton").addEventListener(
            "click",
            checkSecret
        );
    }


    if ($("modalButton")) {
        $("modalButton").addEventListener(
            "click",
            closeModal
        );
    }


    if ($("modalOverlay")) {
        $("modalOverlay").addEventListener(
            "click",
            closeModal
        );
    }


    if ($("startCameraButton")) {
        $("startCameraButton").addEventListener(
            "click",
            startCamera
        );
    }


    if ($("startRecordingButton")) {
        $("startRecordingButton").addEventListener(
            "click",
            startRecording
        );
    }


    if ($("stopRecordingButton")) {
        $("stopRecordingButton").addEventListener(
            "click",
            stopRecording
        );
    }


    if ($("sendVideoButton")) {
        $("sendVideoButton").addEventListener(
            "click",
            sendVideo
        );
    }

}


/* =========================================================
   RESET GAME
========================================================= */

function resetGame() {

    stopGameTimer();

    stopRecordingTimer();

    stopCamera();

    gameState.teamName = "";

    gameState.members = [];

    gameState.currentPosition = 0;

    gameState.currentQuestionIndex = 0;

    gameState.currentQuestionIds = [];

    gameState.selectedAnswer = null;

    gameState.answered = false;

    gameState.score = 0;

    gameState.correct = 0;

    gameState.wrong = 0;

    gameState.totalQuestions = QUESTION_BANK.length;

    gameState.startTime = null;

    gameState.elapsedSeconds = 0;

    gameState.videoBlob = null;

    if ($("gameTimer")) {
        $("gameTimer").textContent = "00:00";
    }

}


/* =========================================================
   TEAM
========================================================= */

function handleTeamSubmit() {

    const teamName =
        $("teamName")?.value.trim() || "";

    if (!teamName) {

        showToast(
            "Masukkan nama tim terlebih dahulu.",
            "error"
        );

        $("teamName")?.focus();

        return;
    }


    const memberInputs =
        document.querySelectorAll(".member-input");


    const members = [];

    memberInputs.forEach(input => {

        const name = input.value.trim();

        if (name) {
            members.push(name);
        }

    });


    gameState.teamName = teamName;

    gameState.members = members;


    if ($("displayTeamName")) {
        $("displayTeamName").textContent =
            teamName;
    }


    if ($("finishTeamName")) {
        $("finishTeamName").textContent =
            teamName;
    }


    showScreen("instructionScreen");

}


/* =========================================================
   START GAME
========================================================= */

function startGame() {

    gameState.currentPosition = 0;

    gameState.currentQuestionIndex = 0;

    gameState.score = 0;

    gameState.correct = 0;

    gameState.wrong = 0;

    gameState.startTime = Date.now();

    startGameTimer();

    showScreen("gameScreen");

    loadPosition();

}


/* =========================================================
   TIMER
========================================================= */

function startGameTimer() {

    stopGameTimer();

    gameState.startTime = Date.now();

    gameState.timerInterval =
        setInterval(() => {

            if (!gameState.startTime) {
                return;
            }

            gameState.elapsedSeconds =
                Math.floor(
                    (Date.now() -
                        gameState.startTime) /
                    1000
                );

            updateGameTimer();

        }, 1000);

}


function stopGameTimer() {

    if (gameState.timerInterval) {

        clearInterval(
            gameState.timerInterval
        );

        gameState.timerInterval = null;

    }

}


function updateGameTimer() {

    if (!$("gameTimer")) {
        return;
    }

    $("gameTimer").textContent =
        formatTime(
            gameState.elapsedSeconds
        );

}


function formatTime(totalSeconds) {

    const minutes =
        Math.floor(totalSeconds / 60);

    const seconds =
        totalSeconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0")
    );

}


/* =========================================================
   LOAD POSITION
========================================================= */

function loadPosition() {

    const position =
        POSITIONS[
            gameState.currentPosition
        ];


    if (!position) {

        finishGame();

        return;
    }


    gameState.currentQuestionIds =
        [...position.questions];


    gameState.currentQuestionIndex = 0;


    if ($("displayPosition")) {
        $("displayPosition").textContent =
            `${position.id}/${POSITIONS.length}`;
    }


    if ($("locationNumber")) {
        $("locationNumber").textContent =
            `📍 ${position.name.toUpperCase()}`;
    }


    if ($("locationBadge")) {
        $("locationBadge").textContent =
            position.badge;
    }


    if ($("locationTitle")) {
        $("locationTitle").textContent =
            position.title;
    }


    if ($("locationClue")) {
        $("locationClue").textContent =
            position.clue;
    }


    if ($("locationImage")) {

        if (position.image) {

            $("locationImage").src =
                position.image;

            $("locationImage").alt =
                position.title;

            $("locationImage").style.display =
                "block";

        } else {

            $("locationImage").removeAttribute(
                "src"
            );

            $("locationImage").alt =
                "Ilustrasi lokasi " +
                position.title;

        }

    }


    hideElement("nextCard");

    hideElement("deadEndCard");

    showElement("questionChallengeCard");

    hideElement("secretChallengeCard");

    hideElement("videoRecorderCard");


    updateProgress();

    loadCurrentQuestion();

}


/* =========================================================
   LOAD QUESTION
========================================================= */

function loadCurrentQuestion() {

    const questionId =
        gameState.currentQuestionIds[
            gameState.currentQuestionIndex
        ];


    const question =
        QUESTION_BANK.find(
            item => item.id === questionId
        );


    if (!question) {

        nextPosition();

        return;
    }


    gameState.selectedAnswer = null;

    gameState.answered = false;


    if ($("questionCounter")) {

        $("questionCounter").textContent =
            `Soal ${gameState.currentQuestionIndex + 1} dari ${gameState.currentQuestionIds.length} • ${question.level}`;

    }


    if ($("questionText")) {

        $("questionText").textContent =
            question.question;

    }


    renderOptions(question);

    clearFeedback();


    if ($("submitAnswerButton")) {

        $("submitAnswerButton").disabled =
            true;

        $("submitAnswerButton").textContent =
            "Jawab";

    }

}


/* =========================================================
   RENDER OPTIONS
========================================================= */

function renderOptions(question) {

    const container =
        $("optionsContainer");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");


            button.type = "button";

            button.className =
                "answer-option";


            button.dataset.index =
                index;


            const letter =
                document.createElement("span");

            letter.className =
                "option-letter";

            letter.textContent =
                String.fromCharCode(
                    65 + index
                );


            const text =
                document.createElement("span");

            text.className =
                "option-text";

            text.textContent =
                option;


            button.appendChild(letter);

            button.appendChild(text);


            button.addEventListener(
                "click",
                () => selectAnswer(index)
            );


            container.appendChild(button);

        }
    );

}


/* =========================================================
   SELECT ANSWER
========================================================= */

function selectAnswer(index) {

    if (gameState.answered) {
        return;
    }


    gameState.selectedAnswer =
        index;


    document
        .querySelectorAll(".answer-option")
        .forEach(button => {

            button.classList.remove(
                "selected"
            );

        });


    const selectedButton =
        document.querySelector(
            `.answer-option[data-index="${index}"]`
        );


    if (selectedButton) {

        selectedButton.classList.add(
            "selected"
        );

    }


    if ($("submitAnswerButton")) {

        $("submitAnswerButton").disabled =
            false;

    }

}


/* =========================================================
   SUBMIT ANSWER
========================================================= */

function submitAnswer() {

    if (gameState.answered) {
        return;
    }


    if (
        gameState.selectedAnswer === null
    ) {

        showToast(
            "Pilih salah satu jawaban terlebih dahulu.",
            "error"
        );

        return;
    }


    const questionId =
        gameState.currentQuestionIds[
            gameState.currentQuestionIndex
        ];


    const question =
        QUESTION_BANK.find(
            item => item.id === questionId
        );


    if (!question) {
        return;
    }


    gameState.answered = true;


    const optionButtons =
        document.querySelectorAll(
            ".answer-option"
        );


    optionButtons.forEach(
        (button, index) => {

            button.disabled = true;


            if (index === question.answer) {

                button.classList.add(
                    "correct"
                );

            }


            if (
                index ===
                gameState.selectedAnswer &&
                index !== question.answer
            ) {

                button.classList.add(
                    "wrong"
                );

            }

        }
    );


    const isCorrect =
        gameState.selectedAnswer ===
        question.answer;


    if (isCorrect) {

        gameState.correct++;

        gameState.score +=
            getScoreByLevel(
                question.level
            );


        showFeedback(
            true,
            `Benar! Jawaban tepat. +${getScoreByLevel(question.level)} poin.`
        );


        showToast(
            "Jawaban benar! 🎉",
            "success"
        );

    } else {

        gameState.wrong++;


        showFeedback(
            false,
            `Jawaban kurang tepat. Jawaban yang benar adalah ${String.fromCharCode(65 + question.answer)}.`
        );


        showToast(
            "Jawaban belum tepat.",
            "error"
        );

    }


    if ($("submitAnswerButton")) {

        $("submitAnswerButton").textContent =
            "Lanjutkan →";

        $("submitAnswerButton").disabled =
            false;


        $("submitAnswerButton").onclick =
            continueAfterAnswer;

    }


    updateProgress();

}


/* =========================================================
   SCORE
========================================================= */

function getScoreByLevel(level) {

    switch (level) {

        case "LOTS":
            return 10;

        case "MOTS":
            return 20;

        case "HOTS":
            return 30;

        default:
            return 10;

    }

}


/* =========================================================
   CONTINUE AFTER ANSWER
========================================================= */

function continueAfterAnswer() {

    if (!gameState.answered) {
        submitAnswer();
        return;
    }


    gameState.currentQuestionIndex++;


    if (
        gameState.currentQuestionIndex <
        gameState.currentQuestionIds.length
    ) {

        loadCurrentQuestion();

        return;

    }


    completePosition();

}


/* =========================================================
   COMPLETE POSITION
========================================================= */

function completePosition() {

    hideElement("questionChallengeCard");

    showElement("nextCard");


    const nextPositionIndex =
        gameState.currentPosition + 1;


    if (
        nextPositionIndex <
        POSITIONS.length
    ) {

        const next =
            POSITIONS[nextPositionIndex];


        if ($("nextLocation")) {

            $("nextLocation").textContent =
                `${next.name} — ${next.title}`;

        }


        if ($("nextButton")) {

            $("nextButton").textContent =
                `➡️ Lanjut ke ${next.name}`;

        }

    } else {

        if ($("nextLocation")) {

            $("nextLocation").textContent =
                "🏆 Garis Akhir";

        }


        if ($("nextButton")) {

            $("nextButton").textContent =
                "🏆 Selesaikan Permainan";

        }

    }

}


/* =========================================================
   NEXT POSITION
========================================================= */

function nextPosition() {

    gameState.currentPosition++;


    if (
        gameState.currentPosition >=
        POSITIONS.length
    ) {

        finishGame();

        return;
    }


    loadPosition();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   RETRY POSITION
========================================================= */

function retryCurrentPosition() {

    stopDeadEndTimer();

    hideElement("deadEndCard");

    showElement("questionChallengeCard");

    gameState.currentQuestionIndex = 0;

    loadCurrentQuestion();

}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

    const completedBefore =
        POSITIONS
            .slice(
                0,
                gameState.currentPosition
            )
            .reduce(
                (total, position) =>
                    total +
                    position.questions.length,
                0
            );


    const currentCompleted =
        gameState.currentQuestionIndex;


    const completed =
        completedBefore +
        currentCompleted;


    const total =
        QUESTION_BANK.length;


    const percentage =
        Math.min(
            100,
            Math.round(
                (completed / total) * 100
            )
        );


    if ($("progressText")) {

        $("progressText").textContent =
            `${completed} / ${total}`;

    }


    if ($("progressFill")) {

        $("progressFill").style.width =
            `${percentage}%`;

    }


    if ($("positionIndicator")) {

        $("positionIndicator").textContent =
            `Pos ${gameState.currentPosition + 1} dari ${POSITIONS.length}`;

    }

}


/* =========================================================
   FEEDBACK
========================================================= */

function showFeedback(
    correct,
    message
) {

    const feedback =
        $("answerFeedback");


    if (!feedback) {
        return;
    }


    feedback.textContent =
        message;


    feedback.classList.remove(
        "correct",
        "wrong"
    );


    feedback.classList.add(
        correct ? "correct" : "wrong"
    );

}


function clearFeedback() {

    const feedback =
        $("answerFeedback");


    if (!feedback) {
        return;
    }


    feedback.textContent = "";

    feedback.classList.remove(
        "correct",
        "wrong"
    );

}


/* =========================================================
   FINISH
========================================================= */

function finishGame() {

    stopGameTimer();

    stopRecordingTimer();

    stopCamera();


    if ($("finishTeamName")) {

        $("finishTeamName").textContent =
            gameState.teamName || "-";

    }


    if ($("finishTime")) {

        $("finishTime").textContent =
            formatTime(
                gameState.elapsedSeconds
            );

    }


    if ($("finishCorrect")) {

        $("finishCorrect").textContent =
            gameState.correct;

    }


    if ($("finishWrong")) {

        $("finishWrong").textContent =
            gameState.wrong;

    }


    if ($("finishScore")) {

        $("finishScore").textContent =
            gameState.score;

    }


    if ($("finishMessage")) {

        $("finishMessage").textContent =
            createFinishMessage();

    }


    showScreen("finishScreen");

}


function createFinishMessage() {

    const accuracy =
        gameState.totalQuestions > 0
            ? (
                gameState.correct /
                gameState.totalQuestions
            ) * 100
            : 0;


    if (accuracy >= 90) {

        return "Luar biasa! Kemampuan Bahasa Indonesia tim kamu sangat hebat! 🏆";

    }


    if (accuracy >= 75) {

        return "Hebat! Tim kamu berhasil menyelesaikan perjalanan dengan hasil yang sangat baik! 🌟";

    }


    if (accuracy >= 60) {

        return "Bagus! Terus berlatih agar kemampuan Bahasa Indonesia semakin kuat! 💪";

    }


    return "Petualangan selesai! Jadikan pengalaman ini sebagai kesempatan untuk belajar dan berkembang. 📚";

}


/* =========================================================
   SECRET CODE
========================================================= */

function checkSecret() {

    const input =
        $("secretInput");


    const message =
        $("secretMessage");


    if (!input || !message) {
        return;
    }


    const value =
        input.value.trim();


    if (!value) {

        message.textContent =
            "Masukkan kode terlebih dahulu.";

        message.style.color =
            "var(--danger)";

        return;

    }


    /*
       Sistem kode tetap tersedia untuk
       pengembangan pos yang membutuhkan kode.

       Saat ini kode tidak menjadi syarat
       utama permainan karena tantangan
       soal menjadi tantangan utama.
    */

    message.textContent =
        "Kode diterima. Lanjutkan tantangan.";

    message.style.color =
        "var(--success)";

}


/* =========================================================
   CAMERA
========================================================= */

async function startCamera() {

    if (
        !navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia
    ) {

        showToast(
            "Browser tidak mendukung akses kamera.",
            "error"
        );

        return;

    }


    try {

        gameState.mediaStream =
            await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            });


        if ($("cameraPreview")) {

            $("cameraPreview").srcObject =
                gameState.mediaStream;

        }


        if ($("recordingStatus")) {

            $("recordingStatus").textContent =
                "Kamera siap digunakan.";

        }


        if ($("startRecordingButton")) {

            $("startRecordingButton").disabled =
                false;

        }


        showToast(
            "Kamera berhasil dibuka.",
            "success"
        );

    } catch (error) {

        console.error(error);


        showToast(
            "Kamera tidak dapat diakses. Pastikan izin kamera diberikan.",
            "error"
        );

    }

}


/* =========================================================
   START RECORDING
========================================================= */

function startRecording() {

    if (!gameState.mediaStream) {

        showToast(
            "Buka kamera terlebih dahulu.",
            "error"
        );

        return;

    }


    if (
        typeof MediaRecorder ===
        "undefined"
    ) {

        showToast(
            "Browser tidak mendukung perekaman video.",
            "error"
        );

        return;

    }


    gameState.recordedChunks = [];


    try {

        gameState.mediaRecorder =
            new MediaRecorder(
                gameState.mediaStream
            );


        gameState.mediaRecorder.ondataavailable =
            event => {

                if (event.data.size > 0) {

                    gameState.recordedChunks.push(
                        event.data
                    );

                }

            };


        gameState.mediaRecorder.onstop =
            handleRecordingComplete;


        gameState.mediaRecorder.start();


        gameState.recordingSeconds = 0;

        startRecordingTimer();


        if ($("startRecordingButton")) {

            $("startRecordingButton").classList.add(
                "hidden"
            );

        }


        if ($("stopRecordingButton")) {

            $("stopRecordingButton").classList.remove(
                "hidden"
            );

        }


        if ($("recordingStatus")) {

            $("recordingStatus").textContent =
                "Sedang merekam...";

        }


    } catch (error) {

        console.error(error);

        showToast(
            "Perekaman tidak dapat dimulai.",
            "error"
        );

    }

}


/* =========================================================
   STOP RECORDING
========================================================= */

function stopRecording() {

    if (
        gameState.mediaRecorder &&
        gameState.mediaRecorder.state !==
        "inactive"
    ) {

        gameState.mediaRecorder.stop();

    }


    stopRecordingTimer();


    if ($("stopRecordingButton")) {

        $("stopRecordingButton").classList.add(
            "hidden"
        );

    }


    if ($("recordingStatus")) {

        $("recordingStatus").textContent =
            "Perekaman selesai.";

    }

}


/* =========================================================
   RECORDING COMPLETE
========================================================= */

function handleRecordingComplete() {

    gameState.videoBlob =
        new Blob(
            gameState.recordedChunks,
            {
                type:
                    gameState.mediaRecorder?.mimeType ||
                    "video/webm"
            }
        );


    const videoURL =
        URL.createObjectURL(
            gameState.videoBlob
        );


    if ($("recordedPreview")) {

        $("recordedPreview").src =
            videoURL;

        $("recordedPreview").classList.remove(
            "hidden"
        );

    }


    if ($("sendVideoButton")) {

        $("sendVideoButton").classList.remove(
            "hidden"
        );

    }


    if ($("recordingStatus")) {

        $("recordingStatus").textContent =
            "Video siap ditinjau.";

    }

}


/* =========================================================
   RECORDING TIMER
========================================================= */

function startRecordingTimer() {

    stopRecordingTimer();


    gameState.recordingInterval =
        setInterval(() => {

            gameState.recordingSeconds++;


            if ($("recordingTimer")) {

                $("recordingTimer").textContent =
                    formatTime(
                        gameState.recordingSeconds
                    );

            }

        }, 1000);

}


function stopRecordingTimer() {

    if (gameState.recordingInterval) {

        clearInterval(
            gameState.recordingInterval
        );

        gameState.recordingInterval = null;

    }

}


/* =========================================================
   SEND VIDEO
========================================================= */

function sendVideo() {

    if (!gameState.videoBlob) {

        showToast(
            "Belum ada video yang direkam.",
            "error"
        );

        return;

    }


    /*
       Tempat integrasi pengiriman video
       ke Google Apps Script / Google Drive
       apabila sistem backend digunakan.

       Untuk versi permainan mandiri,
       video dianggap berhasil disiapkan.
    */


    showToast(
        "Video berhasil disiapkan untuk dikirim. 📤",
        "success"
    );


    if ($("videoFeedback")) {

        $("videoFeedback").textContent =
            "Video berhasil disiapkan.";

        $("videoFeedback").classList.remove(
            "wrong"
        );

        $("videoFeedback").classList.add(
            "correct"
        );

    }

}


/* =========================================================
   STOP CAMERA
========================================================= */

function stopCamera() {

    if (gameState.mediaStream) {

        gameState.mediaStream
            .getTracks()
            .forEach(track => {
                track.stop();
            });

        gameState.mediaStream = null;

    }


    if ($("cameraPreview")) {

        $("cameraPreview").srcObject =
            null;

    }

}


/* =========================================================
   DEAD END TIMER
========================================================= */

function startDeadEndTimer(seconds = 10) {

    stopDeadEndTimer();


    let remaining = seconds;


    if ($("deadEndTimer")) {

        $("deadEndTimer").textContent =
            formatTime(remaining);

    }


    gameState.deadEndInterval =
        setInterval(() => {

            remaining--;


            if ($("deadEndTimer")) {

                $("deadEndTimer").textContent =
                    formatTime(
                        Math.max(0, remaining)
                    );

            }


            if (remaining <= 0) {

                stopDeadEndTimer();

                if ($("retryButton")) {

                    $("retryButton").disabled =
                        false;

                }

            }

        }, 1000);

}


function stopDeadEndTimer() {

    if (gameState.deadEndInterval) {

        clearInterval(
            gameState.deadEndInterval
        );

        gameState.deadEndInterval = null;

    }

}


/* =========================================================
   ELEMENT VISIBILITY
========================================================= */

function showElement(id) {

    const element = $(id);

    if (element) {

        element.classList.remove(
            "hidden"
        );

    }

}


function hideElement(id) {

    const element = $(id);

    if (element) {

        element.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   MODAL
========================================================= */

function showModal(
    title,
    message,
    icon = "ℹ️"
) {

    if (!$("modal")) {
        return;
    }


    if ($("modalTitle")) {

        $("modalTitle").textContent =
            title;

    }


    if ($("modalMessage")) {

        $("modalMessage").textContent =
            message;

    }


    if ($("modalIcon")) {

        $("modalIcon").textContent =
            icon;

    }


    $("modal").classList.add(
        "show"
    );


    document.body.classList.add(
        "no-scroll"
    );

}


function closeModal() {

    if ($("modal")) {

        $("modal").classList.remove(
            "show"
        );

    }


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout = null;


function showToast(
    message,
    type = "default"
) {

    const toast =
        $("toast");


    if (!toast) {
        return;
    }


    if ($("toastMessage")) {

        $("toastMessage").textContent =
            message;

    }


    if ($("toastIcon")) {

        $("toastIcon").textContent =
            type === "success"
                ? "✅"
                : type === "error"
                    ? "❌"
                    : "ℹ️";

    }


    toast.classList.remove(
        "success",
        "error"
    );


    if (
        type === "success" ||
        type === "error"
    ) {

        toast.classList.add(type);

    }


    toast.classList.add("show");


    if (toastTimeout) {

        clearTimeout(
            toastTimeout
        );

    }


    toastTimeout =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 3000);

}


/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" &&
            document.activeElement?.id ===
            "secretInput"
        ) {

            checkSecret();

        }

    }
);


/* =========================================================
   PREVENT ACCIDENTAL PAGE LEAVE
========================================================= */

window.addEventListener(
    "beforeunload",
    event => {

        if (
            gameState.startTime &&
            $("gameScreen")?.classList.contains(
                "active"
            )
        ) {

            event.preventDefault();

            event.returnValue = "";

        }

    }
);


/* =========================================================
   EXPORT DATA
   Memudahkan pengembangan / integrasi backend
========================================================= */

window.JelajahSekolah = {

    positions: POSITIONS,

    questions: QUESTION_BANK,

    state: gameState,

    start: startGame,

    reset: resetGame,

    showToast: showToast

};


/* =========================================================
   END OF SCRIPT
========================================================= */
```
