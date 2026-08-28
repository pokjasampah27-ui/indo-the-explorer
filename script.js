```javascript
/* =========================================================
   JELAJAH SEKOLAH
   SISTEM POS 1–10
   - Timer 30 menit
   - Soal tetap digunakan
   - Skor tetap dihitung
   - Pos 1–7 = soal
   - Pos 7 = penentuan hasil
   - Pos 8–9 = tantangan video
   - Pos 10 = selesai
========================================================= */

"use strict";

/* =========================================================
   DATA GAME
========================================================= */

const GAME_DURATION = 30 * 60;

let gameState = {
    teamName: "",
    members: [],
    currentPost: 1,
    currentQuestion: 0,
    score: 0,
    correct: 0,
    wrong: 0,
    answered: 0,
    totalQuestions: 0,
    timeLeft: GAME_DURATION,
    timer: null,
    videoUploaded: {
        8: false,
        9: false
    }
};


/* =========================================================
   SOAL
========================================================= */

const questions = [

    {
        post: 1,
        question:
            "Paragraf yang kalimat utamanya terletak di awal paragraf dan diikuti oleh kalimat-kalimat penjelas disebut paragraf ....",
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
        post: 1,
        question:
            "Perhatikan paragraf berikut!\n\nMembaca memiliki banyak manfaat bagi siswa. Kegiatan membaca dapat menambah wawasan, memperkaya kosakata, dan melatih kemampuan memahami informasi. Selain itu, membaca secara rutin dapat membantu siswa mengembangkan kemampuan berpikir kritis.\n\nKalimat utama paragraf tersebut adalah ....",
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
        post: 1,
        question:
            "Perhatikan paragraf berikut!\n\nSampah plastik sulit terurai secara alami. Sampah tersebut dapat mencemari tanah dan perairan. Selain itu, pembakaran sampah plastik dapat menghasilkan zat yang berbahaya bagi kesehatan. Oleh karena itu, penggunaan plastik sekali pakai perlu dikurangi.\n\nJenis paragraf tersebut adalah ....",
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
        post: 2,
        question:
            'Dalam kalimat "Rina membaca buku di perpustakaan", kata "membaca" berfungsi sebagai ....',
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
        post: 2,
        question:
            'Kata "keindahan" dalam kalimat "Keindahan alam Indonesia menarik perhatian wisatawan" termasuk kelas kata ....',
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
        post: 2,
        question:
            'Kata "sangat" dalam kalimat "Pemandangan itu sangat indah" termasuk kelas kata ....',
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
        post: 3,
        question:
            "Perhatikan paragraf berikut!\n\nKedisiplinan siswa perlu dibangun melalui kebiasaan sehari-hari. Siswa yang datang tepat waktu akan terbiasa menghargai waktu. Siswa yang mengerjakan tugas sesuai jadwal akan belajar bertanggung jawab. Demikian pula, siswa yang menaati tata tertib akan terbiasa mematuhi aturan.\n\nPola pengembangan paragraf tersebut adalah ....",
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
        post: 3,
        question:
            "Perhatikan paragraf berikut!\n\nPemerintah perlu meningkatkan kualitas transportasi umum. Transportasi umum yang nyaman dapat mengurangi penggunaan kendaraan pribadi. Berkurangnya kendaraan pribadi dapat membantu mengurangi kemacetan. Selain itu, penggunaan transportasi umum dapat menekan tingkat pencemaran udara. Dengan demikian, peningkatan kualitas transportasi umum memberikan banyak manfaat bagi masyarakat.\n\nHubungan kalimat pertama dan terakhir menunjukkan pola ....",
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
        post: 4,
        question:
            "Perhatikan paragraf berikut!\n\nBanyak siswa menggunakan telepon pintar untuk mencari informasi pembelajaran. Mereka dapat mengakses buku digital, video pembelajaran, dan berbagai sumber pengetahuan lainnya. Namun, penggunaan telepon pintar tanpa pengawasan dapat mengganggu konsentrasi belajar. Oleh sebab itu, penggunaan telepon pintar untuk belajar harus dilakukan secara bijaksana.\n\nKalimat utama paragraf tersebut adalah ....",
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
        post: 4,
        question:
            "Perhatikan kalimat berikut!\n\nPara siswa sedang membersihkan halaman sekolah.\n\nFungsi unsur 'Para siswa' dan 'halaman sekolah' berturut-turut adalah ....",
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
        post: 5,
        question:
            "Perhatikan kalimat berikut!\n\nAyah membeli sepatu baru untuk adik.\n\nUnsur 'untuk adik' berfungsi sebagai ....",
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
        post: 5,
        question:
            "Perhatikan kalimat berikut!\n\nSiswa itu menjadi ketua kelas.\n\nFungsi unsur 'ketua kelas' adalah ....",
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
        post: 6,
        question:
            "Perhatikan kelompok kata berikut!\n\n1. rumah\n2. berlari\n3. indah\n4. mereka\n5. dengan cepat\n\nUrutan kelas kata yang tepat adalah ....",
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
        post: 6,
        question:
            'Perhatikan kalimat berikut!\n\nMereka berjalan sangat cepat menuju lapangan.\n\nKata "sangat" dan "cepat" secara berturut-turut termasuk ....',
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
        post: 7,
        question:
            "Perhatikan paragraf berikut!\n\n(1) Penggunaan kendaraan pribadi di kota-kota besar terus meningkat.\n(2) Kondisi tersebut menyebabkan jumlah kendaraan di jalan raya semakin padat.\n(3) Kepadatan kendaraan kemudian menimbulkan kemacetan pada berbagai ruas jalan.\n(4) Kemacetan menyebabkan waktu perjalanan masyarakat menjadi lebih lama.\n(5) Dengan demikian, peningkatan penggunaan kendaraan pribadi dapat memperburuk persoalan transportasi di perkotaan.\n\nJika kalimat (5) dihilangkan, jenis paragraf berdasarkan posisi gagasan utamanya akan berubah menjadi ....",
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
        post: 7,
        question:
            "Perhatikan dua paragraf berikut!\n\nParagraf A\nMenjaga kebersihan lingkungan merupakan tanggung jawab bersama. Lingkungan yang bersih membuat masyarakat merasa nyaman. Kebersihan juga dapat mengurangi risiko munculnya berbagai penyakit.\n\nParagraf B\nLingkungan yang kotor dapat menjadi tempat berkembangnya berbagai sumber penyakit. Sampah yang menumpuk juga dapat menimbulkan bau tidak sedap dan mencemari lingkungan. Oleh karena itu, menjaga kebersihan lingkungan merupakan tanggung jawab bersama.\n\nPernyataan yang paling tepat adalah ....",
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
        post: 7,
        question:
            "Perhatikan kalimat berikut!\n\nDi ruang kelas, siswa mendiskusikan masalah lingkungan secara serius.\n\nAnalisis fungsi kalimat yang tepat adalah ....",
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
        post: 7,
        question:
            "Perhatikan kalimat berikut!\n\nKegiatan membaca sangat bermanfaat bagi perkembangan kemampuan berpikir siswa.\n\nSeorang siswa mengidentifikasi 'sangat bermanfaat' sebagai objek karena berada setelah subjek. Pernyataan yang paling tepat adalah ....",
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
        post: 7,
        question:
            "Perhatikan kalimat berikut!\n\nKetiga siswa itu berhasil menyelesaikan tugas kelompok dengan cepat.\n\nPernyataan yang tepat mengenai kelas kata adalah ....",
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
        post: 7,
        question:
            "Perhatikan paragraf berikut!\n\nMembaca secara rutin dapat meningkatkan kemampuan literasi siswa. Dengan membaca, siswa memperoleh kosakata baru dan mengenal berbagai struktur kalimat. Kegiatan tersebut juga membantu siswa memahami informasi secara lebih kritis. Kebiasaan membaca yang dilakukan secara konsisten pada akhirnya akan memperkuat kemampuan literasi siswa.\n\nAlasan paling tepat bahwa paragraf tersebut termasuk paragraf campuran adalah ....",
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
   KODE AKSES POS
   GANTI SESUAI KODE YANG DIINGINKAN
========================================================= */

const POST_CODES = {
    1: "POS1",
    2: "POS2",
    3: "POS3",
    4: "POS4",
    5: "POS5",
    6: "POS6",
    7: "POS7",
    8: "POS8",
    9: "POS9",
    10: "POS10"
};


/* =========================================================
   TANTANGAN POS
========================================================= */

const challenges = {

    8: {
        title: "TANTANGAN LUCU POS 8 😂",
        text:
            "Buatlah video singkat. Seluruh anggota kelompok harus bergaya seperti presenter berita yang sedang melaporkan keadaan sekolah seolah-olah sedang terjadi peristiwa paling heboh sedunia. Durasi sekitar 15–30 detik."
    },

    9: {
        title: "TANTANGAN LUCU POS 9 🤣",
        text:
            "Buatlah video singkat. Seluruh anggota kelompok harus membuat yel-yel spontan tentang sekolah dengan gaya paling kreatif dan lucu. Durasi sekitar 15–30 detik."
    }

};


/* =========================================================
   DOM
========================================================= */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);


/* =========================================================
   SCREEN
========================================================= */

function showScreen(id) {

    $$(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(id);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   INIT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    bindStartButton();
    bindGeneralButtons();
    prepareQuestions();

});


/* =========================================================
   PERBAIKAN UTAMA TOMBOL MULAI
========================================================= */

function bindStartButton() {

    const possibleButtons = [
        "#startAdventureButton",
        "#startButton",
        "#startGameButton",
        "#mulaiPetualangan",
        "#start-adventure",
        "[data-action='start-game']"
    ];

    let button = null;

    for (const selector of possibleButtons) {

        const found = $(selector);

        if (found) {
            button = found;
            break;
        }

    }

    if (!button) {

        console.warn(
            "Tombol Mulai Petualangan tidak ditemukan."
        );

        return;
    }


    /*
       cloneNode memastikan event lama yang bermasalah
       tidak mengganggu event baru.
    */

    const newButton = button.cloneNode(true);

    button.parentNode.replaceChild(
        newButton,
        button
    );


    newButton.addEventListener("click", function(event) {

        event.preventDefault();
        event.stopPropagation();

        startAdventure();

    });

}


/* =========================================================
   MULAI PETUALANGAN
========================================================= */

function startAdventure() {

    /*
       Ambil nama kelompok dari beberapa kemungkinan ID.
    */

    const nameInput =
        $("#teamName") ||
        $("#team-name") ||
        $("#groupName") ||
        $("#namaKelompok") ||
        $("input[name='teamName']");


    if (nameInput) {

        gameState.teamName =
            nameInput.value.trim();

    }


    if (!gameState.teamName) {

        gameState.teamName =
            "Kelompok Petualang";

    }


    /*
       Reset permainan
    */

    gameState.currentPost = 1;
    gameState.currentQuestion = 0;
    gameState.score = 0;
    gameState.correct = 0;
    gameState.wrong = 0;
    gameState.answered = 0;
    gameState.timeLeft = GAME_DURATION;

    gameState.videoUploaded = {
        8: false,
        9: false
    };


    gameState.totalQuestions =
        questions.length;


    /*
       Tampilkan nama kelompok
    */

    const teamElements = [
        "#displayTeamName",
        "#teamNameDisplay",
        "#currentTeamName",
        ".team-name"
    ];

    teamElements.forEach(selector => {

        const element = $(selector);

        if (element) {
            element.textContent =
                gameState.teamName;
        }

    });


    /*
       TIMER
    */

    startTimer();


    /*
       Mulai dari POS 1
    */

    showPostAccess(1);

}


/* =========================================================
   TIMER 30 MENIT
========================================================= */

function startTimer() {

    clearInterval(gameState.timer);

    gameState.timeLeft =
        GAME_DURATION;

    updateTimerDisplay();

    gameState.timer = setInterval(() => {

        gameState.timeLeft--;

        updateTimerDisplay();

        if (gameState.timeLeft <= 0) {

            clearInterval(gameState.timer);

            gameState.timeLeft = 0;

            updateTimerDisplay();

            timeUp();

        }

    }, 1000);

}


/* =========================================================
   UPDATE TIMER
========================================================= */

function updateTimerDisplay() {

    const minutes =
        Math.floor(gameState.timeLeft / 60);

    const seconds =
        gameState.timeLeft % 60;

    const text =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");


    const elements = [
        "#timer",
        "#timerDisplay",
        "#gameTimer",
        ".timer-box"
    ];


    elements.forEach(selector => {

        const element = $(selector);

        if (element) {
            element.textContent = text;
        }

    });

}


/* =========================================================
   WAKTU HABIS
========================================================= */

function timeUp() {

    showModal(
        "⏰",
        "Waktu Habis",
        "Waktu petualangan kelompok telah habis."
    );

}


/* =========================================================
   POS ACCESS
========================================================= */

function showPostAccess(postNumber) {

    gameState.currentPost =
        postNumber;


    const codeScreen =
        $("#postAccessScreen");


    if (codeScreen) {

        showScreen("postAccessScreen");

        const title =
            $("#postAccessTitle");

        const number =
            $("#postNumber");

        const input =
            $("#postCodeInput");

        const button =
            $("#postCodeButton");

        const message =
            $("#postCodeMessage");


        if (title) {
            title.textContent =
                `🔐 AKSES POS ${postNumber}`;
        }

        if (number) {
            number.textContent =
                `POS ${postNumber}`;
        }

        if (input) {
            input.value = "";
            input.focus();
        }

        if (message) {
            message.textContent = "";
        }

        if (button) {

            button.onclick = () => {

                checkPostCode();

            };

        }

        return;
    }


    /*
       Jika halaman akses belum ada,
       langsung masuk ke pos.
    */

    enterPost(postNumber);

}


/* =========================================================
   CEK KODE POS
========================================================= */

function checkPostCode() {

    const input =
        $("#postCodeInput") ||
        $("#secretCodeInput") ||
        $("#accessCode");


    if (!input) {

        enterPost(
            gameState.currentPost
        );

        return;

    }


    const entered =
        input.value.trim().toUpperCase();


    const correctCode =
        POST_CODES[
            gameState.currentPost
        ];


    if (entered === correctCode) {

        const message =
            $("#postCodeMessage");

        if (message) {

            message.textContent =
                "✅ Kode benar! Silakan lanjut.";

        }


        setTimeout(() => {

            enterPost(
                gameState.currentPost
            );

        }, 400);


    } else {

        const message =
            $("#postCodeMessage");

        if (message) {

            message.textContent =
                "❌ Kode akses salah. Silakan coba lagi.";

            message.style.color =
                "#dc2626";

        }

    }

}


/* =========================================================
   MASUK POS
========================================================= */

function enterPost(postNumber) {

    gameState.currentPost =
        postNumber;


    if (postNumber >= 1 && postNumber <= 7) {

        showQuestionForPost(
            postNumber
        );

        return;

    }


    if (postNumber === 8 ||
        postNumber === 9) {

        showChallengePost(
            postNumber
        );

        return;

    }


    if (postNumber === 10) {

        showFinalPost();

    }

}


/* =========================================================
   PERSIAPAN SOAL
========================================================= */

function prepareQuestions() {

    gameState.totalQuestions =
        questions.length;

}


/* =========================================================
   TAMPILKAN SOAL POS
========================================================= */

function showQuestionForPost(postNumber) {

    const postQuestions =
        questions.filter(
            q => q.post === postNumber
        );


    if (!postQuestions.length) {

        moveToNextPost();

        return;

    }


    /*
       Cari soal pertama yang belum dikerjakan
    */

    let question =
        postQuestions.find(
            q =>
                !q._answered
        );


    if (!question) {

        moveToNextPost();

        return;

    }


    gameState.activeQuestion =
        question;


    renderQuestion(
        question,
        postNumber
    );

}


/* =========================================================
   RENDER SOAL
========================================================= */

function renderQuestion(question, postNumber) {

    showScreen("gameScreen");


    const postTitle =
        $("#locationTitle") ||
        $("#postTitle") ||
        $("#gamePostTitle");


    if (postTitle) {

        postTitle.textContent =
            `📍 POS ${postNumber}`;

    }


    const questionCounter =
        $("#questionCounter");


    if (questionCounter) {

        const number =
            questions.indexOf(question) + 1;

        questionCounter.textContent =
            `Soal ${number} dari ${questions.length}`;

    }


    const questionText =
        $("#questionText");


    if (questionText) {

        questionText.textContent =
            question.question;

    }


    const optionsContainer =
        $("#optionsContainer");


    if (!optionsContainer) {

        console.error(
            "optionsContainer tidak ditemukan."
        );

        return;

    }


    optionsContainer.innerHTML = "";


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "answer-option";


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
                () => {

                    answerQuestion(
                        question,
                        index,
                        button
                    );

                }
            );


            optionsContainer.appendChild(
                button
            );

        }
    );


    updateProgress();

}


/* =========================================================
   JAWAB SOAL
========================================================= */

function answerQuestion(
    question,
    selectedIndex,
    clickedButton
) {

    if (question._answered) {
        return;
    }


    question._answered = true;


    const buttons =
        $$(".answer-option");


    buttons.forEach(button => {

        button.disabled = true;

    });


    const correct =
        selectedIndex === question.answer;


    if (correct) {

        gameState.correct++;
        gameState.score += 10;

        clickedButton.classList.add(
            "correct"
        );

    } else {

        gameState.wrong++;

        clickedButton.classList.add(
            "wrong"
        );


        if (buttons[question.answer]) {

            buttons[
                question.answer
            ].classList.add(
                "correct"
            );

        }

    }


    gameState.answered++;


    const feedback =
        $("#answerFeedback");


    if (feedback) {

        feedback.className =
            correct
                ? "answer-feedback correct"
                : "answer-feedback wrong";


        feedback.textContent =
            correct
                ? "✅ Jawaban benar!"
                : "❌ Jawaban salah. Tetap lanjut ke pos berikutnya.";

    }


    updateProgress();


    setTimeout(() => {

        moveToNextPost();

    }, 1200);

}


/* =========================================================
   PINDAH POS
========================================================= */

function moveToNextPost() {

    const current =
        gameState.currentPost;


    if (current < 7) {

        showPostAccess(
            current + 1
        );

        return;

    }


    if (current === 7) {

        evaluateAtPost7();

    }

}


/* =========================================================
   PENILAIAN POS 7
========================================================= */

function evaluateAtPost7() {

    const total =
        questions.length;


    const wrong =
        gameState.wrong;


    /*
       "Kesalahan lebih dari setengah total soal"
    */

    const failed =
        wrong > total / 2;


    if (failed) {

        showResultBeforePenalty();

    } else {

        finishGame();

    }

}


/* =========================================================
   HASIL POS 7
========================================================= */

function showResultBeforePenalty() {

    showModal(
        "😅",
        "Petualangan Belum Selesai!",
        `Kelompok melakukan ${gameState.wrong} kesalahan dari ${gameState.totalQuestions} soal. Kalian harus melanjutkan ke POS 8!`,
        () => {

            showPostAccess(8);

        }
    );

}


/* =========================================================
   POS 8 & 9
========================================================= */

function showChallengePost(postNumber) {

    showScreen("gameScreen");


    const challenge =
        challenges[postNumber];


    const postTitle =
        $("#locationTitle") ||
        $("#postTitle") ||
        $("#gamePostTitle");


    if (postTitle) {

        postTitle.textContent =
            `📍 POS ${postNumber}`;

    }


    const questionCounter =
        $("#questionCounter");


    if (questionCounter) {

        questionCounter.textContent =
            "TANTANGAN KHUSUS";

    }


    const questionText =
        $("#questionText");


    if (questionText) {

        questionText.textContent =
            challenge.title +
            "\n\n" +
            challenge.text;

    }


    const options =
        $("#optionsContainer");


    if (options) {

        options.innerHTML = `
            <div class="challenge-card">
                <div class="challenge-title">
                    🎬 Tantangan Pos ${postNumber}
                </div>

                <p>
                    ${escapeHTML(challenge.text)}
                </p>
            </div>
        `;

    }


    showVideoRecorder(
        postNumber
    );

}


/* =========================================================
   VIDEO RECORDER
========================================================= */

let mediaRecorder = null;
let recordedChunks = [];
let cameraStream = null;


async function showVideoRecorder(
    postNumber
) {

    let recorder =
        $("#videoRecorderCard");


    /*
       Jika elemen recorder belum tersedia,
       buat secara otomatis.
    */

    if (!recorder) {

        recorder =
            document.createElement("div");

        recorder.id =
            "videoRecorderCard";

        recorder.className =
            "challenge-card video-recorder-card";


        const gameScreen =
            $("#gameScreen") ||
            document.body;


        gameScreen.appendChild(
            recorder
        );

    }


    recorder.innerHTML = `

        <div class="challenge-title">
            🎥 Rekam Tantangan Pos ${postNumber}
        </div>

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
            Kamera siap digunakan.
        </div>

        <div
            id="recordingTimer"
            class="recording-timer"
        >
            00:00
        </div>

        <div class="video-button-grid">

            <button
                type="button"
                class="primary-button"
                id="startRecordingButton"
            >
                🎥 Mulai Rekam
            </button>

            <button
                type="button"
                class="secondary-button"
                id="stopRecordingButton"
                disabled
            >
                ⏹️ Berhenti
            </button>

        </div>

        <button
            type="button"
            class="primary-button"
            id="sendVideoButton"
            disabled
        >
            📤 Upload Video
        </button>

        <div
            id="videoUploadMessage"
            class="answer-feedback"
        ></div>

        <div
            id="nextVideoAccess"
            class="hidden"
            style="margin-top:15px;"
        >

            <button
                type="button"
                class="primary-button"
                id="nextPostButton"
            >
                🔐 Lanjut ke Pos ${postNumber + 1}
            </button>

        </div>
    `;


    try {

        cameraStream =
            await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            });


        const video =
            $("#cameraPreview");


        if (video) {

            video.srcObject =
                cameraStream;

        }

    } catch (error) {

        const status =
            $("#recordingStatus");

        if (status) {

            status.textContent =
                "⚠️ Kamera tidak dapat diakses. Pastikan izin kamera diberikan.";

        }

    }


    $("#startRecordingButton")
        ?.addEventListener(
            "click",
            startRecording
        );


    $("#stopRecordingButton")
        ?.addEventListener(
            "click",
            stopRecording
        );


    $("#sendVideoButton")
        ?.addEventListener(
            "click",
            uploadVideo
        );


    $("#nextPostButton")
        ?.addEventListener(
            "click",
            () => {

                if (
                    gameState.videoUploaded[
                        postNumber
                    ]
                ) {

                    stopCamera();

                    if (postNumber === 8) {

                        showPostAccess(9);

                    } else {

                        showPostAccess(10);

                    }

                }

            }
        );

}


/* =========================================================
   START RECORDING
========================================================= */

let recordingStartTime = 0;
let recordingInterval = null;


function startRecording() {

    if (!cameraStream) {

        showToast(
            "Kamera belum tersedia.",
            "error"
        );

        return;

    }


    recordedChunks = [];


    try {

        mediaRecorder =
            new MediaRecorder(
                cameraStream,
                {
                    mimeType:
                        "video/webm"
                }
            );

    } catch (error) {

        mediaRecorder =
            new MediaRecorder(
                cameraStream
            );

    }


    mediaRecorder.ondataavailable =
        event => {

            if (
                event.data &&
                event.data.size > 0
            ) {

                recordedChunks.push(
                    event.data
                );

            }

        };


    mediaRecorder.onstop =
        () => {

            const blob =
                new Blob(
                    recordedChunks,
                    {
                        type:
                            "video/webm"
                    }
                );


            const url =
                URL.createObjectURL(
                    blob
                );


            const preview =
                $("#recordedPreview");


            if (preview) {

                preview.src = url;

                preview.classList.remove(
                    "hidden"
                );

            }


            const send =
                $("#sendVideoButton");


            if (send) {

                send.disabled = false;

            }

        };


    mediaRecorder.start();

    recordingStartTime =
        Date.now();


    recordingInterval =
        setInterval(
            updateRecordingTimer,
            1000
        );


    $("#startRecordingButton")
        .disabled = true;


    $("#stopRecordingButton")
        .disabled = false;


    const status =
        $("#recordingStatus");


    if (status) {

        status.textContent =
            "🔴 Sedang merekam...";
    }

}


/* =========================================================
   STOP RECORDING
========================================================= */

function stopRecording() {

    if (
        mediaRecorder &&
        mediaRecorder.state !== "inactive"
    ) {

        mediaRecorder.stop();

    }


    clearInterval(
        recordingInterval
    );


    $("#startRecordingButton")
        .disabled = false;


    $("#stopRecordingButton")
        .disabled = true;


    const status =
        $("#recordingStatus");


    if (status) {

        status.textContent =
            "✅ Rekaman selesai. Silakan periksa lalu upload.";

    }

}


/* =========================================================
   RECORDING TIMER
========================================================= */

function updateRecordingTimer() {

    const elapsed =
        Math.floor(
            (Date.now() -
                recordingStartTime) /
                1000
        );


    const minutes =
        Math.floor(
            elapsed / 60
        );


    const seconds =
        elapsed % 60;


    const element =
        $("#recordingTimer");


    if (element) {

        element.textContent =
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");

    }

}


/* =========================================================
   UPLOAD VIDEO
========================================================= */

function uploadVideo() {

    const post =
        gameState.currentPost;


    /*
       Pada versi dasar ini upload dianggap selesai
       setelah video selesai direkam dan dikonfirmasi.
       Jika nanti menggunakan Google Drive / Apps Script,
       fungsi ini dapat dihubungkan ke server.
    */


    const message =
        $("#videoUploadMessage");


    if (message) {

        message.className =
            "answer-feedback correct";

        message.textContent =
            "⏳ Video sedang diproses...";

    }


    const send =
        $("#sendVideoButton");


    if (send) {

        send.disabled = true;

    }


    setTimeout(() => {

        gameState.videoUploaded[
            post
        ] = true;


        if (message) {

            message.textContent =
                "✅ Video berhasil diproses! Akses pos berikutnya telah terbuka.";

        }


        const next =
            $("#nextVideoAccess");


        if (next) {

            next.classList.remove(
                "hidden"
            );

        }

    }, 800);

}


/* =========================================================
   STOP CAMERA
========================================================= */

function stopCamera() {

    if (!cameraStream) {
        return;
    }


    cameraStream
        .getTracks()
        .forEach(track => {

            track.stop();

        });


    cameraStream = null;

}


/* =========================================================
   POS 10
========================================================= */

function showFinalPost() {

    stopCamera();

    showScreen("gameScreen");


    const postTitle =
        $("#locationTitle") ||
        $("#postTitle") ||
        $("#gamePostTitle");


    if (postTitle) {

        postTitle.textContent =
            "📍 POS 10";

    }


    const questionCounter =
        $("#questionCounter");


    if (questionCounter) {

        questionCounter.textContent =
            "PETUALANGAN SELESAI";

    }


    const questionText =
        $("#questionText");


    if (questionText) {

        questionText.textContent =
            "😊";

        questionText.style.textAlign =
            "center";

        questionText.style.fontSize =
            "80px";

    }


    const options =
        $("#optionsContainer");


    if (options) {

        options.innerHTML = `
            <div
                style="
                    text-align:center;
                    padding:30px 10px;
                "
            >
                <div
                    style="
                        font-size:90px;
                        margin-bottom:15px;
                    "
                >
                    😊
                </div>

                <h2>
                    Selamat!
                </h2>

                <p>
                    Kalian telah mencapai POS 10.
                </p>

                <button
                    type="button"
                    class="primary-button"
                    id="finishAdventureButton"
                    style="margin-top:20px;"
                >
                    🏁 Kembali ke Kelas
                </button>

            </div>
        `;


        $("#finishAdventureButton")
            ?.addEventListener(
                "click",
                finishGame
            );

    }

}


/* =========================================================
   FINISH
========================================================= */

function finishGame() {

    clearInterval(
        gameState.timer
    );


    stopCamera();


    const finishTeam =
        $("#finishTeamName") ||
        $("#finalTeamName");


    if (finishTeam) {

        finishTeam.textContent =
            gameState.teamName;

    }


    const score =
        $("#finalScore");


    if (score) {

        score.textContent =
            gameState.score;

    }


    const correct =
        $("#finalCorrect");


    if (correct) {

        correct.textContent =
            gameState.correct;

    }


    const wrong =
        $("#finalWrong");


    if (wrong) {

        wrong.textContent =
            gameState.wrong;

    }


    const time =
        $("#finalTime");


    if (time) {

        time.textContent =
            formatTime(
                GAME_DURATION -
                gameState.timeLeft
            );

    }


    if ($("#finishScreen")) {

        showScreen(
            "finishScreen"
        );

    } else {

        showModal(
            "🎉",
            "Petualangan Selesai!",
            `Selamat ${gameState.teamName}! Kalian telah menyelesaikan petualangan.`
        );

    }

}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

    const total =
        gameState.totalQuestions;


    if (!total) {
        return;
    }


    const progress =
        Math.min(
            100,
            (
                gameState.answered /
                total
            ) * 100
        );


    const fill =
        $(".progress-fill");


    if (fill) {

        fill.style.width =
            progress + "%";

    }


    const answered =
        $("#answeredCount");


    if (answered) {

        answered.textContent =
            gameState.answered;

    }


    const score =
        $("#scoreDisplay");


    if (score) {

        score.textContent =
            gameState.score;

    }

}


/* =========================================================
   MODAL
========================================================= */

function showModal(
    icon,
    title,
    message,
    callback
) {

    const modal =
        $("#modal");


    if (!modal) {

        if (confirm(
            `${title}\n\n${message}`
        )) {

            if (callback) {
                callback();
            }

        }

        return;

    }


    modal.classList.add(
        "show"
    );


    const modalIcon =
        $("#modalIcon");


    const modalTitle =
        $("#modalTitle");


    const modalMessage =
        $("#modalMessage");


    if (modalIcon) {
        modalIcon.textContent =
            icon;
    }


    if (modalTitle) {
        modalTitle.textContent =
            title;
    }


    if (modalMessage) {
        modalMessage.textContent =
            message;
    }


    const button =
        $("#modalButton");


    if (button) {

        button.onclick = () => {

            modal.classList.remove(
                "show"
            );

            if (callback) {
                callback();
            }

        };

    }

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message,
    type = ""
) {

    const toast =
        $("#toast");


    if (!toast) {

        alert(message);

        return;

    }


    toast.textContent =
        message;


    toast.className =
        `toast show ${type}`;


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 2500);

}


/* =========================================================
   GENERAL BUTTON
========================================================= */

function bindGeneralButtons() {

    document.addEventListener(
        "click",
        event => {

            const target =
                event.target.closest(
                    "[data-start-game]"
                );


            if (target) {

                event.preventDefault();

                startAdventure();

            }

        }
    );


    const startAgain =
        $("#restartButton") ||
        $("#restartGameButton");


    if (startAgain) {

        startAgain.addEventListener(
            "click",
            () => {

                location.reload();

            }
        );

    }

}


/* =========================================================
   FORMAT WAKTU
========================================================= */

function formatTime(seconds) {

    const minutes =
        Math.floor(
            seconds / 60
        );


    const remaining =
        seconds % 60;


    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(remaining).padStart(2, "0")
    );

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(text) {

    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   EXPOSE GLOBAL
   Memastikan fungsi bisa dipanggil oleh onclick
   dari index.html.
========================================================= */

window.startAdventure =
    startAdventure;

window.checkPostCode =
    checkPostCode;

window.enterPost =
    enterPost;

window.finishGame =
    finishGame;

window.startRecording =
    startRecording;

window.stopRecording =
    stopRecording;

window.uploadVideo =
    uploadVideo;
```
