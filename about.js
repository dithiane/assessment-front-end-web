console.log("hello world");
let form = document.querySelector('#contact');
let catImage = document.querySelector('.image-container')

function handleSubmit(evt) {
	evt.preventDefault();
	alert("The form has been submitted successfully!")
	console.log('form submit');
}

function makeComplimentToUser(evt) {
	evt.preventDefault();
	alert("I’m always happy to see a curious and friendly people on my page 😍!")
}

function stopMakeComplimentToUser(evt) {
	evt.preventDefault();
}

form ? form.addEventListener('submit', handleSubmit) : {}
catImage ? catImage.addEventListener('mouseenter', makeComplimentToUser) : {}