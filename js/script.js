/* Dark Mode */
function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById("darkIcon");

  // toggle class dark-mode
  body.classList.toggle("dark-mode");

  // simpan preferensi ke localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    icon.src = "image/light.png"; // ikon bulan
  } else {
    localStorage.setItem("theme", "light");
    icon.src = "image/dark.png"; // ikon matahari
  }
}

// cek preferensi user saat halaman dimuat
window.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const icon = document.getElementById("darkIcon");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    icon.src = "image/light.png";
  } else {
    body.classList.remove("dark-mode");
    icon.src = "image/dark.png";
  }
});

/* Jam Footer */
function updateClock() {
  const now = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const formattedDateTime = now.toLocaleDateString("id", options);
  document.getElementById("waktu").textContent = formattedDateTime;
}

setInterval(updateClock, 1000);

updateClock();

// Toggle navbar responsive
function navFunction(event) {
  if (event) event.preventDefault(); // mencegah href scroll ke atas

  // Ambil elemen <nav> pertama
  const nav = document.querySelector("nav");
  if (!nav) return; // safety check

  // Toggle class 'responsive'
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
}

// email
function sendMail(event) {
  event.preventDefault(); // cegah reload halaman jika dipanggil dari form

  let parm = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_9gq507b", "template_jrzj0jd", parm)
    .then(() => {
      alert("Terima kasih, pesan Anda telah terkirim!");
      document.getElementById("emailForm").reset();
    })
    .catch((err) => {
      console.error("Gagal mengirim:", err);
      alert("Gagal mengirim pesan.");
    });
}
