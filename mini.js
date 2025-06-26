const form = document.getElementById('resume-form');

form.addEventListener('input', updatePreview);

function updatePreview() {
  document.getElementById('preview-name').textContent = document.getElementById('name').value || 'Your Name';
  document.getElementById('preview-contact').textContent =document.getElementById('email').value ;
  document.getElementById('preview-phone').textContent = document.getElementById('phone').value;
  document.getElementById('preview-summary').textContent = document.getElementById('summary').value;

  document.getElementById('preview-skills').textContent = document.getElementById('skills').value;

  const eduInputs = document.querySelectorAll('#education-fields input');
  const eduList = document.getElementById('preview-education');
  eduList.innerHTML = '';
  eduInputs.forEach(input => {
    if (input.value.trim()) {
      const li = document.createElement('li');
      li.textContent = input.value;
      eduList.appendChild(li);
    }
  });

  const expInputs = document.querySelectorAll('#experience-fields input');
  const expList = document.getElementById('preview-experience');
  expList.innerHTML = '';
  expInputs.forEach(input => {
    if (input.value.trim()) {
      const li = document.createElement('li');
      li.textContent = input.value;
      expList.appendChild(li);
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
