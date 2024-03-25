# Welcome to *Nile!*

Nile is a very basic shopping application built with React and JSX. It provides the following pages:

-   Home

    Displays a list of items available for sale, with a small image, price and an ‘add to cart’ option. The user (shopper) can peruse these items and add one or more to a shopping cart if they choose. Each time the ‘add to cart’ button is clicked, the quantity of that item in the shopping cart is incremented.

    If the user clicks anywhere on the item other than the ‘add to cart’ button, the Details page will open for that item.

-   Detail

    Displays a larger image of the item, along with additional information, and, again, a ‘add to cart’ button to entice the shopper without having to go back to the home page to add the item. Additional details displayed on this page include the star-rating of the item, the price along with a unit (each, bag, bottle, set, pound, etc.), and a text description telling more about the item. As with the home page, each time the user clicks the ‘add to cart’ button, the quantity of this item in the cart increases.

-   Search

    Provides a single text search field, that looks for a match within three data fields: item category (‘toys’, ‘accessories’, ‘books’, etc.); item name; and item description. The matching items are updated as the search field changes, displaying the same information as on the home page, including the ‘add to cart’ option. Try ‘Egypt’ or ‘river’ to see this in action. Search terms are not case sensitive.

-   Cart

    The cart page displays a list of items selected, if any, along with the quantity of each that has been added, the item cost and total cost for each product, along with an option to ‘proceed to checkout.’ Items can be removed from the cart on this page if no longer wanted. The ‘proceed to checkout’ button opens the check-out form, described below.

### Checkout

The checkout form is a page, but is not included in the navigation items in the header. It opens when the user clicks the ‘proceed to checkout’ button on the shopping cart page, and displays a small image, the item cost, quantity, extended cost, and cart total cost, along with a form to provide shipping information. The shipping info form does some basic error checking, and if there are no errors when the user presses the ‘place your order’ button, an order simulation is created (form is cleared, and a ‘thank you message’ is displayed).

### Footer:

Social media icons in the footer are for decoration only; they are not at this point functional. It is, after all, a fictional company!

## Installation and Set-up:

All files necessary for the app to function are included in this repository, including the sample data. Feel free to edit the ‘ProductData.js’ file if you wish to experiment with other products or product information. Just be aware that if you add items, or change an item’s id, you will need to provide an image for it in the ‘/Images’ folder that is named {id}.jpg.

To install the app, download or clone the repository from GitHub at the this URL:

<https://github.com/AbeFisher/Nile-Shopping>

and open the app in a development environment such as Visual Studio Code.

Open a terminal window, and run ‘npm start’ to open the application in a localhost browser.

If any of the following packages are not installed on your system, you will need to install them using the ‘npm install {packageName}’ command, in order for the app to run. Here is a list of the required packages:

-   formik
-   react-icons
-   react-router
-   react-router-dom
-   uuid
-   yup
