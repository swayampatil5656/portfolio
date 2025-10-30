document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.innerText = 'Added!';
    btn.style.background = '#43a047';
    setTimeout(() => {
      btn.innerText = 'Add to Cart';
      btn.style.background = 'linear-gradient(135deg, #2874f0, #1c54b2)';
    }, 1000);
  });
});
