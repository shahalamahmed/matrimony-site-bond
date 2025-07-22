let currentStep = 0;
const steps = document.querySelectorAll(".step");
const stepTitle = document.getElementById("step-title");
const progressBar = document.getElementById("progress-bar");

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
        steps[currentStep].classList.add("d-none");
        currentStep++;
        steps[currentStep].classList.remove("d-none");
        updateProgress();
        updateNextButton();
    }
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentStep > 0) {
        steps[currentStep].classList.add("d-none");
        currentStep--;
        steps[currentStep].classList.remove("d-none");
        updateProgress();
        updateNextButton();
    }
});

function updateProgress() {
    const stepNumber = currentStep + 1;
    stepTitle.innerText = `Step ${stepNumber} of 10`;
    progressBar.style.width = `${(stepNumber / 10) * 100}%`;
}
function updateNextButton() {
    if (currentStep === steps.length - 1) {
        nextBtn.textContent = "Submit Biodata";
    } else {
        nextBtn.textContent = "Next";
    }
}