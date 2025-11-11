const form = document.getElementById('resume-form');
form.addEventListener('input', updatePreview);

function updatePreview() {
  const name = document.getElementById('name').value.trim() || 'Your Name';
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const summary = document.getElementById('summary').value.trim();
  const skills = document.getElementById('skills').value.trim();

  document.getElementById('preview-name').textContent = name;
  document.getElementById('preview-contact').textContent =
    [email && `📧 ${email}`, phone && `📞 ${phone}`].filter(Boolean).join(' | ') || '';
  document.getElementById('preview-summary').textContent =
    summary || 'A concise summary of your professional background.';
  document.getElementById('preview-skills').textContent = skills;

  updateList('#education-fields input', '#preview-education');
  updateList('#experience-fields input', '#preview-experience');
}

function updateList(selector, target) {
  const inputs = document.querySelectorAll(selector);
  const list = document.querySelector(target);
  list.innerHTML = '';
  inputs.forEach(input => {
    if (input.value.trim()) {
      const li = document.createElement('li');
      li.textContent = input.value.trim();
      list.appendChild(li);
    }
  });
}

function addEducation() {
  const container = document.getElementById('education-fields');
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Another Education';
  input.addEventListener('input', updatePreview);
  container.appendChild(input);
}

function addExperience() {
  const container = document.getElementById('experience-fields');
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Another Experience';
  input.addEventListener('input', updatePreview);
  container.appendChild(input);
}
