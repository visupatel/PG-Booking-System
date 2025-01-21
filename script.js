// Sample PG Data
const pgData = [
    {
      name: "Comfort Stay PG",
      location: "City Center",
      price: "₹5000/month",
    },
    {
      name: "Budget PG",
      location: "Suburbs",
      price: "₹3000/month",
    },
    {
      name: "Luxury PG",
      location: "Downtown",
      price: "₹8000/month",
    },
  ];
  
  // Function to display PGs
  function displayPGs(pgArray) {
    const pgList = document.getElementById("pg-list");
    pgList.innerHTML = ""; // Clear previous results
  
    if (pgArray.length === 0) {
      pgList.innerHTML = "<p>No PGs found for the given location.</p>";
      return;
    }
  
    pgArray.forEach((pg) => {
      pgList.innerHTML += `
        <div class="pg-card">
          <h3>${pg.name}</h3>
          <p>Location: ${pg.location}</p>
          <p>Price: ${pg.price}</p>
          <button onclick="bookPG('${pg.name}')">Book Now</button>
        </div>
      `;
    });
  }
  
  // Function to search PGs by location
  function searchPG() {
    const locationInput = document.getElementById("location").value.toLowerCase();
    const filteredPGs = pgData.filter((pg) =>
      pg.location.toLowerCase().includes(locationInput)
    );
    displayPGs(filteredPGs);
  }
  
  // Function to book a PG
  function bookPG(pgName) {
    alert(`You have booked ${pgName}. Thank you for your booking!`);
  }
  
  // Display all PGs on page load
  displayPGs(pgData);