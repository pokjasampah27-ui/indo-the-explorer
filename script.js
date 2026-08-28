"use strict";

document.addEventListener("DOMContentLoaded", function () {

```
/* =====================================================
   KONFIGURASI
===================================================== */

const ASSET_FOLDER = "./assets/";

const MAIN_TIME = 30 * 60;
const DEAD_END_TIME = 5 * 60;


/* =====================================================
   DATA POS DAN SOAL
===================================================== */

const POS_DATA = {

    1: {
        title: "POS 1 — GERBANG PETUALANGAN",
        image: "pos1.jpeg",
        clue:
            "Temukan lokasi sesuai foto Pos 1. Setelah sampai, cari pesan yang disembunyikan.",
        secretCode: "MULAI",

        questions: [

            {
                level: "LOTS",
                question:
                    "Bacalah paragraf berikut!\n\n" +
                    "Kebersihan lingkungan sekolah harus menjadi tanggung jawab seluruh warga sekolah. Lingkungan yang bersih membuat kegiatan belajar menjadi nyaman. Selain itu, lingkungan yang terawat dapat mengurangi risiko penyebaran penyakit. Oleh karena itu, setiap warga sekolah harus berperan aktif menjaga kebersihan.\n\n" +
                    "Letak gagasan utama paragraf tersebut adalah ....",
                options: [
                    "di awal paragraf",
                    "di akhir paragraf",
                    "di awal dan akhir paragraf",
                    "di tengah paragraf",
                    "tersebar pada seluruh paragraf"
                ],
                answer: 0,
                explanation:
                    "Gagasan utama terdapat di awal paragraf, yaitu bahwa kebersihan lingkungan sekolah harus menjadi tanggung jawab seluruh warga sekolah."
            },

            {
                level: "LOTS",
                question:
                    "Bacalah paragraf berikut!\n\n" +
                    "Setiap pagi, Rani menyiram tanaman di halaman rumah. Ia juga membersihkan daun-daun kering yang berserakan. Tanaman diberinya pupuk secara teratur. Kebiasaan tersebut membuat tanaman di halaman rumah tumbuh subur dan terawat.\n\n" +
                    "Paragraf tersebut termasuk paragraf ....",
                options: [
                    "deduktif",
                    "induktif",
                    "campuran",
                    "naratif",
                    "deskriptif"
                ],
                answer: 1,
                explanation:
                    "Gagasan utama berada di akhir paragraf sehingga paragraf tersebut termasuk paragraf induktif."
            },

            {
                level: "MOTS",
                question:
                    "Perhatikan kalimat-kalimat berikut!\n\n" +
                    "(1) Membaca buku dapat menambah wawasan seseorang.\n" +
                    "(2) Melalui membaca, seseorang memperoleh informasi baru.\n" +
                    "(3) Membaca juga dapat meningkatkan kemampuan berpikir kritis.\n" +
                    "(4) Oleh sebab itu, membaca merupakan kegiatan yang sangat bermanfaat.\n\n" +
                    "Pola pengembangan paragraf tersebut adalah ....",
                options: [
                    "deduktif",
                    "induktif",
                    "campuran",
                    "kronologis",
                    "sebab-akibat"
                ],
                answer: 1,
                explanation:
                    "Gagasan utama berupa simpulan berada di akhir paragraf sehingga pola pengembangannya induktif."
            }

        ],

        next: 2
    },


    2: {
        title: "POS 2 — JEJAK KEDUA",
        image: "pos2.jpeg",
        clue:
            "Ikuti petunjuk dari Pos 1 menuju lokasi pada foto Pos 2.",
        secretCode: "JEJAK",

        questions: [

            {
                level: "MOTS",
                question:
                    "Bacalah paragraf berikut!\n\n" +
                    "Penggunaan transportasi umum memberikan banyak manfaat bagi masyarakat. Kendaraan umum dapat mengurangi jumlah kendaraan pribadi di jalan raya. Selain itu, penggunaan transportasi umum dapat mengurangi kemacetan dan polusi udara. Dengan demikian, transportasi umum memang memberikan manfaat besar bagi kehidupan masyarakat.\n\n" +
                    "Paragraf tersebut disebut paragraf campuran karena ....",
                options: [
                    "memiliki dua gagasan utama yang berbeda",
                    "gagasan utama hanya terdapat di tengah paragraf",
                    "gagasan utama terdapat di awal dan ditegaskan kembali di akhir",
                    "seluruh kalimatnya merupakan kalimat penjelas",
                    "diawali dengan fakta dan diakhiri dengan pertanyaan"
                ],
                answer: 2,
                explanation:
                    "Paragraf campuran memiliki gagasan utama di awal yang kemudian ditegaskan kembali pada akhir paragraf."
            },

            {
                level: "HOTS",
                question:
                    "Perhatikan paragraf berikut!\n\n" +
                    "Sampah plastik sulit terurai secara alami. Ketika dibuang sembarangan, sampah tersebut dapat menyumbat saluran air. Plastik yang masuk ke sungai juga dapat mencemari ekosistem perairan. Bahkan, hewan dapat mati karena memakan sampah plastik. Oleh karena itu, penggunaan plastik sekali pakai perlu dikurangi.\n\n" +
                    "Jika kalimat terakhir dihilangkan, perubahan yang paling tepat terhadap paragraf tersebut adalah ....",
                options: [
                    "paragraf berubah menjadi deduktif",
                    "paragraf tetap memiliki gagasan utama yang jelas di awal",
                    "paragraf menjadi kurang memiliki penegasan terhadap simpulan",
                    "paragraf berubah menjadi paragraf campuran",
                    "paragraf kehilangan seluruh kalimat penjelas"
                ],
                answer: 2,
                explanation:
                    "Kalimat terakhir berfungsi sebagai penegasan simpulan. Jika dihilangkan, paragraf menjadi kurang memiliki penegasan terhadap simpulan."
            },

            {
                level: "HOTS",
                question:
                    "Perhatikan paragraf berikut!\n\n" +
                    "Olahraga secara teratur dapat meningkatkan kebugaran tubuh. Aktivitas fisik membantu menjaga berat badan dan memperkuat otot. Selain itu, olahraga dapat meningkatkan daya tahan tubuh. Kebiasaan berolahraga juga dapat membantu seseorang mengurangi stres. Dengan demikian, olahraga teratur memberikan banyak manfaat bagi kesehatan fisik dan mental.\n\n" +
                    "Jika kalimat pertama dan terakhir digabung menjadi satu kalimat, kemudian salah satunya dihilangkan, paragraf yang tersisa paling tepat dikategorikan sebagai ....",
                options: [
                    "paragraf deduktif",
                    "paragraf induktif",
                    "paragraf campuran",
                    "paragraf argumentatif tanpa gagasan utama",
                    "paragraf deskriptif"
                ],
                answer: 1,
                explanation:
                    "Dengan mempertahankan simpulan pada bagian akhir setelah kalimat penjelas, paragraf tersebut paling tepat dikategorikan sebagai paragraf induktif."
            }

        ],

        next: 3
    },


    3: {
        title: "POS 3 — PESAN TERSEMBUNYI",
        image: "pos3.jpeg",
        clue:
            "Cari lokasi sesuai foto Pos 3. Temukan pesan yang disembunyikan.",
        secretCode: "PESAN",

        questions: [

            {
                level: "LOTS",
                question:
                    "Perhatikan kalimat berikut!\n\n" +
                    "Ayah membaca koran di teras rumah.\n\n" +
                    "Kata Ayah berfungsi sebagai ....",
                options: [
                    "predikat",
                    "objek",
                    "subjek",
                    "pelengkap",
                    "keterangan"
                ],
                answer: 2,
                explanation:
                    "Ayah merupakan pelaku atau pokok pembicaraan dalam kalimat sehingga berfungsi sebagai subjek."
            },

            {
                level: "LOTS",
                question:
                    "Perhatikan kalimat berikut!\n\n" +
                    "Sinta membeli buku di toko.\n\n" +
                    "Kata buku berfungsi sebagai ....",
                options: [
                    "subjek",
                    "predikat",
                    "objek",
                    "pelengkap",
                    "keterangan"
                ],
                answer: 2,
                explanation:
                    "Buku merupakan sesuatu yang dikenai tindakan membeli sehingga berfungsi sebagai objek."
            },

            {
                level: "MOTS",
                question:
                    "Perhatikan kalimat berikut!\n\n" +
                    "Adik menjadi dokter setelah dewasa.\n\n" +
                    "Kata dokter dalam kalimat tersebut berfungsi sebagai ....",
                options: [
                    "subjek",
                    "predikat",
                    "objek",
                    "pelengkap",
                    "keterangan"
                ],
                answer: 3,
                explanation:
                    "Kata dokter melengkapi predikat menjadi sehingga berfungsi sebagai pelengkap."
            }

        ],

        next: 4
    },


    4: {
        title: "POS 4 — UJI KETELITIAN",
        image: "pos4.jpeg",
        clue:
            "Perhatikan lingkungan sekitar dan cari pesan sesuai petunjuk.",
        secretCode: "TELITI",

        questions: [

            {
                level: "MOTS",
                question:
                    "Perhatikan kalimat berikut!\n\n" +
                    "Para siswa belajar di perpustakaan.\n\n" +
                    "Frasa di perpustakaan berfungsi sebagai ....",
                options: [
                    "subjek",
                    "predikat",
                    "objek",
                    "pelengkap",
                    "keterangan"
                ],
                answer: 4,
                explanation:
                    "Frasa di perpustakaan menerangkan tempat berlangsungnya kegiatan belajar sehingga berfungsi sebagai keterangan."
            },

            {
                level: "HOTS",
                question:
                    "Perhatikan dua kalimat berikut!\n\n" +
                    "(1) Rina menjadi ketua kelas.\n" +
                    "(2) Rina memilih ketua kelas.\n\n" +
                    "Perbedaan fungsi kata/frasa yang dicetak tebal adalah ....",
                options: [
                    "ketua kelas pada (1) merupakan objek, sedangkan pada (2) merupakan pelengkap",
                    "ketua kelas pada (1) merupakan pelengkap, sedangkan pada (2) merupakan objek",
                    "keduanya merupakan objek",
                    "keduanya merupakan pelengkap",
                    "keduanya merupakan predikat"
                ],
                answer: 1,
                explanation:
                    "Pada kalimat (1), ketua kelas melengkapi predikat menjadi sehingga menjadi pelengkap. Pada kalimat (2), ketua kelas dikenai tindakan memilih sehingga menjadi objek."
            },

            {
                level: "HOTS",
                question:
                    "Perhatikan kalimat berikut!\n\n" +
                    "Ibu memberikan adik hadiah ulang tahun di ruang tamu.\n\n" +
                    "Analisis fungsi kalimat yang paling tepat adalah ....",
                options: [
                    "S-P-O-K-Pel",
                    "S-P-Pel-O-K",
                    "S-P-O-Pel-K",
                    "S-P-K-O-Pel",
                    "K-S-P-O-Pel"
                ],
                answer: 2,
                explanation:
                    "Ibu = S, memberikan = P, adik = O, hadiah ulang tahun = Pel, dan di ruang tamu = K."
            }

        ],

        next: 5
    },


    5: {
        title: "POS 5 — LANGKAH BERIKUTNYA",
        image: "pos5.jpeg",
        clue:
            "Temukan lokasi Pos 5 berdasarkan foto dan petunjuk perjalanan.",
        secretCode: "LANGKAH",

        questions: [

            {
                level: "LOTS",
                question:
                    "Kata berlari dalam kalimat berikut termasuk kelas kata ....\n\n" +
                    "Dimas berlari menuju lapangan.",
                options: [
                    "nomina",
                    "verba",
                    "adjektiva",
                    "adverbia",
                    "pronomina"
                ],
                answer: 1,
                explanation:
                    "Berlari menyatakan suatu tindakan atau aktivitas sehingga termasuk verba."
            },

            {
                level: "LOTS",
                question:
                    "Kata indah dalam kalimat berikut termasuk kelas kata ....\n\n" +
                    "Pemandangan di pegunungan itu sangat indah.",
                options: [
                    "nomina",
                    "verba",
                    "adjektiva",
                    "pronomina",
                    "numeralia"
                ],
                answer: 2,
                explanation:
                    "Indah menyatakan sifat atau keadaan sehingga termasuk adjektiva."
            },

            {
                level: "MOTS",
                question:
                    "Perhatikan kalimat berikut!\n\n" +
                    "Mereka sedang berdiskusi tentang kebersihan sekolah.\n\n" +
                    "Kata mereka termasuk kelas kata ....",
                options: [
                    "nomina",
                    "verba",
                    "pronomina",
                    "adjektiva",
                    "konjungsi"
                ],
                answer: 2,
                explanation:
                    "Mereka merupakan kata yang menggantikan atau merujuk pada orang sehingga termasuk pronomina."
            }

        ],

        next: 6
    },


    6: {
        title: "POS 6 — MENDEKATI AKHIR",
        image: "pos6.jpeg",
        clue:
            "Kalian semakin dekat dengan akhir perjalanan. Tetap teliti membaca pesan.",
        secretCode: "KOMPAS",

        questions: [

            {
                level: "MOTS",
                question:
                    "Perhatikan kalimat berikut!\n\n" +
                    "Siswa itu mengerjakan tugas dengan cepat.\n\n" +
                    "Kata cepat termasuk kelas kata ....",
                options: [
                    "nomina",
                    "verba",
                    "adjektiva",
                    "adverbia",
                    "numeralia"
                ],
                answer: 3,
                explanation:
                    "Dalam konteks tersebut, cepat menerangkan bagaimana tindakan mengerjakan dilakukan sehingga berfungsi sebagai adverbia."
            },

            {
                level: "MOTS",
                question:
                    "Perhatikan kalimat berikut!\n\n" +
                    "Tiga siswa mengikuti lomba membaca puisi.\n\n" +
                    "Kata tiga termasuk kelas kata ....",
                options: [
                    "numeralia",
                    "nomina",
                    "pronomina",
                    "verba",
                    "konjungsi"
                ],
                answer: 0,
                explanation:
                    "Tiga menyatakan jumlah sehingga termasuk numeralia."
            },

            {
                level: "HOTS",
                question:
                    "Bacalah kalimat berikut!\n\n" +
                    "Para siswa membersihkan halaman sekolah dengan sapu.\n\n" +
                    "Analisis yang paling tepat adalah ....",
                options: [
                    "Para siswa = S, membersihkan = P, halaman sekolah = O, dengan sapu = K",
                    "Para siswa = O, membersihkan = P, halaman sekolah = S, dengan sapu = Pel",
                    "Para siswa = S, membersihkan = P, halaman sekolah = Pel, dengan sapu = O",
                    "Para siswa = S, membersihkan = O, halaman sekolah = P, dengan sapu = K",
                    "Para siswa = Pel, membersihkan = P, halaman sekolah = O, dengan sapu = S"
                ],
                answer: 0,
                explanation:
                    "Para siswa berfungsi sebagai subjek, membersihkan sebagai predikat, halaman sekolah sebagai objek, dan dengan sapu sebagai keterangan."
            }

        ],

        next: 7
    },


    7: {
        title: "POS 7 — POS TERAKHIR",
        image: "pos7.jpeg",
        clue:
            "Ini adalah pos terakhir pada jalur utama. Temukan pesan dan selesaikan seluruh tantangannya.",
        secretCode: "JUARA",

        questions: [

            {
                level: "HOTS",
                question:
                    "Perhatikan paragraf berikut!\n\n" +
                    "Banyak siswa mulai membawa botol minum sendiri ke sekolah. Mereka tidak lagi sering membeli minuman dalam kemasan plastik. Beberapa siswa bahkan menggunakan kotak makan yang dapat dipakai berulang kali. Kebiasaan tersebut membantu mengurangi jumlah sampah plastik di sekolah. Oleh karena itu, membawa wadah makan dan minum sendiri merupakan langkah sederhana untuk menjaga lingkungan.\n\n" +
                    "Berdasarkan letak gagasan utamanya, paragraf tersebut termasuk ....",
                options: [
                    "deduktif karena gagasan utama terdapat di awal",
                    "induktif karena gagasan utama terdapat di akhir",
                    "campuran karena gagasan utama terdapat di awal dan akhir",
                    "deduktif karena semua kalimat berupa fakta",
                    "campuran karena terdapat lebih dari satu kalimat utama"
                ],
                answer: 1,
                explanation:
                    "Gagasan utama ditegaskan melalui simpulan pada akhir paragraf sehingga paragraf tersebut termasuk paragraf induktif."
            },

            {
                level: "HOTS",
                question:
                    "Bacalah paragraf berikut!\n\n" +
                    "Membaca buku secara rutin dapat meningkatkan kemampuan berbahasa. Seseorang yang banyak membaca akan menemukan berbagai kosakata baru. Ia juga dapat mempelajari berbagai bentuk kalimat dan cara menyampaikan gagasan. Selain itu, membaca dapat membantu seseorang memahami penggunaan kata sesuai konteks. Dengan demikian, kebiasaan membaca sangat penting untuk meningkatkan kemampuan berbahasa seseorang.\n\n" +
                    "Berdasarkan paragraf tersebut, pernyataan yang paling tepat adalah ....",
                options: [
                    "Paragraf tersebut induktif karena simpulan terdapat di akhir.",
                    "Paragraf tersebut deduktif karena hanya memiliki satu kalimat utama.",
                    "Paragraf tersebut campuran karena gagasan utama dinyatakan di awal dan ditegaskan kembali di akhir.",
                    "Kalimat kedua merupakan kalimat utama karena menjelaskan kalimat pertama.",
                    "Kalimat terakhir merupakan satu-satunya gagasan utama dalam paragraf."
                ],
                answer: 2,
                explanation:
                    "Gagasan utama terdapat di awal dan ditegaskan kembali melalui simpulan di akhir sehingga paragraf tersebut termasuk paragraf campuran."
            }

        ],

        next: null
    },


    /* =================================================
       JALUR BUNTU
    ================================================= */

    8: {
        title: "POS 8 — JALUR BUNTU",
        image: "pos8.jpeg",
        deadEnd: true,
        instruction:
            "PERINTAH: Periksa kembali lokasi ini dengan teliti. Temukan petunjuk yang sengaja disembunyikan. Jika tidak menemukan petunjuk, kembali ke pos sebelumnya."
    },

    9: {
        title: "POS 9 — JALUR BUNTU",
        image: "pos9.jpeg",
        deadEnd: true,
        instruction:
            "PERINTAH: Amati lingkungan sekitar. Cari pesan yang mungkin tersembunyi di lokasi ini. Setelah selesai, kembali ke pos sebelumnya."
    },

    10: {
        title: "POS 10",
        image: "pos10.jpeg",
        deadEnd: true,
        specialSmile: true
    }

};


/* =====================================================
   STATE
===================================================== */

const state = {

    leader: "",
    members: [],

    currentPos: 1,
    previousCorrectPos: 1,

    currentQuestionIndex: 0,

    selectedAnswer: null,
    secretVerified: false,

    correctAnswers: 0,
    wrongAnswers: 0,
    questionAttempts: 0,

    completedPositions: [],
    completedQuestions: [],

    visitedDeadEnds: [],

    startTime: null,
    finishTime: null,

    mainRemaining: MAIN_TIME,
    mainTimer: null,

    deadEndRemaining: DEAD_END_TIME,
    deadEndTimer: null,

    gameStarted: false

};


/* =====================================================
   HELPER
===================================================== */

function $(id) {
    return document.getElementById(id);
}


function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(function (item) {
            item.classList.remove("active");
        });

    if (screen) {
        screen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function formatTime(seconds) {

    seconds = Math.max(0, seconds);

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        seconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(secs).padStart(2, "0")
    );
}


function escapeHtml(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =====================================================
   TOAST
===================================================== */

let toastTimeout = null;

function showToast(message, type) {

    const toast = $("toast");
    const icon = $("toastIcon");
    const text = $("toastMessage");

    if (!toast || !icon || !text) {
        return;
    }

    clearTimeout(toastTimeout);

    toast.className = "toast";

    if (type === "success") {
        toast.classList.add("success");
        icon.textContent = "✅";
    }
    else if (type === "error") {
        toast.classList.add("error");
        icon.textContent = "⚠️";
    }
    else {
        icon.textContent = "💡";
    }

    text.textContent = message;

    toast.classList.add("show");

    toastTimeout = setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}


/* =====================================================
   MODAL
===================================================== */

function showModal(title, message, icon) {

    $("modalTitle").textContent = title;
    $("modalMessage").textContent = message;
    $("modalIcon").textContent = icon || "💡";

    $("gameModal").classList.add("show");

    document.body.classList.add("no-scroll");
}


function closeModal() {

    $("gameModal").classList.remove("show");

    document.body.classList.remove("no-scroll");
}


/* =====================================================
   RESET GAME
===================================================== */

function resetGame() {

    clearInterval(state.mainTimer);
    clearInterval(state.deadEndTimer);

    state.leader = "";
    state.members = [];

    state.currentPos = 1;
    state.previousCorrectPos = 1;

    state.currentQuestionIndex = 0;

    state.selectedAnswer = null;
    state.secretVerified = false;

    state.correctAnswers = 0;
    state.wrongAnswers = 0;
    state.questionAttempts = 0;

    state.completedPositions = [];
    state.completedQuestions = [];

    state.visitedDeadEnds = [];

    state.startTime = null;
    state.finishTime = null;

    state.mainRemaining = MAIN_TIME;
    state.deadEndRemaining = DEAD_END_TIME;

    state.mainTimer = null;
    state.deadEndTimer = null;

    state.gameStarted = false;

    $("timerDisplay").textContent =
        formatTime(MAIN_TIME);

    $("timerDisplay")
        .classList.remove("danger");

    $("deadEndTimer").textContent =
        formatTime(DEAD_END_TIME);

    $("deadEndTimer")
        .classList.remove("danger");

    $("progressPercent").textContent = "0%";

    $("progressFill").style.width = "0%";
}


/* =====================================================
   MULAI PETUALANGAN
   PERBAIKAN UTAMA
===================================================== */

$("startButton").addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        showScreen(
            $("teamScreen")
        );

        setTimeout(function () {

            const leaderInput =
                $("leaderName");

            if (leaderInput) {
                leaderInput.focus();
            }

        }, 250);

    }
);


/* =====================================================
   FORM TIM
===================================================== */

$("teamForm").addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const leader =
            $("leaderName").value.trim();

        const members = [
            $("member1").value.trim(),
            $("member2").value.trim(),
            $("member3").value.trim(),
            $("member4").value.trim(),
            $("member5").value.trim()
        ];


        if (!leader) {

            showToast(
                "Nama ketua belum diisi.",
                "error"
            );

            $("leaderName").focus();

            return;
        }


        const emptyIndex =
            members.findIndex(
                function (member) {
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

            $("member" + (emptyIndex + 1)).focus();

            return;
        }


        state.leader = leader;
        state.members = members;

        $("teamNameDisplay").textContent =
            leader;

        showScreen(
            $("instructionScreen")
        );

    }
);


/* =====================================================
   MULAI MISI
===================================================== */

$("beginMissionButton").addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        startGame();

    }
);


function startGame() {

    clearInterval(state.mainTimer);
    clearInterval(state.deadEndTimer);

    state.currentPos = 1;
    state.previousCorrectPos = 1;

    state.currentQuestionIndex = 0;

    state.selectedAnswer = null;
    state.secretVerified = false;

    state.correctAnswers = 0;
    state.wrongAnswers = 0;
    state.questionAttempts = 0;

    state.completedPositions = [];
    state.completedQuestions = [];

    state.visitedDeadEnds = [];

    state.mainRemaining = MAIN_TIME;
    state.deadEndRemaining = DEAD_END_TIME;

    state.startTime = Date.now();
    state.finishTime = null;

    state.gameStarted = true;

    $("teamNameDisplay").textContent =
        state.leader;

    $("timerDisplay").textContent =
        formatTime(state.mainRemaining);

    $("timerDisplay")
        .classList.remove("danger");

    showScreen(
        $("gameScreen")
    );

    loadPosition(1);

    startMainTimer();

    showToast(
        "Petualangan dimulai!",
        "success"
    );
}


/* =====================================================
   TIMER UTAMA 30 MENIT
===================================================== */

function startMainTimer() {

    clearInterval(state.mainTimer);

    state.mainTimer =
        setInterval(function () {

            if (!state.gameStarted) {
                return;
            }

            state.mainRemaining--;

            $("timerDisplay").textContent =
                formatTime(
                    state.mainRemaining
                );


            if (state.mainRemaining <= 60) {

                $("timerDisplay")
                    .classList.add("danger");

            }
            else {

                $("timerDisplay")
                    .classList.remove("danger");

            }


            if (state.mainRemaining <= 0) {

                clearInterval(
                    state.mainTimer
                );

                state.gameStarted = false;

                showModal(
                    "Waktu Habis!",
                    "Waktu permainan 30 menit telah habis.",
                    "⏰"
                );

            }

        }, 1000);
}


/* =====================================================
   LOAD POS
===================================================== */

function loadPosition(position) {

    const pos =
        POS_DATA[position];

    if (!pos) {

        showToast(
            "Data pos tidak ditemukan.",
            "error"
        );

        return;
    }


    state.currentPos = position;
    state.currentQuestionIndex = 0;
    state.selectedAnswer = null;
    state.secretVerified = false;


    if (pos.deadEnd) {

        loadDeadEnd(position);

        return;
    }


    loadMainPosition(position);
}


/* =====================================================
   POS UTAMA
===================================================== */

function loadMainPosition(position) {

    const pos =
        POS_DATA[position];

    stopDeadEndTimer();


    $("posTitle").textContent =
        pos.title;


    const image =
        $("locationImage");


    image.onerror = function () {

        this.onerror = null;

        this.src =
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(
                "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'>" +
                "<rect width='100%' height='100%' fill='#e5e7eb'/>" +
                "<text x='50%' y='50%' text-anchor='middle' font-size='28' fill='#64748b'>" +
                "Foto Pos " + position +
                "</text></svg>"
            );
    };


    image.src =
        ASSET_FOLDER + pos.image;

    image.alt =
        "Foto lokasi " + pos.title;


    $("imageLabel").textContent =
        "Lokasi Pos " + position;


    $("clueText").textContent =
        pos.clue;


    $("currentPosDisplay").textContent =
        position + " / 7";


    updateProgress(position);


    $("questionArea")
        .classList.remove("hidden");

    $("secretArea")
        .classList.remove("hidden");

    $("nextClueArea")
        .classList.add("hidden");

    $("deadEndArea")
        .classList.add("hidden");


    $("secretCodeInput").value = "";

    $("secretMessage").textContent = "";


    renderCurrentQuestion();

}


/* =====================================================
   RENDER SOAL SAAT INI
===================================================== */

function renderCurrentQuestion() {

    const pos =
        POS_DATA[state.currentPos];

    if (!pos || !pos.questions) {
        return;
    }


    const question =
        pos.questions[
            state.currentQuestionIndex
        ];


    if (!question) {
        showNextClue(state.currentPos);
        return;
    }


    $("questionText").textContent =
        question.question;


    $("questionLevel").textContent =
        "TANTANGAN POS • " +
        question.level;


    $("currentQuestionDisplay").textContent =
        "Soal " +
        (state.currentQuestionIndex + 1) +
        " dari " +
        pos.questions.length;


    $("answerFeedback").textContent = "";

    $("answerFeedback")
        .className =
        "answer-feedback";


    state.selectedAnswer = null;


    renderOptions(
        question.options
    );


    $("submitAnswerButton").disabled =
        true;

}


/* =====================================================
   KODE RAHASIA
===================================================== */

$("secretCodeButton").addEventListener(
    "click",
    verifySecretCode
);


$("secretCodeInput").addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            verifySecretCode();

        }

    }
);


function verifySecretCode() {

    const pos =
        POS_DATA[state.currentPos];

    if (!pos || pos.deadEnd) {
        return;
    }


    const entered =
        $("secretCodeInput")
            .value
            .trim()
            .toUpperCase();


    if (!entered) {

        $("secretMessage").textContent =
            "Masukkan kode rahasia terlebih dahulu.";

        return;
    }


    if (
        entered ===
        pos.secretCode.toUpperCase()
    ) {

        state.secretVerified = true;

        $("secretMessage").textContent =
            "✓ Kode benar. Tantangan dapat dikerjakan.";

        enableAnswers();

        showToast(
            "Kode rahasia benar!",
            "success"
        );

    }
    else {

        state.secretVerified = false;

        $("secretMessage").textContent =
            "✕ Kode salah. Periksa kembali pesan di lokasi.";

        disableAnswers();

        showToast(
            "Kode rahasia salah.",
            "error"
        );
    }
}


function enableAnswers() {

    document
        .querySelectorAll(".answer-option")
        .forEach(function (button) {

            button.disabled = false;

        });


    $("submitAnswerButton").disabled =
        state.selectedAnswer === null;
}


function disableAnswers() {

    document
        .querySelectorAll(".answer-option")
        .forEach(function (button) {

            button.disabled = true;

        });


    $("submitAnswerButton").disabled = true;
}


/* =====================================================
   PILIHAN JAWABAN
===================================================== */

function renderOptions(options) {

    const container =
        $("optionsContainer");

    container.innerHTML = "";


    options.forEach(
        function (option, index) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "answer-option";

            button.dataset.index =
                index;

            button.innerHTML =
                "<span class='option-letter'>" +
                String.fromCharCode(65 + index) +
                "</span>" +
                "<span class='option-text'>" +
                escapeHtml(option) +
                "</span>";


            button.disabled =
                !state.secretVerified;


            button.addEventListener(
                "click",
                function () {

                    selectAnswer(index);

                }
            );


            container.appendChild(button);

        }
    );

}


function selectAnswer(index) {

    if (!state.secretVerified) {

        showToast(
            "Masukkan kode rahasia terlebih dahulu.",
            "error"
        );

        return;
    }


    state.selectedAnswer =
        index;


    document
        .querySelectorAll(".answer-option")
        .forEach(
            function (button, buttonIndex) {

                button.classList.toggle(
                    "selected",
                    buttonIndex === index
                );

            }
        );


    $("submitAnswerButton").disabled =
        false;
}


/* =====================================================
   PERIKSA JAWABAN
===================================================== */

$("submitAnswerButton").addEventListener(
    "click",
    checkAnswer
);


function checkAnswer() {

    if (state.selectedAnswer === null) {

        showToast(
            "Pilih salah satu jawaban.",
            "error"
        );

        return;
    }


    const pos =
        POS_DATA[state.currentPos];


    const question =
        pos.questions[
            state.currentQuestionIndex
        ];


    if (!question) {
        return;
    }


    const selected =
        state.selectedAnswer;


    const buttons =
        document.querySelectorAll(
            ".answer-option"
        );


    state.questionAttempts++;


    buttons.forEach(
        function (button) {

            button.disabled = true;

        }
    );


    $("submitAnswerButton").disabled =
        true;


    /* ================================
       JAWABAN BENAR
    ================================= */

    if (selected === question.answer) {

        state.correctAnswers++;


        buttons[question.answer]
            .classList.add("correct");


        $("answerFeedback")
            .className =
            "answer-feedback correct";


        $("answerFeedback")
            .innerHTML =
            "✓ <strong>Jawaban benar!</strong><br>" +
            escapeHtml(question.explanation);


        state.completedQuestions.push({
            pos: state.currentPos,
            question:
                state.currentQuestionIndex + 1
        });


        setTimeout(
            function () {

                nextQuestionOrPosition();

            },
            900
        );

        return;
    }


    /* ================================
       JAWABAN SALAH
    ================================= */

    state.wrongAnswers++;


    buttons[selected]
        .classList.add("wrong");


    buttons[question.answer]
        .classList.add("correct");


    $("answerFeedback")
        .className =
        "answer-feedback wrong";


    $("answerFeedback")
        .innerHTML =
        "✕ <strong>Jawaban belum tepat.</strong> " +
        "Kalian masuk ke jalur buntu.";


    const deadEnd =
        chooseDeadEnd();


    setTimeout(
        function () {

            showDeadEndRoute(
                deadEnd
            );

        },
        1000
    );

}


/* =====================================================
   SOAL BERIKUTNYA
===================================================== */

function nextQuestionOrPosition() {

    const pos =
        POS_DATA[state.currentPos];


    const nextIndex =
        state.currentQuestionIndex + 1;


    if (
        nextIndex <
        pos.questions.length
    ) {

        state.currentQuestionIndex =
            nextIndex;

        state.selectedAnswer = null;

        state.secretVerified = true;

        renderCurrentQuestion();

        showToast(
            "Benar! Lanjut ke soal berikutnya.",
            "success"
        );

        return;
    }


    if (
        !state.completedPositions
            .includes(state.currentPos)
    ) {

        state.completedPositions
            .push(state.currentPos);

    }


    showNextClue(
        state.currentPos
    );

}


/* =====================================================
   POS BERIKUTNYA
===================================================== */

function showNextClue(position) {

    const pos =
        POS_DATA[position];


    $("questionArea")
        .classList.add("hidden");

    $("secretArea")
        .classList.add("hidden");

    $("nextClueArea")
        .classList.remove("hidden");


    if (pos.next === null) {

        $("nextLocationText")
            .textContent =
            "MISI SELESAI";

        $("goNextButton")
            .textContent =
            "🏆 SELESAIKAN MISI";

        $("goNextButton")
            .dataset.next =
            "finish";

        return;
    }


    $("nextLocationText")
        .textContent =
        POS_DATA[pos.next].title;


    $("goNextButton")
        .textContent =
        "🏃 MENUJU POS BERIKUTNYA";


    $("goNextButton")
        .dataset.next =
        String(pos.next);

}


$("goNextButton").addEventListener(
    "click",
    function () {

        const next =
            $("goNextButton")
                .dataset.next;


        if (next === "finish") {

            finishGame();

            return;
        }


        const nextPosition =
            Number(next);


        state.previousCorrectPos =
            nextPosition;


        loadPosition(
            nextPosition
        );

    }
);


/* =====================================================
   JALUR BUNTU
===================================================== */

function chooseDeadEnd() {

    const deadEnds = [
        8,
        9,
        10
    ];


    let selected = null;


    for (
        let i = 0;
        i < deadEnds.length;
        i++
    ) {

        if (
            !state.visitedDeadEnds
                .includes(deadEnds[i])
        ) {

            selected =
                deadEnds[i];

            break;

        }

    }


    if (selected === null) {

        selected =
            deadEnds[
                state.visitedDeadEnds.length %
                deadEnds.length
            ];

    }


    if (
        !state.visitedDeadEnds
            .includes(selected)
    ) {

        state.visitedDeadEnds
            .push(selected);

    }


    return selected;
}


function showDeadEndRoute(position) {

    state.previousCorrectPos =
        state.currentPos;

    state.currentPos =
        position;

    loadDeadEnd(position);

}


function loadDeadEnd(position) {

    const pos =
        POS_DATA[position];


    stopDeadEndTimer();


    $("posTitle").textContent =
        pos.title;


    const image =
        $("locationImage");


    image.onerror = function () {

        this.onerror = null;

        this.src =
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(
                "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'>" +
                "<rect width='100%' height='100%' fill='#e5e7eb'/>" +
                "<text x='50%' y='50%' text-anchor='middle' font-size='28' fill='#64748b'>" +
                "JALUR BUNTU " + position +
                "</text></svg>"
            );

    };


    image.src =
        ASSET_FOLDER + pos.image;


    image.alt =
        "Foto " + pos.title;


    $("imageLabel").textContent =
        "JALUR BUNTU";


    $("clueText").textContent =
        pos.instruction ||
        "Kalian berada di lokasi jalur buntu.";


    $("currentPosDisplay").textContent =
        "BUNTU " + position;


    updateDeadEndProgress();


    $("questionArea")
        .classList.add("hidden");

    $("secretArea")
        .classList.add("hidden");

    $("nextClueArea")
        .classList.add("hidden");

    $("deadEndArea")
        .classList.remove("hidden");


    const content =
        $("deadEndContent");


    if (pos.specialSmile) {

        content.className =
            "dead-end-content dead-end-special";

        content.innerHTML =
            "<div class='smile'>😊</div>";

    }
    else {

        content.className =
            "dead-end-content";

        content.innerHTML =
            "<div class='dead-end-icon'>🐍</div>" +
            "<h3>JALUR BUNTU!</h3>" +
            "<p>" +
            escapeHtml(
                pos.instruction ||
                "Kalian berada di lokasi yang salah."
            ) +
            "</p>";

    }


    startDeadEndTimer();

}


/* =====================================================
   TIMER JALUR BUNTU 5 MENIT
===================================================== */

function startDeadEndTimer() {

    stopDeadEndTimer();

    state.deadEndRemaining =
        DEAD_END_TIME;


    $("deadEndTimer")
        .textContent =
        formatTime(
            state.deadEndRemaining
        );


    $("deadEndTimer")
        .classList.remove("danger");


    state.deadEndTimer =
        setInterval(
            function () {

                if (!state.gameStarted) {
                    return;
                }


                state.deadEndRemaining--;


                $("deadEndTimer")
                    .textContent =
                    formatTime(
                        state.deadEndRemaining
                    );


                if (
                    state.deadEndRemaining <= 30
                ) {

                    $("deadEndTimer")
                        .classList.add(
                            "danger"
                        );

                }


                if (
                    state.deadEndRemaining <= 0
                ) {

                    stopDeadEndTimer();

                    returnToPreviousPosition(
                        true
                    );

                }

            },
            1000
        );

}


function stopDeadEndTimer() {

    clearInterval(
        state.deadEndTimer
    );

    state.deadEndTimer = null;

}


$("returnFromDeadEndButton")
    .addEventListener(
        "click",
        function () {

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
        state.previousCorrectPos || 1;


    if (automatic) {

        showModal(
            "Waktu Habis!",
            "Waktu 5 menit di jalur buntu telah habis. Kalian kembali ke " +
            POS_DATA[previous].title +
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
        function () {

            loadPosition(previous);

        },
        automatic ? 500 : 100
    );

}


/* =====================================================
   PROGRESS POS
===================================================== */

function updateProgress(position) {

    const percent =
        Math.min(
            100,
            Math.max(
                0,
                Math.round(
                    ((position - 1) / 6) * 100
                )
            )
        );


    $("progressPercent")
        .textContent =
        percent + "%";


    $("progressFill")
        .style.width =
        percent + "%";

}


function updateDeadEndProgress() {

    const previous =
        state.previousCorrectPos || 1;


    const percent =
        Math.min(
            100,
            Math.max(
                0,
                Math.round(
                    ((previous - 1) / 6) * 100
                )
            )
        );


    $("progressPercent")
        .textContent =
        percent + "%";


    $("progressFill")
        .style.width =
        percent + "%";

}


/* =====================================================
   SELESAI
===================================================== */

function finishGame() {

    clearInterval(
        state.mainTimer
    );

    stopDeadEndTimer();

    state.gameStarted = false;

    state.finishTime =
        Date.now();


    const elapsed =
        state.finishTime -
        state.startTime;


    $("finishLeader")
        .textContent =
        state.leader;


    $("finishPosCount")
        .textContent =
        state.completedPositions.length;


    $("finishQuestionCount")
        .textContent =
        state.questionAttempts;


    $("finishTime")
        .textContent =
        formatElapsedMilliseconds(
            elapsed
        );


    showScreen(
        $("finishScreen")
    );


    showToast(
        "Misi berhasil diselesaikan!",
        "success"
    );

}


function formatElapsedMilliseconds(
    milliseconds
) {

    const totalSeconds =
        Math.floor(
            milliseconds / 1000
        );


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


/* =====================================================
   RESTART
===================================================== */

$("restartButton")
    .addEventListener(
        "click",
        function () {

            clearInterval(
                state.mainTimer
            );

            clearInterval(
                state.deadEndTimer
            );


            $("teamForm").reset();


            resetGame();


            showScreen(
                $("welcomeScreen")
            );

        }
    );


/* =====================================================
   MODAL
===================================================== */

$("modalCloseButton")
    .addEventListener(
        "click",
        closeModal
    );


$("modalOkButton")
    .addEventListener(
        "click",
        closeModal
    );


$("modalOverlay")
    .addEventListener(
        "click",
        closeModal
    );


/* =====================================================
   INIT
===================================================== */

resetGame();

showScreen(
    $("welcomeScreen")
);


console.log(
    "JELAJAH SEKOLAH berhasil dimuat."
);

console.log(
    "MULAI PETUALANGAN siap digunakan."
);
```

});
