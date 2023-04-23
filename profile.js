let color = document.querySelector('#color');
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')

function favoriteColor () {
    alert("My favorite color is White")
}

function favoritePlace() {
    alert("My favorite place is the Forest")
}

function favoriteRitual () {
    alert("The ritual of making and enjoying tea is the re-centering during stress time and a relaxing during rest time.")
}

color.addEventListener('click', favoriteColor)
place.addEventListener('click', favoritePlace)
ritual.addEventListener('click', favoriteRitual)