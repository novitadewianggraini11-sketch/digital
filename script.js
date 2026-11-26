// 1. Data Dampak & Solusi Informatika
const solutionsData = [
    {
        category: "keamanan",
        categoryLabel: "Keamanan Data",
        title: "Pencurian Data & Phishing",
        impact: "Dampak: Kebocoran kata sandi, peretasan akun perbankan/media sosial, dan penyalahgunaan identitas.",
        solution: "Solusi: Aktifkan Two-Factor Authentication (2FA), gunakan kombinasi password unik untuk tiap akun, dan jangan pernah mengklik tautan mencurigakan."
    },
    {
        category: "sosial",
        categoryLabel: "Sosial & Informasi",
        title: "Penyebaran Hoaks & Disinformasi",
        impact: "Dampak: Memicu kepanikan publik, perpecahan sosial, dan kesalahpahaman informasi.",
        solution: "Solusi: Terapkan metode Saring Sebelum Sharing, periksa kredibilitas sumber berita, dan gunakan situs cek fakta seperti TurnBackHoax.id."
    },
    {
        category: "kesehatan",
        categoryLabel: "Kesehatan Digital",
        title: "Kecanduan Gawai & Kelelahan Mata",
        impact: "Dampak: Gangguan tidur (insomnia), menurunnya fokus belajar/bekerja, dan sindrom kelelahan mata digital.",
        solution: "Solusi: Terapkan aturan 20-20-20 (setiap 20 menit, lihat objek sejauh 20 kaki selama 20 detik) dan batasi notifikasi aplikasi hiburan."
    },
    {
        category: "sosial",
        categoryLabel: "Sosial & Informasi",
        title: "Cyberbullying (Perundungan Siber)",
        impact: "Dampak: Tekanan psikologis, kecemasan berlebih, hingga menurunnya rasa percaya diri korban.",
        solution: "Solusi: Simpan bukti tangkapan layar (screenshot), blokir serta laporkan akun pelaku ke platform terkait, dan bicarakan dengan orang tepercaya."
    },
    {
        category: "keamanan",
        categoryLabel: "Keamanan Data",
        title: "Jejak Digital Negatif",
        impact: "Dampak: Unggahan masa lalu yang tidak pantas dapat menghambat peluang beasiswa atau karier di masa depan.",
        solution: "Solusi: Atur privasi akun media sosial, hindari membagikan data pribadi (NIK, alamat rumah), dan pikirkan dampak jangka panjang sebelum mengunggah."
    },
    {
        category: "kesehatan",
        categoryLabel: "Kesehatan Digital",
        title: "FOMO (Fear of Missing Out)",
        impact: "Dampak: Rasa cemas terus-menerus karena membandingkan pencapaian diri dengan kehidupan orang lain di media sosial.",
        solution: "Solusi: Lakukan digital detox secara berkala (misalnya setiap akhir pekan) dan kurasi akun yang diikuti agar lebih edukatif."
    }
];

// Render Kartu Solusi
const gridContainer = document.getElementById("solutions-grid");
const tabButtons = document.querySelectorAll(".tab-btn");

function renderCards(filter = "all") {
    gridContainer.innerHTML = "";
    const filtered = filter === "all" 
        ? solutionsData 
        : solutionsData.filter(item => item.category === filter);

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <span class="card-badge">${item.categoryLabel}</span>
            <h3>${item.title}</h3>
            <p class="impact">${item.impact}</p>
            <div class="solution">${item.solution}</div>
        `;
        gridContainer.appendChild(card);
    });
}

// Event Listener Filter Tab
tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderCards(btn.getAttribute("data-category"));
    });
});

// 2. Logika Kalkulator Screen Time
const checkTimeBtn = document.getElementById("check-time-btn");
const hoursInput = document.getElementById("hours-input");
const timeResult = document.getElementById("time-result");

checkTimeBtn.addEventListener("click", () => {
    const hours = parseFloat(hoursInput.value);
    timeResult.classList.remove("hidden");

    if (isNaN(hours) || hours < 0 || hours > 24) {
        timeResult.style.background = "rgba(220, 38, 38, 0.15)";
        timeResult.style.color = "var(--danger)";
        timeResult.textContent = "Masukkan angka jam yang valid antara 0 hingga 24.";
        return;
    }

    if (hours <= 2) {
        timeResult.style.background = "rgba(22, 163, 74, 0.15)";
        timeResult.style.color = "var(--success)";
        timeResult.textContent = "✅ Sangat Baik! Penggunaan gawai hiburanmu masih dalam batas sehat. Pertahankan keseimbangan aktivitas fisikmu.";
    } else if (hours <= 5) {
        timeResult.style.background = "rgba(217, 119, 6, 0.15)";
        timeResult.style.color = "var(--warning)";
        timeResult.textContent = "⚠️ Waspada! Durasi ini mulai menyita waktu produktif. Coba aktifkan fitur batas waktu aplikasi (App Timer) di ponselmu.";
    } else {
        timeResult.style.background = "rgba(220, 38, 38, 0.15)";
        timeResult.style.color = "var(--danger)";
        timeResult.textContent = "🚨 Terlalu Tinggi! Risiko kelelahan mata dan gangguan tidur meningkat. Segera jadwalkan waktu bebas gawai 1-2 jam sebelum tidur.";
    }
});

// 3. Logika Kuis Literasi Digital
const quizData = [
    {
        question: "Kamu menerima pesan WhatsApp berisi tautan hadiah undian resmi dengan format file '.apk'. Apa langkah terbaik?",
        options: [
            "Langsung mengunduh dan menginstalnya agar hadiah tidak hangus",
            "Mengabaikan, menghapus pesan, dan memblokir pengirim karena berpotensi malware",
            "Meneruskan pesan tersebut ke grup keluarga"
        ],
        answer: 1
    },
    {
        question: "Apa fungsi utama mengaktifkan Two-Factor Authentication (2FA) pada akun media sosial?",
        options: [
            "Mempercepat koneksi internet saat membuka aplikasi",
            "Menambah lapisan keamanan ekstra selain kata sandi saat login",
            "Menghemat penggunaan kuota internet"
        ],
        answer: 1
    },
    {
        question: "Aturan 20-20-20 dalam kesehatan digital bertujuan untuk mencegah...",
        options: [
            "Kelelahan mata akibat menatap layar terlalu lama",
            "Baterai ponsel cepat habis",
            "Pencurian data pribadi"
        ],
        answer: 0
    }
];

let currentQuiz = 0;
const questionEl = document.getElementById("quiz-question");
const optionsEl = document.getElementById("quiz-options");
const feedbackEl = document.getElementById("quiz-feedback");
const nextBtn = document.getElementById("next-quiz-btn");

function loadQuiz() {
    feedbackEl.textContent = "";
    nextBtn.classList.add("hidden");
    const currentData = quizData[currentQuiz];
    questionEl.textContent = `${currentQuiz + 1}. ${currentData.question}`;
    optionsEl.innerHTML = "";

    currentData.options.forEach((opt, index) => {
        const button = document.createElement("button");
        button.className = "quiz-option-btn";
        button.textContent = opt;
        button.onclick = () => checkAnswer(index);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuiz].answer;
    const buttons = optionsEl.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        feedbackEl.style.color = "var(--success)";
        feedbackEl.textContent = "Benar! Kamu memiliki pemahaman literasi digital yang baik.";
    } else {
        feedbackEl.style.color = "var(--danger)";
        feedbackEl.textContent = `Kurang tepat. Jawaban yang benar: "${quizData[currentQuiz].options[correctIndex]}"`;
    }
    nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
    currentQuiz = (currentQuiz + 1) % quizData.length;
    loadQuiz();
});

// 4. Toggle Mode Gelap (Dark Mode)
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Inisialisasi Awal
renderCards();
loadQuiz();
