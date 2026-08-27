/* =========================================================
   JELAJAH SEKOLAH
   GAME POS-POSAN EDUKATIF
   SCRIPT.JS FINAL

   ASET:
   ./assets/pos1.jpeg
   ./assets/pos2.jpeg
   ./assets/pos3.jpeg
   ./assets/pos4.jpeg
   ./assets/pos5.jpeg
   ./assets/pos6.jpeg
   ./assets/pos7.jpeg
   ./assets/pos8.jpeg
   ./assets/pos9.jpeg
   ./assets/pos10.jpeg
========================================================= */


/* =========================================================
   KONFIGURASI
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


    /* =====================================================
       POS 1
    ===================================================== */

    1: {

        title:
            "POS 1 — GERBANG PETUALANGAN",

        image:
            "pos1.jpeg",

        secretCode:
            "MULAI",

        clue:
            "Temukan lokasi sesuai foto Pos 1. Cari pesan rahasia yang disembunyikan.",

        questions: [

            {
                question:
                    `Penggunaan plastik sekali pakai perlu dikurangi di lingkungan sekolah. Plastik membutuhkan waktu yang sangat lama untuk terurai. Selain mencemari tanah, sampah plastik juga dapat menyumbat saluran air. Oleh sebab itu, siswa sebaiknya membawa botol minum dan tempat makan yang dapat digunakan berulang kali.

Jenis paragraf tersebut adalah ....`,

                options: [
                    "deduktif",
                    "induktif",
                    "campuran",
                    "naratif",
                    "deskriptif"
                ],

                answer:
                    0,

                explanation:
                    "Paragraf tersebut bersifat deduktif karena gagasan utama terdapat pada awal paragraf."
            },


            {
                question:
                    `Setiap pagi, petugas kebersihan membersihkan halaman sekolah. Siswa juga melaksanakan piket sesuai jadwal. Tempat sampah tersedia di berbagai sudut sekolah. Guru mengingatkan siswa agar tidak membuang sampah sembarangan. Dengan demikian, kebersihan sekolah dapat terwujud melalui kerja sama seluruh warga sekolah.

Jenis paragraf tersebut adalah ....`,

                options: [
                    "deduktif",
                    "induktif",
                    "campuran",
                    "argumentatif",
                    "ekspositoris"
                ],

                answer:
                    1,

                explanation:
                    "Paragraf tersebut induktif karena gagasan utama berada pada akhir paragraf."
            },


            {
                question:
                    `Membaca buku memberikan banyak manfaat bagi pelajar. Dengan membaca, siswa dapat memperoleh informasi baru dan memperluas pengetahuan. Membaca juga dapat meningkatkan kemampuan memahami berbagai jenis teks. Selain itu, kebiasaan membaca dapat memperkaya kosakata. Oleh karena itu, membaca buku secara rutin merupakan kebiasaan penting bagi pelajar.

Berdasarkan letak dan hubungan gagasan utamanya, paragraf tersebut termasuk ....`,

                options: [
                    "deduktif karena hanya memiliki kalimat utama di awal",
                    "induktif karena kalimat utama berada di akhir",
                    "campuran karena gagasan utama dinyatakan di awal dan ditegaskan kembali di akhir",
                    "induktif karena seluruh kalimat awal merupakan kalimat penjelas",
                    "deduktif karena kalimat terakhir merupakan gagasan tambahan"
                ],

                answer:
                    2,

                explanation:
                    "Paragraf campuran memiliki gagasan utama di awal yang kemudian ditegaskan kembali pada akhir paragraf."
            }

        ],

        next:
            2

    },


    /* =====================================================
       POS 2
    ===================================================== */

    2: {

        title:
            "POS 2 — JEJAK KEDUA",

        image:
            "pos2.jpeg",

        secretCode:
            "JEJAK",

        clue:
            "Ikuti petunjuk dari Pos 1 dan temukan lokasi pada foto ini.",

        questions: [

            {
                question:
                    `Jika kalimat-kalimat berikut disusun menjadi paragraf yang padu:

1. Penggunaan transportasi umum dapat mengurangi jumlah kendaraan pribadi di jalan.
2. Jumlah kendaraan pribadi yang tinggi menyebabkan kemacetan semakin parah.
3. Selain itu, kendaraan pribadi menghasilkan emisi yang dapat mencemari udara.
4. Penggunaan transportasi umum juga dapat menghemat penggunaan bahan bakar.
5. Oleh karena itu, penggunaan transportasi umum merupakan salah satu solusi untuk mengatasi masalah lingkungan dan kemacetan.

Jenis paragraf yang terbentuk adalah ....`,

                options: [
                    "deduktif",
                    "induktif",
                    "campuran",
                    "naratif",
                    "deskriptif"
                ],

                answer:
                    1,

                explanation:
                    "Gagasan utama ditegaskan pada bagian akhir dengan kalimat 'Oleh karena itu', sehingga paragraf tersebut bersifat induktif."
            },


            {
                question:
                    `Siswa kelas XI mengikuti lomba karya ilmiah.

Fungsi "Siswa kelas XI" dalam kalimat tersebut adalah ....`,

                options: [
                    "predikat",
                    "objek",
                    "pelengkap",
                    "subjek",
                    "keterangan"
                ],

                answer:
                    3,

                explanation:
                    "Siswa kelas XI merupakan pihak yang melakukan tindakan mengikuti lomba, sehingga berfungsi sebagai subjek."
            }

        ],

        next:
            3

    },


    /* =====================================================
       POS 3
    ===================================================== */

    3: {

        title:
            "POS 3 — PESAN TERSEMBUNYI",

        image:
            "pos3.jpeg",

        secretCode:
            "PESAN",

        clue:
            "Cari pesan tersembunyi di lokasi sesuai foto Pos 3.",

        questions: [

            {
                question:
                    `Rani membaca novel di perpustakaan.

Fungsi kata "novel" adalah ....`,

                options: [
                    "subjek",
                    "predikat",
                    "objek",
                    "pelengkap",
                    "keterangan"
                ],

                answer:
                    2,

                explanation:
                    "Novel merupakan benda yang dikenai tindakan membaca sehingga berfungsi sebagai objek."
            },


            {
                question:
                    `Ayah menjadi ketua panitia kegiatan sekolah.

Fungsi "ketua panitia kegiatan sekolah" adalah ....`,

                options: [
                    "subjek",
                    "predikat",
                    "objek",
                    "pelengkap",
                    "keterangan"
                ],

                answer:
                    3,

                explanation:
                    "Bagian tersebut melengkapi predikat 'menjadi', sehingga berfungsi sebagai pelengkap."
            },


            {
                question:
                    `Guru memberikan penghargaan kepada siswa berprestasi di aula sekolah.

Analisis fungsi unsur-unsur kalimat yang tepat adalah ....`,

                options: [
                    "S = Guru, P = memberikan, O = penghargaan, Pel = kepada siswa berprestasi, K = di aula sekolah",
                    "S = Guru, P = memberikan, O = penghargaan, K = kepada siswa berprestasi, K = di aula sekolah",
                    "S = Guru, P = memberikan penghargaan, O = siswa berprestasi, K = di aula sekolah",
                    "S = Guru, P = memberikan, Pel = penghargaan, O = kepada siswa berprestasi, K = di aula sekolah",
                    "S = Guru, P = memberikan, O = kepada siswa berprestasi, Pel = penghargaan, K = di aula sekolah"
                ],

                answer:
                    1,

                explanation:
                    "Guru adalah subjek, memberikan adalah predikat, penghargaan adalah objek, sedangkan kepada siswa berprestasi dan di aula sekolah berfungsi sebagai keterangan."
            }

        ],

        next:
            4

    },


    /* =====================================================
       POS 4
    ===================================================== */

    4: {

        title:
            "POS 4 — UJI KETELITIAN",

        image:
            "pos4.jpeg",

        secretCode:
            "TELITI",

        clue:
            "Perhatikan lingkungan sekitar. Temukan pesan sesuai petunjuk.",

        questions: [

            {
                question:
                    `Rina membaca buku.

Buku dibaca Rina.

Pernyataan yang paling tepat adalah ....`,

                options: [
                    "\"buku\" merupakan pelengkap pada kedua kalimat",
                    "\"buku\" merupakan objek pada kalimat 1 dan subjek pada kalimat 2",
                    "\"buku\" merupakan subjek pada kalimat 1 dan objek pada kalimat 2",
                    "\"Rina\" merupakan objek pada kedua kalimat",
                    "fungsi \"buku\" tidak berubah karena maknanya tetap sama"
                ],

                answer:
                    1,

                explanation:
                    "Pada kalimat aktif, buku menjadi objek. Setelah dipasifkan, buku berubah menjadi subjek."
            },


            {
                question:
                    "Kata yang termasuk verba adalah ....",

                options: [
                    "kebersihan",
                    "indah",
                    "membaca",
                    "sekolah",
                    "sangat"
                ],

                answer:
                    2,

                explanation:
                    "Membaca merupakan kata kerja atau verba."
            },


            {
                question:
                    `Kata "sangat" dalam kalimat berikut termasuk kelas kata ....

Lingkungan sekolah itu sangat bersih.`,

                options: [
                    "nomina",
                    "verba",
                    "adjektiva",
                    "adverbia",
                    "konjungsi"
                ],

                answer:
                    3,

                explanation:
                    "Sangat merupakan adverbia yang menerangkan tingkat sifat 'bersih'."
            }

        ],

        next:
            5

    },


    /* =====================================================
       POS 5
    ===================================================== */

    5: {

        title:
            "POS 5 — LANGKAH BERIKUTNYA",

        image:
            "pos5.jpeg",

        secretCode:
            "LANGKAH",

        clue:
            "Kalian semakin jauh. Tetap kompak dan teliti membaca setiap petunjuk.",

        questions: [

            {
                question:
                    "Kata yang termasuk pronomina persona orang ketiga adalah ....",

                options: [
                    "saya",
                    "kami",
                    "kamu",
                    "mereka",
                    "kalian"
                ],

                answer:
                    3,

                explanation:
                    "Mereka merupakan pronomina persona orang ketiga."
            },


            {
                question:
                    `Kata "dan" dalam kalimat berikut termasuk ....

Rina dan Sinta mengikuti kegiatan literasi.`,

                options: [
                    "preposisi",
                    "konjungsi",
                    "pronomina",
                    "adverbia",
                    "numeralia"
                ],

                answer:
                    1,

                explanation:
                    "Dan merupakan kata penghubung atau konjungsi."
            },


            {
                question:
                    `Beberapa siswa sedang membaca tiga buku baru di perpustakaan.

Kata yang termasuk numeralia dan verba secara berturut-turut adalah ....`,

                options: [
                    "beberapa dan siswa",
                    "siswa dan membaca",
                    "tiga dan membaca",
                    "baru dan perpustakaan",
                    "sedang dan buku"
                ],

                answer:
                    2,

                explanation:
                    "Tiga merupakan numeralia, sedangkan membaca merupakan verba."
            }

        ],

        next:
            6

    },


    /* =====================================================
       POS 6
    ===================================================== */

    6: {

        title:
            "POS 6 — KOMPAS PETUALANGAN",

        image:
            "pos6.jpeg",

        secretCode:
            "KOMPAS",

        clue:
            "Kalian hampir mencapai akhir. Jangan kehilangan arah!",

        questions: [

            {
                question:
                    "Kelompok kata berikut yang merupakan frasa nominal adalah ....",

                options: [
                    "sangat indah",
                    "sedang belajar",
                    "di sekolah",
                    "rumah besar",
                    "akan pergi"
                ],

                answer:
                    3,

                explanation:
                    "Rumah besar merupakan frasa nominal dengan inti berupa nomina 'rumah'."
            },


            {
                question:
                    `Kelompok kata "sangat rajin" termasuk frasa ....`,

                options: [
                    "nominal",
                    "verbal",
                    "adjektival",
                    "preposisional",
                    "numeralia"
                ],

                answer:
                    2,

                explanation:
                    "Sangat rajin merupakan frasa adjektival karena inti frasanya adalah kata sifat 'rajin'."
            },


            {
                question:
                    "Kelompok kata berikut yang merupakan frasa preposisional adalah ....",

                options: [
                    "siswa rajin",
                    "sangat tinggi",
                    "sedang membaca",
                    "tiga buku",
                    "di perpustakaan"
                ],

                answer:
                    4,

                explanation:
                    "Di perpustakaan merupakan frasa preposisional karena diawali preposisi 'di'."
            },


            {
                question:
                    `Para siswa sedang mengerjakan tugas kelompok di ruang kelas.

Analisis yang tepat terhadap kelompok kata "sedang mengerjakan" adalah ....`,

                options: [
                    "frasa nominal karena memiliki kata 'siswa' sebagai konteksnya",
                    "frasa verbal karena inti frasa berupa verba 'mengerjakan'",
                    "frasa adjektival karena 'sedang' menunjukkan keadaan",
                    "frasa preposisional karena menerangkan kegiatan siswa",
                    "frasa numeralia karena menunjukkan aktivitas yang dilakukan siswa"
                ],

                answer:
                    1,

                explanation:
                    "Sedang mengerjakan merupakan frasa verbal karena inti frasa tersebut adalah verba 'mengerjakan'."
            }

        ],

        next:
            7

    },


    /* =====================================================
       POS 7
    ===================================================== */

    7: {

        title:
            "POS 7 — GARIS FINIS",

        image:
            "pos7.jpeg",

        secretCode:
            "JUARA",

        clue:
            "Ini adalah pos terakhir. Selesaikan dua tantangan terakhir untuk memenangkan misi.",

        questions: [

            {
                question:
                    `Tiga siswa yang sangat rajin sedang membaca buku pelajaran di perpustakaan.

Pernyataan yang paling tepat adalah ....`,

                options: [
                    "\"tiga siswa\" merupakan frasa verbal",
                    "\"sangat rajin\" merupakan frasa nominal",
                    "\"sedang membaca\" merupakan frasa verbal",
                    "\"buku pelajaran\" merupakan frasa adjektival",
                    "\"di perpustakaan\" merupakan frasa nominal"
                ],

                answer:
                    2,

                explanation:
                    "Sedang membaca merupakan frasa verbal karena inti frasanya berupa verba 'membaca'."
            },


            {
                question:
                    `Menjaga kesehatan tubuh merupakan tanggung jawab setiap individu. Olahraga secara teratur dapat meningkatkan kebugaran tubuh. Mengonsumsi makanan bergizi membantu memenuhi kebutuhan nutrisi. Istirahat yang cukup juga membuat tubuh memiliki waktu untuk memulihkan diri. Dengan demikian, kebiasaan hidup sehat perlu diterapkan secara konsisten dalam kehidupan sehari-hari.

Berdasarkan struktur paragraf dan unsur kebahasaannya, pernyataan yang tepat adalah ....`,

                options: [
                    "paragraf tersebut induktif dan 'secara konsisten' merupakan frasa nominal",
                    "paragraf tersebut deduktif dan 'menjaga kesehatan tubuh' merupakan frasa verbal",
                    "paragraf tersebut campuran dan 'kebiasaan hidup sehat' merupakan frasa nominal",
                    "paragraf tersebut induktif dan 'perlu diterapkan' merupakan frasa nominal",
                    "paragraf tersebut campuran dan 'dalam kehidupan sehari-hari' merupakan frasa verbal"
                ],

                answer:
                    2,

                explanation:
                    "Gagasan utama muncul di awal dan ditegaskan kembali di akhir sehingga paragraf tersebut campuran. 'Kebiasaan hidup sehat' merupakan frasa nominal."
            }

        ],

        next:
            null

    },


    /* =====================================================
       POS 8
       JALUR BUNTU
    ===================================================== */

    8: {

        title:
            "POS 8 — WADUH, SALAH JALAN!",

        image:
            "pos8.jpeg",

        deadEnd:
            true,

        instruction:
            `Ups! Kalian memasuki jalur yang salah! 😂

Sekarang seluruh anggota harus berdiri berjajar.

Ketua tim berdiri paling depan dan berkata dengan gaya pembawa berita:

"BREAKING NEWS! TIM KAMI TERSESAT!"

Setelah itu, semua anggota harus menjawab:

"TAPI KAMI TETAP KOMPAK!"

Lakukan sekali dengan penuh semangat.

Kalian memiliki waktu 5 menit sebelum sistem mengembalikan kalian ke POS 1.`

    },


    /* =====================================================
       POS 9
       JALUR BUNTU
    ===================================================== */

    9: {

        title:
            "POS 9 — KETEMU JALAN BUNTU!",

        image:
            "pos9.jpeg",

        deadEnd:
            true,

        instruction:
            `😂 Waduh! Sepertinya kompas kalian sedang libur.

Tantangan:

Semua anggota berdiri membentuk lingkaran.

Lalu bergantian menyebut:

"Nama saya ... dan saya bukan tersesat!"

Setelah semua anggota selesai, ketua tim harus berkata:

"KAMI TAHU JALANNYA!"

Padahal sebenarnya kalian sedang berada di JALAN BUNTU. 🤣

Setelah itu tunggu sampai waktu habis atau tekan tombol kembali ke POS 1.`

    },


    /* =====================================================
       POS 10
       JALUR BUNTU
    ===================================================== */

    10: {

        title:
            "POS 10 — PINTU KESASARAN",

        image:
            "pos10.jpeg",

        deadEnd:
            true,

        instruction:
            `🚨 PERINGATAN!

Kalian telah mencapai lokasi rahasia...

Sayangnya...

INI SALAH JALAN! 😂

Tantangan terakhir:

Semua anggota mengangkat satu tangan.

Ketua bertanya:

"Siapa yang memilih jalan ini?"

Semua anggota menjawab:

"BUKAN SAYA!"

Ketua bertanya lagi:

"Lalu siapa?"

Semua menjawab:

"KAMI TIDAK TAHU!"

😂😂😂

Setelah tantangan selesai, kalian harus kembali ke POS 1 dan mengulang perjalanan dengan lebih teliti.`

    }

};


/* =========================================================
   STATE GAME
========================================================= */

const gameState = {

    leader:
        "",

    members:
        [],

    currentPos:
        1,

    previousCorrectPos:
        1,

    currentQuestion:
        0,

    selectedAnswer:
        null,

    correctAnswers:
        0,

    wrongAnswers:
        0,

    totalQuestionsAnswered:
        0,

    completedPositions:
        [],

    deadEndVisits:
        [],

    startTime:
        null,

    finishTime:
        null,

    mainTimer:
        null,

    deadEndTimer:
        null,

    deadEndStart:
        null,

    gameStarted:
        false,

    secretVerified:
        false

};


/* =========================================================
   HELPER
========================================================= */

function $(id) {

    return document.getElementById(id);

}


/* =========================================================
   ELEMENT
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

const timerDisplay =
    $("timerDisplay");

const progressPercent =
    $("progressPercent");

const progressFill =
    $("progressFill");

const currentPosDisplay =
    $("currentPosDisplay");


const locationImage =
    $("locationImage");

const imageLabel =
    $("imageLabel");

const posTitle =
    $("posTitle");

const clueText =
    $("clueText");


const secretCodeInput =
    $("secretCodeInput");

const secretCodeButton =
    $("secretCodeButton");

const secretMessage =
    $("secretMessage");

const secretArea =
    $("secretArea");


const questionArea =
    $("questionArea");

const questionCounter =
    $("questionCounter");

const questionText =
    $("questionText");

const optionsContainer =
    $("optionsContainer");

const answerFeedback =
    $("answerFeedback");

const submitAnswerButton =
    $("submitAnswerButton");


const nextClueArea =
    $("nextClueArea");

const nextLocationText =
    $("nextLocationText");

const goNextButton =
    $("goNextButton");


const deadEndArea =
    $("deadEndArea");

const deadEndTitle =
    $("deadEndTitle");

const deadEndInstruction =
    $("deadEndInstruction");

const deadEndTimer =
    $("deadEndTimer");

const returnFromDeadEndButton =
    $("returnFromDeadEndButton");


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
        .forEach(
            item => {

                item.classList.remove(
                    "active"
                );

            }
        );


    screen.classList.add(
        "active"
    );


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


    if (
        type === "success"
    ) {

        toast.classList.add(
            "success"
        );

        toastIcon.textContent =
            "✅";

    }
    else if (
        type === "error"
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

}


function closeModal() {

    gameModal.classList.remove(
        "show"
    );

}


/* =========================================================
   START
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
   TEAM
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

            return;

        }


        if (
            members.some(
                member =>
                    member === ""
            )
        ) {

            showToast(
                "Semua nama anggota harus diisi.",
                "error"
            );

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
   START GAME
========================================================= */

beginMissionButton.addEventListener(
    "click",
    startGame
);


function startGame() {

    resetState();


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
   RESET
========================================================= */

function resetState() {

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

    gameState.currentQuestion =
        0;

    gameState.selectedAnswer =
        null;

    gameState.correctAnswers =
        0;

    gameState.wrongAnswers =
        0;

    gameState.totalQuestionsAnswered =
        0;

    gameState.completedPositions =
        [];

    gameState.deadEndVisits =
        [];

    gameState.startTime =
        null;

    gameState.finishTime =
        null;

    gameState.mainTimer =
        null;

    gameState.deadEndTimer =
        null;

    gameState.deadEndStart =
        null;

    gameState.secretVerified =
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


    gameState.currentQuestion =
        0;

    gameState.selectedAnswer =
        null;

    gameState.secretVerified =
        false;


    if (
        pos.deadEnd
    ) {

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


    const imagePath =
        ASSET_FOLDER +
        POS_IMAGES[positionNumber];


    locationImage.src =
        imagePath;


    locationImage.alt =
        `Foto lokasi Pos ${positionNumber}`;


    imageLabel.textContent =
        `LOKASI POS ${positionNumber}`;


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


    secretArea.classList.remove(
        "hidden"
    );


    questionArea.classList.add(
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


    setSecretMessageStyle();


}


/* =========================================================
   SECRET CODE
========================================================= */

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
            "Masukkan kode terlebih dahulu.";

        secretMessage.style.color =
            "#dc2626";

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
            "✓ Kode benar! Tantangan terbuka.";

        secretMessage.style.color =
            "#16a34a";


        showQuestion(
            0
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
            "✕ Kode salah. Cari dan periksa kembali pesan di lokasi.";

        secretMessage.style.color =
            "#dc2626";


        showToast(
            "Kode rahasia salah.",
            "error"
        );

    }

}


/* =========================================================
   SHOW QUESTION
========================================================= */

function showQuestion(
    questionIndex
) {

    const pos =
        POS_DATA[
            gameState.currentPos
        ];


    if (
        !pos ||
        !pos.questions
    ) {
        return;
    }


    const question =
        pos.questions[
            questionIndex
        ];


    if (!question) {

        finishPosition();

        return;

    }


    gameState.currentQuestion =
        questionIndex;


    gameState.selectedAnswer =
        null;


    questionArea.classList.remove(
        "hidden"
    );


    questionCounter.textContent =
        `Soal ${questionIndex + 1} dari ${pos.questions.length}`;


    questionText.textContent =
        question.question;


    answerFeedback.textContent =
        "";


    answerFeedback.className =
        "answer-feedback";


    submitAnswerButton.disabled =
        true;


    renderOptions(
        question.options
    );


    questionArea.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   OPTIONS
========================================================= */

function renderOptions(
    options
) {

    optionsContainer.innerHTML =
        "";


    options.forEach(
        (
            option,
            index
        ) => {

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


            const letterSpan =
                document.createElement(
                    "span"
                );


            letterSpan.className =
                "option-letter";


            letterSpan.textContent =
                letter;


            const textSpan =
                document.createElement(
                    "span"
                );


            textSpan.className =
                "option-text";


            textSpan.textContent =
                option;


            button.appendChild(
                letterSpan
            );


            button.appendChild(
                textSpan
            );


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
   SELECT ANSWER
========================================================= */

function selectAnswer(
    answerIndex
) {

    if (
        !gameState.secretVerified
    ) {

        showToast(
            "Kode rahasia belum benar.",
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
            (
                button,
                index
            ) => {

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
   CHECK ANSWER
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
            "Pilih jawaban terlebih dahulu.",
            "error"
        );

        return;

    }


    const pos =
        POS_DATA[
            gameState.currentPos
        ];


    const question =
        pos.questions[
            gameState.currentQuestion
        ];


    const selected =
        gameState.selectedAnswer;


    const correct =
        question.answer;


    gameState.totalQuestionsAnswered++;


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


    /* =====================================================
       BENAR
    ===================================================== */

    if (
        selected === correct
    ) {

        gameState.correctAnswers++;


        buttons[
            correct
        ].classList.add(
            "correct"
        );


        answerFeedback.className =
            "answer-feedback correct";


        answerFeedback.innerHTML =
            `✓ Jawaban benar!<br>${escapeHtml(question.explanation)}`;


        setTimeout(
            () => {

                const nextQuestion =
                    gameState.currentQuestion +
                    1;


                if (
                    nextQuestion <
                    pos.questions.length
                ) {

                    showQuestion(
                        nextQuestion
                    );

                }
                else {

                    finishPosition();

                }

            },
            1100
        );


        return;

    }


    /* =====================================================
       SALAH
    ===================================================== */

    gameState.wrongAnswers++;


    buttons[
        selected
    ].classList.add(
        "wrong"
    );


    buttons[
        correct
    ].classList.add(
        "correct"
    );


    answerFeedback.className =
        "answer-feedback wrong";


    answerFeedback.textContent =
        "✕ Jawaban salah! Jalur kalian berubah menjadi jalur buntu.";


    setTimeout(
        () => {

            const deadEnds = [
                8,
                9,
                10
            ];


            const index =
                (
                    gameState.wrongAnswers - 1
                ) %
                deadEnds.length;


            showDeadEndRoute(
                deadEnds[index]
            );

        },
        1300
    );

}


/* =========================================================
   FINISH POSITION
========================================================= */

function finishPosition() {

    const position =
        gameState.currentPos;


    if (
        !gameState.completedPositions
            .includes(position)
    ) {

        gameState.completedPositions
            .push(position);

    }


    secretArea.classList.add(
        "hidden"
    );


    questionArea.classList.add(
        "hidden"
    );


    nextClueArea.classList.remove(
        "hidden"
    );


    const pos =
        POS_DATA[position];


    if (
        pos.next === null
    ) {

        nextLocationText.textContent =
            "🏆 MISI SELESAI!";


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


    showToast(
        `Pos ${position} selesai!`,
        "success"
    );

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


        gameState.previousCorrectPos =
            Number(next);


        loadPosition(
            Number(next)
        );

    }
);


/* =========================================================
   DEAD END
========================================================= */

function showDeadEndRoute(
    deadEndPosition
) {

    gameState.previousCorrectPos =
        1;


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


    secretArea.classList.add(
        "hidden"
    );


    questionArea.classList.add(
        "hidden"
    );


    nextClueArea.classList.add(
        "hidden"
    );


    deadEndArea.classList.remove(
        "hidden"
    );


    posTitle.textContent =
        pos.title;


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
        "Kalian menemukan jalur yang salah. Ikuti tantangan berikut.";


    currentPosDisplay.textContent =
        `BUNTU ${positionNumber}`;


    deadEndTitle.textContent =
        pos.title;


    deadEndInstruction.textContent =
        pos.instruction;


    startDeadEndTimer();

}


/* =========================================================
   TIMER DEAD END
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


/* =========================================================
   UPDATE DEAD END TIMER
========================================================= */

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


        returnToPos1(
            true
        );

    }

}


/* =========================================================
   STOP DEAD END TIMER
========================================================= */

function stopDeadEndTimer() {

    clearInterval(
        gameState.deadEndTimer
    );


    gameState.deadEndTimer =
        null;


    gameState.deadEndStart =
        null;

}


/* =========================================================
   RETURN TO POS 1
========================================================= */

returnFromDeadEndButton.addEventListener(
    "click",
    () => {

        returnToPos1(
            false
        );

    }
);


function returnToPos1(
    automatic
) {

    stopDeadEndTimer();


    if (automatic) {

        showModal(
            "⏰ Waktu Habis!",
            "Kalian belum menemukan pesan. Saatnya kembali ke POS 1 dan mencoba perjalanan lagi dengan lebih teliti!",
            "😂"
        );

    }
    else {

        showToast(
            "Kembali ke POS 1.",
            "info"
        );

    }


    setTimeout(
        () => {

            loadPosition(
                1
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
                6
            ) * 100
        );


    progressPercent.textContent =
        `${Math.min(
            percent,
            100
        )}%`;


    progressFill.style.width =
        `${Math.min(
            percent,
            100
        )}%`;

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


    const elapsed =
        gameState.finishTime -
        gameState.startTime;


    finishLeader.textContent =
        gameState.leader;


    finishPosCount.textContent =
        `${gameState.completedPositions.length} / 7`;


    finishQuestionCount.textContent =
        gameState.totalQuestionsAnswered;


    finishTime.textContent =
        formatElapsedTime(
            elapsed
        );


    showScreen(
        finishScreen
    );


    showToast(
        "Selamat! Misi berhasil diselesaikan!",
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
   MODAL
========================================================= */

modalOkButton.addEventListener(
    "click",
    closeModal
);


modalOverlay.addEventListener(
    "click",
    closeModal
);


/* =========================================================
   FORMAT TIME
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


    if (
        hours > 0
    ) {

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
   COUNTDOWN
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
   SECRET MESSAGE STYLE
========================================================= */

function setSecretMessageStyle() {

    secretMessage.style.color =
        "#64748b";

}


/* =========================================================
   IMAGE PLACEHOLDER
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
                fill="#e2e8f0"
            />

            <text
                x="400"
                y="250"
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
   PRELOAD ASSETS
========================================================= */

function preloadImages() {

    Object.keys(
        POS_IMAGES
    )
    .forEach(
        position => {

            const img =
                new Image();


            const path =
                ASSET_FOLDER +
                POS_IMAGES[position];


            img.src =
                path;


            img.onload =
                () => {

                    console.log(
                        `✓ Pos ${position}: ${path}`
                    );

                };


            img.onerror =
                () => {

                    console.error(
                        `✕ GAGAL MEMUAT: ${path}`
                    );

                };

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


        timerDisplay.textContent =
            "00:00";


        deadEndTimer.textContent =
            "05:00";


        progressPercent.textContent =
            "0%";


        progressFill.style.width =
            "0%";


        showScreen(
            welcomeScreen
        );


        console.log(
            "=================================="
        );

        console.log(
            "JELAJAH SEKOLAH"
        );

        console.log(
            "GAME POS-POSAN EDUKATIF"
        );

        console.log(
            "=================================="
        );

        console.log(
            "Folder assets:",
            ASSET_FOLDER
        );

        console.log(
            "=================================="
        );

    }
);
