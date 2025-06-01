// const menu = document.querySelector("#menu")
// const nav = document.querySelector("ul")
// const closed = document.querySelector("#closed")

// menu.addEventListener("click", () => {
//     nav.classList.toggle("visible")
// })
// closed.addEventListener("click", () => {
//     nav.classList.remove("visible")
// })

// // const back = document.querySelector("body")
// // const colour = prompt("Enter a colour for the background")
// // back.style.color = colour

const menuBtn = document.querySelector('.bar');
const navMenu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuBtn.innerHTML = navMenu.classList.contains('show') ? 
        '<i class="fa-solid fa-times"></i>' : 
        '<i class="fa-solid fa-bars"></i>';
});

// API Integration Example (using Fetch API)
// async function fetchFlightData() {
//   const apiKey = 'U9ncmPU5vOuSy2gKbqxgePQmBGXsVZc2'; // Replace with your actual API key
//   const apiUrl = 'test.api.amadeus.com';
  
//   try {
//     const response = await fetch(apiUrl, {
//       headers: {
//         'Authorization': `Bearer ${apiKey}`,
//         'Content-Type': 'application/json'
//       }
//     });
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const data = await response.json();
//     displayFlightData(data);
//   } catch (error) {
//     console.error('Error fetching flight data:', error);
//     displayError(error.message);
//   }
// }

// function displayFlightData(flights) {
//   const resultsContainer = document.getElementById('flight-results');
//   resultsContainer.innerHTML = '';
  
//   flights.forEach(flight => {
//     const flightCard = document.createElement('div');
//     flightCard.className = 'flight-card';
//     flightCard.innerHTML = `
//       <h3>${flight.airline} - ${flight.flightNumber}</h3>
//       <p>Departure: ${flight.departureTime}</p>
//       <p>Arrival: ${flight.arrivalTime}</p>
//       <p>Price: $${flight.price}</p>
//       <button class="book-btn" data-flight-id="${flight.id}">Book Now</button>
//     `;
//     resultsContainer.appendChild(flightCard);
//   });
// }

// function displayError(message) {
//   const errorElement = document.createElement('div');
//   errorElement.className = 'error-message';
//   errorElement.textContent = `Error: ${message}`;
//   document.getElementById('flight-results').appendChild(errorElement);
// }

// // Call the function when page loads or on user action
// document.addEventListener('DOMContentLoaded', fetchFlightData);


// // Add to your existing JavaScript
// document.getElementById('search-flights').addEventListener('click', () => {
//   const origin = document.getElementById('origin').value;
//   const destination = document.getElementById('destination').value;
//   const date = document.getElementById('departure-date').value;
  
//   if (origin && destination) {
//     fetchFlightData(origin, destination, date);
//   } else {
//     displayError('Please enter origin and destination');
//   }
// });

// // Modified fetch function to accept parameters
// async function fetchFlightData(origin, destination, date) {
//   // Update API URL with parameters
//   let apiUrl = `https://api.example.com/flights?origin=${origin}&destination=${destination}`;
//   if (date) apiUrl += `&date=${date}`;
  
//   // Rest of the function remains the same...
// }