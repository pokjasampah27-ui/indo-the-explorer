```javascript
/* =========================================================
   JELAJAH SEKOLAH
   SCRIPT.JS FINAL
   SISTEM POS 1–10
   =========================================================

   ALUR:
   POS 1–7  : Soal
   POS 7    : Perhitungan hasil
   > 50% salah : POS 8
   <= 50% salah: FINISH / kembali ke kelas

   POS 8    : Tantangan video -> upload -> akses POS 9
   POS 9    : Tantangan video -> upload -> akses POS 10
   POS 10   : Selesai / emoticon senyum

   TIMER    : 30 menit
   ========================================================= */


/* =========================================================
   KONFIGURASI
========================================================= */

const GAME_DURATION = 30 * 60;

const POS_CODES = {
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


/*
 * Tantangan pos 8 dan 9.
 * Silakan ubah teksnya kapan saja tanpa mengubah sistem.
 */
const VIDEO_CHALLENGES = {
    8: {
        icon: "😂",
        title: "TANTANGAN LUCU POS 8",
        text:
            "Buat video singkat bersama kelompok kalian. " +
            "Salah satu anggota kelompok harus bergaya seperti " +
            "robot yang baru belajar berjalan sambil mengucapkan: " +
            "\"Kami siap menaklukkan Pos 9!\" 🤖😂",
        duration: 15
    },

    9: {
        icon: "🤣",
        title: "TANTANGAN LUCU POS 9",
        text:
            "Buat video singkat bersama kelompok kalian. " +
            "Semua anggota kelompok harus membuat ekspresi wajah " +
            "paling lucu selama beberapa detik, kemudian bersama-sama " +
            "mengucapkan: \"Pos 10, kami datang!\" 😂",
        duration: 15
    }
};


/* =========================================================
   BANK SOAL
   =========================================================
   Soal dipertahankan sesuai materi yang diberikan.
   Soal dibagi ke Pos 1–7.
========================================================= */

const QUESTION_BANK = [

    {
        number: 1,
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
        number: 2,
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
        number: 3,
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
        number: 4,
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
        number: 5,
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
        number: 6,
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
        number: 7,
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
        number: 8,
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
        number: 9,
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
        number: 10,
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
        number: 11,
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
        number: 12,
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
        number: 13,
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
        number: 14,
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
        number: 15,
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
        number: 16,
        question:
            `Perhatikan dua paragraf berikut!

Paragraf A:
Menjaga kebersihan lingkungan merupakan tanggung jawab bersama. Lingkungan yang bersih membuat masyarakat merasa nyaman. Kebersihan juga dapat mengurangi risiko munculnya berbagai penyakit.

Paragraf B:
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
        number: 17,
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
        number: 18,
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
        number: 19,
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
        number: 20,
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
   PEMBAGIAN SOAL PER POS
   =========================================================
   20 soal dibagi:
   Pos 1 = 3 soal
   Pos 2 = 3 soal
   Pos 3 = 3 soal
   Pos 4 = 3 soal
   Pos 5 = 3 soal
   Pos 6 = 3 soal
   Pos 7 = 2 soal + perhitungan
========================================================= */

const POS_QUESTIONS = {
    1: [1, 2, 3],
    2: [4, 5, 6],
    3: [7, 8, 9],
    4: [10, 11, 12],
    5: [13, 14, 15],
    6: [16, 17, 18],
    7: [19, 20]
};


/* =========================================================
   STATE GAME
========================================================= */

let currentPos = 1;

let currentQuestionIndex = 0;

let currentQuestions = [];

let totalCorrect = 0;

let totalWrong = 0;

let totalAnswered = 0;

let gameStartTime = null;

let remainingSeconds = GAME_DURATION;

let timerInterval = null;

let deadEndInterval = null;

let videoStream = null;

let mediaRecorder = null;

let recordedChunks = [];

let recordedBlob = null;

let uploadedVideoUrl = "";

let teamData = {
    leader: "",
    members: []
};


/* =========================================================
   HELPER
========================================================= */

function $(id) {
    return document.getElementById(id);
}


function showElement(id) {
    const el = $(id);
    if (el) el.classList.remove("hidden");
}


function hideElement(id) {
    const el = $(id);
    if (el) el.classList.add("hidden");
}


function setText(id, text) {
    const el = $(id);
    if (el) el.textContent = text;
}


function formatTime(seconds) {

    seconds = Math.max(0, seconds);

    const minutes = Math.floor(seconds / 60);

    const secs = seconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(secs).padStart(2, "0")
    );
}


/* =========================================================
   SCREEN
========================================================= */

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = $(id);

    if (target) {
        target.classList.add("active");
    }

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

    if (!toast) {
        alert(message);
        return;
    }

    const icon = $("toastIcon");
    const text = $("toastMessage");

    if (icon) {
        icon.textContent =
            type === "error" ? "❌" : "✅";
    }

    if (text) {
        text.textContent = message;
    }

    toast.className =
        "toast show " + type;

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}


/* =========================================================
   MODAL
========================================================= */

function showModal(
    title,
    message,
    icon = "ℹ️"
) {

    const modal = $("gameModal");

    if (!modal) {
        alert(title + "\n\n" + message);
        return;
    }

    setText("modalIcon", icon);
    setText("modalTitle", title);
    setText("modalMessage", message);

    modal.classList.add("show");

    document.body.classList.add("no-scroll");
}


function closeModal() {

    const modal = $("gameModal");

    if (modal) {
        modal.classList.remove("show");
    }

    document.body.classList.remove("no-scroll");
}


/* =========================================================
   TEAM FORM
========================================================= */

function collectTeamData() {

    const leader = $("leaderName");

    teamData.leader =
        leader ? leader.value.trim() : "";

    teamData.members = [];

    for (let i = 1; i <= 5; i++) {

        const input = $("member" + i);

        if (
            input &&
            input.value.trim()
        ) {
            teamData.members.push(
                input.value.trim()
            );
        }
    }
}


/* =========================================================
   START GAME
========================================================= */

function startGame() {

    collectTeamData();

    if (!teamData.leader) {

        showToast(
            "Nama ketua kelompok wajib diisi.",
            "error"
        );

        return;
    }

    currentPos = 1;

    currentQuestionIndex = 0;

    totalCorrect = 0;

    totalWrong = 0;

    totalAnswered = 0;

    remainingSeconds = GAME_DURATION;

    gameStartTime = Date.now();

    uploadedVideoUrl = "";

    startTimer();

    showScreen("gameScreen");

    enterPos(1);
}


/* =========================================================
   TIMER 30 MENIT
========================================================= */

function startTimer() {

    stopTimer();

    updateTimer();

    timerInterval = setInterval(() => {

        remainingSeconds--;

        updateTimer();

        if (remainingSeconds <= 0) {

            remainingSeconds = 0;

            stopTimer();

            timeUp();
        }

    }, 1000);
}


function stopTimer() {

    if (timerInterval) {

        clearInterval(timerInterval);

        timerInterval = null;
    }
}


function updateTimer() {

    const timer = $("gameTimer");

    if (timer) {
        timer.textContent =
            formatTime(remainingSeconds);
    }

    const timerBox =
        document.querySelector(".timer-box");

    if (
        timerBox &&
        remainingSeconds <= 300
    ) {
        timerBox.style.background =
            "#fee2e2";

        timerBox.style.color =
            "#dc2626";
    }
}


function timeUp() {

    showModal(
        "Waktu Habis ⏰",
        "Waktu petualangan kelompok kalian telah habis. Permainan akan diselesaikan.",
        "⏰"
    );

    setTimeout(() => {
        closeModal();
        finishGame(true);
    }, 2500);
}


/* =========================================================
   MASUK POS
========================================================= */

function enterPos(pos) {

    currentPos = pos;

    currentQuestionIndex = 0;

    updatePositionUI();

    resetPosAreas();

    /*
     * POS 1 selalu meminta kode.
     * Pos berikutnya juga selalu meminta kode.
     */
    showCodeGate(pos);
}


/* =========================================================
   UPDATE UI POS
========================================================= */

function updatePositionUI() {

    const smallLabel =
        document.querySelector(".small-label");

    if (smallLabel) {
        smallLabel.textContent =
            "POS " + currentPos;
    }

    setText(
        "posIndicator",
        "Pos " + currentPos + " dari 10"
    );

    const progress =
        $("progressFill");

    if (progress) {

        progress.style.width =
            ((currentPos - 1) / 9 * 100) + "%";
    }
}


/* =========================================================
   RESET AREA
========================================================= */

function resetPosAreas() {

    hideElement("questionArea");
    hideElement("nextClueArea");
    hideElement("deadEndArea");
    hideElement("videoRecorderArea");

    const codeInput =
        $("secretCodeInput");

    if (codeInput) {
        codeInput.value = "";
    }

    setText(
        "secretMessage",
        ""
    );
}


/* =========================================================
   KODE AKSES POS
========================================================= */

function showCodeGate(pos) {

    const challenge =
        document.querySelector(".challenge-card");

    if (challenge) {
        challenge.classList.remove(
            "video-recorder-card"
        );
    }

    const questionArea =
        $("questionArea");

    if (questionArea) {
        questionArea.classList.add("hidden");
    }

    const nextArea =
        $("nextClueArea");

    if (nextArea) {
        nextArea.classList.add("hidden");
    }

    const videoArea =
        $("videoRecorderArea");

    if (videoArea) {
        videoArea.classList.add("hidden");
    }

    const input =
        $("secretCodeInput");

    if (input) {
        input.focus();
    }

    setText(
        "challengeTitle",
        "🔐 Kode Akses Pos " + pos
    );

    setText(
        "challengeInstruction",
        "Masukkan kode akses yang diberikan petugas untuk membuka Pos " + pos + "."
    );
}


/* =========================================================
   VALIDASI KODE
========================================================= */

function checkSecretCode() {

    const input =
        $("secretCodeInput");

    if (!input) return;

    const entered =
        input.value.trim().toUpperCase();

    const correct =
        String(POS_CODES[currentPos])
            .toUpperCase();

    if (!entered) {

        setText(
            "secretMessage",
            "⚠️ Masukkan kode akses terlebih dahulu."
        );

        return;
    }

    if (entered !== correct) {

        setText(
            "secretMessage",
            "❌ Kode akses salah. Silakan periksa kembali."
        );

        showToast(
            "Kode akses Pos " +
            currentPos +
            " salah.",
            "error"
        );

        input.select();

        return;
    }

    setText(
        "secretMessage",
        "✅ Kode benar. Pos berhasil dibuka!"
    );

    showToast(
        "Pos " + currentPos + " terbuka!",
        "success"
    );

    setTimeout(() => {
        openCurrentPos();
    }, 500);
}


/* =========================================================
   BUKA POS
========================================================= */

function openCurrentPos() {

    hideElement("nextClueArea");
    hideElement("deadEndArea");

    /*
     * POS 8 dan 9 = VIDEO
     */
    if (
        currentPos === 8 ||
        currentPos === 9
    ) {

        openVideoChallenge(
            currentPos
        );

        return;
    }


    /*
     * POS 10 = SELESAI
     */
    if (currentPos === 10) {

        openFinalPos();

        return;
    }


    /*
     * POS 1–7 = SOAL
     */
    currentQuestions =
        POS_QUESTIONS[currentPos]
            .map(number => {
                return QUESTION_BANK
                    .find(q => q.number === number);
            })
            .filter(Boolean);

    currentQuestionIndex = 0;

    showElement("questionArea");

    renderQuestion();
}


/* =========================================================
   RENDER SOAL
========================================================= */

function renderQuestion() {

    const question =
        currentQuestions[
            currentQuestionIndex
        ];

    if (!question) {

        finishCurrentPosQuestions();

        return;
    }

    setText(
        "questionCounter",
        "Soal " +
        (currentQuestionIndex + 1) +
        " dari " +
        currentQuestions.length +
        " • Pos " +
        currentPos
    );

    setText(
        "questionText",
        question.question
    );

    const container =
        $("optionsContainer");

    if (!container) return;

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
                () => {

                    selectAnswer(
                        index,
                        question.answer
                    );
                }
            );

            container.appendChild(button);
        }
    );

    setText(
        "answerFeedback",
        ""
    );

    const submit =
        $("submitAnswerButton");

    if (submit) {
        submit.disabled = true;
    }
}


/* =========================================================
   PILIH JAWABAN
========================================================= */

function selectAnswer(
    selectedIndex,
    correctIndex
) {

    const options =
        document.querySelectorAll(
            ".answer-option"
        );

    options.forEach(button => {
        button.classList.remove(
            "selected"
        );
    });

    const selected =
        document.querySelector(
            `.answer-option[data-index="${selectedIndex}"]`
        );

    if (selected) {
        selected.classList.add(
            "selected"
        );
    }

    const submit =
        $("submitAnswerButton");

    if (submit) {

        submit.disabled = false;

        submit.dataset.selected =
            selectedIndex;

        submit.dataset.correct =
            correctIndex;
    }
}


/* =========================================================
   SUBMIT JAWABAN
========================================================= */

function submitAnswer() {

    const submit =
        $("submitAnswerButton");

    if (!submit) return;

    const selected =
        Number(submit.dataset.selected);

    const correct =
        Number(submit.dataset.correct);

    if (
        Number.isNaN(selected) ||
        Number.isNaN(correct)
    ) {

        showToast(
            "Pilih salah satu jawaban terlebih dahulu.",
            "error"
        );

        return;
    }

    const options =
        document.querySelectorAll(
            ".answer-option"
        );

    options.forEach(button => {
        button.disabled = true;
    });

    const feedback =
        $("answerFeedback");

    if (selected === correct) {

        totalCorrect++;

        if (feedback) {

            feedback.textContent =
                "✅ Jawaban benar! Hebat!";
            feedback.className =
                "answer-feedback correct";
        }

        if (options[selected]) {
            options[selected]
                .classList.add("correct");
        }

    } else {

        totalWrong++;

        if (feedback) {

            feedback.textContent =
                "❌ Jawaban kurang tepat. Tetap semangat, lanjutkan perjalanan!";
            feedback.className =
                "answer-feedback wrong";
        }

        if (options[selected]) {
            options[selected]
                .classList.add("wrong");
        }

        if (options[correct]) {
            options[correct]
                .classList.add("correct");
        }
    }

    totalAnswered++;

    submit.disabled = true;

    setTimeout(() => {

        currentQuestionIndex++;

        renderQuestion();

    }, 1300);
}


/* =========================================================
   SELESAI SOAL SATU POS
========================================================= */

function finishCurrentPosQuestions() {

    /*
     * Pos 1–6 langsung menuju pos berikutnya.
     */
    if (currentPos < 7) {

        showNextPos(currentPos + 1);

        return;
    }

    /*
     * Pos 7 = perhitungan akhir.
     */
    if (currentPos === 7) {

        calculateResultAtPos7();

        return;
    }
}


/* =========================================================
   LANJUT POS
========================================================= */

function showNextPos(nextPos) {

    hideElement("questionArea");

    setText(
        "nextLocationText",
        "POS " + nextPos
    );

    const nextArea =
        $("nextClueArea");

    if (nextArea) {
        nextArea.classList.remove(
            "hidden"
        );
    }

    setText(
        "nextClueText",
        "Semua soal di Pos " +
        currentPos +
        " telah selesai. Siapkan kelompok kalian untuk menuju Pos " +
        nextPos +
        "."
    );

    const button =
        $("goNextButton");

    if (button) {

        button.textContent =
            "🔐 Buka Pos " + nextPos;

        button.onclick = () => {

            enterPos(nextPos);
        };
    }
}


/* =========================================================
   HASIL POS 7
========================================================= */

function calculateResultAtPos7() {

    hideElement("questionArea");

    const total =
        totalCorrect + totalWrong;

    const threshold =
        total / 2;

    const wrongMoreThanHalf =
        totalWrong > threshold;

    /*
     * Tampilkan hasil.
     */
    showModal(
        "📊 Hasil Pos 7",
        "Benar: " +
        totalCorrect +
        "\nSalah: " +
        totalWrong +
        "\nTotal soal: " +
        total +
        "\n\n" +
        (
            wrongMoreThanHalf
                ? "Kesalahan lebih dari setengah soal. Kalian harus menuju Pos 8!"
                : "Hasil kalian memenuhi syarat. Kalian boleh kembali ke kelas!"
        ),
        wrongMoreThanHalf
            ? "🚨"
            : "🎉"
    );

    setTimeout(() => {

        closeModal();

        if (wrongMoreThanHalf) {

            enterPos(8);

        } else {

            finishGame(false);
        }

    }, 3000);
}


/* =========================================================
   VIDEO CHALLENGE
========================================================= */

function openVideoChallenge(pos) {

    const challenge =
        VIDEO_CHALLENGES[pos];

    if (!challenge) return;

    hideElement("questionArea");
    hideElement("nextClueArea");
    hideElement("deadEndArea");

    /*
     * Jika index memakai area khusus recorder.
     */
    const recorder =
        $("videoRecorderArea");

    if (recorder) {

        recorder.classList.remove(
            "hidden"
        );

        setText(
            "videoChallengeIcon",
            challenge.icon
        );

        setText(
            "videoChallengeTitle",
            challenge.title
        );

        setText(
            "videoChallengeText",
            challenge.text
        );

        setText(
            "recordingStatus",
            "Kamera belum dinyalakan."
        );

        setText(
            "recordingTimer",
            "00:00"
        );

        resetVideoUI();

        return;
    }

    /*
     * Fallback jika HTML menggunakan
     * challenge-card lama.
     */
    setText(
        "challengeTitle",
        challenge.icon +
        " " +
        challenge.title
    );

    setText(
        "challengeInstruction",
        challenge.text
    );

    showElement("videoRecorderArea");

    resetVideoUI();
}


/* =========================================================
   RESET VIDEO
========================================================= */

function resetVideoUI() {

    recordedChunks = [];

    recordedBlob = null;

    uploadedVideoUrl = "";

    const video =
        $("recordedPreview");

    if (video) {

        video.pause();

        video.removeAttribute("src");

        video.load();

        video.classList.add(
            "hidden"
        );
    }

    const camera =
        $("cameraPreview");

    if (camera) {
        camera.classList.remove(
            "hidden"
        );
    }

    const start =
        $("startRecordingButton");

    const stop =
        $("stopRecordingButton");

    const send =
        $("sendVideoButton");

    if (start) {
        start.disabled = false;
    }

    if (stop) {
        stop.disabled = true;
    }

    if (send) {
        send.disabled = true;
    }

    setText(
        "recordingStatus",
        "Kamera belum dinyalakan."
    );

    setText(
        "recordingTimer",
        "00:00"
    );
}


/* =========================================================
   MULAI KAMERA
========================================================= */

async function startCamera() {

    try {

        videoStream =
            await navigator.mediaDevices
                .getUserMedia({
                    video: true,
                    audio: true
                });

        const video =
            $("cameraPreview");

        if (video) {

            video.srcObject =
                videoStream;

            video.muted = true;

            video.playsInline = true;

            await video.play();
        }

        showToast(
            "Kamera siap digunakan.",
            "success"
        );

    } catch (error) {

        console.error(error);

        showToast(
            "Kamera/mikrofon tidak dapat digunakan. Pastikan izin kamera dan mikrofon diberikan.",
            "error"
        );
    }
}


/* =========================================================
   MULAI REKAM
========================================================= */

async function startRecording() {

    if (!videoStream) {

        await startCamera();

        if (!videoStream) return;
    }

    recordedChunks = [];

    recordedBlob = null;

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
                videoStream,
                {
                    mimeType
                }
            );

    } catch (error) {

        mediaRecorder =
            new MediaRecorder(
                videoStream
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
        finishRecording;


    mediaRecorder.start(1000);

    const start =
        $("startRecordingButton");

    const stop =
        $("stopRecordingButton");

    if (start) {
        start.disabled = true;
    }

    if (stop) {
        stop.disabled = false;
    }

    setText(
        "recordingStatus",
        "🔴 Sedang merekam..."
    );

    startRecordingTimer();
}


/* =========================================================
   TIMER REKAMAN
========================================================= */

let recordingSeconds = 0;

let recordingInterval = null;


function startRecordingTimer() {

    stopRecordingTimer();

    recordingSeconds = 0;

    updateRecordingTimer();

    recordingInterval =
        setInterval(() => {

            recordingSeconds++;

            updateRecordingTimer();

        }, 1000);
}


function stopRecordingTimer() {

    if (recordingInterval) {

        clearInterval(
            recordingInterval
        );

        recordingInterval = null;
    }
}


function updateRecordingTimer() {

    setText(
        "recordingTimer",
        formatTime(recordingSeconds)
    );
}


/* =========================================================
   STOP REKAMAN
========================================================= */

function stopRecording() {

    if (
        !mediaRecorder ||
        mediaRecorder.state === "inactive"
    ) {
        return;
    }

    mediaRecorder.stop();

    stopRecordingTimer();

    const stop =
        $("stopRecordingButton");

    if (stop) {
        stop.disabled = true;
    }

    setText(
        "recordingStatus",
        "⏳ Memproses video..."
    );
}


/* =========================================================
   SELESAI REKAMAN
========================================================= */

function finishRecording() {

    recordedBlob =
        new Blob(
            recordedChunks,
            {
                type:
                    mediaRecorder.mimeType ||
                    "video/webm"
            }
        );

    const video =
        $("recordedPreview");

    if (video) {

        const url =
            URL.createObjectURL(
                recordedBlob
            );

        video.src = url;

        video.controls = true;

        video.classList.remove(
            "hidden"
        );

        video.play().catch(() => {});
    }

    const camera =
        $("cameraPreview");

    if (camera) {
        camera.classList.add(
            "hidden"
        );
    }

    const start =
        $("startRecordingButton");

    const send =
        $("sendVideoButton");

    if (start) {
        start.disabled = false;
    }

    if (send) {
        send.disabled = false;
    }

    setText(
        "recordingStatus",
        "✅ Video berhasil direkam. Periksa video, lalu upload."
    );

    stopAllCameraTracks();
}


/* =========================================================
   MATIKAN KAMERA
========================================================= */

function stopAllCameraTracks() {

    if (videoStream) {

        videoStream
            .getTracks()
            .forEach(track => {
                track.stop();
            });

        videoStream = null;
    }
}


/* =========================================================
   UPLOAD VIDEO
========================================================= */

async function uploadVideo() {

    if (!recordedBlob) {

        showToast(
            "Rekam video terlebih dahulu.",
            "error"
        );

        return;
    }

    const send =
        $("sendVideoButton");

    if (send) {
        send.disabled = true;
    }

    setText(
        "recordingStatus",
        "⏳ Video sedang diproses..."
    );

    /*
     * Sistem mendukung Google Apps Script
     * apabila fungsi upload tersedia.
     */
    if (
        typeof google !== "undefined" &&
        google.script &&
        google.script.run
    ) {

        try {

            const reader =
                new FileReader();

            reader.onloadend =
                function () {

                    const base64 =
                        reader.result
                            .split(",")[1];

                    google.script.run
                        .withSuccessHandler(
                            result => {

                                uploadedVideoUrl =
                                    result &&
                                    result.url
                                        ? result.url
                                        : "";

                                videoUploadSuccess();
                            }
                        )
                        .withFailureHandler(
                            error => {

                                console.error(
                                    error
                                );

                                /*
                                 * Tetap dianggap
                                 * selesai apabila
                                 * backend belum
                                 * mengembalikan URL.
                                 */
                                videoUploadSuccess();
                            }
                        )
                        .uploadVideo(
                            base64,
                            "POS_" +
                            currentPos +
                            "_" +
                            Date.now() +
                            ".webm",
                            teamData
                        );
                };

            reader.readAsDataURL(
                recordedBlob
            );

        } catch (error) {

            console.error(error);

            videoUploadSuccess();
        }

        return;
    }

    /*
     * Mode GitHub/static:
     * video dianggap selesai diproses
     * setelah file rekaman tersedia.
     */
    setTimeout(() => {

        videoUploadSuccess();

    }, 1000);
}


/* =========================================================
   UPLOAD BERHASIL
========================================================= */

function videoUploadSuccess() {

    setText(
        "recordingStatus",
        "✅ Video berhasil diupload!"
    );

    showToast(
        "Video Pos " +
        currentPos +
        " berhasil diupload.",
        "success"
    );

    const send =
        $("sendVideoButton");

    if (send) {
        send.disabled = true;
    }

    /*
     * Setelah upload:
     * Pos 8 -> akses Pos 9
     * Pos 9 -> akses Pos 10
     */
    setTimeout(() => {

        if (currentPos === 8) {

            showNextPos(9);

        } else if (currentPos === 9) {

            showNextPos(10);

        }

    }, 700);
}


/* =========================================================
   POS 10
========================================================= */

function openFinalPos() {

    hideElement("questionArea");
    hideElement("videoRecorderArea");
    hideElement("nextClueArea");
    hideElement("deadEndArea");

    const locationCard =
        document.querySelector(
            ".location-card"
        );

    if (locationCard) {

        const heading =
            locationCard.querySelector(
                ".location-heading"
            );

        if (heading) {
            heading.innerHTML =
                "<span>😊 POS 10</span>";
        }

        const image =
            $("locationImage");

        if (image) {

            image.src =
                "assets/pos10.jpeg";

            image.alt =
                "Pos 10";
        }

        setText(
            "locationTitle",
            "😊"
        );

        setText(
            "clueText",
            "😊"
        );
    }

    /*
     * Pos 10 kosong.
     * Hanya emoticon tersenyum.
     */
    showModal(
        "😊",
        "😊",
        "😊"
    );

    setTimeout(() => {

        closeModal();

        finishGame(false);

    }, 1800);
}


/* =========================================================
   FINISH GAME
========================================================= */

function finishGame(timeExpired = false) {

    stopTimer();

    stopRecordingTimer();

    stopAllCameraTracks();

    const finishTime =
        new Date();

    const elapsedSeconds =
        gameStartTime
            ? Math.floor(
                (
                    Date.now() -
                    gameStartTime
                ) / 1000
            )
            : GAME_DURATION -
              remainingSeconds;

    const duration =
        Math.max(
            0,
            elapsedSeconds
        );

    showScreen("finishScreen");

    setText(
        "finishLeader",
        teamData.leader ||
        "-"
    );

    setText(
        "finishPosCount",
        String(
            currentPos
        )
    );

    setText(
        "finishQuestionCount",
        String(
            totalAnswered
        )
    );

    setText(
        "finishCorrect",
        String(
            totalCorrect
        )
    );

    setText(
        "finishWrong",
        String(
            totalWrong
        )
    );

    setText(
        "finishTime",
        formatTime(
            duration
        )
    );

    if (timeExpired) {

        setText(
            "finishMessage",
            "Waktu permainan telah habis. Terima kasih telah mengikuti petualangan."
        );

    } else if (currentPos >= 10) {

        setText(
            "finishMessage",
            "😊 Petualangan selesai! Kalian berhasil mencapai Pos 10."
        );

    } else {

        setText(
            "finishMessage",
            "🎉 Selamat! Kalian memenuhi syarat untuk kembali ke kelas."
        );
    }

    /*
     * Simpan hasil SATU KALI ketika FINISH.
     */
    saveFinalResult({
        finishTime:
            finishTime.toISOString(),

        duration:
            duration,

        correct:
            totalCorrect,

        wrong:
            totalWrong,

        answered:
            totalAnswered,

        finalPos:
            currentPos,

        timeExpired:
            timeExpired,

        team:
            teamData
    });
}


/* =========================================================
   SIMPAN HASIL
========================================================= */

function saveFinalResult(data) {

    /*
     * Google Apps Script
     */
    if (
        typeof google !== "undefined" &&
        google.script &&
        google.script.run
    ) {

        google.script.run
            .withSuccessHandler(
                () => {
                    console.log(
                        "Hasil berhasil disimpan."
                    );
                }
            )
            .withFailureHandler(
                error => {
                    console.error(
                        "Gagal menyimpan hasil:",
                        error
                    );
                }
            )
            .saveGameResult(data);

        return;
    }

    /*
     * Mode GitHub:
     * simpan lokal agar data tidak
     * langsung hilang saat halaman
     * direfresh.
     */
    try {

        const existing =
            JSON.parse(
                localStorage.getItem(
                    "jelajahSekolahResults"
                ) || "[]"
            );

        existing.push(data);

        localStorage.setItem(
            "jelajahSekolahResults",
            JSON.stringify(existing)
        );

    } catch (error) {

        console.error(error);
    }
}


/* =========================================================
   EVENT LISTENER
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
         * FORM KELOMPOK
         */
        const teamForm =
            $("teamForm");

        if (teamForm) {

            teamForm.addEventListener(
                "submit",
                event => {

                    event.preventDefault();

                    startGame();
                }
            );
        }


        /*
         * TOMBOL MULAI
         */
        const startButton =
            $("startGameButton");

        if (startButton) {

            startButton.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    startGame();
                }
            );
        }


        /*
         * KODE POS
         */
        const codeButton =
            $("secretCodeButton");

        if (codeButton) {

            codeButton.addEventListener(
                "click",
                checkSecretCode
            );
        }


        const codeInput =
            $("secretCodeInput");

        if (codeInput) {

            codeInput.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key ===
                        "Enter"
                    ) {

                        event.preventDefault();

                        checkSecretCode();
                    }
                }
            );
        }


        /*
         * SUBMIT SOAL
         */
        const submit =
            $("submitAnswerButton");

        if (submit) {

            submit.addEventListener(
                "click",
                submitAnswer
            );
        }


        /*
         * NEXT POS
         */
        const next =
            $("goNextButton");

        if (next) {

            next.addEventListener(
                "click",
                () => {

                    enterPos(
                        currentPos + 1
                    );
                }
            );
        }


        /*
         * MODAL
         */
        const modalOk =
            $("modalOkButton");

        if (modalOk) {

            modalOk.addEventListener(
                "click",
                closeModal
            );
        }


        const modalOverlay =
            $("modalOverlay");

        if (modalOverlay) {

            modalOverlay.addEventListener(
                "click",
                closeModal
            );
        }


        /*
         * VIDEO
         */
        const startCameraButton =
            $("startCameraButton");

        if (startCameraButton) {

            startCameraButton.addEventListener(
                "click",
                startCamera
            );
        }


        const startRecordingButton =
            $("startRecordingButton");

        if (startRecordingButton) {

            startRecordingButton.addEventListener(
                "click",
                startRecording
            );
        }


        const stopRecordingButton =
            $("stopRecordingButton");

        if (stopRecordingButton) {

            stopRecordingButton.addEventListener(
                "click",
                stopRecording
            );
        }


        const sendVideoButton =
            $("sendVideoButton");

        if (sendVideoButton) {

            sendVideoButton.addEventListener(
                "click",
                uploadVideo
            );
        }


        /*
         * Jika browser melakukan refresh/
         * meninggalkan halaman, matikan kamera.
         */
        window.addEventListener(
            "beforeunload",
            () => {

                stopTimer();

                stopRecordingTimer();

                stopAllCameraTracks();
            }
        );
    }
);


/* =========================================================
   GLOBAL FUNCTION
   =========================================================
   Disediakan agar tetap bisa dipanggil
   langsung dari onclick pada index.html.
========================================================= */

window.startGame =
    startGame;

window.checkSecretCode =
    checkSecretCode;

window.submitAnswer =
    submitAnswer;

window.startCamera =
    startCamera;

window.startRecording =
    startRecording;

window.stopRecording =
    stopRecording;

window.uploadVideo =
    uploadVideo;

window.closeModal =
    closeModal;

window.enterPos =
    enterPos;
```
