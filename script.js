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
    }
  });
});