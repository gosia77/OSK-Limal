const handleEmailSubmission = (e) => {
  e.preventDefault();

  const email = document.querySelector("input[name='email']").value;
  const phone = document.querySelector("input[name='telefon']").value;
  const message = document.querySelector("textarea[name='message']").value;

  // validate data
  // ...

  // send email
  sendEmail("kamilserafindev@gmail.com", "phone", "message");
};

const sendEmail = (email, phone, message) => {
  postEmail({
    email,
    phone,
    message,
  });
};

const postEmail = (data) => {
  const payload = {
    message: "Hello, World",
    ...data,
    _email: {
      from: data.email,
      subject: "Test.",
      template: {},
    },
  };

  fetch("https://submit-form.com/dq9bszVjA", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  })
    .catch((err) => {
      // send dom event about error
      console.log(err);
    })
    .then((res) => res.json())
    .then((data) => {
      // send dom event about success
      // nasluchiwanie na event
      document.addEventListener("successfully-email-sent", () => {
        const popup = document.createElement("p");
        popup.classList.add("popup");
        popup.classList.add("animate__animated");
        popup.classList.add("animate__flash");
        popup.innerHTML = "Email został wysłany!";

        document.body.appendChild(popup);

        setTimeout(() => {
          popup.remove();
        }, 3000);
      });

      // tworzenie eventu
      const successfullySentEvent = new CustomEvent("successfully-email-sent");

      // wysylanie eventu
      document.dispatchEvent(successfullySentEvent);
    });
};

handleEmailSubmission({ preventDefault: () => {} });
