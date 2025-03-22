// Remove the v3 site key since we're using v2
const handleEmailSubmission = async (e) => {
  e.preventDefault();
  console.log('Rozpoczęcie wysyłania formularza...');

  const email = document.querySelector("input[name='email']").value;
  const phone = document.querySelector("input[name='telefon']").value;
  const message = document.querySelector("textarea[name='message']").value;

  console.log('Dane formularza:', { email, phone, message });

  try {
    if (
      [
        validatePhoneNumber(phone), validateEmail(email), validateMessage(message)
      ].some((condition) => condition)
    ) {
      console.log('Błąd walidacji formularza');
      emitErrorEvent();
      return;
    }

    console.log('Walidacja formularza zakończona pomyślnie');
    emitEmailIsSending();
    
    console.log('Pobieranie tokenu reCAPTCHA...');
    try {
      // Get reCAPTCHA v3 token
      const token = await grecaptcha.execute('6LcQEf0qAAAAAGw2SrMrZvfSDFNRba3H_pHLiIte', {action: 'submit'});
      
      if (!token) {
        console.error('Nie udało się pobrać tokenu reCAPTCHA');
        throw new Error('Brak tokenu reCAPTCHA');
      }
      
      console.log('Token reCAPTCHA otrzymany:', token);
      document.getElementById('recaptcha-response').value = token;
      console.log('Token zapisany w ukrytym polu formularza');

      await sendEmail(email, phone, message, token);
    } catch (recaptchaError) {
      console.error('Błąd reCAPTCHA:', recaptchaError);
      emitErrorEvent();
    }
  } catch (error) {
    console.error('Błąd podczas wysyłania formularza:', error);
    emitErrorEvent();
  }
};

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
setUpListenerForCustomPopUp("recaptcha-error", "Proszę zaznaczyć pole reCAPTCHA", false);

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


const sendEmail = async (email, phone, message, recaptchaResponse) => {
  console.log('Przygotowanie danych do wysłania...');
  const formData = new FormData();
  formData.append('email', email);
  formData.append('telefon', phone);
  formData.append('message', message);
  formData.append('g-recaptcha-response', recaptchaResponse);

  console.log('Wysyłanie formularza...');
  try {
    const response = await fetch("https://submit-form.com/dq9bszVjA", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    });

    console.log('Odpowiedź z serwera:', response.status);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log('Dane odpowiedzi:', responseData);
    
    // Clear the form
    document.querySelector("input[name='email']").value = '';
    document.querySelector("input[name='telefon']").value = '';
    document.querySelector("textarea[name='message']").value = '';
    
    console.log('Formularz wyczyszczony');
    setUpListenerForCustomPopUp('successfully-email-sent', 'Email został wysłany!', true);
    const successfullySentEvent = new CustomEvent("successfully-email-sent");
    document.dispatchEvent(successfullySentEvent);

  } catch (err) {
    console.error('Błąd podczas wysyłania formularza:', err);
    emitErrorEvent();
  }
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

// Add reCAPTCHA callback function
function onRecaptchaSuccess() {
  console.log('reCAPTCHA verified successfully');
}

document.querySelector("button[type='submit']").addEventListener('click', (e) => {
  handleEmailSubmission(e);
});
