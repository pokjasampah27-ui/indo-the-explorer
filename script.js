/* =========================================================
   JELAJAH SEKOLAH
   SCRIPT.JS FINAL
   ========================================================= */

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       KONFIGURASI
    ===================================================== */

    const ASSET_FOLDER = "./assets/";

    const MAIN_TIME = 30 * 60;
    const DEAD_END_TIME = 5 * 60;


    /* =====================================================
       DATA POS
    ===================================================== */

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


    /* =====================================================
       STATE
    ===================================================== */

    const state = {

        leader: "",
        members: [],

        currentPos: 1,
        previousCorrectPos: 1,

        selectedAnswer: null,
        secretVerified: false,

        correctAnswers: 0,
        wrongAnswers: 0,
        questionAttempts: 0,

        completedPositions: [],
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

        state.selectedAnswer = null;
        state.secretVerified = false;

        state.correctAnswers = 0;
        state.wrongAnswers = 0;
        state.questionAttempts = 0;

        state.completedPositions = [];
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

        $("deadEndTimer").textContent =
            formatTime(DEAD_END_TIME);

        $("progressPercent").textContent = "0%";
        $("progressFill").style.width = "0%";
    }


    /* =====================================================
       MULAI PETUALANGAN
    ===================================================== */

    $("startButton").addEventListener(
        "click",
        function () {

            showScreen(
                $("teamScreen")
            );

            setTimeout(function () {

                $("leaderName").focus();

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
        function () {

            startGame();

        }
    );


    function startGame() {

        clearInterval(state.mainTimer);
        clearInterval(state.deadEndTimer);

        state.currentPos = 1;
        state.previousCorrectPos = 1;

        state.selectedAnswer = null;
        state.secretVerified = false;

        state.correctAnswers = 0;
        state.wrongAnswers = 0;
        state.questionAttempts = 0;

        state.completedPositions = [];
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

        const pos = POS_DATA[position];

        if (!pos) {

            showToast(
                "Data pos tidak ditemukan.",
                "error"
            );

            return;
        }


        state.currentPos = position;
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


        $("questionText").textContent =
            pos.question;


        renderOptions(pos.options);


        $("answerFeedback").textContent = "";

        $("answerFeedback")
            .className = "answer-feedback";


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


        /* BENAR */

        if (selected === pos.answer) {

            state.correctAnswers++;


            buttons[pos.answer]
                .classList.add("correct");


            $("answerFeedback")
                .className =
                "answer-feedback correct";


            $("answerFeedback")
                .innerHTML =
                "✓ <strong>Jawaban benar!</strong><br>" +
                escapeHtml(pos.explanation);


            if (
                !state.completedPositions
                    .includes(state.currentPos)
            ) {

                state.completedPositions
                    .push(state.currentPos);

            }


            setTimeout(
                function () {

                    showNextClue(
                        state.currentPos
                    );

                },
                700
            );

            return;
        }


        /* SALAH */

        state.wrongAnswers++;


        buttons[selected]
            .classList.add("wrong");


        buttons[pos.answer]
            .classList.add("correct");


        $("answerFeedback")
            .className =
            "answer-feedback wrong";


        $("answerFeedback")
            .innerHTML =
            "✕ <strong>Jawaban belum tepat.</strong> " +
            "Kalian masuk ke jalur lain.";


        const deadEnd =
            chooseDeadEnd();


        setTimeout(
            function () {

                showDeadEndRoute(
                    deadEnd
                );

            },
            900
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


        const index =
            state.visitedDeadEnds.length %
            deadEnds.length;


        const selected =
            deadEnds[index];


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


        $("locationImage").src =
            ASSET_FOLDER + pos.image;


        $("locationImage").alt =
            "Foto " + pos.title;


        $("imageLabel").textContent =
            "JALUR BUNTU";


        $("clueText").textContent =
            pos.clue;


        $("currentPosDisplay").textContent =
            "BUNTU " + position;


        $("questionArea")
            .classList.add("hidden");

        $("secretArea")
            .classList.add("hidden");

        $("nextClueArea")
            .classList.add("hidden");

        $("deadEndArea")
            .classList.remove("hidden");


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


        state.deadEndTimer =
            setInterval(
                function () {

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
       PROGRESS
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
        "Tombol MULAI PETUALANGAN aktif."
    );

});
