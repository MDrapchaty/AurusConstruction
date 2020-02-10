// emailjs service //
function sendMail(contactForm) { 
emailjs.send('gmail', 'aurus', {
		"from_name": contactForm.name.value,
		"from_email": contactForm.email.value,
    "from_phone":contactForm.phone.value,
		"project_request": contactForm.message.value
	})
    .then(function(response) {
       alert("Thank you! Your message has been sent!");
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       alert("There was an error. Message not sent!");
       console.log('FAILED...', error);
    });
}    