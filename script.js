function showSection(id) {
  const sections = document.querySelectorAll("main section");
  sections.forEach((section) => (section.style.display = "none"));

  const target = document.getElementById(id);
  if (target) target.style.display = "block";
}

let selectedSite = "https://yt1s.ltd/en42?q=";

function setSite(siteUrl) {
  selectedSite = siteUrl;
}

// Form kontak
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Pesan berhasil dikirim!");
      form.reset();
    });
  }
});

// Download media sosial
function showSection(id) {
  const sections = document.querySelectorAll("main section");
  sections.forEach((section) => (section.style.display = "none"));

  const target = document.getElementById(id);
  if (target) target.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Pesan berhasil dikirim!");
      form.reset();
    });
  }
});

function submitWelcome() {
  const name = document.getElementById("user-name").value;
  const email = document.getElementById("user-email").value;

  if (name.trim() === "" || email.trim() === "") {
    alert("Isi nama dan email dulu ya~");
    return;
  }

  localStorage.setItem("schaletUserName", name);
  localStorage.setItem("schaletUserEmail", email);

  document.getElementById("welcome-modal").style.display = "none";

  const profil = document.getElementById("profil");
  if (profil) {
    const greet = document.createElement("p");
    greet.textContent = 'Halo ${name}, selamat menjelajahi web ini 🌸';
    greet.style.fontStyle = "italic";
    greet.style.marginTop = "1rem";
    profil.appendChild(greet);
  }
}

const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("toggle-music");

let isPlaying = true;

toggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    toggleBtn.textContent = "🔇";
  } else {
    music.play();
    toggleBtn.textContent = "🔊";
  }
  isPlaying = !isPlaying;
});

function cariKata() {
  const kamus = {
  // 🌞 Salam & Percakapan
  "konnichiwa": "こんにちは - Selamat siang",
  "ohayou": "おはよう - Selamat pagi",
  "oyasumi": "おやすみ - Selamat tidur",
  "arigatou": "ありがとう - Terima kasih",
  "arigatou gozaimasu": "ありがとうございます - Terima kasih (lebih sopan)",
  "sumimasen": "すみません - Permisi / Maaf",
  "gomen nasai": "ごめんなさい - Maaf",
  "sayonara": "さようなら - Selamat tinggal",
  "jaa ne": "じゃあね - Sampai nanti",
  "itadakimasu": "いただきます - Selamat makan",
  "gochisousama": "ごちそうさま - Terima kasih atas makanannya",
  "shitsurei shimasu": "しつれいします - Permisi (sopan)",
  "hai": "はい - Ya",
  "iie": "いいえ - Tidak",

  // 👪 Keluarga & Orang
  "watashi": "わたし - Saya",
  "anata": "あなた - Kamu",
  "gakusei": "がくせい - Siswa / Mahasiswa",
  "sensei": "せんせい - Guru",
  "tomodachi": "ともだち - Teman",
  "kazoku": "かぞく - Keluarga",
  "otousan": "おとうさん - Ayah",
  "okaasan": "おかあさん - Ibu",
  "ani": "あに - Kakak laki-laki",
  "ane": "あね - Kakak perempuan",
  "otouto": "おとうと - Adik laki-laki",
  "imouto": "いもうと - Adik perempuan",

  // 🙋‍♂ Kata Ganti & Penunjuk
  "kore": "これ - Ini",
  "sore": "それ - Itu",
  "are": "あれ - Itu (jauh)",
  "dore": "どれ - Yang mana?",
  "koko": "ここ - Di sini",
  "soko": "そこ - Di situ",
  "asoko": "あそこ - Di sana",
  "doko": "どこ - Di mana?",
  "nani": "なに - Apa?",
  "dare": "だれ - Siapa?",
  "itsu": "いつ - Kapan?",

  // 🎨 Warna
  "aka": "あか - Merah",
  "ao": "あお - Biru",
  "midori": "みどり - Hijau",
  "kuro": "くろ - Hitam",
  "shiro": "しろ - Putih",
  "kiiro": "きいろ - Kuning",
  "murasaki": "むらさき - Ungu",
  "cha": "ちゃ - Cokelat",
  "haiiro": "はいいろ - Abu-abu",
  "orenji": "オレンジ - Jingga / Orange",

  // 🔢 Angka
  "ichi": "いち - Satu",
  "ni": "に - Dua",
  "san": "さん - Tiga",
  "yon": "よん - Empat",
  "go": "ご - Lima",
  "roku": "ろく - Enam",
  "nana": "なな - Tujuh",
  "hachi": "はち - Delapan",
  "kyuu": "きゅう - Sembilan",
  "juu": "じゅう - Sepuluh",

  // 📅 Hari dalam Seminggu
  "getsuyoubi": "げつようび - Senin",
  "kayoubi": "かようび - Selasa",
  "suiyoubi": "すいようび - Rabu",
  "mokuyoubi": "もくようび - Kamis",
  "kinyoubi": "きんようび - Jumat",
  "doyoubi": "どようび - Sabtu",
  "nichiyoubi": "にちようび - Minggu",

  // 🕐 Waktu
  "ima": "いま - Sekarang",
  "asa": "あさ - Pagi",
  "hiru": "ひる - Siang",
  "yoru": "よる - Malam",
  "kyou": "きょう - Hari ini",
  "ashita": "あした - Besok",
  "kinou": "きのう - Kemarin",

  // 🌦 Cuaca
  "ame": "あめ - Hujan",
  "yuki": "ゆき - Salju",
  "kaze": "かぜ - Angin",
  "taiyou": "たいよう - Matahari",
  "kumori": "くもり - Berawan",
  "hare": "はれ - Cerah",

  // 💬 Sifat & Rasa
  "oishii": "おいしい - Enak",
  "mazui": "まずい - Tidak enak",
  "takai": "たかい - Mahal / Tinggi",
  "yasui": "やすい - Murah",
  "hayai": "はやい - Cepat",
  "osoi": "おそい - Lambat",
  "kawaii": "かわいい - Lucu / Imut",
  "kakkoii": "かっこいい - Keren",
  "urusai": "うるさい - Berisik!",
  "baka": "ばか - Bodoh (kasar)",
  "omoshiroi": "おもしろい - Menarik / Lucu",
  "samui": "さむい - Dingin",
  "atsui": "あつい - Panas"
};

  const input = document.getElementById("search-jepang").value.toLowerCase();
  const hasil = document.getElementById("hasil-kamus");

  if (kamus[input]) {
    hasil.innerHTML = <p><strong>${input}</strong>: ${kamus[input]}</p>;
  } else {
    hasil.innerHTML = "<p>Maaf, kata tidak ditemukan/belum ditambahkan</p>";
  }
}