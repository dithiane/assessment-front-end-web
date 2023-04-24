const toggleRandomRecommendation = document.querySelector('.check-restaurants')
let title = document.querySelector('.recommended_title')
let image = document.querySelector('.recommended_image')
let link = document.querySelector('.recommended_link')
let description = document.querySelector('.recommended_description')
let restaurants = []
let getRestaurants =
    fetch("./restaurants.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            restaurants = data.restaurants
        })

function restaurant(e) {
    e.preventDefault()
    console.log(restaurants)
    let random = Math.floor(Math.random() * 10)
    let current = restaurants[random]
    title.textContent = current.name;
    image.src = `./images/${current.id}.png`
    link.href = current.link
    description.textContent = current.cuisine
    console.log(current)
}
console.log(toggleRandomRecommendation)
toggleRandomRecommendation ? toggleRandomRecommendation.addEventListener('click', restaurant) : {}