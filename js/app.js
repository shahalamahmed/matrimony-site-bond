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





const profiles = [
    {
        name: "Fatima Rahman",
        age: 26,
        profession: "Teacher",
        location: "Dhaka",
        bio: "Looking for a life partner who values family and faith, I love reading and traveling.",
        online: true,
        image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        name: "Abdul Karim",
        age: 29,
        profession: "Software Engineer",
        location: "Chittagong",
        bio: "Family-oriented person looking for a caring and understanding partner for marriage.",
        online: false,
        image: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
        name: "Ayesha Begum",
        age: 24,
        profession: "Doctor",
        location: "Sylhet",
        bio: "Medical professional seeking a educated and religious life partner who supports career goals.",
        online: false,
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        name: "Mohammad Ali",
        age: 31,
        profession: "Businessman",
        location: "Khulna",
        bio: "Entrepreneur looking for a supportive and family-oriented partner to build a life together.",
        online: true,
        image: "https://randomuser.me/api/portraits/men/52.jpg"
    }
];

const container = document.getElementById("profile-container");
const countText = document.getElementById("results-count");
const template = document.getElementById("profile-template");

countText.textContent = `${profiles.length} profiles found`;
profiles.forEach(profile => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".profile-name").textContent = profile.name;
    clone.querySelector(".profile-age").textContent = `${profile.age} years`;
    clone.querySelector(".profile-profession").textContent = profile.profession;
    clone.querySelector(".profile-location").textContent = profile.location;
    clone.querySelector(".profile-bio").textContent = profile.bio;
    clone.querySelector(".profile-pic").src = profile.image;

    if (profile.online) {
        // Optional: Add online badge dynamically if you want
        // clone.querySelector(".online-badge").classList.remove("d-none");
    }

    container.appendChild(clone);
});
