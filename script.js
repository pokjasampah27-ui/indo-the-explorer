"use strict";

/* =========================================================
   GAME POS-POSAN
   FRONTEND JAVASCRIPT

   IMPORTANT:
   Kunci jawaban dan kode akses TIDAK disimpan di sini.
   Semuanya divalidasi oleh Google Apps Script.
========================================================= */


/* =========================================================
   KONFIGURASI YANG HARUS DIUBAH
========================================================= */

/*
   Setelah Google Apps Script selesai di-deploy sebagai Web App,
   masukkan URL Web App tersebut di bawah ini.

   Contoh:
   const API_URL =
       "https://script.google.com/macros/s/XXXXXXXX/exec";
*/

const API_URL = "URL_WEB_APP_APPS_SCRIPT";


/*
   Nama file gambar yang tersedia di GitHub.

   Jika ekstensi file berbeda, ubah .jpg saja.

   Jangan mengubah poske1 sampai poske9 jika itu adalah
   nama file yang sebenarnya.
*/
const POS_IMAGES = {
    1: "assets/poske1.jpg",
    2: "assets/poske2.jpg",
    3: "assets/poske3.jpg",
    4: "assets/poske4.jpg",
    5: "assets/poske5.jpg",
    6: "assets/poske6.jpg",
    7: "assets/poske7.jpg",
    8: "assets/poske8.jpg",
    9: "assets/poske9.jpg"
};


/*
   Mode pemilihan jalan buntu.

   random = Pos 8 atau Pos 9 secara acak
   fixed8 = selalu Pos 8
   fixed9 = selalu Pos 9
*/
const DEAD_END_MODE = "random";


/*
   Batas file upload frontend.

   10 MB untuk JPG/PNG
   25 MB untuk MP4

   Batas backend juga akan diperiksa kembali.
*/
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
const MAX_VIDEO_SIZE = 25 * 1024 * 1024;


/* =========================================================
   KONSTANTA SISTEM
========================================================= */

const STORAGE_KEY = "GAME_POS_POSAN_SESSION_V1";

const TOTAL_QUESTIONS = 20;

const PASSING_SCORE = 11;

const MAIN_POS_START = 1;
const MAIN_POS_END = 7;


/* =========================================================
   STATE
========================================================= */

let state = createEmptyState();

let currentQuestion = null;

let currentQuestionAnswered = false;

let currentPosUnlocked = false;

let selectedUploadFile = null;

let uploadCompleted = false;


/* =========================================================
   DEFAULT STATE
========================================================= */

function createEmptyState() {

    return {

        sessionId: "",

        group: {

            leader: "",

            members: [
                "",
                "",
                "",
                "",
                ""
            ]

        },

        currentPos: 1,

        visitedPositions: [],

        answers: {},

        correct: 0,

        wrong: 0,

        answered: 0,

        status: "PLAYING",

        startTime: "",

        finishTime: "",

        deadEndPosition: "",

        uploadUrl: "",

        uploadUrls: [],

        attemptNumber: 1,

        posUnlocked: {},

        lastUpdated: ""

    };

}


/* =========================================================
   DOM HELPER
========================================================= */

function $(id) {

    return document.getElementById(id);

}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initializeApp
);


async function initializeApp() {

    bindEvents();

    const saved = loadLocalState();

    if (saved) {

        state = normalizeState(saved);

        showResumeCard();

    }

    updateStartFormFromState();

    updateUI();

}


/* =========================================================
   EVENT BINDINGS
========================================================= */

function bindEvents() {

    $("groupForm").addEventListener(
        "submit",
        handleStartGame
    );


    $("continueButton").addEventListener(
        "click",
        continueSavedGame
    );


    $("newGameButton").addEventListener(
        "click",
        startNewGameFromResume
    );


    $("resetButton").addEventListener(
        "click",
        confirmResetGame
    );


    $("finishResetButton").addEventListener(
        "click",
        confirmResetGame
    );


    $("accessForm").addEventListener(
        "submit",
        handleOpenPos
    );


    $("nextQuestionButton").addEventListener(
        "click",
        handleNextQuestion
    );


    $("nextPosButton").addEventListener(
        "click",
        handleNextPos
    );


    $("uploadFile").addEventListener(
        "change",
        handleFileSelected
    );


    $("uploadButton").addEventListener(
        "click",
        handleUpload
    );


    $("deadEndContinueButton").addEventListener(
        "click",
        handleDeadEndContinue
    );

}


/* =========================================================
   START GAME
========================================================= */

async function handleStartGame(event) {

    event.preventDefault();

    clearStartError();

    const group = readGroupForm();

    const validation = validateGroup(group);

    if (!validation.valid) {

        showStartError(validation.message);

        return;
    }


    if (!isApiConfigured()) {

        showStartError(
            "URL API belum dikonfigurasi. Isi API_URL pada script.js."
        );

        return;
    }


    setLoading(
        true,
        "Menyiapkan permainan...",
        "Membuat session kelompok."
    );


    try {

        const response = await apiRequest(
            "startGame",
            {
                group
            }
        );


        if (!response.success) {

            throw new Error(
                response.message ||
                "Gagal membuat permainan."
            );

        }


        state = createEmptyState();


        state.sessionId =
            response.data.sessionId;


        state.group =
            response.data.group || group;


        state.currentPos = 1;

        state.startTime =
            response.data.startTime ||
            new Date().toISOString();

        state.attemptNumber = 1;

        state.status = "PLAYING";

        state.visitedPositions = [];

        state.answers = {};

        state.correct = 0;

        state.wrong = 0;

        state.answered = 0;

        state.posUnlocked = {};

        state.lastUpdated =
            new Date().toISOString();


        saveLocalState();


        hideResumeCard();

        showScreen("screenGame");

        updateUI();

        await loadCurrentPos();

        showToast(
            "Permainan dimulai. Selamat menjalankan misi!"
        );

    }

    catch (error) {

        showStartError(
            error.message ||
            "Tidak dapat memulai permainan."
        );

    }

    finally {

        setLoading(false);

    }

}


/* =========================================================
   GROUP FORM
========================================================= */

function readGroupForm() {

    return {

        leader:
            $("leaderName").value.trim(),

        members: [

            $("member1").value.trim(),

            $("member2").value.trim(),

            $("member3").value.trim(),

            $("member4").value.trim(),

            $("member5").value.trim()

        ]

    };

}


function validateGroup(group) {

    if (!group.leader) {

        return {
            valid: false,
            message: "Nama ketua kelompok wajib diisi."
        };

    }


    for (let i = 0; i < 5; i++) {

        if (!group.members[i]) {

            return {

                valid: false,

                message:
                    `Nama Anggota ${i + 1} wajib diisi.`

            };

        }

    }


    return {
        valid: true,
        message: ""
    };

}


/* =========================================================
   RESUME
========================================================= */

function showResumeCard() {

    $("resumeCard").classList.remove(
        "hidden"
    );

}


function hideResumeCard() {

    $("resumeCard").classList.add(
        "hidden"
    );

}


function updateStartFormFromState() {

    if (!state.group) {
        return;
    }


    $("leaderName").value =
        state.group.leader || "";


    const members =
        state.group.members || [];


    for (let i = 0; i < 5; i++) {

        $(`member${i + 1}`).value =
            members[i] || "";

    }

}


function continueSavedGame() {

    if (!state.sessionId) {

        showToast(
            "Data permainan tidak valid."
        );

        return;
    }


    hideResumeCard();

    showScreen("screenGame");

    updateUI();

    loadCurrentPos();

}


async function startNewGameFromResume() {

    const confirmed = window.confirm(
        "Permainan lama akan dihapus dari perangkat ini. " +
        "Data yang sudah tersimpan di server tetap ada.\n\n" +
        "Lanjutkan?"
    );


    if (!confirmed) {
        return;
    }


    clearLocalState();

    state = createEmptyState();

    hideResumeCard();

    updateStartFormFromState();

    showToast(
        "Permainan lama telah dihapus dari perangkat."
    );

}


/* =========================================================
   SCREEN
========================================================= */

function showScreen(screenId) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove(
                "active"
            );

        });


    const target =
        $(screenId);


    if (target) {

        target.classList.add(
            "active"
        );

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   LOAD CURRENT POS
========================================================= */

async function loadCurrentPos() {

    const pos =
        Number(state.currentPos);


    if (
        pos < 1 ||
        pos > 9
    ) {

        state.currentPos = 1;

    }


    resetPosUI();

    updateUI();

    updatePosImage();

    if (
        pos >= MAIN_POS_START &&
        pos <= MAIN_POS_END
    ) {

        showMainPosUI();

    }

    else {

        showDeadEndUI();

    }

}


/* =========================================================
   RESET POS UI
========================================================= */

function resetPosUI() {

    currentQuestion = null;

    currentQuestionAnswered = false;

    currentPosUnlocked = false;

    selectedUploadFile = null;

    uploadCompleted = false;


    $("accessCode").value = "";

    $("accessMessage").textContent = "";

    $("accessMessage").className =
        "form-message hidden";


    $("posUnlockedCard").classList.add(
        "hidden"
    );


    $("deadEndCard").classList.add(
        "hidden"
    );


    $("questionContainer").classList.add(
        "hidden"
    );


    $("posCompleteContainer").classList.add(
        "hidden"
    );


    $("nextQuestionButton").classList.add(
        "hidden"
    );


    $("answerMessage").className =
        "answer-message hidden";


    $("answerMessage").textContent = "";


    $("uploadFile").value = "";

    $("selectedFileInfo").textContent =
        "Belum ada file dipilih.";


    $("uploadMessage").className =
        "form-message hidden";


    $("uploadSuccessBox").classList.add(
        "hidden"
    );


    $("deadEndContinueButton").classList.add(
        "hidden"
    );


    $("uploadProgressContainer").classList.add(
        "hidden"
    );


    $("uploadProgressFill").style.width =
        "0%";


    $("uploadProgressText").textContent =
        "0%";


    $("uploadNote").value = "";

}


/* =========================================================
   MAIN POS UI
========================================================= */

function showMainPosUI() {

    $("accessCard").classList.remove(
        "hidden"
    );


    $("deadEndCard").classList.add(
        "hidden"
    );


    $("unlockedTitle").textContent =
        `AKSES POS ${state.currentPos} BERHASIL`;


    $("unlockedDescription").textContent =
        "Tantangan pos telah terbuka.";

}


/* =========================================================
   DEAD END UI
========================================================= */

function showDeadEndUI() {

    $("accessCard").classList.remove(
        "hidden"
    );


    $("deadEndCard").classList.add(
        "hidden"
    );


    $("unlockedTitle").textContent =
        `AKSES POS ${state.currentPos} BERHASIL`;

}


/* =========================================================
   OPEN POS
========================================================= */

async function handleOpenPos(event) {

    event.preventDefault();

    const code =
        $("accessCode").value.trim();


    if (!code) {

        showAccessMessage(
            "Kode akses wajib diisi.",
            "error"
        );

        return;
    }


    if (!state.sessionId) {

        showAccessMessage(
            "Session permainan tidak ditemukan.",
            "error"
        );

        return;
    }


    setButtonLoading(
        $("openPosButton"),
        true,
        "MEMERIKSA..."
    );


    try {

        const response =
            await apiRequest(
                "validatePosCode",
                {
                    sessionId:
                        state.sessionId,

                    pos:
                        state.currentPos,

                    code
                }
            );


        if (!response.success) {

            throw new Error(
                response.message ||
                "Kode akses salah."
            );

        }


        currentPosUnlocked = true;


        state.posUnlocked[
            state.currentPos
        ] = true;


        addVisitedPosition(
            state.currentPos
        );


        saveLocalState();


        showAccessMessage(
            "AKSES DITERIMA.",
            "success"
        );


        $("posUnlockedCard")
            .classList.remove("hidden");


        $("accessCard")
            .classList.add("hidden");


        if (
            state.currentPos >= 1 &&
            state.currentPos <= 7
        ) {

            await loadQuestionForCurrentPos();

        }

        else {

            showDeadEndContent();

        }


        updateUI();

    }

    catch (error) {

        showAccessMessage(
            error.message ||
            "Kode akses salah. Silakan periksa kembali kode dari petugas pos.",
            "error"
        );

    }

    finally {

        setButtonLoading(
            $("openPosButton"),
            false,
            "BUKA POS"
        );

    }

}


/* =========================================================
   ACCESS MESSAGE
========================================================= */

function showAccessMessage(
    message,
    type
) {

    const element =
        $("accessMessage");


    element.textContent =
        message;


    element.className =
        `form-message ${type}`;

}


/* =========================================================
   QUESTION LOADING
========================================================= */

async function loadQuestionForCurrentPos() {

    setLoading(
        true,
        "Membuka tantangan...",
        "Mengambil soal untuk pos ini."
    );


    try {

        const response =
            await apiRequest(
                "getGameData",
                {
                    sessionId:
                        state.sessionId,

                    pos:
                        state.currentPos,

                    answeredQuestionIds:
                        Object.keys(
                            state.answers
                        ).map(Number)
                }
            );


        if (!response.success) {

            throw new Error(
                response.message ||
                "Gagal mengambil soal."
            );

        }


        const questions =
            response.data.questions || [];


        if (!questions.length) {

            showPosComplete(
                state.currentPos
            );

            return;

        }


        currentQuestion =
            questions[0];


        renderQuestion(
            currentQuestion
        );

    }

    catch (error) {

        showToast(
            error.message ||
            "Gagal mengambil soal."
        );

    }

    finally {

        setLoading(false);

    }

}


/* =========================================================
   RENDER QUESTION
========================================================= */

function renderQuestion(question) {

    currentQuestionAnswered = false;


    $("questionContainer")
        .classList.remove("hidden");


    $("posCompleteContainer")
        .classList.add("hidden");


    $("questionNumber").textContent =
        `SOAL ${question.id}`;


    $("questionDifficulty").textContent =
        question.difficulty || "SOAL";


    $("questionText").textContent =
        question.question || "";


    const options =
        question.options || [];


    const container =
        $("optionsContainer");


    container.innerHTML = "";


    options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");


            button.type = "button";

            button.className =
                "option-button";


            button.dataset.answer =
                option.letter;


            const letter =
                document.createElement("span");


            letter.className =
                "option-letter";


            letter.textContent =
                option.letter;


            const text =
                document.createElement("span");


            text.className =
                "option-text";


            text.textContent =
                option.text;


            button.appendChild(
                letter
            );


            button.appendChild(
                text
            );


            button.addEventListener(
                "click",
                () => submitAnswer(
                    question,
                    option.letter,
                    button
                )
            );


            container.appendChild(
                button
            );

        }
    );


    $("answerMessage").className =
        "answer-message hidden";


    $("answerMessage").textContent =
        "";


    $("nextQuestionButton")
        .classList.add("hidden");

}


/* =========================================================
   SUBMIT ANSWER
========================================================= */

async function submitAnswer(
    question,
    answer,
    selectedButton
) {

    if (currentQuestionAnswered) {
        return;
    }


    currentQuestionAnswered = true;


    const buttons =
        document.querySelectorAll(
            ".option-button"
        );


    buttons.forEach(
        button => {

            button.disabled = true;

        }
    );


    setLoading(
        true,
        "Memeriksa jawaban...",
        "Jawaban sedang divalidasi."
    );


    try {

        const response =
            await apiRequest(
                "submitAnswer",
                {
                    sessionId:
                        state.sessionId,

                    questionId:
                        question.id,

                    answer
                }
            );


        if (!response.success) {

            throw new Error(
                response.message ||
                "Jawaban gagal diproses."
            );

        }


        const result =
            response.data;


        const isCorrect =
            Boolean(result.correct);


        if (isCorrect) {

            selectedButton
                .classList.add("correct");


            state.correct++;

        }

        else {

            selectedButton
                .classList.add("wrong");


            state.wrong++;

        }


        state.answered++;


        state.answers[
            String(question.id)
        ] = {

            answer,

            correct:
                isCorrect,

            timestamp:
                new Date().toISOString()

        };


        state.lastUpdated =
            new Date().toISOString();


        saveLocalState();


        renderAnswerMessage(
            isCorrect
        );


        updateUI();


        $("nextQuestionButton")
            .classList.remove("hidden");


    }

    catch (error) {

        currentQuestionAnswered = false;


        buttons.forEach(
            button => {

                button.disabled = false;

            }
        );


        showToast(
            error.message ||
            "Jawaban tidak dapat diproses."
        );

    }

    finally {

        setLoading(false);

    }

}


/* =========================================================
   ANSWER MESSAGE
========================================================= */

function renderAnswerMessage(
    isCorrect
) {

    const element =
        $("answerMessage");


    if (isCorrect) {

        element.textContent =
            "✓ Jawaban tercatat. Benar.";

        element.className =
            "answer-message correct";

    }

    else {

        element.textContent =
            "✗ Jawaban tercatat. Salah.";

        element.className =
            "answer-message wrong";

    }

}


/* =========================================================
   NEXT QUESTION
========================================================= */

async function handleNextQuestion() {

    if (!state.sessionId) {
        return;
    }


    setLoading(
        true,
        "Menyiapkan soal berikutnya...",
        "Mohon tunggu."
    );


    try {

        const response =
            await apiRequest(
                "getGameData",
                {
                    sessionId:
                        state.sessionId,

                    pos:
                        state.currentPos,

                    answeredQuestionIds:
                        Object.keys(
                            state.answers
                        ).map(Number)
                }
            );


        if (!response.success) {

            throw new Error(
                response.message
            );

        }


        const questions =
            response.data.questions || [];


        if (!questions.length) {

            showPosComplete(
                state.currentPos
            );

            return;

        }


        currentQuestion =
            questions[0];


        renderQuestion(
            currentQuestion
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    catch (error) {

        showToast(
            error.message ||
            "Gagal mengambil soal berikutnya."
        );

    }

    finally {

        setLoading(false);

    }

}


/* =========================================================
   POS COMPLETE
========================================================= */

function showPosComplete(pos) {

    $("questionContainer")
        .classList.add("hidden");


    $("posCompleteContainer")
        .classList.remove("hidden");


    if (pos < 7) {

        $("posCompleteText").textContent =
            `Semua soal Pos ${pos} telah selesai. ` +
            `Lanjutkan menuju Pos ${pos + 1}.`;

        $("nextPosButton").textContent =
            `LANJUT KE POS ${pos + 1} →`;

    }

    else {

        $("posCompleteText").textContent =
            "Seluruh 20 soal telah selesai. " +
            "Sistem akan menentukan apakah kelompok lulus.";

        $("nextPosButton").textContent =
            "LIHAT HASIL AKHIR →";

    }

}


/* =========================================================
   NEXT POS
========================================================= */

async function handleNextPos() {

    const currentPos =
        Number(state.currentPos);


    if (currentPos < 7) {

        state.currentPos =
            currentPos + 1;


        state.lastUpdated =
            new Date().toISOString();


        saveLocalState();


        await loadCurrentPos();

        return;

    }


    if (currentPos === 7) {

        await evaluateFinalResult();

    }

}


/* =========================================================
   FINAL RESULT
========================================================= */

async function evaluateFinalResult() {

    setLoading(
        true,
        "Menghitung hasil...",
        "Menentukan status permainan."
    );


    try {

        /*
           Backend menghitung ulang berdasarkan
           jawaban yang tersimpan di server.
        */

        const response =
            await apiRequest(
                "saveResult",
                {
                    sessionId:
                        state.sessionId
                }
            );


        if (!response.success) {

            throw new Error(
                response.message ||
                "Hasil gagal dihitung."
            );

        }


        const result =
            response.data;


        state.correct =
            Number(result.correct || 0);


        state.wrong =
            Number(result.wrong || 0);


        state.answered =
            Number(result.answered || 0);


        if (
            state.correct >= PASSING_SCORE
        ) {

            state.status = "FINISH";

            state.finishTime =
                new Date().toISOString();


            saveLocalState();


            renderFinishScreen(
                result
            );

        }

        else {

            state.status =
                "DEAD_END";


            const deadEnd =
                chooseDeadEndPosition();


            state.currentPos =
                deadEnd;


            state.deadEndPosition =
                String(deadEnd);


            state.attemptNumber =
                Number(
                    state.attemptNumber || 1
                );


            saveLocalState();


            showScreen(
                "screenGame"
            );


            await loadCurrentPos();


            showToast(
                `Nilai belum mencapai 11. ` +
                `Kelompok diarahkan ke Pos ${deadEnd}.`
            );

        }

    }

    catch (error) {

        showToast(
            error.message ||
            "Gagal menentukan hasil permainan."
        );

    }

    finally {

        setLoading(false);

    }

}


/* =========================================================
   CHOOSE DEAD END
========================================================= */

function chooseDeadEndPosition() {

    if (
        DEAD_END_MODE === "fixed8"
    ) {

        return 8;

    }


    if (
        DEAD_END_MODE === "fixed9"
    ) {

        return 9;

    }


    return Math.random() < 0.5
        ? 8
        : 9;

}


/* =========================================================
   DEAD END CONTENT
========================================================= */

function showDeadEndContent() {

    $("accessCard")
        .classList.add("hidden");


    $("posUnlockedCard")
        .classList.add("hidden");


    $("deadEndCard")
        .classList.remove("hidden");


    const pos =
        Number(state.currentPos);


    $("deadEndTitle").textContent =
        `POS ${pos} — JALAN BUNTU`;


    if (pos === 8) {

        $("deadEndInstruction").textContent =
            "Laksanakan tugas dokumentasi yang diberikan " +
            "oleh petugas Pos 8. Rekam dokumentasi sesuai " +
            "instruksi, kemudian upload hasilnya melalui " +
            "form di bawah.";

    }

    else {

        $("deadEndInstruction").textContent =
            "Laksanakan tugas dokumentasi yang diberikan " +
            "oleh petugas Pos 9. Rekam dokumentasi sesuai " +
            "instruksi, kemudian upload hasilnya melalui " +
            "form di bawah.";

    }

}


/* =========================================================
   FILE SELECTED
========================================================= */

function handleFileSelected(event) {

    const file =
        event.target.files[0];


    selectedUploadFile =
        file || null;


    uploadCompleted = false;


    $("uploadSuccessBox")
        .classList.add("hidden");


    $("deadEndContinueButton")
        .classList.add("hidden");


    if (!file) {

        $("selectedFileInfo").textContent =
            "Belum ada file dipilih.";

        return;

    }


    const validation =
        validateUploadFile(file);


    if (!validation.valid) {

        selectedUploadFile = null;

        $("uploadFile").value = "";

        showUploadMessage(
            validation.message,
            "error"
        );

        return;

    }


    $("selectedFileInfo").textContent =
        `${file.name} — ${formatFileSize(file.size)}`;


    $("uploadMessage").className =
        "form-message hidden";

}


/* =========================================================
   VALIDATE FILE
========================================================= */

function validateUploadFile(file) {

    const name =
        file.name.toLowerCase();


    const isImage =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        name.endsWith(".jpg") ||
        name.endsWith(".jpeg") ||
        name.endsWith(".png");


    const isVideo =
        file.type === "video/mp4" ||
        name.endsWith(".mp4");


    if (!isImage && !isVideo) {

        return {

            valid: false,

            message:
                "Format tidak didukung. Gunakan JPG, JPEG, PNG, atau MP4."

        };

    }


    if (
        isImage &&
        file.size > MAX_IMAGE_SIZE
    ) {

        return {

            valid: false,

            message:
                "Ukuran gambar maksimal 10 MB."

        };

    }


    if (
        isVideo &&
        file.size > MAX_VIDEO_SIZE
    ) {

        return {

            valid: false,

            message:
                "Ukuran video maksimal 25 MB."

        };

    }


    return {
        valid: true,
        message: ""
    };

}


/* =========================================================
   UPLOAD
========================================================= */

async function handleUpload() {

    if (!selectedUploadFile) {

        showUploadMessage(
            "Pilih file dokumentasi terlebih dahulu.",
            "error"
        );

        return;

    }


    if (!state.sessionId) {

        showUploadMessage(
            "Session permainan tidak ditemukan.",
            "error"
        );

        return;

    }


    const validation =
        validateUploadFile(
            selectedUploadFile
        );


    if (!validation.valid) {

        showUploadMessage(
            validation.message,
            "error"
        );

        return;

    }


    const note =
        $("uploadNote").value.trim();


    setButtonLoading(
        $("uploadButton"),
        true,
        "MEMBACA FILE..."
    );


    $("uploadProgressContainer")
        .classList.remove("hidden");


    try {

        const dataUrl =
            await readFileAsDataURL(
                selectedUploadFile,
                updateUploadProgress
            );


        updateUploadProgress(35);


        setButtonLoading(
            $("uploadButton"),
            true,
            "MENGUPLOAD..."
        );


        const response =
            await apiRequest(
                "uploadFile",
                {
                    sessionId:
                        state.sessionId,

                    pos:
                        state.currentPos,

                    fileName:
                        selectedUploadFile.name,

                    mimeType:
                        selectedUploadFile.type,

                    fileSize:
                        selectedUploadFile.size,

                    dataUrl,

                    note
                }
            );


        updateUploadProgress(95);


        if (!response.success) {

            throw new Error(
                response.message ||
                "Upload gagal."
            );

        }


        const fileUrl =
            response.data.fileUrl || "";


        state.uploadUrl =
            fileUrl;


        state.uploadUrls.push({

            pos:
                state.currentPos,

            fileUrl,

            timestamp:
                new Date().toISOString()

        });


        state.lastUpdated =
            new Date().toISOString();


        saveLocalState();


        updateUploadProgress(100);


        uploadCompleted = true;


        $("uploadSuccessBox")
            .classList.remove("hidden");


        $("deadEndContinueButton")
            .classList.remove("hidden");


        showUploadMessage(
            "Dokumentasi berhasil diupload.",
            "success"
        );


        showToast(
            "Upload berhasil. Sekarang kalian dapat melanjutkan."
        );

    }

    catch (error) {

        showUploadMessage(
            error.message ||
            "Upload gagal. Silakan coba lagi.",
            "error"
        );

        $("uploadProgressContainer")
            .classList.add("hidden");

    }

    finally {

        setButtonLoading(
            $("uploadButton"),
            false,
            "⬆ UPLOAD DOKUMENTASI"
        );

    }

}


/* =========================================================
   FILE READER
========================================================= */

function readFileAsDataURL(
    file,
    progressCallback
) {

    return new Promise(
        (resolve, reject) => {

            const reader =
                new FileReader();


            reader.onload = () => {

                if (progressCallback) {

                    progressCallback(30);

                }

                resolve(
                    reader.result
                );

            };


            reader.onerror = () => {

                reject(
                    new Error(
                        "File tidak dapat dibaca."
                    )
                );

            };


            reader.onprogress = event => {

                if (
                    event.lengthComputable &&
                    progressCallback
                ) {

                    const percent =
                        Math.round(
                            (event.loaded /
                                event.total) *
                            30
                        );

                    progressCallback(
                        percent
                    );

                }

            };


            reader.readAsDataURL(file);

        }
    );

}


/* =========================================================
   UPLOAD PROGRESS
========================================================= */

function updateUploadProgress(
    percent
) {

    const safePercent =
        Math.max(
            0,
            Math.min(
                100,
                Number(percent) || 0
            )
        );


    $("uploadProgressFill")
        .style.width =
        `${safePercent}%`;


    $("uploadProgressText")
        .textContent =
        `${safePercent}%`;

}


/* =========================================================
   UPLOAD MESSAGE
========================================================= */

function showUploadMessage(
    message,
    type
) {

    const element =
        $("uploadMessage");


    element.textContent =
        message;


    element.className =
        `form-message ${type}`;

}


/* =========================================================
   DEAD END CONTINUE
========================================================= */

async function handleDeadEndContinue() {

    if (!uploadCompleted) {

        showUploadMessage(
            "Tombol lanjut baru dapat digunakan setelah upload berhasil.",
            "error"
        );

        return;

    }


    setLoading(
        true,
        "Menyimpan perjalanan...",
        "Mencatat penyelesaian jalan buntu."
    );


    try {

        const response =
            await apiRequest(
                "completeDeadEnd",
                {
                    sessionId:
                        state.sessionId,

                    pos:
                        state.currentPos,

                    uploadUrl:
                        state.uploadUrl
                }
            );


        if (!response.success) {

            throw new Error(
                response.message ||
                "Data jalan buntu gagal disimpan."
            );

        }


        state.currentPos = 1;

        state.status = "PLAYING";

        state.attemptNumber =
            Number(
                state.attemptNumber || 1
            ) + 1;


        state.deadEndPosition =
            String(
                state.currentPos
            );


        state.posUnlocked = {};

        state.lastUpdated =
            new Date().toISOString();


        saveLocalState();


        await loadCurrentPos();


        showToast(
            "Jalan buntu selesai. Kembali ke Pos 1!"
        );

    }

    catch (error) {

        showToast(
            error.message ||
            "Tidak dapat kembali ke Pos 1."
        );

    }

    finally {

        setLoading(false);

    }

}


/* =========================================================
   VISITED POSITIONS
========================================================= */

function addVisitedPosition(pos) {

    const value =
        Number(pos);


    state.visitedPositions.push({
        pos: value,
        timestamp:
            new Date().toISOString()
    });


    state.lastUpdated =
        new Date().toISOString();

}


/* =========================================================
   FINISH SCREEN
========================================================= */

function renderFinishScreen(
    result
) {

    showScreen(
        "screenFinish"
    );


    $("finishCorrect").textContent =
        Number(result.correct || state.correct);


    $("finishWrong").textContent =
        Number(result.wrong || state.wrong);


    $("finishPercentage").textContent =
        `${Number(result.percentageCorrect || 0)}%`;


    $("finishLeader").textContent =
        state.group.leader;


    const members =
        $("finishMembers");


    members.innerHTML = "";


    state.group.members.forEach(
        member => {

            const li =
                document.createElement("li");

            li.textContent =
                member;

            members.appendChild(
                li
            );

        }
    );


    const history =
        $("finishHistory");


    history.innerHTML = "";


    state.visitedPositions.forEach(
        item => {

            const element =
                document.createElement("span");


            element.className =
                "finish-history-item";


            element.textContent =
                `POS ${item.pos}`;


            history.appendChild(
                element
            );

        }
    );


    const finishElement =
        document.createElement("span");


    finishElement.className =
        "finish-history-item";


    finishElement.textContent =
        "🏁 FINISH";


    history.appendChild(
        finishElement
    );


    $("resetButton")
        .classList.remove("hidden");


    $("sessionBadge")
        .classList.remove("hidden");


    $("sessionBadge").textContent =
        state.sessionId;

}


/* =========================================================
   UPDATE UI
========================================================= */

function updateUI() {

    updateScoreUI();

    updateProgressUI();

    updateTeamUI();

    updateHistoryUI();

    updatePosHeaderUI();

    updateSessionUI();

}


/* =========================================================
   SCORE UI
========================================================= */

function updateScoreUI() {

    $("correctCount").textContent =
        state.correct;


    $("wrongCount").textContent =
        state.wrong;


    $("answeredCount").textContent =
        state.answered;


    $("sidebarCorrect").textContent =
        state.correct;


    $("sidebarWrong").textContent =
        state.wrong;


    const percentage =
        TOTAL_QUESTIONS > 0
            ? Math.round(
                (state.correct /
                    TOTAL_QUESTIONS) *
                100
            )
            : 0;


    $("scorePercentage").textContent =
        `${percentage}%`;

}


/* =========================================================
   PROGRESS UI
========================================================= */

function updateProgressUI() {

    const answered =
        Number(state.answered || 0);


    const percent =
        Math.round(
            (answered /
                TOTAL_QUESTIONS) *
            100
        );


    $("progressText").textContent =
        `${answered} / ${TOTAL_QUESTIONS}`;


    $("progressFill").style.width =
        `${percent}%`;

}


/* =========================================================
   TEAM UI
========================================================= */

function updateTeamUI() {

    const container =
        $("teamList");


    container.innerHTML = "";


    const leader =
        document.createElement("div");


    leader.className =
        "team-member leader";


    leader.innerHTML =
        `<span class="member-number">K</span>
         <span>${escapeHtml(
             state.group.leader || "-"
         )}</span>`;


    container.appendChild(
        leader
    );


    state.group.members.forEach(
        (member, index) => {

            const item =
                document.createElement("div");


            item.className =
                "team-member";


            item.innerHTML =
                `<span class="member-number">
                    ${index + 1}
                 </span>
                 <span>
                    ${escapeHtml(member || "-")}
                 </span>`;


            container.appendChild(
                item
            );

        }
    );

}


/* =========================================================
   HISTORY UI
========================================================= */

function updateHistoryUI() {

    const container =
        $("travelHistory");


    container.innerHTML = "";


    if (
        !state.visitedPositions.length
    ) {

        const empty =
            document.createElement("div");


        empty.className =
            "history-item";


        empty.textContent =
            "Belum ada perjalanan.";


        container.appendChild(
            empty
        );


        return;

    }


    state.visitedPositions.forEach(
        (item, index) => {

            const element =
                document.createElement("div");


            const isCurrent =
                index ===
                state.visitedPositions.length - 1;


            const isDeadEnd =
                item.pos === 8 ||
                item.pos === 9;


            element.className =
                "history-item";


            if (isCurrent) {

                element.classList.add(
                    "current"
                );

            }


            if (isDeadEnd) {

                element.classList.add(
                    "dead-end"
                );

            }


            element.innerHTML =
                `<span class="history-icon">
                    ${
                        isDeadEnd
                            ? "⚠"
                            : isCurrent
                                ? "→"
                                : "✓"
                    }
                 </span>
                 <span>
                    POS ${item.pos}
                 </span>`;


            container.appendChild(
                element
            );

        }
    );


    if (
        state.status === "FINISH"
    ) {

        const finish =
            document.createElement("div");


        finish.className =
            "history-item";


        finish.innerHTML =
            `<span class="history-icon">🏁</span>
             <span>FINISH</span>`;


        container.appendChild(
            finish
        );

    }

}


/* =========================================================
   POS HEADER
========================================================= */

function updatePosHeaderUI() {

    const pos =
        Number(state.currentPos || 1);


    $("currentPosTitle").textContent =
        `POS ${pos}`;


    $("imagePosLabel").textContent =
        `POS ${pos}`;

}


/* =========================================================
   POS IMAGE
========================================================= */

function updatePosImage() {

    const pos =
        Number(state.currentPos || 1);


    const image =
        POS_IMAGES[pos];


    if (image) {

        $("posImage").src =
            image;

    }


    $("posImage").alt =
        `Foto lokasi Pos ${pos}`;

}


/* =========================================================
   SESSION UI
========================================================= */

function updateSessionUI() {

    if (
        state.sessionId
    ) {

        $("sessionBadge")
            .classList.remove("hidden");


        $("resetButton")
            .classList.remove("hidden");


        $("sessionBadge").textContent =
            state.sessionId;

    }

}


/* =========================================================
   LOCAL STORAGE
========================================================= */

function saveLocalState() {

    state.lastUpdated =
        new Date().toISOString();


    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(state)
        );

    }

    catch (error) {

        console.error(
            "Gagal menyimpan localStorage:",
            error
        );

        showToast(
            "Penyimpanan lokal browser bermasalah."
        );

    }

}


function loadLocalState() {

    try {

        const raw =
            localStorage.getItem(
                STORAGE_KEY
            );


        if (!raw) {
            return null;
        }


        return JSON.parse(raw);

    }

    catch (error) {

        console.error(
            "Data localStorage rusak:",
            error
        );

        return null;

    }

}


function clearLocalState() {

    try {

        localStorage.removeItem(
            STORAGE_KEY
        );

    }

    catch (error) {

        console.error(
            error
        );

    }

}


/* =========================================================
   NORMALIZE STATE
========================================================= */

function normalizeState(saved) {

    const base =
        createEmptyState();


    return {

        ...base,

        ...saved,

        group: {

            ...base.group,

            ...(saved.group || {}),

            members: Array.isArray(
                saved.group?.members
            )
                ? saved.group.members
                : base.group.members

        },

        answers:
            saved.answers &&
            typeof saved.answers === "object"
                ? saved.answers
                : {},

        visitedPositions:
            Array.isArray(
                saved.visitedPositions
            )
                ? saved.visitedPositions
                : [],

        uploadUrls:
            Array.isArray(
                saved.uploadUrls
            )
                ? saved.uploadUrls
                : [],

        posUnlocked:
            saved.posUnlocked &&
            typeof saved.posUnlocked === "object"
                ? saved.posUnlocked
                : {}

    };

}


/* =========================================================
   RESET GAME
========================================================= */

function confirmResetGame() {

    const confirmed =
        window.confirm(
            "Apakah Anda yakin ingin menghapus permainan ini?\n\n" +
            "Data lokal pada perangkat akan dihapus. " +
            "Data yang sudah tersimpan di Google Sheets/Drive " +
            "tidak ikut dihapus."
        );


    if (!confirmed) {
        return;
    }


    clearLocalState();

    state =
        createEmptyState();


    currentQuestion = null;

    currentQuestionAnswered = false;

    currentPosUnlocked = false;

    selectedUploadFile = null;


    $("groupForm").reset();

    hideResumeCard();

    showScreen("screenStart");

    $("resetButton")
        .classList.add("hidden");


    $("sessionBadge")
        .classList.add("hidden");


    updateUI();


    showToast(
        "Permainan telah direset pada perangkat ini."
    );

}


/* =========================================================
   API
========================================================= */

async function apiRequest(
    action,
    payload = {}
) {

    if (!isApiConfigured()) {

        throw new Error(
            "API_URL belum dikonfigurasi."
        );

    }


    const requestBody = {

        action,

        ...payload

    };


    /*
       Menggunakan POST JSON.

       Code.gs akan membaca:
       e.postData.contents
    */

    const response =
        await fetch(
            API_URL,
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "text/plain;charset=utf-8"
                },

                body:
                    JSON.stringify(
                        requestBody
                    ),

                redirect: "follow"

            }
        );


    if (!response.ok) {

        throw new Error(
            `HTTP error ${response.status}`
        );

    }


    const text =
        await response.text();


    let json;


    try {

        json =
            JSON.parse(text);

    }

    catch (error) {

        console.error(
            "Response bukan JSON:",
            text
        );


        throw new Error(
            "Server mengembalikan response yang tidak dapat dibaca."
        );

    }


    return json;

}


/* =========================================================
   API CONFIG CHECK
========================================================= */

function isApiConfigured() {

    return (

        API_URL &&
        API_URL !==
            "URL_WEB_APP_APPS_SCRIPT" &&
        API_URL.startsWith(
            "https://script.google.com/"
        )

    );

}


/* =========================================================
   LOADING
========================================================= */

function setLoading(
    visible,
    title = "Memproses...",
    text = "Mohon tunggu sebentar."
) {

    const overlay =
        $("loadingOverlay");


    if (visible) {

        $("loadingTitle").textContent =
            title;


        $("loadingText").textContent =
            text;


        overlay.classList.remove(
            "hidden"
        );

    }

    else {

        overlay.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   BUTTON LOADING
========================================================= */

function setButtonLoading(
    button,
    loading,
    text
) {

    if (!button) {
        return;
    }


    if (loading) {

        button.dataset.originalText =
            button.textContent;


        button.disabled = true;

        button.textContent =
            text;

    }

    else {

        button.disabled = false;

        button.textContent =
            text ||
            button.dataset.originalText ||
            "SUBMIT";

    }

}


/* =========================================================
   START ERROR
========================================================= */

function showStartError(
    message
) {

    $("startError").textContent =
        message;


    $("startError")
        .className =
        "form-message error";

}


function clearStartError() {

    $("startError").textContent = "";

    $("startError")
        .className =
        "form-message hidden";

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer = null;


function showToast(
    message
) {

    const toast =
        $("toast");


    toast.textContent =
        message;


    toast.classList.remove(
        "hidden"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.add(
                    "hidden"
                );

            },
            3500
        );

}


/* =========================================================
   FORMAT FILE SIZE
========================================================= */

function formatFileSize(
    bytes
) {

    if (!bytes) {
        return "0 B";
    }


    const units = [
        "B",
        "KB",
        "MB",
        "GB"
    ];


    const index =
        Math.floor(
            Math.log(bytes) /
            Math.log(1024)
        );


    const safeIndex =
        Math.min(
            index,
            units.length - 1
        );


    return (
        bytes /
        Math.pow(
            1024,
            safeIndex
        )
    ).toFixed(2)
        + " "
        + units[safeIndex];

}


/* =========================================================
   HTML ESCAPE
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
