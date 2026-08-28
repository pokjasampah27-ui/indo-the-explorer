```javascript
/* =========================================================
   JELAJAH SEKOLAH
   SCRIPT.JS — VERSI PLUG & PLAY
   ========================================================= */

"use strict";

/* =========================================================
   DATA SOAL
   20 SOAL:
   1–6  LOTS
   7–14 MOTS
   15–20 HOTS
   ========================================================= */

const QUESTIONS = [

    {
        id: 1,
        level: "LOTS",
        question:
            "Paragraf yang kalimat utamanya terletak di awal paragraf dan diikuti oleh kalimat-kalimat penjelas disebut paragraf ....",
        options: [
            "Induktif",
            "Deduktif",
            "Campuran",
            "Naratif",
            "Deskriptif"
        ],
        answer: 1,
        explanation:
            "Paragraf deduktif memiliki gagasan utama atau kalimat utama di awal paragraf."
    },

    {
        id: 2,
        level: "LOTS",
        question:
            "Perhatikan paragraf berikut!\n\nMembaca memiliki banyak manfaat bagi siswa. Kegiatan membaca dapat menambah wawasan, memperkaya kosakata, dan melatih kemampuan memahami informasi. Selain itu, membaca secara rutin dapat membantu siswa mengembangkan kemampuan berpikir kritis.\n\nKalimat utama paragraf tersebut adalah ....",
        options: [
            "Membaca memiliki banyak manfaat bagi siswa.",
            "Kegiatan membaca dapat menambah wawasan.",
            "Membaca dapat memperkaya kosakata siswa.",
            "Membaca dapat melatih kemampuan memahami informasi.",
            "Membaca secara rutin dapat membantu siswa mengembangkan kemampuan berpikir kritis."
        ],
        answer: 0,
        explanation:
            "Kalimat pertama merupakan gagasan umum yang dijelaskan oleh kalimat-kalimat berikutnya."
    },

    {
        id: 3,
        level: "LOTS",
        question:
            "Perhatikan paragraf berikut!\n\nSampah plastik sulit terurai secara alami. Sampah tersebut dapat mencemari tanah dan perairan. Selain itu, pembakaran sampah plastik dapat menghasilkan zat yang berbahaya bagi kesehatan. Oleh karena itu, penggunaan plastik sekali pakai perlu dikurangi.\n\nJenis paragraf tersebut adalah ....",
        options: [
            "Deduktif",
            "Induktif",
            "Campuran",
            "Naratif",
            "Argumentatif"
        ],
        answer: 1,
        explanation:
            "Gagasan utama terdapat di akhir paragraf dan didahului fakta-fakta khusus."
    },

    {
        id: 4,
        level: "LOTS",
        question:
            "Dalam kalimat “Rina membaca buku di perpustakaan”, kata “membaca” berfungsi sebagai ....",
        options: [
            "Subjek",
            "Predikat",
            "Objek",
            "Pelengkap",
            "Keterangan"
        ],
        answer: 1,
        explanation:
            "Kata “membaca” menerangkan tindakan yang dilakukan oleh subjek Rina sehingga berfungsi sebagai predikat."
    },

    {
        id: 5,
        level: "LOTS",
        question:
            "Kata “keindahan” dalam kalimat “Keindahan alam Indonesia menarik perhatian wisatawan” termasuk kelas kata ....",
        options: [
            "Verba",
            "Adjektiva",
            "Nomina",
            "Adverbia",
            "Pronomina"
        ],
        answer: 2,
        explanation:
            "“Keindahan” merupakan kata benda atau nomina."
    },

    {
        id: 6,
        level: "LOTS",
        question:
            "Kata “sangat” dalam kalimat “Pemandangan itu sangat indah” termasuk kelas kata ....",
        options: [
            "Nomina",
            "Verba",
            "Adjektiva",
            "Adverbia",
            "Konjungsi"
        ],
        answer: 3,
        explanation:
            "“Sangat” merupakan adverbia yang menerangkan tingkat kata “indah”."
    },

    {
        id: 7,
        level: "MOTS",
        question:
            "Perhatikan paragraf berikut!\n\nKedisiplinan siswa perlu dibangun melalui kebiasaan sehari-hari. Siswa yang datang tepat waktu akan terbiasa menghargai waktu. Siswa yang mengerjakan tugas sesuai jadwal akan belajar bertanggung jawab. Demikian pula, siswa yang menaati tata tertib akan terbiasa mematuhi aturan.\n\nPola pengembangan paragraf tersebut adalah ....",
        options: [
            "Induktif, karena simpulan terdapat di akhir",
            "Deduktif, karena gagasan utama terdapat di awal",
            "Campuran, karena gagasan utama terdapat di awal dan akhir",
            "Induktif, karena kalimat penjelas lebih banyak daripada kalimat utama",
            "Campuran, karena semua kalimat memiliki kedudukan yang sama"
        ],
        answer: 1,
        explanation:
            "Gagasan utama berada pada kalimat pertama dan diikuti oleh penjelasan."
    },

    {
        id: 8,
        level: "MOTS",
        question:
            "Perhatikan paragraf berikut!\n\nPemerintah perlu meningkatkan kualitas transportasi umum. Transportasi umum yang nyaman dapat mengurangi penggunaan kendaraan pribadi. Berkurangnya kendaraan pribadi dapat membantu mengurangi kemacetan. Selain itu, penggunaan transportasi umum dapat menekan tingkat pencemaran udara. Dengan demikian, peningkatan kualitas transportasi umum memberikan banyak manfaat bagi masyarakat.\n\nHubungan kalimat pertama dan terakhir dalam paragraf tersebut menunjukkan pola ....",
        options: [
            "Deduktif",
            "Induktif",
            "Campuran",
            "Kronologis",
            "Deskriptif"
        ],
        answer: 2,
        explanation:
            "Gagasan utama disampaikan di awal dan ditegaskan kembali di akhir."
    },

    {
        id: 9,
        level: "MOTS",
        question:
            "Perhatikan paragraf berikut!\n\nBanyak siswa menggunakan telepon pintar untuk mencari informasi pembelajaran. Mereka dapat mengakses buku digital, video pembelajaran, dan berbagai sumber pengetahuan lainnya. Namun, penggunaan telepon pintar tanpa pengawasan dapat mengganggu konsentrasi belajar. Oleh sebab itu, penggunaan telepon pintar untuk belajar harus dilakukan secara bijaksana.\n\nKalimat utama paragraf tersebut adalah ....",
        options: [
            "Banyak siswa menggunakan telepon pintar untuk mencari informasi pembelajaran.",
            "Mereka dapat mengakses buku digital, video pembelajaran, dan berbagai sumber pengetahuan lainnya.",
            "Penggunaan telepon pintar tanpa pengawasan dapat mengganggu konsentrasi belajar.",
            "Penggunaan telepon pintar untuk belajar harus dilakukan secara bijaksana.",
            "Buku digital dan video pembelajaran dapat diakses melalui telepon pintar."
        ],
        answer: 3,
        explanation:
            "Kalimat terakhir menjadi simpulan utama berdasarkan uraian sebelumnya."
    },

    {
        id: 10,
        level: "MOTS",
        question:
            "Perhatikan kalimat berikut!\n\nPara siswa sedang membersihkan halaman sekolah.\n\nFungsi unsur “Para siswa” dan “halaman sekolah” berturut-turut adalah ....",
        options: [
            "Predikat dan objek",
            "Subjek dan pelengkap",
            "Subjek dan objek",
            "Objek dan keterangan",
            "Pelengkap dan objek"
        ],
        answer: 2,
        explanation:
            "“Para siswa” merupakan subjek, sedangkan “halaman sekolah” merupakan objek."
    },

    {
        id: 11,
        level: "MOTS",
        question:
            "Perhatikan kalimat berikut!\n\nAyah membeli sepatu baru untuk adik.\n\nUnsur “untuk adik” berfungsi sebagai ....",
        options: [
            "Subjek",
            "Predikat",
            "Objek",
            "Pelengkap",
            "Keterangan"
        ],
        answer: 4,
        explanation:
            "Frasa “untuk adik” merupakan keterangan yang menjelaskan pihak yang menerima manfaat."
    },

    {
        id: 12,
        level: "MOTS",
        question:
            "Perhatikan kalimat berikut!\n\nSiswa itu menjadi ketua kelas.\n\nFungsi unsur “ketua kelas” adalah ....",
        options: [
            "Subjek",
            "Predikat",
            "Objek",
            "Pelengkap",
            "Keterangan"
        ],
        answer: 3,
        explanation:
            "“Ketua kelas” merupakan pelengkap setelah verba “menjadi”."
    },

    {
        id: 13,
        level: "MOTS",
        question:
            "Perhatikan kelompok kata berikut!\n\n1. rumah\n2. berlari\n3. indah\n4. mereka\n5. dengan cepat\n\nUrutan kelas kata yang tepat adalah ....",
        options: [
            "Nomina – verba – adjektiva – pronomina – frasa adverbial",
            "Verba – nomina – adjektiva – pronomina – frasa preposisional",
            "Nomina – verba – adverbia – pronomina – frasa adjektival",
            "Nomina – adjektiva – verba – pronomina – frasa adverbial",
            "Nomina – verba – adjektiva – numeralia – frasa adverbial"
        ],
        answer: 0,
        explanation:
            "Rumah = nomina, berlari = verba, indah = adjektiva, mereka = pronomina, dengan cepat = frasa adverbial."
    },

    {
        id: 14,
        level: "MOTS",
        question:
            "Perhatikan kalimat berikut!\n\nMereka berjalan sangat cepat menuju lapangan.\n\nKata “sangat” dan “cepat” secara berturut-turut termasuk ....",
        options: [
            "Adverbia dan adjektiva",
            "Adjektiva dan adverbia",
            "Verba dan adjektiva",
            "Adverbia dan verba",
            "Nomina dan adjektiva"
        ],
        answer: 0,
        explanation:
            "“Sangat” merupakan adverbia dan “cepat” merupakan adjektiva."
    },

    {
        id: 15,
        level: "HOTS",
        question:
            "Perhatikan paragraf berikut!\n\n(1) Penggunaan kendaraan pribadi di kota-kota besar terus meningkat.\n(2) Kondisi tersebut menyebabkan jumlah kendaraan di jalan raya semakin padat.\n(3) Kepadatan kendaraan kemudian menimbulkan kemacetan pada berbagai ruas jalan.\n(4) Kemacetan menyebabkan waktu perjalanan masyarakat menjadi lebih lama.\n(5) Dengan demikian, peningkatan penggunaan kendaraan pribadi dapat memperburuk persoalan transportasi di perkotaan.\n\nJika kalimat (5) dihilangkan, jenis paragraf berdasarkan posisi gagasan utamanya akan berubah menjadi ....",
        options: [
            "Deduktif karena kalimat (1) merupakan gagasan utama",
            "Induktif karena kalimat (1)–(4) berisi fakta khusus",
            "Campuran karena kalimat (2) dan (4) menjadi gagasan utama",
            "Deskriptif karena seluruh kalimat menggambarkan kemacetan",
            "Naratif karena terdapat hubungan sebab-akibat"
        ],
        answer: 1,
        explanation:
            "Tanpa kalimat simpulan, uraian bergerak dari fakta-fakta khusus menuju kesimpulan yang tersirat."
    },

    {
        id: 16,
        level: "HOTS",
        question:
            "Perhatikan dua paragraf berikut!\n\nParagraf A:\nMenjaga kebersihan lingkungan merupakan tanggung jawab bersama. Lingkungan yang bersih membuat masyarakat merasa nyaman. Kebersihan juga dapat mengurangi risiko munculnya berbagai penyakit.\n\nParagraf B:\nLingkungan yang kotor dapat menjadi tempat berkembangnya berbagai sumber penyakit. Sampah yang menumpuk juga dapat menimbulkan bau tidak sedap dan mencemari lingkungan. Oleh karena itu, menjaga kebersihan lingkungan merupakan tanggung jawab bersama.\n\nPernyataan yang paling tepat adalah ....",
        options: [
            "Paragraf A dan B sama-sama induktif karena memiliki simpulan.",
            "Paragraf A deduktif, sedangkan paragraf B induktif.",
            "Paragraf A induktif, sedangkan paragraf B deduktif.",
            "Paragraf A dan B sama-sama deduktif karena membahas topik yang sama.",
            "Paragraf A campuran, sedangkan paragraf B induktif."
        ],
        answer: 1,
        explanation:
            "Paragraf A memiliki gagasan utama di awal, sedangkan paragraf B memiliki gagasan utama di akhir."
    },

    {
        id: 17,
        level: "HOTS",
        question:
            "Perhatikan kalimat berikut!\n\nDi ruang kelas, siswa mendiskusikan masalah lingkungan secara serius.\n\nAnalisis fungsi kalimat yang tepat adalah ....",
        options: [
            "Di ruang kelas = objek, siswa = subjek, mendiskusikan = predikat",
            "Di ruang kelas = keterangan, siswa = subjek, mendiskusikan = predikat, masalah lingkungan = objek, secara serius = keterangan",
            "Di ruang kelas = pelengkap, siswa = subjek, masalah lingkungan = predikat",
            "siswa = objek, mendiskusikan = predikat, masalah lingkungan = subjek",
            "secara serius = objek karena menerangkan tindakan mendiskusikan"
        ],
        answer: 1,
        explanation:
            "“Di ruang kelas” dan “secara serius” merupakan keterangan, “siswa” subjek, “mendiskusikan” predikat, dan “masalah lingkungan” objek."
    },

    {
        id: 18,
        level: "HOTS",
        question:
            "Perhatikan kalimat berikut!\n\nKegiatan membaca sangat bermanfaat bagi perkembangan kemampuan berpikir siswa.\n\nSeorang siswa mengidentifikasi “sangat bermanfaat” sebagai objek karena berada setelah subjek. Pernyataan yang paling tepat untuk memperbaiki analisis tersebut adalah ....",
        options: [
            "Benar, karena semua unsur setelah subjek merupakan objek.",
            "Benar, karena bermanfaat merupakan kata kerja transitif.",
            "Salah, karena sangat bermanfaat berfungsi sebagai predikat.",
            "Salah, karena sangat bermanfaat berfungsi sebagai subjek.",
            "Salah, karena sangat merupakan kata benda."
        ],
        answer: 2,
        explanation:
            "“Sangat bermanfaat” menerangkan keadaan atau sifat subjek sehingga berfungsi sebagai predikat."
    },

    {
        id: 19,
        level: "HOTS",
        question:
            "Perhatikan kalimat berikut!\n\nKetiga siswa itu berhasil menyelesaikan tugas kelompok dengan cepat.\n\nPernyataan yang tepat mengenai kelas kata dalam kalimat tersebut adalah ....",
        options: [
            "ketiga = nomina, siswa = verba, berhasil = adjektiva",
            "ketiga = numeralia, siswa = nomina, menyelesaikan = verba",
            "ketiga = pronomina, siswa = adjektiva, berhasil = verba",
            "itu = nomina, berhasil = adverbia, dengan = konjungsi",
            "cepat = verba, tugas = adjektiva, kelompok = pronomina"
        ],
        answer: 1,
        explanation:
            "“Ketiga” menunjukkan jumlah sehingga termasuk numeralia; “siswa” nomina; “menyelesaikan” verba."
    },

    {
        id: 20,
        level: "HOTS",
        question:
            "Perhatikan paragraf berikut!\n\nMembaca secara rutin dapat meningkatkan kemampuan literasi siswa. Dengan membaca, siswa memperoleh kosakata baru dan mengenal berbagai struktur kalimat. Kegiatan tersebut juga membantu siswa memahami informasi secara lebih kritis. Kebiasaan membaca yang dilakukan secara konsisten pada akhirnya akan memperkuat kemampuan literasi siswa.\n\nBerdasarkan posisi kalimat utama dan hubungan antargagasannya, alasan paling tepat bahwa paragraf tersebut termasuk paragraf campuran adalah ....",
        options: [
            "Kalimat pertama merupakan fakta, sedangkan kalimat terakhir merupakan opini.",
            "Terdapat lebih dari satu kalimat yang membahas kegiatan membaca.",
            "Gagasan utama disampaikan pada awal paragraf, kemudian ditegaskan kembali pada akhir paragraf dengan bentuk yang berbeda.",
            "Semua kalimat memiliki informasi yang sama pentingnya.",
            "Kalimat kedua dan ketiga merupakan kalimat utama karena menjelaskan manfaat membaca."
        ],
        answer: 2,
        explanation:
            "Gagasan utama terdapat di awal dan kembali ditegaskan pada akhir paragraf dengan redaksi berbeda."
    }

];


/* =========================================================
   KONFIGURASI GAME
   ========================================================= */

const GAME_CONFIG = {

    totalQuestions: QUESTIONS.length,

    // Waktu permainan dalam detik.
    gameTime: 15 * 60,

    // Waktu dead-end jika digunakan.
    deadEndTime: 10,

    // Jumlah pos.
    totalPosts: 20

};


/* =========================================================
   STATE GAME
   ========================================================= */

const GAME = {

    teamName: "",

    members: [],

    currentQuestion: 0,

    score: 0,

    correct: 0,

    wrong: 0,

    answered: false,

    startTime: null,

    remainingTime: GAME_CONFIG.gameTime,

    timerInterval: null,

    currentPost: 1,

    postAnswers: {},

    finished: false

};


/* =========================================================
   DOM HELPER
   ========================================================= */

function $(id) {
    return document.getElementById(id);
}


/* =========================================================
   SCREEN NAVIGATION
   ========================================================= */

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen) {
        screen.classList.remove("active");
    });

    const target = $(screenId);

    if (!target) {
        console.error("Screen tidak ditemukan:", screenId);
        return;
    }

    target.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message, type = "success") {

    const toast = $("toast");

    if (!toast) return;

    const toastMessage =
        toast.querySelector(".toast-message") ||
        toast.querySelector("p") ||
        toast;

    if (toastMessage) {
        toastMessage.textContent = message;
    }

    toast.classList.remove("success", "error", "show");

    toast.classList.add(type);

    requestAnimationFrame(function () {
        toast.classList.add("show");
    });

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2500);
}


/* =========================================================
   MULAI PETUALANGAN
   ========================================================= */

function startAdventure() {

    /*
     * Tombol Mulai Petualangan sekarang benar-benar
     * mengarah ke halaman pendaftaran tim.
     */

    showScreen("teamScreen");

    const teamInput = $("teamName");

    if (teamInput) {
        setTimeout(function () {
            teamInput.focus();
        }, 300);
    }
}


/* =========================================================
   MULAI GAME
   ========================================================= */

function startGame() {

    const teamInput = $("teamName");

    let teamName = "";

    if (teamInput) {
        teamName = teamInput.value.trim();
    }

    if (!teamName) {
        showToast(
            "Silakan masukkan nama tim terlebih dahulu.",
            "error"
        );

        if (teamInput) {
            teamInput.focus();
        }

        return;
    }

    GAME.teamName = teamName;

    GAME.currentQuestion = 0;
    GAME.score = 0;
    GAME.correct = 0;
    GAME.wrong = 0;
    GAME.answered = false;
    GAME.currentPost = 1;
    GAME.postAnswers = {};
    GAME.finished = false;
    GAME.remainingTime = GAME_CONFIG.gameTime;
    GAME.startTime = Date.now();

    collectMembers();

    showScreen("gameScreen");

    updateTeamDisplay();

    updateProgress();

    renderQuestion();

    startTimer();

    showToast("Petualangan dimulai! Semangat!", "success");
}


/* =========================================================
   AMBIL NAMA ANGGOTA
   ========================================================= */

function collectMembers() {

    GAME.members = [];

    const memberInputs =
        document.querySelectorAll(
            'input[data-member], .member-input'
        );

    memberInputs.forEach(function (input) {

        const value = input.value.trim();

        if (value) {
            GAME.members.push(value);
        }

    });

    /*
     * Jika HTML menggunakan satu atau beberapa input
     * tetapi belum diberi data-member, kita coba mencari
     * input nama anggota berdasarkan pola umum.
     */

    if (GAME.members.length === 0) {

        const possibleInputs = document.querySelectorAll(
            'input[placeholder*="anggota"], input[placeholder*="Anggota"]'
        );

        possibleInputs.forEach(function (input) {

            const value = input.value.trim();

            if (value) {
                GAME.members.push(value);
            }

        });

    }

}


/* =========================================================
   TAMPILKAN INFORMASI TIM
   ========================================================= */

function updateTeamDisplay() {

    const teamElements =
        document.querySelectorAll(
            "#gameTeamName, .team-name, [data-team-name]"
        );

    teamElements.forEach(function (element) {
        element.textContent = GAME.teamName;
    });

}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

    stopTimer();

    updateTimerDisplay();

    GAME.timerInterval = setInterval(function () {

        GAME.remainingTime--;

        updateTimerDisplay();

        if (GAME.remainingTime <= 0) {

            GAME.remainingTime = 0;

            updateTimerDisplay();

            stopTimer();

            finishGame("Waktu permainan telah habis.");

        }

    }, 1000);

}


function stopTimer() {

    if (GAME.timerInterval) {

        clearInterval(GAME.timerInterval);

        GAME.timerInterval = null;

    }

}


function updateTimerDisplay() {

    const minutes =
        Math.floor(GAME.remainingTime / 60);

    const seconds =
        GAME.remainingTime % 60;

    const formatted =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

    const timerElements =
        document.querySelectorAll(
            "#gameTimer, .timer-box, [data-timer]"
        );

    timerElements.forEach(function (element) {

        element.textContent = formatted;

    });

}


/* =========================================================
   RENDER SOAL
   ========================================================= */

function renderQuestion() {

    const question =
        QUESTIONS[GAME.currentQuestion];

    if (!question) {

        finishGame("Semua pos telah diselesaikan.");

        return;

    }

    GAME.answered = false;

    const counter =
        $("questionCounter") ||
        document.querySelector(".question-counter");

    const questionText =
        $("questionText") ||
        document.querySelector(".question-text");

    const optionsContainer =
        $("optionsContainer") ||
        document.querySelector(".options-container");

    const feedback =
        $("answerFeedback") ||
        document.querySelector(".answer-feedback");

    const submitButton =
        $("submitAnswerButton");

    const nextButton =
        $("nextButton");

    const postNumber =
        $("postNumber");

    const level =
        $("questionLevel");

    if (counter) {

        counter.textContent =
            `Pos ${GAME.currentQuestion + 1} dari ${QUESTIONS.length}`;

    }

    if (postNumber) {
        postNumber.textContent =
            GAME.currentQuestion + 1;
    }

    if (level) {
        level.textContent =
            question.level;
    }

    if (questionText) {
        questionText.textContent =
            question.question;
    }

    if (feedback) {

        feedback.textContent = "";

        feedback.classList.remove(
            "correct",
            "wrong"
        );

    }

    if (optionsContainer) {

        optionsContainer.innerHTML = "";

        question.options.forEach(
            function (option, index) {

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
                        ${escapeHTML(option)}
                    </span>
                `;

                button.addEventListener(
                    "click",
                    function () {
                        selectOption(button);
                    }
                );

                optionsContainer.appendChild(button);

            }
        );

    }

    if (submitButton) {

        submitButton.disabled = true;

        submitButton.classList.remove("hidden");

    }

    if (nextButton) {

        nextButton.disabled = true;

        nextButton.classList.add("hidden");

    }

    updateProgress();

}


/* =========================================================
   PILIH JAWABAN
   ========================================================= */

function selectOption(button) {

    if (GAME.answered) return;

    const options =
        document.querySelectorAll(
            ".answer-option"
        );

    options.forEach(function (option) {
        option.classList.remove("selected");
    });

    button.classList.add("selected");

    const submitButton =
        $("submitAnswerButton");

    if (submitButton) {
        submitButton.disabled = false;
    }

}


/* =========================================================
   CEK JAWABAN
   ========================================================= */

function submitAnswer() {

    if (GAME.answered) return;

    const selected =
        document.querySelector(
            ".answer-option.selected"
        );

    if (!selected) {

        showToast(
            "Pilih salah satu jawaban terlebih dahulu.",
            "error"
        );

        return;

    }

    GAME.answered = true;

    const selectedIndex =
        Number(selected.dataset.index);

    const question =
        QUESTIONS[GAME.currentQuestion];

    const correctIndex =
        question.answer;

    const options =
        document.querySelectorAll(
            ".answer-option"
        );

    options.forEach(function (button) {

        button.disabled = true;

        const index =
            Number(button.dataset.index);

        if (index === correctIndex) {

            button.classList.add("correct");

        }

        if (
            index === selectedIndex &&
            index !== correctIndex
        ) {

            button.classList.add("wrong");

        }

    });

    const feedback =
        $("answerFeedback") ||
        document.querySelector(".answer-feedback");

    if (selectedIndex === correctIndex) {

        GAME.correct++;

        GAME.score += getQuestionScore(
            question.level
        );

        GAME.postAnswers[question.id] = {
            answer: selectedIndex,
            correct: true,
            level: question.level
        };

        if (feedback) {

            feedback.textContent =
                "✅ Jawaban benar! " +
                question.explanation;

            feedback.classList.add("correct");

        }

        showToast(
            "Jawaban benar! 🎉",
            "success"
        );

    } else {

        GAME.wrong++;

        GAME.postAnswers[question.id] = {
            answer: selectedIndex,
            correct: false,
            level: question.level
        };

        if (feedback) {

            feedback.textContent =
                "❌ Jawaban belum tepat. " +
                question.explanation;

            feedback.classList.add("wrong");

        }

        showToast(
            "Jawaban belum tepat.",
            "error"
        );

    }

    const submitButton =
        $("submitAnswerButton");

    if (submitButton) {
        submitButton.classList.add("hidden");
    }

    const nextButton =
        $("nextButton");

    if (nextButton) {

        nextButton.disabled = false;

        nextButton.classList.remove("hidden");

    }

    updateProgress();

}


/* =========================================================
   SKOR BERDASARKAN TINGKAT
   ========================================================= */

function getQuestionScore(level) {

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
   SOAL BERIKUTNYA
   ========================================================= */

function nextQuestion() {

    if (!GAME.answered) {

        showToast(
            "Jawab soal terlebih dahulu.",
            "error"
        );

        return;

    }

    GAME.currentQuestion++;

    GAME.currentPost =
        GAME.currentQuestion + 1;

    if (
        GAME.currentQuestion >=
        QUESTIONS.length
    ) {

        finishGame(
            "Selamat! Semua pos berhasil diselesaikan."
        );

        return;

    }

    renderQuestion();

}


/* =========================================================
   PROGRESS
   ========================================================= */

function updateProgress() {

    const total =
        QUESTIONS.length;

    const current =
        GAME.currentQuestion + 1;

    const percentage =
        Math.min(
            100,
            (GAME.currentQuestion / total) * 100
        );

    const progressFill =
        $("progressFill") ||
        document.querySelector(".progress-fill");

    if (progressFill) {

        progressFill.style.width =
            percentage + "%";

    }

    const progressText =
        $("progressText");

    if (progressText) {

        progressText.textContent =
            `${Math.min(current, total)} / ${total}`;

    }

    const scoreDisplay =
        $("scoreDisplay");

    if (scoreDisplay) {

        scoreDisplay.textContent =
            GAME.score;

    }

}


/* =========================================================
   FINISH GAME
   ========================================================= */

function finishGame(message) {

    if (GAME.finished) return;

    GAME.finished = true;

    stopTimer();

    const elapsed =
        GAME.startTime
            ? Date.now() - GAME.startTime
            : 0;

    const elapsedSeconds =
        Math.floor(elapsed / 1000);

    showScreen("finishScreen");

    updateFinishScreen(
        message,
        elapsedSeconds
    );

}


/* =========================================================
   HASIL AKHIR
   ========================================================= */

function updateFinishScreen(
    message,
    elapsedSeconds
) {

    const teamName =
        $("finishTeamName") ||
        document.querySelector(".finish-team strong");

    if (teamName) {
        teamName.textContent =
            GAME.teamName;
    }

    const finishMessage =
        $("finishMessage") ||
        document.querySelector(".finish-message");

    if (finishMessage) {
        finishMessage.textContent =
            message;
    }

    const score =
        $("finalScore") ||
        document.querySelector("[data-final-score]");

    if (score) {
        score.textContent =
            GAME.score;
    }

    const correct =
        $("finalCorrect") ||
        document.querySelector("[data-final-correct]");

    if (correct) {
        correct.textContent =
            GAME.correct;
    }

    const wrong =
        $("finalWrong") ||
        document.querySelector("[data-final-wrong]");

    if (wrong) {
        wrong.textContent =
            GAME.wrong;
    }

    const total =
        $("finalTotal") ||
        document.querySelector("[data-final-total]");

    if (total) {
        total.textContent =
            QUESTIONS.length;
    }

    const time =
        $("finalTime") ||
        document.querySelector("[data-final-time]");

    if (time) {

        time.textContent =
            formatDuration(elapsedSeconds);

    }

}


/* =========================================================
   FORMAT WAKTU
   ========================================================= */

function formatDuration(seconds) {

    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        seconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );

}


/* =========================================================
   ULANGI GAME
   ========================================================= */

function restartGame() {

    stopTimer();

    GAME.teamName = "";
    GAME.members = [];
    GAME.currentQuestion = 0;
    GAME.score = 0;
    GAME.correct = 0;
    GAME.wrong = 0;
    GAME.answered = false;
    GAME.currentPost = 1;
    GAME.postAnswers = {};
    GAME.finished = false;
    GAME.remainingTime =
        GAME_CONFIG.gameTime;

    showScreen("startScreen");

}


/* =========================================================
   KELUAR / KEMBALI
   ========================================================= */

function backToStart() {

    stopTimer();

    showScreen("startScreen");

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   EVENT LISTENER
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Jelajah Sekolah siap dimainkan."
        );


        /* -----------------------------------------
           MULAI PETUALANGAN
        ----------------------------------------- */

        const startButton =
            $("startButton");

        if (startButton) {

            startButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    startAdventure();

                }
            );

        }


        /* -----------------------------------------
           MULAI PERMAINAN
        ----------------------------------------- */

        const beginButton =
            $("beginGameButton") ||
            $("startGameButton");

        if (beginButton) {

            beginButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    startGame();

                }
            );

        }


        /* -----------------------------------------
           CEK JAWABAN
        ----------------------------------------- */

        const submitButton =
            $("submitAnswerButton");

        if (submitButton) {

            submitButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    submitAnswer();

                }
            );

        }


        /* -----------------------------------------
           SOAL BERIKUTNYA
        ----------------------------------------- */

        const nextButton =
            $("nextButton");

        if (nextButton) {

            nextButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    nextQuestion();

                }
            );

        }


        /* -----------------------------------------
           MAIN LAGI
        ----------------------------------------- */

        const restartButton =
            $("restartButton");

        if (restartButton) {

            restartButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    restartGame();

                }
            );

        }


        /* -----------------------------------------
           KEMBALI KE AWAL
        ----------------------------------------- */

        const backButton =
            $("backToStartButton");

        if (backButton) {

            backButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    backToStart();

                }
            );

        }


        /* -----------------------------------------
           TOMBOL ENTER UNTUK NAMA TIM
        ----------------------------------------- */

        const teamInput =
            $("teamName");

        if (teamInput) {

            teamInput.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter"
                    ) {

                        event.preventDefault();

                        const begin =
                            $("beginGameButton") ||
                            $("startGameButton");

                        if (begin) {
                            begin.click();
                        }

                    }

                }
            );

        }

    }
);


/* =========================================================
   MENCEGAH ACCIDENTAL REFRESH SAAT GAME BERJALAN
   ========================================================= */

window.addEventListener(
    "beforeunload",
    function (event) {

        if (
            GAME.startTime &&
            !GAME.finished
        ) {

            event.preventDefault();

            event.returnValue = "";

        }

    }
);


/* =========================================================
   PUBLIC API
   ========================================================= */

window.JelajahSekolah = {

    startAdventure,
    startGame,
    submitAnswer,
    nextQuestion,
    finishGame,
    restartGame,
    showScreen

};
```
