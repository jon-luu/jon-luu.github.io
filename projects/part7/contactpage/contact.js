// Contact form - sends the message to my email with web3forms
const contactForm = document.getElementById("contact-form");
const result = document.getElementById("result");

//show a message under the form
const showResult = (message, type) => {
  result.textContent = message;
  result.className = `form-result show ${type}`;
};

//fade the message out after about a second
const hideResult = () => {
  setTimeout(() => {
    result.classList.remove("show");
  }, 1000);
};

contactForm.onsubmit = async (e) => {
  e.preventDefault();
  showResult("Sending...", "sending");

  const formData = new FormData(contactForm);
  const json = JSON.stringify(Object.fromEntries(formData));

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    if (response.status == 200) {
      showResult("Thanks! Your message was sent. We'll get back to you soon.", "success");
      contactForm.reset();
    } else {
      showResult("Sorry, something went wrong. Please try again.", "error");
    }
  } catch (error) {
    console.log(error);
    showResult("Sorry, something went wrong. Please try again.", "error");
  }

  hideResult();
};

//error message when a field isn't filled out correctly
contactForm.addEventListener("invalid", () => {
  showResult("Please fill out every field with a valid email.", "error");
  hideResult();
}, true);
