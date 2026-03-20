const form = document.getElementById('recipe-form');
const result = document.getElementById('result');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const origin = document.getElementById('origin').value.trim();
  const notes = document.getElementById('notes').value.trim();

  if (!name || !origin || !notes) {
    result.textContent = 'Please complete all fields.';
    result.style.color = '#b91c1c';
    return;
  }

  result.style.color = '#065f46';
  result.textContent = `Saved! "${name}" from ${origin} has been added.`;
  form.reset();
});
