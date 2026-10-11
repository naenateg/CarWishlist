//1. DOM ELEMENT SECTIONS
//Refrences to html so js can interact on them
const carForm = document.getElementById('car-form');
const carGrid = document.getElementById('car-grid');

//2. STATE MANAGEMENT AND LOCAL STORAGE INITIALIZATION
//Retrieve stored cars from the local storage OR start with an empty array
let carWishlist = JSON.parse(localStorage.getItem('carWishlist')) || [];

//3. MAIN FUNCTIONS OF SITE
//saves the current car wishlist array input into browser local storage
function saveToLocalStorage()
{
    localStorage.setItem('carWishlist', JSON.stringify(carWishlist));
}

//renders all car items stored in the wishlist array into HTML grid cards
function renderWishlist()
{
    carGrid.innerHTML = ''; //clear out any existing HTML in the car grid container

    if(carWishlist.length === 0) //if the wishlist is empty, display a friendly placeholder message
    {   
        carGrid.innerHTML = `
        <p style = "grid-column: 1 / -1; color: var(--text-muted); text-align: center; padding: 40px 0;">
        Your wishlist is currently empty. Add your first dream car above!
        </p>
        `;
        return;
    }

    carWishlist.forEach((car) => //loop through each car object in our array and build its HTML card
    {
        //create a new <article> element for the car card
        const cardElement = document.createElement('article'); 
        cardElement.classList.add('car-card');
        
        //populate internal HTML structure of the card
        cardElement.innerHTML = `
        <img src="${car.imageUrl}" alt="${car.make}${car.model}" onerror="this.src='https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600'">
        <div class="car-info">
        <span class="badge">${car.year}</span>
        <h3>${car.make} ${car.model}</h3>         <p class="price">$${Number(car.price).toLocaleString()}</p>
        <button class="delete-btn" onclick="deleteCar('${car.id}')">Remove</button>
        </div>
        `;

        carGrid.appendChild(cardElement); //Append the newly created card into the grid container
    });

}

/**Handles form submission when user clicks add new 
* @param {Event} event - the browser submits a event object
*/

function handleAddCar(event)
{
    //Prevents the default form behavior (reloading the web page)
    event.preventDefault();

    //extract user data in the input fields
    const makeInput = document.getElementById('make').value.trim();
    const modelInput = document.getElementById('model').value.trim();
    const yearInput = document.getElementById('year').value.trim();
    const priceInput = document.getElementById('price').value.trim();
    const imageUrlInput = document.getElementById('image-url').value.trim();

    //create a new car object with unique ID based off of the milisecond time stamp
    const newCar = 
    {
        id: Date.now.toString(),
        make: makeInput,
        model: modelInput,
        year: yearInput,
        price: priceInput,
        imageUrl: imageUrlInput

    };

    


}