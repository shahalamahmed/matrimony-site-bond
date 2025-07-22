let currentStep = 0;
const steps = document.querySelectorAll(".step");
const stepTitle = document.getElementById("step-title");
const progressBar = document.getElementById("progress-bar");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function showCurrentStep() {
  steps.forEach((step, index) => {
    if (index === currentStep) {
      step.classList.remove("d-none");
    } else {
      step.classList.add("d-none");
    }
  });
}

function updateProgress() {
  const stepNumber = currentStep + 1;
  stepTitle.innerText = `Step ${stepNumber} of ${steps.length}`;
  progressBar.style.width = `${(stepNumber / steps.length) * 100}%`;
}

function updateNextButton() {
  if (currentStep === steps.length - 1) {
    nextBtn.textContent = "Submit Biodata";
  } else {
    nextBtn.textContent = "Next";
  }
}

// Next button click
nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showCurrentStep();
    updateProgress();
    updateNextButton();
  }
});

// Previous button click
prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showCurrentStep();
    updateProgress();
    updateNextButton();
  }
});

// On page load initialize everything correctly
window.addEventListener("DOMContentLoaded", () => {
  showCurrentStep();
  updateProgress();
  updateNextButton();
});




