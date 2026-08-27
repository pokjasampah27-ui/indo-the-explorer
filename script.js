/* =========================================================
   JELAJAH SEKOLAH
   MODUL VIDEO POS 8 & POS 9

   FUNGSI:
   - Membuka kamera HP
   - Merekam menggunakan MediaRecorder
   - Preview video
   - Menghentikan rekaman
   - Mengirim video ke Google Apps Script
   - Mendukung kamera depan/belakang
========================================================= */


/* =========================================================
   KONFIGURASI GOOGLE APPS SCRIPT
========================================================= */

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwlzVK06_kfSbd_EOVEk_y3d_hKK58ftK7MZPXK6tENMExxKACxn-IEYajBnVkulej_/exec";


/* =========================================================
   KONFIGURASI VIDEO
========================================================= */

const VIDEO_CONFIG = {

    maxDuration: 60,

    videoBitsPerSecond: 1200000,

    width: 1280,

    height: 720

};


/* =========================================================
   VARIABEL RECORDER
========================================================= */

let mediaStream = null;

let mediaRecorder = null;

let recordedChunks = [];

let recordedVideoBlob = null;

let recordingTimer = null;

let recordingSeconds = 0;

let currentVideoPos = null;

let currentFacingMode = "environment";


/* =========================================================
   CEK DUKUNGAN KAMERA
========================================================= */

function isCameraSupported() {

    return !!(
        navigator.mediaDevices &&
        navigator.mediaDevices.getUserMedia &&
        window.MediaRecorder
    );

}


/* =========================================================
   FORMAT WAKTU
========================================================= */

function formatVideoTime(seconds) {

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


/* =========================================================
   MEMBUAT PANEL VIDEO
========================================================= */

function createVideoRecorderUI(posNumber) {

    const existing =
        document.getElementById(
            "videoRecorderArea"
        );

    if (existing) {

        existing.remove();

    }


    const container =
        document.createElement("div");

    container.id =
        "videoRecorderArea";

    container.className =
        "challenge-card video-recorder-card";


    container.innerHTML = `

        <div class="challenge-title">
            🎥 DOKUMENTASI POS ${posNumber}
        </div>

        <p>
            Rekam video menggunakan kamera HP
            sebagai bukti penyelesaian tantangan.
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


    const gameContainer =
        document.querySelector(
            ".game-container"
        );


    const nextArea =
        document.getElementById(
            "nextClueArea"
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
    else if (gameContainer) {

        gameContainer.appendChild(
            container
        );

    }


    document
        .getElementById(
            "startCameraButton"
        )
        .addEventListener(
            "click",
            startCamera
        );


    document
        .getElementById(
            "switchCameraButton"
        )
        .addEventListener(
            "click",
            switchCamera
        );


    document
        .getElementById(
            "startRecordingButton"
        )
        .addEventListener(
            "click",
            startRecording
        );


    document
        .getElementById(
            "stopRecordingButton"
        )
        .addEventListener(
            "click",
            stopRecording
        );


    document
        .getElementById(
            "sendVideoButton"
        )
        .addEventListener(
            "click",
            uploadRecordedVideo
        );

}


/* =========================================================
   BUKA KAMERA
========================================================= */

async function startCamera() {

    if (!isCameraSupported()) {

        showVideoMessage(
            "Browser HP ini tidak mendukung kamera atau perekaman video.",
            "wrong"
        );

        return;

    }


    try {

        stopCamera();


        mediaStream =
            await navigator.mediaDevices.getUserMedia({

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

                audio: true

            });


        const preview =
            document.getElementById(
                "cameraPreview"
            );


        if (preview) {

            preview.srcObject =
                mediaStream;

            preview.classList.remove(
                "hidden"
            );

        }


        document
            .getElementById(
                "startCameraButton"
            )
            .disabled =
            true;


        document
            .getElementById(
                "switchCameraButton"
            )
            .disabled =
            false;


        document
            .getElementById(
                "startRecordingButton"
            )
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


        if (
            error.name ===
            "NotFoundError"
        ) {

            message =
                "Kamera atau mikrofon tidak ditemukan.";

        }


        if (
            error.name ===
            "NotReadableError"
        ) {

            message =
                "Kamera sedang digunakan aplikasi lain.";

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

    if (mediaRecorder &&
        mediaRecorder.state === "recording") {

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


    if (
        !window.MediaRecorder
    ) {

        showVideoMessage(
            "Browser ini tidak mendukung perekaman video.",
            "wrong"
        );

        return;

    }


    recordedChunks = [];

    recordedVideoBlob = null;

    recordingSeconds = 0;


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
                        VIDEO_CONFIG.videoBitsPerSecond

                }
            );

    }
    catch (error) {

        console.error(
            error
        );


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
                event.data.size > 0
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


    document
        .getElementById(
            "startRecordingButton"
        )
        .classList.add(
            "hidden"
        );


    document
        .getElementById(
            "stopRecordingButton"
        )
        .classList.remove(
            "hidden"
        );


    document
        .getElementById(
            "sendVideoButton"
        )
        .classList.add(
            "hidden"
        );


    const status =
        document.getElementById(
            "recordingStatus"
        );


    if (status) {

        status.textContent =
            "🔴 Sedang merekam...";

    }


    recordingTimer =
        setInterval(
            function() {

                recordingSeconds++;


                const timer =
                    document.getElementById(
                        "recordingTimer"
                    );


                if (timer) {

                    timer.textContent =
                        formatVideoTime(
                            recordingSeconds
                        );

                }


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

    if (
        !mediaRecorder
    ) {

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


    const status =
        document.getElementById(
            "recordingStatus"
        );


    if (status) {

        status.textContent =
            "⏳ Menyiapkan video...";

    }


    document
        .getElementById(
            "stopRecordingButton"
        )
        .classList.add(
            "hidden"
        );

}


/* =========================================================
   SELESAI MENYIAPKAN VIDEO
========================================================= */

function finishRecording() {

    if (
        recordedChunks.length === 0
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
                    mediaRecorder.mimeType ||
                    "video/webm"
            }
        );


    const videoURL =
        URL.createObjectURL(
            recordedVideoBlob
        );


    const recordedPreview =
        document.getElementById(
            "recordedPreview"
        );


    const cameraPreview =
        document.getElementById(
            "cameraPreview"
        );


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
        document.getElementById(
            "startRecordingButton"
        );


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
        document.getElementById(
            "sendVideoButton"
        );


    if (sendButton) {

        sendButton.classList.remove(
            "hidden"
        );

    }


    const status =
        document.getElementById(
            "recordingStatus"
        );


    if (status) {

        status.textContent =
            "✅ Video siap disimpan.";

    }


    showVideoMessage(
        "Video berhasil direkam. Periksa hasilnya lalu tekan SIMPAN VIDEO.",
        "correct"
    );

}


/* =========================================================
   UPLOAD VIDEO KE GOOGLE APPS SCRIPT
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
        document.getElementById(
            "sendVideoButton"
        );


    if (sendButton) {

        sendButton.disabled =
            true;

        sendButton.textContent =
            "⏳ MENYIMPAN VIDEO...";

    }


    showVideoMessage(
        "Video sedang dikirim. Jangan tutup halaman.",
        ""
    );


    try {

        const base64 =
            await blobToBase64(
                recordedVideoBlob
            );


        const extension =
            recordedVideoBlob.type
                .includes("mp4")
                ? "mp4"
                : "webm";


        const leader =
            getCurrentLeader();


        const filename =
            createVideoFilename(
                leader,
                currentVideoPos,
                extension
            );


        const payload = {

            action:
                "simpanVideoPos",

            pos:
                currentVideoPos,

            leader:
                leader,

            members:
                getCurrentMembers(),

            filename:
                filename,

            mimeType:
                recordedVideoBlob.type,

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


        if (sendButton) {

            sendButton.textContent =
                "✅ VIDEO TERSIMPAN";

            sendButton.disabled =
                true;

        }


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


        if (sendButton) {

            sendButton.disabled =
                false;

            sendButton.textContent =
                "☁️ SIMPAN VIDEO";

        }

    }

}


/* =========================================================
   BLOB → BASE64
========================================================= */

function blobToBase64(blob) {

    return new Promise(
        function(resolve, reject) {

            const reader =
                new FileReader();


            reader.onloadend =
                function() {

                    const result =
                        reader.result;


                    const base64 =
                        result.split(
                            ","
                        )[1];


                    resolve(
                        base64
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
            leader || "TIM"
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
        ).padStart(2, "0") +
        String(
            now.getDate()
        ).padStart(2, "0");


    const time =
        String(
            now.getHours()
        ).padStart(2, "0") +
        String(
            now.getMinutes()
        ).padStart(2, "0") +
        String(
            now.getSeconds()
        ).padStart(2, "0");


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
   AMBIL KETUA
========================================================= */

function getCurrentLeader() {

    const input =
        document.getElementById(
            "leaderName"
        );


    if (input) {

        return input.value.trim();

    }


    if (
        typeof gameState !==
        "undefined" &&
        gameState.leader
    ) {

        return gameState.leader;

    }


    if (
        typeof teamData !==
        "undefined" &&
        teamData.leader
    ) {

        return teamData.leader;

    }


    return "";

}


/* =========================================================
   AMBIL ANGGOTA
========================================================= */

function getCurrentMembers() {

    const members = [];


    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        const input =
            document.getElementById(
                "member" + i
            );


        if (input) {

            members.push(
                input.value.trim()
            );

        }

    }


    if (
        members.length === 5
    ) {

        return members;

    }


    if (
        typeof gameState !==
        "undefined" &&
        Array.isArray(
            gameState.members
        )
    ) {

        return gameState.members;

    }


    if (
        typeof teamData !==
        "undefined" &&
        Array.isArray(
            teamData.members
        )
    ) {

        return teamData.members;

    }


    return members;

}


/* =========================================================
   PESAN VIDEO
========================================================= */

function showVideoMessage(
    message,
    type
) {

    const element =
        document.getElementById(
            "videoUploadMessage"
        );


    if (!element) {

        return;

    }


    element.textContent =
        message;


    element.className =
        "answer-feedback";


    if (type === "correct") {

        element.classList.add(
            "correct"
        );

    }


    if (type === "wrong") {

        element.classList.add(
            "wrong"
        );

    }

}


/* =========================================================
   HENTIKAN KAMERA
========================================================= */

function stopCamera() {

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


    const preview =
        document.getElementById(
            "cameraPreview"
        );


    if (preview) {

        preview.srcObject =
            null;

    }


    const startCameraButton =
        document.getElementById(
            "startCameraButton"
        );


    if (startCameraButton) {

        startCameraButton.disabled =
            false;

    }


    const switchButton =
        document.getElementById(
            "switchCameraButton"
        );


    if (switchButton) {

        switchButton.disabled =
            true;

    }


    const recordButton =
        document.getElementById(
            "startRecordingButton"
        );


    if (recordButton) {

        recordButton.disabled =
            true;

    }

}


/* =========================================================
   AKTIFKAN REKAMAN SESUAI POS
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
   HAPUS PANEL VIDEO
========================================================= */

function removeVideoRecorder() {

    stopCamera();


    if (
        mediaRecorder &&
        mediaRecorder.state ===
        "recording"
    ) {

        mediaRecorder.stop();

    }


    mediaRecorder =
        null;


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
   PANGGILAN OTOMATIS
   Saat halaman/pos berpindah
========================================================= */

function checkVideoPosition(
    posNumber
) {

    const pos =
        Number(
            posNumber
        );


    if (
        pos === 8 ||
        pos === 9
    ) {

        activateVideoForPosition(
            pos
        );

    }
    else {

        removeVideoRecorder();

    }

}


/* =========================================================
   CLEANUP SAAT HALAMAN DITUTUP
========================================================= */

window.addEventListener(
    "beforeunload",
    function() {

        stopCamera();

    }
);
/* =========================================================
   NAVIGASI AWAL GAME
   WELCOME → TEAM
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const startButton =
        document.getElementById("startButton");

    const welcomeScreen =
        document.getElementById("welcomeScreen");

    const teamScreen =
        document.getElementById("teamScreen");


    if (!startButton) {
        console.error(
            "ERROR: Tombol startButton tidak ditemukan."
        );
        return;
    }


    startButton.addEventListener(
        "click",
        function () {

            console.log(
                "Tombol MULAI PETUALANGAN diklik."
            );


            if (!welcomeScreen || !teamScreen) {

                console.error(
                    "ERROR: welcomeScreen atau teamScreen tidak ditemukan."
                );

                return;

            }


            welcomeScreen.classList.remove(
                "active"
            );


            teamScreen.classList.add(
                "active"
            );


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

});
