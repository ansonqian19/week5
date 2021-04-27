// Get a reference to the page title element from the DOM
let pageTitleElement = document.querySelector(`.page-title`)

// Modify the page title element's contents
// pageTitleElement.innerHTML = `Movies to watch!`

// Get a reference to the bulleted list of movies
// let movieList = document.querySelector(`.movies-to-watch`)

// Add an new list item to the bulleted list of movies
// movieList.insertAdjacentHTML(`beforeend`, `
//   <li>Spaceballs</li>
// `)



// Get a reference to the button
let clickMeButton = document.querySelector(`.click-me`)

// Event listener for the button
clickMeButton.addEventListener(`click`, async function(event){
  pageTitleElement.innerHTML = `Movies to watch!`
})

// Get a reference to the "add movie" button
let addMovieLink = document.querySelector(`.add-movie`)

// Event listener for "add movie"
addMovieLink.addEventListener(`click`, async function(event){
  // prevent the link's default reaction
  event.preventDefault()

  let movieList = document.querySelector(`.movies-to-watch`)
  movieList.insertAdjacentHTML(`beforeend`, `
  <li>Spaceballs</li>`)
})

// Get a reference to the "zoom page" button
let zoomImageButton = document.querySelector (`.zoom-image`)

// Event listen for zoom page button
zoomImageButton.addEventListener(`click`, async function(event){
    // Get a reference to the image
    let image = document.querySelector(`img`)

    // Add the `border-pink-500` class to the image element
    image.classList.add(`border-pink-500`)
    
    // make the image larger or smaller
    image.classList.toggle(`w-96`)
    image.classList.toggle(`w-full`)
})

// Get a reference to the "change image" button
let changeImageButton = document.querySelector (`.change-image`)

// Event listen for zoom page button
changeImageButton.addEventListener(`click`, async function(event){
    
  // Get a reference to the image
    let image = document.querySelector(`img`)

    // change the image
    image.setAttribute(`src`,`../images/grogu2.jpg`)
})

// Get a referenc to the say-hi button
let sayHiButton= document.querySelector(`.say-hi`)

// Event listener for the say-hi button
sayHiButton.addEventListener(`click`, async function(event){
  // prevent default behavior
  event.preventDefault()
  
  // Get a reference to the input field
  let nameIput=document.querySelector(`#first-name`)

  // Get the value from the input field
  let firstName = nameIput.value

  //Get a reference to the "greet" element
  let greetElement = document.querySelector(`.greet`)

  // Set the "greet" element's HTML to the sentence
  if (firstName.length > 0){ 
  let sentence = `Hi, ${firstName}!`
  greetElement.innerHTML = sentence
  } else {
    greetElement.innerHTML = ``
  }
})
