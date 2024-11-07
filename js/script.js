// JavaScript for the country and currency selection modal
const countryModal = document.getElementById('countryModal');
const countrySelect = document.getElementById('countrySelect');
const currencyDisplay = document.getElementById('currencyDisplay');
const countryname = document.querySelector('.nav-item:first-child');
// Function to update currency based on selected country
function updateCurrency(country) {
    switch (country) {
            case 'usa':
                currencyDisplay.textContent = '$ USD';
                break;
            case 'uk':
                currencyDisplay.textContent = '£ GBP';
                break;
            case 'canada':
                currencyDisplay.textContent = '$ CAD';
                break;
            case 'eurozone':
                currencyDisplay.textContent = '€ EUR';
                break;
            case 'japan':
                currencyDisplay.textContent = '¥ JPY';
                break;
            case 'australia':
                currencyDisplay.textContent = '$ AUD';
                break;
            case 'switzerland':
                currencyDisplay.textContent = 'CHF';
                break;
            case 'sweden':
                currencyDisplay.textContent = 'SEK';
                break;
            case 'afghanistan':
                currencyDisplay.textContent = 'Afghani (AFN)';
                break;
            case 'armenia':
                currencyDisplay.textContent = 'Dram (AMD)';
                break;
            case 'azerbaijan':
                currencyDisplay.textContent = 'Manat (AZN)';
                break;
            case 'bahrain':
                currencyDisplay.textContent = 'Bahraini Dinar (BHD)';
                break;
            case 'bangladesh':
                currencyDisplay.textContent = 'Taka (BDT)';
                break;
            case 'bhutan':
                currencyDisplay.textContent = 'Ngultrum (BTN)';
                break;
            case 'brunei':
                currencyDisplay.textContent = 'Brunei Dollar (BND)';
                break;
            case 'cambodia':
                currencyDisplay.textContent = 'Riel (KHR)';
                break;
            case 'china':
                currencyDisplay.textContent = 'Yuan Renminbi (CNY)';
                break;
            case 'georgia':
                currencyDisplay.textContent = 'Lari (GEL)';
                break;
            case 'india':
                currencyDisplay.textContent = 'Indian Rupee (INR)';
                break;    
            // Add more cases for other countries and currencies
            default:
                currencyDisplay.textContent = 'Currency not available';
    }
}
// Show modal when United States is clicked
countryname.addEventListener('click', function() {
    countryModal.style.display = 'block';
});

// Event listener for country selection change
countrySelect.addEventListener('change', function() {
    updateCurrency(this.value);
});

// Submit button functionality
document.getElementById('submitCountry').addEventListener('click', function() {
    const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
    countryModal.style.display = 'none';
    countryname.innerHTML = `<li><a href="#" class="nav-item"><i class="fas fa-globe"></i>${selectedCountry}</a></li>`;
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
const btn = document.querySelector('.btn-save');
const heartIcon = document.querySelector('.btn-save i');

// Check if a 'heartState' value is stored in local storage
// If not, set it to 'inactive' by default
let heartState = localStorage.getItem('heartState') || 'inactive';

function toggleHeartState() {
    if (heartState === 'active') {
        heartIcon.classList.remove('fa-heart');
        heartIcon.classList.add('fa-heart-o');
        heartState = 'inactive';
    } else {
        heartIcon.classList.remove('fa-heart-o');
        heartIcon.classList.add('fa-heart');
        heartState = 'active';
    }
    
    // Store the updated heart state in local storage
    localStorage.setItem('heartState', heartState);
}
// Set the initial state of the heart icon based on the stored value
if (heartState === 'active') {
    heartIcon.classList.remove('fa-heart-o');
    heartIcon.classList.add('fa-heart');
} else {
    heartIcon.classList.remove('fa-heart');
    heartIcon.classList.add('fa-heart-o');
}

// Event listener to toggle the heart icon state on button click
btn.addEventListener('click', toggleHeartState);

//JavaScript for the Gallery Pics Modal
const galleryModal = document.getElementById('GalleryModal');
const galleryClose = document.querySelector('.gallery-close');
const sliderImages = document.querySelectorAll('.slider-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const photoCount = document.querySelector('.photo-count strong');
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

// Show modal when the travelers div is clicked
document.querySelector('.travelers').addEventListener('click', function() {
    travelmodal.style.display = 'block';
});

// Increment and Decrement functionality for adults
adultsIncreaseBtn.addEventListener('click', function() {
    adultsInput.value = parseInt(adultsInput.value) + 1;
    adultsDecreaseBtn.disabled = false;
});

adultsDecreaseBtn.addEventListener('click', function() {
    if (adultsInput.value > 0) {
        adultsInput.value = parseInt(adultsInput.value) - 1;
        if (adultsInput.value === 0) {
            adultsDecreaseBtn.disabled = true;
        }
    }
});

// Increment and Decrement functionality for children
childrenIncreaseBtn.addEventListener('click', function() {
    childrenInput.value = parseInt(childrenInput.value) + 1;
    childrenDecreaseBtn.disabled = false;
});

childrenDecreaseBtn.addEventListener('click', function() {
    if (childrenInput.value > 0) {
        childrenInput.value = parseInt(childrenInput.value) - 1;
        if (childrenInput.value === 0) {
            childrenDecreaseBtn.disabled = true;
        }
    }
});

// Update total travelers and hide modal when "Done" button is clicked
document.getElementById('submitDoneTraveller').addEventListener('click', function() {
    const totalTravelers = parseInt(adultsInput.value) + parseInt(childrenInput.value);
    travelersDiv.innerHTML = `Travelers <br>${totalTravelers} travelers`;
    travelmodal.style.display = 'none';
});

