document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('printResume').addEventListener('click', () => {
  window.print();
});
