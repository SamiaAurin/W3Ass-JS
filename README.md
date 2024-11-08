# Assignment- JavaScript

This project is a responsive web application with features including a navbar with toggle functionality, a currency selection modal, a travelers modal, a gallery modal, and a save button with local storage integration.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Local Storage Integration](#local-storage-integration)
- [Customization](#customization)
- [Contributing](#contributing)


## Project Overview

This web application is built with HTML, CSS, and JavaScript to deliver a seamless experience across devices. It includes dynamic modals, responsive designs, and local storage to remember user preferences. The application supports country selection for currency, manages traveler counts, and allows for saving preferences with a visually intuitive UI.

## Features

1. **Responsive Navbar**  
   - Toggle display based on screen width (768px or less).
   - Navbar auto-updates display style on window resize.

2. **Country and Currency Selection Modal**  
   - User can select a country to see the corresponding currency.
   - Selected country and currency are stored in local storage and retrieved on page load.

3. **Travelers Modal**  
   - Adjustable adult and children traveler counts with increment and decrement buttons.
   - Stores traveler count in local storage and retrieves on page load.

4. **Share Button Modal**  
   - Allows users to share the page link and provides feedback on successful copy.

5. **Gallery Modal**  
   - Displays images in a modal with navigation options.
   - Each image includes a title and current/total photo count.

6. **Save Button with Local Storage**  
   - "Save" button toggles a heart icon (active/inactive) and saves its state in local storage.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/SamiaAurin/your-repo-name.git
    ```
2. Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```
3. Open `index.html` in a web browser.

> **Note:** Ensure all assets and library dependencies (like [Font Awesome](https://fontawesome.com) for icons) are included. To do this, either add a CDN link in your HTML `<head>` or install the assets locally:
> 
> - **CDN Method**: Add the following to the `<head>` section of your `index.html` file:
>   ```html
>    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
>    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
>   ```
> - **Local Method**: Download Font Awesome and include the CSS file in your project, updating the `<link>` path accordingly.


## Usage

### Navbar Toggle
- Click the navbar toggle icon to show or hide menu items (for screens 768px and below).

### Country and Currency Modal
- Click the country icon to open the modal and select a country.
- The currency will update automatically, and both the country and currency will persist after page reloads.

### Travelers Modal
- Click the "Travelers" section to open the modal and set the number of adults and children.
- The total traveler count is displayed, and values are saved in local storage.

### Share Link Modal
- Click the share button to open the share modal.
- Use the "Copy Link" button to copy the page URL to your clipboard.

### Gallery Modal
- Click the photo count to open the gallery modal.
- Navigate images using the previous and next buttons, with the current photo count displayed.

### Save Button
- Click the save button to toggle the heart icon.
- The icon state persists using local storage.

## Local Storage Integration

This project makes use of local storage to save user preferences. Below are the saved states:
- **Country and Currency**: Stores the selected country and associated currency.
- **Traveler Counts**: Stores the number of adults and children.
- **Save Button**: Stores the active/inactive state of the heart icon.

These values are automatically loaded when the page is opened.

## Customization

- **Country and Currency**: Modify the `updateCurrency` function in `main.js` to add or change currency options.
- **Traveler Limits**: Adjust the `min` and `max` attributes in the traveler modal HTML for adults and children.
- **Gallery Modal**: Add or remove images in the HTML file under the `.slider-image` elements.

## Contributing

Contributions are welcome! Please follow the steps below:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.


