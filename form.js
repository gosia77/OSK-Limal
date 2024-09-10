document.getElementById('contact-form').addEventListener('submit', function(event) {
    const telephone = document.getElementById('telephone').value;
    const errorMessage = document.getElementById('tel-error-message');
    
    // walidacja numeru telefonu 
    const phonePattern = /^\d{9}$/;

    if (!phonePattern.test(telephone)) {
        errorMessage.style.display = 'block';
        event.preventDefault(); // Zapobiega wysłaniu formularza
    } else {
        errorMessage.style.display = 'none';
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('mail-error-message');
    
    // walidacja adresu e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        errorMessage.style.display = 'block';
        event.preventDefault(); // Zapobiega wysłaniu formularza
    } else {
        errorMessage.style.display = 'none';
    }
});



document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Formularz został wysłany');
        setTimeout(function() {
            successMessage.style.display = 'block'; // Pokaż powiadomienie
            console.log('Powiadomienie pokazane');
        }, 5000); // Opóźnienie 5 sekund
    });
});


