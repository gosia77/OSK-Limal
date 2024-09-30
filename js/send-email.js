const setUpListenerForCustomPopUp = ( name, text, isSuccessPopUp )=> {
  document.addEventListener(name, () => {
    const popup = document.createElement("p");

    if (isSuccessPopUp) {
      popup.classList.add("popup-green")
    } else {
      popup.classList.add("popup-red")
    }
    popup.classList.add("animate__animated");
    popup.classList.add("animate__flash");

    popup.innerHTML = text;
  
    const popupContainer = document.querySelector('.popup-container')
    popupContainer.appendChild(popup);
  
    setTimeout(() => {
      popup.remove();
    }, 3000);
  })
} 

setUpListenerForCustomPopUp("incorrect-phone-number", "Niepoprawny numer telefonu!", false );
setUpListenerForCustomPopUp("incorrect-email", "Niepoprawny email!", false );
setUpListenerForCustomPopUp("incorrect-message", "Niepoprawna wiadomość!", false );

const handleEmailSubmission = (e) => {
  e.preventDefault();
  onEmailSent();
  emitEmailIsSending();

  const email = document.querySelector("input[name='email']").value;
  const phone = document.querySelector("input[name='telefon']").value;
  const message = document.querySelector("textarea[name='message']").value;


  if (
    [
      validatePhoneNumber(phone), validateEmail(email), validateMessage(message)
    ].some((condition) => condition)
  ) {
    emitErrorEvent()

    return;
  } 
  
  


  // validate data
  // ...zapobiec wstawianiu niepotrzebnych znaków
  // walidacja pl nr
  // walidacja pustych wartosci
  // walidacja poprawności maila
  // walidacja maksymalnej liczby znakow


  // send email
  sendEmail(email, phone, message);
};

function validatePhoneNumber(phone) {
  const phonePattern = /^\d{9}$/;
  console.log(phonePattern.test(phone));
  setTimeout(()=> {}, 3000)
  
    if (!phonePattern.test(phone)) {
      const incorrectPhoneNumber = new CustomEvent("incorrect-phone-number");
      document.dispatchEvent(incorrectPhoneNumber);
      return true;
    } 
    
    return false;
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(emailPattern.test(email));

  if (!emailPattern.test(email)) {
    const incorrectEmailAdress = new CustomEvent("incorrect-email");
    document.dispatchEvent(incorrectEmailAdress);
    return true;
  }
  return false;
}

function validateMessage(message) {
  if (message.trim() === "") {
    const incorrectMessage = new CustomEvent("incorrect-message");
    document.dispatchEvent(incorrectMessage);
    return true;
  }

  return false;
}

function onEmailSent() {
  const submitButton = document.querySelector('button[type="submit"]')
// add animations
  document.addEventListener('is-sending-email', () => {
    submitButton.style.backgroundColor = 'green'
    submitButton.disabled = true;

    submitButton.classList.add('animate__animated', 'animate__pulse');
  })

  document.addEventListener('error', () => {
    
    // submitButton.style.backgroundColor = 'blue'
    submitButton.disabled = false;


    submitButton.classList.remove('animate__pulse');
    submitButton.classList.add('animate__animated', 'animate__shakeX');
  })

  document.addEventListener('successfully-email-sent', () => {
    submitButton.style.backgroundColor = 'blue'
    submitButton.disabled = false;

    submitButton.classList.remove('animate__shakeX');
    submitButton.classList.add('animate__animated', 'animate__bounce');
  })
}


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
      emitErrorEvent();
    })
    .then((res) => res.json())
    .then((data) => {
      // send dom event about success
      // nasluchiwanie na event
      setUpListenerForCustomPopUp('successfully-email-sent', 'Email został wysłany!', true)

      // tworzenie eventu
      const successfullySentEvent = new CustomEvent("successfully-email-sent");

      // wysylanie eventu
      document.dispatchEvent(successfullySentEvent);
    });
};

function emitErrorEvent() {
   // tworzenie eventu
   const errorEvent = new CustomEvent("error");

   // wysylanie eventu
   document.dispatchEvent(errorEvent);
}

function emitEmailIsSending() {
  // tworzenie eventu
  const errorEvent = new CustomEvent("is-sending-email");

  // wysylanie eventu
  document.dispatchEvent(errorEvent);
}


document.querySelector("button[type='submit']").addEventListener('click', (e) => {
  handleEmailSubmission(e);
} )
