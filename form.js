document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Zatrzymuje domyślną akcję formularza
    setTimeout(function() {
        document.getElementById('success-message').style.display = 'block'; // Pokaż powiadomienie
    }, 1000); // Opóźnienie 1 sekundy
});