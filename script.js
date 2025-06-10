const toggleInput = document.getElementById('themeToggle');
const body = document.body;

// Cek preferensi tersimpan saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
  const darkMode = localStorage.getItem('dark') === 'true';
  toggleInput.checked = darkMode;
  if (darkMode) {
    body.classList.add('dark');
  }
});

// Ubah tema saat toggle digeser
toggleInput.addEventListener('change', () => {
  const isDark = toggleInput.checked;
  body.classList.toggle('dark', isDark);
  localStorage.setItem('dark', isDark);
});
// Scroll ke lokasi saat tombol ditekan
document.querySelectorAll('.scroll-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(btn.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      <script>
  let slideIndex = 0;
  const track = document.getElementById('sliderTrack');

  function moveSlide(direction) {
    const slides = document.querySelectorAll('#sliderTrack img');
    const maxSlide = slides.length - 1;

    slideIndex += direction;
    if (slideIndex < 0) slideIndex = maxSlide;
    if (slideIndex > maxSlide) slideIndex = 0;

    const offset = slideIndex * (slides[0].offsetWidth + 40); // width + gap
    track.style.transform = `translateX(-${offset}px)`;
  }

  // Auto slide every 4 seconds
  setInterval(() => moveSlide(1), 4000);

  function filterTahun(tahun) {
    const cards = document.querySelectorAll(".kegiatan-card");
    const sponsor = document.getElementById("sponsorSection");

    cards.forEach(card => {
      if (tahun === "all" || card.dataset.tahun === tahun) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Toggle sponsor slider
    sponsor.style.display = (tahun === "2024") ? "block" : "none";

    // Update active chip
    document.querySelectorAll(".year-chip").forEach(c => c.classList.remove("active"));
    document.querySelector(`.year-chip[onclick*="${tahun}"]`).classList.add("active");
  }
</script>

    }
  });
});