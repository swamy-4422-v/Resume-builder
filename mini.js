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

  // Education
  const eduInputs = document.querySelectorAll('#education-fields input');
  const eduList = document.getElementById('preview-education');
  eduList.innerHTML = '';
  eduInputs.forEach(input => {
    if (input.value.trim()) {
      const li = document.createElement('li');
      li.textContent = input.value.trim();
      eduList.appendChild(li);
    }
  });

  // Experience
  const expInputs = document.querySelectorAll('#experience-fields input');
  const expList = document.getElementById('preview-experience');
  expList.innerHTML = '';
  expInputs.forEach(input => {
    if (input.value.trim()) {
      const li = document.createElement('li');
      li.textContent = input.value.trim();
      expList.appendChild(li);
    }
  });
}

// Add new Education field
function addEducation() {
  const container = document.getElementById('education-fields');
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Another Education';
  input.addEventListener('input', updatePreview);
  container.appendChild(input);
}

// Add new Experience field
function addExperience() {
  const container = document.getElementById('experience-fields');
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Another Experience';
  input.addEventListener('input', updatePreview);
  container.appendChild(input);
}

