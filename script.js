let questionId = 0;

function addQuestion() {
  questionId++;
  const container = document.getElementById("questionContainer");

  const block = document.createElement("div");
  block.className = "question-block";
  block.id = `q${questionId}`;

  block.innerHTML = `
    <input type="text" placeholder="Enter your question" class="question-label" />

    <select class="input-type">
      <option value="text">Text</option>
      <option value="date">Date</option>
      <option value="email">Email</option>
      <option value="number">Number</option>
    </select>

    <label>
      <input type="checkbox" class="is-required" />
      Required
    </label>

    <button onclick="removeQuestion('${block.id}')">Delete</button>
  `;

  container.appendChild(block);
}

function removeQuestion(id) {
  document.getElementById(id).remove();
}

function publishForm() {
  const container = document.getElementById("questionContainer");
  const form = document.getElementById("generatedForm");
  form.innerHTML = ""; // Clear previous content

  const blocks = container.querySelectorAll(".question-block");

  blocks.forEach((block, i) => {
    const label = block.querySelector(".question-label").value;
    const type = block.querySelector(".input-type").value;
    const isRequired = block.querySelector(".is-required").checked;

    const labelEl = document.createElement("label");
    labelEl.innerText = label;
    form.appendChild(labelEl);

    const input = document.createElement("input");
    input.type = type;
    input.name = `q${i}`;
    input.required = isRequired;
    form.appendChild(input);

    form.appendChild(document.createElement("br"));
  });

  form.appendChild(document.createElement("br"));
  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Submit";
  submitBtn.type = "submit";
  form.appendChild(submitBtn);

  // Handle form submit
  form.onsubmit = function (e) {
    e.preventDefault();
    window.location.href = "thankyou.html";
  }; // <- This semicolon is now correctly placed inside the function
}
