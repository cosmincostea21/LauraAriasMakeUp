    (function() {
      // Inicializar EmailJS
      emailjs.init("TqFs5BswIM5YMch1k"); // Cambia por tu Public Key (antes se llamaba user_id)
    })();

    // Escuchar el envío del formulario
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que recargue la página

      emailjs.sendForm('service_7r7fpcd', 'template_xypm3rf', this)
        .then(() => {
          alert('Correo enviado correctamente');
          this.reset();
        }, (error) => {
          console.error('Error:', error);
          alert('Hubo un problema al enviar el correo');
        });
    });