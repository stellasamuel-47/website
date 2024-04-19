document.addEventListener("DOMContentLoaded", function() {  // Sample data for news articles
   

     // Register form submit event listener
     var registrationForm = document.getElementById("registrationForm");
     if (registrationForm) {
         registrationForm.addEventListener("submit", function(event) {
             event.preventDefault();
             var formData = new FormData(registrationForm);
             var userData = {};
             formData.forEach(function(value, key) {
                 userData[key] = value;
             });
             // Here you would typically send the user data to your backend for registration
             console.log("User data:", userData);
            }); var newsData = [
                { title: "Title of News Article 1", content: "Content of News Article 1", link: "https://example.com/article1" },
                { title: "Title of News Article 2", content: "Content of News Article 2", link: "https://example.com/article2" },
                { title: "Title of News Article 3", content: "Content of News Article 3", link: "https://example.com/article3" },
                // Add more news articles as needed
            ];
        
            // Function to render news articles
            function renderNews() {
                newsData.forEach(function(article) {
                    var newsItem = document.createElement("div");
                    newsItem.classList.add("news-item");
                    newsItem.innerHTML = `
                        <h2>${article.title}</h2>
                        <p>${article.content}</p>
                        <a href="${article.link}" target="_blank">Read more</a>
                    `;
                    newsList.appendChild(newsItem);
                });
            }
        
            // Render news articles on page load
            renderNews();
        

     }


 
     // Display user profile
     var userProfile = document.getElementById("userProfile");
     if (userProfile) {
         // Here you would typically fetch user profile data from your backend and update the HTML accordingly
         userProfile.innerHTML = "<p>User profile data will be displayed here.</p>";
     }
 });
    // Code to execute when the DOM content is loaded

    // Function to toggle the responsive menu
    function toggleMenu() {
        var x = document.getElementById("navbar");
        if (x.className === "navbar") {
            x.className += " responsive";
        } else {
            x.className = "navbar";
        }
    }
    // Function to handle search
    function handleSearch() {
        var searchInput = document.getElementById("searchInput").value;
        // Perform search functionality, for now let's just log the input
        console.log("Search query: " + searchInput);
    }

    // Add event listener to the search button
    var searchBtn = document.getElementById("searchBtn");
    if (searchBtn) {
        searchBtn.addEventListener("click", handleSearch);
    }


var facebookBtn = document.getElementById("facebookBtn");
    var twitterBtn = document.getElementById("twitterBtn");
    var linkedinBtn = document.getElementById("linkedinBtn");

    // Function to share on Facebook
    function shareOnFacebook() {
        var url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
        window.open(url, "_blank");
    }

    // Function to share on Twitter
    function shareOnTwitter() {
        var url = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href);
        window.open(url, "_blank");
    }

    // Function to share on LinkedIn
    function shareOnLinkedIn() {
        var url = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(window.location.href);
        window.open(url, "_blank");
    }

    // Add event listeners to social buttons
    facebookBtn.addEventListener("click", shareOnFacebook);
    twitterBtn.addEventListener("click", shareOnTwitter);
    linkedinBtn.addEventListener("click", shareOnLinkedIn);





    // Add event listener to the menu icon
    var menuIcon = document.querySelector(".icon");
    if (menuIcon) {
        menuIcon.addEventListener("click", toggleMenu);
    } var overallRating = document.getElementById("overallRating");
    var userStars = document.querySelectorAll(".stars .star");
    var submitRatingBtn = document.getElementById("submitRating");
    var reviewList = document.getElementById("reviewList");
    var newReviewInput = document.getElementById("newReview"); // Initialize user's rating to 0
    var userRating = 0;

    // Function to handle user's rating
    function handleRating(event) {
        userRating = parseInt(event.target.getAttribute("data-value"));
        highlightStars(userRating);
    }

    // Function to highlight stars based on user's rating
    function highlightStars(rating) {
        userStars.forEach(function(star, index) {
            if (index < rating) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
        });
    }

    // Add event listeners to stars for user's rating
    userStars.forEach(function(star) {
        star.addEventListener("click", handleRating);
    });

    // Function to submit user's rating
    submitRatingBtn.addEventListener("click", function() {
        // Here you would typically send the user's rating to your backend
        // For demonstration, we'll just update the overall rating on the frontend
        overallRating.textContent = userRating;
    });
    // Add event listeners to stars for rating
    ratingStars.forEach(function(star) {
        star.addEventListener("click", handleRating);
    });

    // Function to submit user's review
    submitReviewBtn.addEventListener("click", function() {
        var reviewText = newReviewInput.value;
        if (reviewText.trim() !== "") {
            // Here you would typically send the user's review to your backend
            // For demonstration, we'll just display the review on the frontend
            var reviewItem = document.createElement("div");
            reviewItem.classList.add("review");
            reviewItem.textContent = reviewText;
            reviewList.appendChild(reviewItem);
            newReviewInput.value = "";
        }
    
});
    var submitReviewBtn = document.getElementById("submitReview"); 




 var newsList = document.getElementById("newsList");



    // Sample data for movies
    var movieData = [
        { title: "Movie Title 1", year: 2021, genre: "Action", director: "Director 1", link: "#" },
        { title: "Movie Title 2", year: 2020, genre: "Comedy", director: "Director 2", link: "#" },
        { title: "Movie Title 3", year: 2019, genre: "Drama", director: "Director 3", link: "#" },
        // Add more movies as needed
    ];

    // Function to render movies
    function renderMovies() {
        movieData.forEach(function(movie) {
            var movieItem = document.createElement("div");
            movieItem.classList.add("movie-item");
            movieItem.innerHTML = `
                <h2>${movie.title}</h2>
                <p><strong>Year:</strong> ${movie.year}</p>
                <p><strong>Genre:</strong> ${movie.genre}</p>
                <p><strong>Director:</strong> ${movie.director}</p>
                <a href="${movie.link}" target="_blank">More details</a>
            `;
            movieList.appendChild(movieItem);
        });
    }

    // Render movies on page load
    renderMovies();

  


   




  