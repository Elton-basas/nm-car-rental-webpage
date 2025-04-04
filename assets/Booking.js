const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

function setupStarRating(containerId) {
  const stars = document.querySelectorAll(`#${containerId} .star`);

  stars.forEach(star => {
      star.addEventListener("click", function () {
          let rating = this.getAttribute("data-value");

          
          stars.forEach(s => s.classList.remove("selected"));

          
          for (let i = 0; i < rating; i++) {
              stars[i].classList.add("selected");
          }

          
          document.getElementById(containerId).dataset.rating = rating;
      });
  });
}

setupStarRating("overall-rating");
setupStarRating("transaction-rating");

document.getElementById("submit-review").addEventListener("click", function () {
  let name = document.getElementById("reviewer-name").value.trim();
  let carModel = document.getElementById("car-model").value.trim();
  let reviewText = document.getElementById("review-text").value.trim();
  let overallRating = document.getElementById("overall-rating").dataset.rating || 0;
  let transactionRating = document.getElementById("transaction-rating").dataset.rating || 0;

  if (name === "" || carModel === "" || reviewText === "") {
      alert("⚠️ Please fill out all fields before submitting.");
      return;
  }

  let reviewList = document.getElementById("review-list");

  
  let reviewDiv = document.createElement("div");
  reviewDiv.classList.add("review");
  reviewDiv.innerHTML = `
      <strong>${name}</strong> rented <em>${carModel}</em>
      <p>${reviewText}</p>
      <p>Overall Experience: ${"★".repeat(overallRating)}${"☆".repeat(5 - overallRating)}</p>
      <p>Transaction Process: ${"★".repeat(transactionRating)}${"☆".repeat(5 - transactionRating)}</p>
  `;

  
  reviewList.prepend(reviewDiv);

  
  document.getElementById("reviewer-name").value = "";
  document.getElementById("car-model").value = "";
  document.getElementById("review-text").value = "";
  document.querySelectorAll(".star").forEach(star => star.classList.remove("selected"));
});

const faqs = document.querySelectorAll(".faq")

faqs.forEach((faq)=>{
    faq.addEventListener("click",()=>{
        if(faq.classList.contains("active")){
            faq.classList.remove("active")
        }else{
            faq.classList.add("active")
        }
    })
})

function sendMessage() {
    var input = document.getElementById("chatInput");
    var message = input.value.trim();
    if (message) {
        var chatBody = document.getElementById("chatBody");
        var msgElement = document.createElement("div");
        msgElement.textContent = "You: " + message;
        chatBody.appendChild(msgElement);
        chatBody.scrollTop = chatBody.scrollHeight;
        input.value = "";

        // Show notification dot when a message is sent
        document.getElementById("notification-dot").style.display = "inline";
    }
}

function toggleChat() {
    var chatBox = document.getElementById("chatBox");
    chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";
}

function sendMessage() {
    var input = document.getElementById("chatInput");
    var message = input.value.trim();
    if (message) {
        var chatBody = document.getElementById("chatBody");
        var msgElement = document.createElement("div");
        msgElement.textContent = "You: " + message;
        chatBody.appendChild(msgElement);
        chatBody.scrollTop = chatBody.scrollHeight;
        input.value = "";
    }
}
