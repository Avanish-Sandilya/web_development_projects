document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual submission for now

    // 1. Password Match Check
    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match!");
      confirmPassword.style.border = "2px solid red";
      return;
    } else {
      confirmPassword.style.border = "2px solid green";
    }

    // 2. Check for empty fields
    let inputs = form.querySelectorAll("input");
    let emptyFields = 0;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.style.border = "2px solid red";
        emptyFields++;
      } else {
        input.style.border = "1px solid #ccc";
      }
    });

    if (emptyFields > 0) {
      alert("Please fill out all the fields.");
      return;
    }

    // 3. Final submission alert
    alert("Form submitted successfully!");
    form.reset(); // Reset form after success
  });
});

