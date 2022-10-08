const container = document.querySelector('.container');
const availableSeats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');


let ticketPrice = +movieSelect.value; //+ converts it to a num from a string

//update the seat count and total price of tickets
function updateInfo() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    //copy selected seats into an array
    //map through array
    //return a new array indexes 

    // const seatIndex = [...selectedSeats].map(function(seat){
    //     return [...availableSeats].indexOf(seat);
    // });
    // above is same as below:
    const seatIndex = [...selectedSeats].map(seat => [...availableSeats].indexOf(seat));

    //saving to localstorage

    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));
    const numOfSelectedSeats = selectedSeats.length;

    count.innerText = numOfSelectedSeats;

    total.innerText = numOfSelectedSeats * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    localStorage.setItem('selectedMovieIndex', e.target.selectedIndex);
    localStorage.setItem('moviePrice', e.target.value);
    updateInfo();
});




// Seat click event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {

        e.target.classList.toggle('selected');

        updateInfo();
    }
});
