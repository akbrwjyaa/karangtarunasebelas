const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.kegiatan-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const year = button.getAttribute('data-year');

    cards.forEach(card => {
      const cardYear = card.getAttribute('data-year');
      card.style.display = (year === 'all' || year === cardYear) ? 'block' : 'none';
    });
  });
});
