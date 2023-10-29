# Bookstore Project (Next.js and React)

Welcome to the Bookstore Project, built with Next.js and React!

## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [Usage](#usage)

## Getting Started

Follow these steps to get the Bookstore Project up and running on your local machine.

### Prerequisites

- Node.js and npm (Node Package Manager)

### Installation

1. Clone this repository (or download it as a ZIP file):

   ```bash
   git clone https://github.com/shubham-ram/bookStore.git

2. Navigate to the project directory:

   ```bash
   cd bookstore-project

3. Install the project dependencies:
  
   ```bash
   npm install

4. Start the development server:

   ```bash
   npm run dev

5. Open your web browser and go to http://localhost:3000 to access the Bookstore Project.

6. The project requires user to register first before using bookstore. Or they can login using existing credentials, they can use following test credentials:
    1. Email : `test_1@gmail.com`.   
      Password : `test_1` 

    2. Email : `test_2@gmail.com`.   
      Password : `test_2` 

    3. Email : `test_3@gmail.com`.   
      Password : `test_3` 

     Upon successful login, a key is stored in a cookie to enable seamless access to the application on return visits. 

7. After a successful login, users will be directed to the home page. Here, they will have access to the featured book and a consistent navigation bar that will be available on every page. The navigation bar allows users to access various sections

## Usages
Once you've set up the project and logged in, you can 

   1. View all books by navigating to Books in the navigation bar. You can also search for books by a particular author.
   2. View details of specific book by clicking on particular book.
   3. View all authors associated with the bookstore and their books available at bookstore.
4. Add books to your cart and can view total price of cart at "My Cart" page


## Features

- **State Management with Redux:**
  - Utilizes Redux for managing state of author and cart items, making it easier to handle and share data across components, and maintain a consistent application state.

- **Responsive Design:**
  - I have use media queries for responsive design to ensure a seamless user experience across various devices and screen sizes.


- **Shopping Cart:**
  - Users can add books to their shopping cart.
  - On the checkout page, they can review the items in their cart, increase or decrease quantities, and remove items before finalizing their order.




