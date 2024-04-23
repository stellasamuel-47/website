const movies = [
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
        image: "GPS-squash-1663947185.png",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        image: "GPS-squash-1663947185.png",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    // Add more movie objects as needed
];

const movieList = document.getElementById('movieList');

function renderMovies() {
    movieList.innerHTML = '';
    movies.forEach((movie) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = movie.image;
        image.alt = movie.title;
        card.appendChild(image);

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const title = document.createElement('h2');
        title.textContent = movie.title;
        cardContent.appendChild(title);

        const director = document.createElement('p');
        director.textContent = "Director: " + movie.director;
        cardContent.appendChild(director);

        const year = document.createElement('p');
        year.textContent = "Year: " + movie.year;
        cardContent.appendChild(year);

        const description = document.createElement('p');
        description.textContent = movie.description;
        cardContent.appendChild(description);

        card.appendChild(cardContent);
        movieList.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderMovies);


//cta javascript 

const exploreButton = document.getElementById('exploreButton');

exploreButton.addEventListener('click', () => {
    // Scroll to the movie list section smoothly
    document.getElementById('movieList').scrollIntoView({ behavior: 'smooth' });
});



//for reviews and ratings 

const userReviewsContainer = document.getElementById('userReviews');
const reviewForm = document.getElementById('reviewForm');
const userNameInput = document.getElementById('userName');
const userCommentInput = document.getElementById('userComment');
const userRatingInput = document.getElementById('userRating');

reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const userName = userNameInput.value.trim();
    const userComment = userCommentInput.value.trim();
    const userRating = parseInt(userRatingInput.value);

    if (!userName || !userComment || !userRating || userRating < 1 || userRating > 10) {
        alert("Please provide a valid name, comment, and rating (1-10).");
        return;
    }

    const newReview = document.createElement('div');
    newReview.classList.add('user-review');
    newReview.innerHTML = `
        <strong>${userName}</strong> - Rating: ${userRating}<br>
        ${userComment}
    `;
    userReviewsContainer.appendChild(newReview);

    // Clear the form inputs after submitting the review
    userNameInput.value = '';
    userCommentInput.value = '';
    userRatingInput.value = '';
});

//for contact us page

const contactForm = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Example: Send form data to a server or display a confirmation message
    responseMessage.innerHTML = `
        <p>Thank you, ${name}, for contacting us!</p>
        <p>We will respond to your message at ${email} as soon as possible.</p>
    `;

    // Clear the form inputs after submission
    contactForm.reset();
});


