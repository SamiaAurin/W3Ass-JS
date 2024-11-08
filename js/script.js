// Navbar toggle in Responsive Design
document.getElementById("toggleIcon").addEventListener("click", function () {
    // Check if the screen width is 768px or less
    if (window.innerWidth <= 768) {
        const navbarItems = document.getElementById("navbarItems");
        navbarItems.classList.toggle("toggle"); // Toggle the column display
        navbarItems.style.display = navbarItems.style.display === "flex" ? "none" : "flex";
    }
});

window.addEventListener("resize", function () {
    const navbarItems = document.getElementById("navbarItems");
    if (window.innerWidth > 768) {
        navbarItems.classList.remove("toggle");
        navbarItems.style.display = "flex"; 
        
    } else if (!navbarItems.classList.contains("toggle")) {
        navbarItems.style.display = "none"; 
        
    }
});


// JavaScript for the country and currency selection modal
const countryModal = document.getElementById('countryModal');
const countrySelect = document.getElementById('countrySelect');
const currencyDisplay = document.getElementById('currencyDisplay');
const countryname = document.querySelector('.nav-item:first-child');
const countryCloseBtn = document.querySelector('.country-close');
const submitCountryBtn = document.getElementById('submitCountry');

// Function to update the country in both the navbar and modal
function setCountry(countryCode, countryName) {
    // Update the navbar display
    countryname.innerHTML = `<a href="#" class="nav-item"><i class="fas fa-globe"></i>${countryName}</a>`;
    
    // Update the modal selection
    countrySelect.value = countryCode;

    // Store in localStorage
    localStorage.setItem('selectedCountry', countryName);
    localStorage.setItem('selectedCountryCode', countryCode);
}

// Function to update currency based on the selected country
function updateCurrency(countryCode) {
    let currency = 'Currency not available'; // Default message

    switch (countryCode) {
        case 'usa': currency = '$ USD'; break;
        case 'uk': currency = '£ GBP'; break;
        case 'canada': currency = '$ CAD'; break;
        case 'eurozone': currency = '€ EUR'; break;
        case 'japan': currency = '¥ JPY'; break;
        case 'australia': currency = '$ AUD'; break;
        case 'switzerland': currency = 'CHF'; break;
        case 'sweden': currency = 'SEK'; break;
        case 'afghanistan': currency = 'Afghani (AFN)'; break;
        case 'armenia': currency = 'Dram (AMD)'; break;
        case 'azerbaijan': currency = 'Manat (AZN)'; break;
        case 'bahrain': currency = 'Bahraini Dinar (BHD)'; break;
        case 'bangladesh': currency = 'Taka (BDT)'; break;
        case 'bhutan': currency = 'Ngultrum (BTN)'; break;
        case 'brunei': currency = 'Brunei Dollar (BND)'; break;
        case 'cambodia': currency = 'Riel (KHR)'; break;
        case 'china': currency = 'Yuan Renminbi (CNY)'; break;
        case 'georgia': currency = 'Lari (GEL)'; break;
        case 'india': currency = 'Indian Rupee (INR)'; break;
    }
    currencyDisplay.textContent = currency;
}

// Event listener to show the modal when the country in the navbar is clicked
countryname.addEventListener('click', function() {
    countryModal.style.display = 'block';
});

// Event listener for country selection change in the modal
countrySelect.addEventListener('change', function() {
    updateCurrency(this.value); // Update currency based on the new selection
});

// Close button functionality to hide the modal
countryCloseBtn.addEventListener('click', function() {
    countryModal.style.display = 'none';
});

// Submit button functionality to save the selected country and currency
submitCountryBtn.addEventListener('click', function() {
    const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
    const selectedCountryCode = countrySelect.value; 

    // Store selected country and currency in localStorage
    setCountry(selectedCountryCode, selectedCountry);

    // Hide the modal and update currency based on the selected country
    countryModal.style.display = 'none';
    updateCurrency(selectedCountryCode);
});

// Load saved country and currency from localStorage when the page loads
window.addEventListener('load', function() {
    const savedCountry = localStorage.getItem('selectedCountry') || 'United States';
    const savedCountryCode = localStorage.getItem('selectedCountryCode') || 'usa';

    // Set the country and currency on initial page load
    setCountry(savedCountryCode, savedCountry);
    updateCurrency(savedCountryCode);
});


// JavaScript to toggle the modal visibility on Share button click
const shareButton = document.querySelector('.btn');
const modal = document.querySelector('.share-modal');
const closeBtn = document.querySelector('.close');

shareButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
/*For copy the link */
document.getElementById('copyLink').addEventListener('click', function() {
   
    var input = document.createElement('input');
    
    input.value = window.location.href; // Change this to the URL you want to copy
    
    // Append the input element to the body
    document.body.appendChild(input);
    
    // Select the input element's content
    input.select();
    
    // Copy the selected content
    document.execCommand('copy');
    
    // Remove the input element from the DOM
    document.body.removeChild(input);
    
    // Optionally, you can provide a visual cue or message to indicate that the link has been copied
    alert('Link copied to clipboard!');
});


/*Save Button JS*/
let heartState = localStorage.getItem('heartState') || 'inactive';

const heartIcon = document.querySelector('.btn-save i'); 
const shareText = document.querySelector('.btn-save .share-text'); 

// Check if a 'heartState' value is stored in local storage
// If not, set it to 'inactive' by default
function toggleHeartState() {
    if (heartState === 'active') {
        heartIcon.classList.remove('fa-heart');
        heartIcon.classList.add('fa-heart-o');
        shareText.textContent = 'Save'; 
        heartState = 'inactive';
    } else {
        heartIcon.classList.remove('fa-heart-o');
        heartIcon.classList.add('fa-heart');
        shareText.textContent = 'Saved'; 
        heartState = 'active';
    }
    
    // Store the updated heart state in local storage
    localStorage.setItem('heartState', heartState);
}

// Set the initial state of the heart icon and text based on the stored value
if (heartState === 'active') {
    heartIcon.classList.remove('fa-heart-o');
    heartIcon.classList.add('fa-heart');
    shareText.textContent = 'Saved';
} else {
    heartIcon.classList.remove('fa-heart');
    heartIcon.classList.add('fa-heart-o');
    shareText.textContent = 'Save';
}

// Event listener to toggle the heart state when the button is clicked
document.querySelector('.btn-save').addEventListener('click', toggleHeartState);

// Event listener to toggle the heart icon state on button click
btn.addEventListener('click', toggleHeartState);

//JavaScript for the Gallery Pics Modal
const galleryModal = document.getElementById('GalleryModal');
const galleryClose = document.querySelector('.gallery-close');
const sliderImages = document.querySelectorAll('.slider-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const photoCount = document.querySelector('.photo-count');
const modalPhotoCount = document.querySelector('.modal-photo-count strong');
const modalTitle = document.querySelector('.modal-photo-count h1'); // Target the <h1>
const totalPhotos = sliderImages.length;

let currentPhotoIndex = 0; 

// Open the modal and set initial content
photoCount.addEventListener('click', function() {
        galleryModal.style.display = 'flex';
        updateGalleryModalContent(currentPhotoIndex);
});

galleryClose.addEventListener('click', function() {
    galleryModal.style.display = 'none';
});

// Function to update the image, title, and photo count
function updateGalleryModalContent(photoIndex) {
        sliderImages.forEach((img, index) => {
            img.style.display = index === photoIndex ? 'block' : 'none';
});

// Set the modal title based on the current image's alt text
modalTitle.textContent = sliderImages[photoIndex].alt;
modalPhotoCount.textContent = `${photoIndex + 1} / ${totalPhotos}`;
        
// Enable/disable navigation buttons based on index
        prevBtn.disabled = photoIndex === 0;
        nextBtn.disabled = photoIndex === totalPhotos - 1;
}

// Previous button functionality
prevBtn.addEventListener('click', function() {
        if (currentPhotoIndex > 0) {
            currentPhotoIndex--;
            updateGalleryModalContent(currentPhotoIndex);
        }
});

// Next button functionality
nextBtn.addEventListener('click', function() {
        if (currentPhotoIndex < totalPhotos - 1) {
            currentPhotoIndex++;
            updateGalleryModalContent(currentPhotoIndex);
        }
});

// JavaScript for the Travellers modal functionality
const travelmodal = document.getElementById('travel-modal');
const adultsInput = document.getElementById('adults');
const childrenInput = document.getElementById('children');
const adultsIncreaseBtn = document.getElementById('adults-increase');
const adultsDecreaseBtn = document.getElementById('adults-decrease');
const childrenIncreaseBtn = document.getElementById('children-increase');
const childrenDecreaseBtn = document.getElementById('children-decrease');
const travelersDiv = document.querySelector('.travelers');

// Function to update travelers data in localStorage
function updateLocalStorage() {
    localStorage.setItem('adults', adultsInput.value);
    localStorage.setItem('children', childrenInput.value);
}

// Show modal when the travelers div is clicked
travelersDiv.addEventListener('click', function() {
    travelmodal.style.display = 'block';
});

// Increment and Decrement functionality for adults
adultsIncreaseBtn.addEventListener('click', function() {
    adultsInput.value = parseInt(adultsInput.value) + 1;
    adultsDecreaseBtn.disabled = false;
    updateLocalStorage(); 
});

adultsDecreaseBtn.addEventListener('click', function() {
    if (adultsInput.value > 0) {
        adultsInput.value = parseInt(adultsInput.value) - 1;
        if (adultsInput.value === '0') {
            adultsDecreaseBtn.disabled = true;
        }
        updateLocalStorage(); 
    }
});

// Increment and Decrement functionality for children
childrenIncreaseBtn.addEventListener('click', function() {
    childrenInput.value = parseInt(childrenInput.value) + 1;
    childrenDecreaseBtn.disabled = false;
    updateLocalStorage(); 
});

childrenDecreaseBtn.addEventListener('click', function() {
    if (childrenInput.value > 0) {
        childrenInput.value = parseInt(childrenInput.value) - 1;
        if (childrenInput.value === '0') {
            childrenDecreaseBtn.disabled = true;
        }
        updateLocalStorage(); 
    }
});

// Update total travelers and hide modal when "Done" button is clicked
document.getElementById('submitDoneTraveller').addEventListener('click', function() {
    const totalTravelers = parseInt(adultsInput.value) + parseInt(childrenInput.value);
    travelersDiv.innerHTML = `Travelers <br>${totalTravelers} travelers`;
    travelmodal.style.display = 'none';
});

// Load travelers data from localStorage on page load
window.addEventListener('load', function() {
    const savedAdults = localStorage.getItem('adults');
    const savedChildren = localStorage.getItem('children');

    // Set input values if they exist in localStorage, otherwise default to 0
    adultsInput.value = savedAdults !== null ? savedAdults : 0;
    childrenInput.value = savedChildren !== null ? savedChildren : 0;

    // Update the display for total travelers
    const totalTravelers = parseInt(adultsInput.value) + parseInt(childrenInput.value);
    travelersDiv.innerHTML = `Travelers <br>${totalTravelers} travelers`;

    // Disable decrease buttons if values are 0
    adultsDecreaseBtn.disabled = adultsInput.value == 0;
    childrenDecreaseBtn.disabled = childrenInput.value == 0;
});


