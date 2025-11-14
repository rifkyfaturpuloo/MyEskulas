const THEME_KEY = "eskulas-theme";

try {
  const storedTheme = localStorage.getItem(THEME_KEY) || "light";
  document.documentElement.setAttribute("data-theme", storedTheme);
} catch (err) {
  document.documentElement.setAttribute("data-theme", "light");
}

const QUESTION_BANK = [
  { text: "Saya suka memimpin kegiatan kelas atau event sekolah.", category: "leadership" },
  { text: "Saya cepat mengambil keputusan saat tim butuh arahan.", category: "leadership" },
  { text: "Saya menikmati memberi motivasi kepada teman satu tim.", category: "leadership" },
  { text: "Saya tertarik menyusun strategi agar sebuah acara berjalan rapi.", category: "leadership" },
  { text: "Saya merasa percaya diri saat mempresentasikan ide di depan guru atau teman.", category: "leadership" },
  { text: "Saya senang membagikan tugas agar semua anggota punya peran.", category: "leadership" },
  { text: "Saya mudah menjaga komunikasi antar anggota tim.", category: "leadership" },
  { text: "Saya menikmati mengevaluasi kegiatan dan memberi umpan balik.", category: "leadership" },
  { text: "Saya suka aktivitas fisik yang menantang stamina.", category: "sport" },
  { text: "Saya bersemangat berlatih rutin walau jadwal padat.", category: "sport" },
  { text: "Saya cepat belajar teknik baru dalam olahraga.", category: "sport" },
  { text: "Saya menikmati atmosfer kompetisi dan turnamen.", category: "sport" },
  { text: "Saya merasa puas ketika tim olahraga mencapai target latihan.", category: "sport" },
  { text: "Saya suka menjaga kebugaran lewat latihan fisik.", category: "sport" },
  { text: "Saya menikmati strategi permainan lapangan.", category: "sport" },
  { text: "Saya mudah termotivasi saat ada sorakan supporter.", category: "sport" },
  { text: "Saya suka tampil di panggung atau di depan kamera.", category: "performing" },
  { text: "Saya menikmati latihan koreografi atau blocking gerak.", category: "performing" },
  { text: "Saya percaya ekspresi seni bisa menyuarakan opini saya.", category: "performing" },
  { text: "Saya tertarik mengatur kostum atau properti pertunjukan.", category: "performing" },
  { text: "Saya senang berimprovisasi saat tampil.", category: "performing" },
  { text: "Saya nyaman menerima kritik artistik untuk penampilan.", category: "performing" },
  { text: "Saya sering membuat sketsa, desain, atau moodboard.", category: "creative" },
  { text: "Saya suka mengedit foto atau video untuk unggahan media sosial.", category: "creative" },
  { text: "Saya tertarik bereksperimen dengan warna dan tipografi.", category: "creative" },
  { text: "Saya menikmati membuat konsep konten digital.", category: "creative" },
  { text: "Saya cepat memahami software kreatif baru.", category: "creative" },
  { text: "Saya suka menceritakan ide melalui visual.", category: "creative" },
  { text: "Saya senang menggabungkan budaya pop dengan karya sendiri.", category: "creative" },
  { text: "Saya suka merancang campaign kreatif untuk event sekolah.", category: "creative" },
  { text: "Saya suka berdiskusi dalam bahasa asing.", category: "language" },
  { text: "Saya tertarik mengikuti lomba debat atau storytelling.", category: "language" },
  { text: "Saya senang menerjemahkan konten agar mudah dipahami.", category: "language" },
  { text: "Saya menikmati membuat konten bilingual.", category: "language" },
  { text: "Saya mudah bergaul dengan siswa dari sekolah lain.", category: "language" },
  { text: "Saya tertarik mempelajari pertolongan pertama.", category: "health" },
  { text: "Saya tenang menghadapi situasi darurat.", category: "health" },
  { text: "Saya peduli ketika teman mengalami masalah kesehatan.", category: "health" },
  { text: "Saya suka menjadi relawan dalam kegiatan sosial.", category: "health" },
  { text: "Saya telaten mencatat kebutuhan logistik saat aksi sosial.", category: "health" },
  { text: "Saya merasa damai saat terlibat dalam kegiatan rohani.", category: "spiritual" },
  { text: "Saya suka memimpin atau mengikuti kajian dan renungan.", category: "spiritual" },
  { text: "Saya tertarik mengajak teman memperbaiki karakter.", category: "spiritual" },
  { text: "Saya senang mengorganisasi kegiatan berbagi di hari besar keagamaan.", category: "spiritual" },
  { text: "Saya menghargai nilai etika dan adab dalam setiap aktivitas.", category: "spiritual" },
  { text: "Saya tertarik belajar bela diri tradisional.", category: "martial" },
  { text: "Saya disiplin mengikuti latihan teknik dasar.", category: "martial" },
  { text: "Saya menikmati tantangan fisik yang melatih fokus.", category: "martial" },
  { text: "Saya ingin tampil dalam kejuaraan bela diri.", category: "martial" },
  { text: "Saya menghargai filosofi dan tata krama dalam latihan bela diri.", category: "martial" },
];

const CLUBS = [
  {
    id: "osis",
    name: "OSIS SMKN 12 Surabaya",
    nickname: "OSIS Rolas",
    description: "Dapur kolaborasi lintas jurusan yang menggarap event sekolah sepanjang tahun.",
    highlight: "Leadership sprint & project management real.",
    focus: "Organisasi & manajemen event",
    tags: ["leadership", "creative"],
    baseScore: 84,
    accent: "#ffb703",
    emoji: "🏅",
    logo: "Logo Eksul/OSISROLAS.jpg",
  },
  {
    id: "supporter",
    name: "Supporter SMKN 12 Surabaya",
    nickname: "Twelvoster",
    description: "Unit supporter resmi dengan koreografi chant kreatif khas Rolas.",
    highlight: "Tiap pertandingan jadi panggungmu.",
    focus: "Creative cheering & sport culture",
    tags: ["sport", "performing"],
    baseScore: 78,
    accent: "#00e1ff",
    emoji: "📣",
    logo: "Logo Eksul/TWELVOSTER.jpg",
  },
  {
    id: "pramuka",
    name: "Pramuka SMKN 12 Surabaya",
    nickname: "Prakalas",
    description: "Komunitas petualang dengan project sosial dan kegiatan perkemahan rutin.",
    highlight: "Bikin karakter tangguh & peduli.",
    focus: "Outdoor leadership & service",
    tags: ["leadership", "martial"],
    baseScore: 80,
    accent: "#5be584",
    emoji: "⛺",
    logo: "Logo Eksul/PRAKALAS.jpg",
  },
  {
    id: "dance",
    name: "Dance SMKN 12 Surabaya",
    nickname: "Winzhy",
    description: "Crew dance modern dengan koreografi kompetisi dan konten digital.",
    highlight: "Koreografi panggung & konten.",
    focus: "Performing arts & creative content",
    tags: ["performing", "creative"],
    baseScore: 87,
    accent: "#ff7ac7",
    emoji: "💃",
    logo: "Logo Eksul/WINZHY.jpg",
  },
  {
    id: "cosplay",
    name: "Cosplayer SMKN 12 Surabaya",
    nickname: "Rolascos",
    description: "Studio mini yang menggabungkan desain kostum, make up, dan akting.",
    highlight: "Eksperimen karakter pop culture.",
    focus: "Kostum, make up, & acting",
    tags: ["creative", "performing"],
    baseScore: 82,
    accent: "#c7a6ff",
    emoji: "🎭",
    logo: "Logo Eksul/ROLASCOS.jpg",
  },
  {
    id: "psht",
    name: "Persaudaraan Setia Hati Terate",
    nickname: "PSHT Rolas",
    description: "Latihan bela diri tradisional dengan fokus etika dan ketahanan fisik.",
    highlight: "Balance antara teknik dan filosofi.",
    focus: "Bela diri & karakter klasik",
    tags: ["martial", "spiritual"],
    baseScore: 79,
    accent: "#ffab91",
    emoji: "🥋",
    logo: "Logo Eksul/PSHT.jpg",
  },
  {
    id: "pn",
    name: "Pagar Nusa SMKN 12",
    nickname: "PN Rolas",
    description: "Unit pencak silat bernuansa spiritual dan budaya Nahdlatul Ulama.",
    highlight: "Memadukan bela diri & nilai spiritual.",
    focus: "Tradisi nahdliyin & bela diri",
    tags: ["martial", "spiritual"],
    baseScore: 77,
    accent: "#ffd166",
    emoji: "🛡️",
    logo: "Logo Eksul/PN.jpg",
  },
  {
    id: "paskibra",
    name: "Paskibra SMKN 12 Surabaya",
    nickname: "Panser",
    description: "Satuan baris berbaris kebanggaan sekolah dengan standar nasional.",
    highlight: "Disiplin militer & prestasi kota.",
    focus: "National ceremony excellence",
    tags: ["leadership", "sport"],
    baseScore: 90,
    accent: "#ffa822",
    emoji: "🚩",
    logo: "Logo Eksul/PANSER.jpg",
  },
  {
    id: "pmr",
    name: "PMR Wira SMKN 12 Surabaya",
    nickname: "Parlas",
    description: "Garda depan kesehatan sekolah dan relawan PMI muda.",
    highlight: "Belajar first aid + respon cepat.",
    focus: "Kemanusiaan & kesehatan",
    tags: ["health", "leadership"],
    baseScore: 83,
    accent: "#6ef5d7",
    emoji: "⛑️",
    logo: "Logo Eksul/PARLAS.jpg",
  },
  {
    id: "english",
    name: "English Club SMKN 12 Surabaya",
    nickname: "EC Rolas",
    description: "Komunitas public speaking, debat, dan konten bilingual.",
    highlight: "Upgrade bahasa + relasi global.",
    focus: "Public speaking & global exposure",
    tags: ["language", "creative"],
    baseScore: 76,
    accent: "#5eebff",
    emoji: "🗣️",
    logo: "Logo Eksul/EC.jpg",
  },
  {
    id: "rohis",
    name: "Rohani Islam SMKN 12 Surabaya",
    nickname: "Rohis Rolas",
    description: "Ruang tumbuh spiritual dengan kajian rutin & project sosial Ramadan.",
    highlight: "Lingkar positif penuh dukungan.",
    focus: "Penguatan iman & karakter",
    tags: ["spiritual", "leadership"],
    baseScore: 74,
    accent: "#ffd4a8",
    emoji: "✨",
    logo: "Logo Eksul/ROHIS.jpg",
  },
  {
    id: "voli",
    name: "Voli SMKN 12 Surabaya",
    nickname: "Voli Rolas",
    description: "Tim voli putra-putri dengan jadwal latihan konsisten dan sparing sekolah sahabat.",
    highlight: "Atmosfer kompetitif & supportif.",
    focus: "Teamwork & sportivity",
    tags: ["sport"],
    baseScore: 81,
    accent: "#6dd5fa",
    emoji: "🏐",
    logo: "Logo Eksul/VOLI.jpg",
  },
  {
    id: "basket",
    name: "Basket SMKN 12 Surabaya",
    nickname: "Basket Rolas",
    description: "Squad basket dengan porsi fitness, strategi, dan scrimmage rutin.",
    highlight: "Upgrade skill + mental kompetisi.",
    focus: "Fast game & strategi tim",
    tags: ["sport"],
    baseScore: 82,
    accent: "#a0f0ff",
    emoji: "🏀",
    logo: "Logo Eksul/BASKET.jpg",
  },
  {
    id: "futsal",
    name: "Futsal SMKN 12 Surabaya",
    nickname: "Futsal Rolas",
    description: "Tim futsal dengan kultur kekeluargaan dan jadwal friendly match reguler.",
    highlight: "Belajar strategi cepat + teamwork.",
    focus: "Teknik cepat & brotherhood",
    tags: ["sport"],
    baseScore: 83,
    accent: "#ffd166",
    emoji: "⚽",
    logo: "Logo Eksul/FUTSAL.jpg",
  },
];

const LIKERT_SCALE = [
  { value: 1, meaning: "Sangat Tidak Setuju" },
  { value: 2, meaning: "Tidak Setuju" },
  { value: 3, meaning: "Netral" },
  { value: 4, meaning: "Setuju" },
  { value: 5, meaning: "Sangat Setuju" },
];
const CHUNK_SIZE = 10;
const TOTAL_CHUNKS = Math.ceil(QUESTION_BANK.length / CHUNK_SIZE);
const responses = Array(QUESTION_BANK.length).fill(0);

document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById("questionContainer");
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");
  const chunkIndicator = document.getElementById("chunkIndicator");
  const prevBtn = document.querySelector('[data-action="prev"]');
  const nextBtn = document.querySelector('[data-action="next"]');
  const recommendationList = document.getElementById("recommendationList");
  const recommendationPlaceholder = document.getElementById("recommendationPlaceholder");
  const recommendationWrap = document.querySelector(".recommendation-wrap");
  const snapshotList = document.getElementById("snapshotList");
  const miniBars = document.getElementById("miniBars");
  const clubGrid = document.getElementById("clubGrid");
  const scrollCtas = document.querySelectorAll("[data-scroll-target]");
  const themeToggles = document.querySelectorAll(".theme-toggle");
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileBackdrop = document.getElementById("mobileBackdrop");
  const closeMobile = document.getElementById("closeMobile");

  let currentChunk = 0;

  renderClubGrid(clubGrid);
  renderChunk();
  updateProgress();
  updateSnapshot(snapshotList);
  toggleRecommendationVisibility(false);

  questionContainer?.addEventListener("click", (event) => {
    const button = event.target.closest(".scale-btn");
    if (!button) return;
    const index = Number(button.dataset.index);
    const value = Number(button.dataset.value);
    responses[index] = value;
    const row = button.closest(".likert-options");
    if (!row) return;
    row.querySelectorAll(".scale-btn").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    updateProgress();
    updateSnapshot(snapshotList);
  });

  prevBtn?.addEventListener("click", () => {
    if (currentChunk === 0) return;
    currentChunk -= 1;
    renderChunk();
    updateProgress();
  });

  nextBtn?.addEventListener("click", () => {
    if (currentChunk >= TOTAL_CHUNKS - 1) {
      handleSubmit();
      return;
    }
    currentChunk += 1;
    renderChunk();
    updateProgress();
  });

  scrollCtas.forEach((cta) => {
    cta.addEventListener("click", () => {
      const target = document.querySelector(cta.dataset.scrollTarget);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  initThemeToggle(themeToggles);
  initMobileNav({
    toggle: navToggle,
    menu: mobileMenu,
    backdrop: mobileBackdrop,
    closeBtn: closeMobile,
  });

  function renderChunk() {
    if (!questionContainer) return;
    const start = currentChunk * CHUNK_SIZE;
    const chunk = QUESTION_BANK.slice(start, start + CHUNK_SIZE);
    const minLabel = LIKERT_SCALE[0].meaning;
    const maxLabel = LIKERT_SCALE[LIKERT_SCALE.length - 1].meaning;
    questionContainer.innerHTML = chunk
      .map((question, index) => {
        const overallIndex = start + index;
        const currentValue = responses[overallIndex];
        const buttons = LIKERT_SCALE.map(({ value, meaning }) => {
          const isActive = currentValue === value ? "active" : "";
          return `
            <button
              type="button"
              class="scale-btn ${isActive}"
              data-index="${overallIndex}"
              data-value="${value}"
              aria-label="${meaning}"
            >
              <span>${value}</span>
            </button>
          `;
        }).join("");
        return `
          <article class="question-card">
            <header>
              <span class="question-number">${String(overallIndex + 1).padStart(2, "0")}</span>
            </header>
            <p>${question.text}</p>
            <div class="likert-scale">
              <div class="likert-labels">
                <span class="likert-extreme">${minLabel}</span>
                <span class="likert-extreme align-right">${maxLabel}</span>
              </div>
              <div class="likert-options" role="group" aria-label="Skala jawaban untuk pertanyaan ${overallIndex + 1}">
                ${buttons}
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    if (chunkIndicator) {
      chunkIndicator.textContent = `Bagian ${currentChunk + 1} dari ${TOTAL_CHUNKS}`;
    }
    updateControls();
  }

  function updateControls() {
    if (prevBtn) {
      prevBtn.disabled = currentChunk === 0;
    }
    if (nextBtn) {
      const isFinalChunk = currentChunk >= TOTAL_CHUNKS - 1;
      nextBtn.textContent = isFinalChunk ? "Tampilkan Hasil" : "Pertanyaan Selanjutnya";
    }
  }

  function handleSubmit() {
    const firstUnanswered = responses.findIndex((val) => val === 0);
    if (firstUnanswered !== -1) {
      currentChunk = Math.floor(firstUnanswered / CHUNK_SIZE);
      renderChunk();
      updateProgress();
      showToast(`Pertanyaan ${firstUnanswered + 1} belum dijawab.`);
      return;
    }

    const { ranked, categoryScores } = calculateRanking();
    renderRecommendations(ranked, recommendationList);
    updateMiniBarsChart(categoryScores, miniBars);
    updateSnapshot(snapshotList, categoryScores);
    toggleRecommendationVisibility(true);
    document.getElementById("rekomendasi")?.scrollIntoView({ behavior: "smooth" });
  }

  function toggleRecommendationVisibility(showResults) {
    if (!recommendationWrap || !recommendationPlaceholder) return;
    if (showResults) {
      recommendationWrap.classList.remove("is-hidden");
      recommendationPlaceholder.classList.add("is-hidden");
    } else {
      recommendationWrap.classList.add("is-hidden");
      recommendationPlaceholder.classList.remove("is-hidden");
    }
  }

  function updateProgress() {
    const answered = responses.filter(Boolean).length;
    const percent = (answered / QUESTION_BANK.length) * 100;
    if (progressFill) progressFill.style.width = `${percent}%`;
    if (progressText) progressText.textContent = `${answered}/${QUESTION_BANK.length} terjawab`;
  }
});

function calculateRanking() {
  const categoryScores = {};
  QUESTION_BANK.forEach((question, index) => {
    const value = responses[index];
    if (!value) return;
    const delta = value - 3; // -2 sampai +2
    categoryScores[question.category] = (categoryScores[question.category] || 0) + delta;
  });

  const ranked = CLUBS.map((club) => {
    const tagBoost = club.tags
      .map((tag) => (categoryScores[tag] || 0) * 5)
      .reduce((total, val) => total + val, 0);
    const rawScore = Math.min(100, Math.round(club.baseScore + tagBoost));
    return { ...club, score: rawScore };
  })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return { ranked, categoryScores };
}

function renderRecommendations(list, container) {
  if (!container) return;
  if (!list.length) {
    container.innerHTML = `
      <div class="empty-state">
        <p>Belum ada skor 😴</p>
        <p>Jawab semua pernyataan lalu klik “Hitung Ranking” untuk melihat rekomendasi.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list
    .map(
      (club, index) => `
        <article class="recommendation-card">
          <header>
            <div class="rank-pill">${index + 1}</div>
            <div class="rec-head">
              <img src="${club.logo}" alt="Logo ${club.nickname}" class="logo-circle rec-logo" loading="lazy" />
              <div>
                <p class="nickname">${club.emoji} ${club.nickname}</p>
                <h3>${club.name}</h3>
              </div>
            </div>
          </header>
          <p>${club.description}</p>
          <p><strong>Keunggulan:</strong> ${club.highlight}</p>
          <p><strong>Fokus:</strong> ${club.focus}</p>
          <div class="tag-list">
            ${club.tags.map((tag) => `<span class="tag">#${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function updateMiniBarsChart(categoryScores = {}, container) {
  if (!container) return;
  const entries = Object.entries(categoryScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  if (!entries.length) {
    container.innerHTML = `
      <div><span style="width:10%"></span><p>Leadership</p></div>
      <div><span style="width:10%"></span><p>Kreatif</p></div>
      <div><span style="width:10%"></span><p>Olahraga</p></div>
    `;
    return;
  }

  const maxVal = Math.max(...entries.map(([, val]) => Math.abs(val))) || 1;
  container.innerHTML = entries
    .map(
      ([label, value]) => `
        <div>
          <span style="width:${Math.max(15, Math.round((Math.abs(value) / maxVal) * 100))}%"></span>
          <p>${formatCategory(label)}</p>
        </div>
      `
    )
    .join("");
}

function updateSnapshot(container, categoryScores = collectCategoryScores()) {
  if (!container) return;
  const answered = responses.filter(Boolean).length;
  const entries = Object.entries(categoryScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const [top1, top2, top3] = entries;

  container.innerHTML = `
    <li>Pertanyaan terjawab: ${answered}/${QUESTION_BANK.length}</li>
    <li>Top kategori 1: ${top1 ? formatCategory(top1[0]) : "—"}</li>
    <li>Top kategori 2: ${top2 ? formatCategory(top2[0]) : "—"}</li>
    <li>Top kategori 3: ${top3 ? formatCategory(top3[0]) : "—"}</li>
  `;
}

function collectCategoryScores() {
  const tally = {};
  QUESTION_BANK.forEach((question, index) => {
    const value = responses[index];
    if (!value) return;
    const delta = value - 3;
    tally[question.category] = (tally[question.category] || 0) + delta;
  });
  return tally;
}

function renderClubGrid(container) {
  if (!container) return;
  container.innerHTML = CLUBS.map(
    (club) => `
      <article class="club-card" style="border-color:${club.accent}33">
        <div class="club-logo-wrap">
          <img src="${club.logo}" alt="Logo ${club.nickname}" class="logo-circle" loading="lazy" />
          <div>
            <small>${club.nickname}</small>
            <h3>${club.name}</h3>
          </div>
        </div>
        <p>${club.highlight}</p>
        <p class="focus">Fokus: ${club.focus}</p>
      </article>
    `
  ).join("");
}

function formatCategory(key = "") {
  if (key === "sport") return "Olahraga";
  if (key === "creative") return "Kreatif";
  if (key === "performing") return "Performing Arts";
  if (key === "language") return "Bahasa & Global";
  if (key === "health") return "Kemanusiaan";
  if (key === "spiritual") return "Spiritual";
  if (key === "martial") return "Bela Diri";
  if (key === "leadership") return "Leadership";
  return key || "—";
}

function initThemeToggle(buttons) {
  const toggleButtons = Array.from(buttons || []).filter(Boolean);
  if (!toggleButtons.length) return;

  const updateLabels = () => {
    const theme = document.documentElement.getAttribute("data-theme") || "light";
    const label = theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap";
    toggleButtons.forEach((btn) => btn.setAttribute("aria-label", label));
  };

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const existing = document.documentElement.getAttribute("data-theme") || "light";
      const next = existing === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem(THEME_KEY, next);
      updateLabels();
    });
  });

  updateLabels();
}

function initMobileNav({ toggle, menu, backdrop, closeBtn }) {
  if (!toggle || !menu || !backdrop) return;

  const links = menu.querySelectorAll("a, [data-scroll-target]");

  const openMenu = () => {
    menu.classList.add("open");
    backdrop.classList.add("visible");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
  };

  const closeMenu = () => {
    menu.classList.remove("open");
    backdrop.classList.remove("visible");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
  };

  toggle.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  backdrop.addEventListener("click", closeMenu);
  closeBtn?.addEventListener("click", closeMenu);
  links.forEach((link) =>
    link.addEventListener("click", () => {
      closeMenu();
    })
  );
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.left = "50%";
  toast.style.bottom = "24px";
  toast.style.transform = "translateX(-50%)";
  toast.style.padding = "0.9rem 1.4rem";
  toast.style.borderRadius = "999px";
  toast.style.background = "rgba(0,0,0,0.75)";
  toast.style.color = "#fff";
  toast.style.fontWeight = "600";
  toast.style.zIndex = "9999";
  toast.style.boxShadow = "0 15px 30px rgba(0,0,0,0.35)";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2600);
}
