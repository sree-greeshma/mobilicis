// Fade in animation when the page loads
document.addEventListener("DOMContentLoaded", function(event) {
  var elements = document.querySelectorAll(".fade-in");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.opacity = "1";
  }
});
// Function to fetch job listings from the API
function fetchJobListings() {
  var apiUrl = "https://api.example.com/jobs?location=japan&keywords=developer";

  // Make a GET request to the API
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Process the data and display job listings on the website
      displayJobListings(data);
    })
    .catch(error => {
      console.error('Error fetching job listings:', error);
    });
}

// Function to display job listings on the website
function displayJobListings(jobData) {
  var jobListingsContainer = document.getElementById("job-listings");
  
  // Clear previous job listings
  jobListingsContainer.innerHTML = "";
  
  // Iterate over job data and create HTML elements to display job listings
  jobData.forEach(job => {
    var jobListingElement = document.createElement("div");
    jobListingElement.classList.add("job-listing");
    jobListingElement.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.description}</p>
      <p>Location: ${job.location}</p>
      <p>Company: ${job.company}</p>
    `;
    jobListingsContainer.appendChild(jobListingElement);
  });
}

// Call the fetchJobListings function when the page loads
window.onload = function() {
  fetchJobListings();
};
