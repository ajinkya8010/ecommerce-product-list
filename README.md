# E-Commerce Product List

A React-based e-commerce product listing application that fetches product data from an API, provides filtering, sorting, and search functionalities, and includes a shopping cart feature using the Context API.

---

## Features

### 1. Product Listing
- Displays a list of products fetched from the **Platzi Fake Store API**.
- Each product card includes:
  - Image
  - Title
  - Price
  - Category
  - Buttons for viewing details and adding to the cart.

### 2. Product Details
- A detailed view of each product with:
  - Full-size image
  - Title
  - Description
  - Price
  - Category
  - Rating
  - Add-to-cart button.

### 3. Search and Filtering
- **Search Bar:** Filter products by name.
- **Category Dropdown:** Filter products by categories like "electronics," "jewellery," etc.
- **Sorting Options:** Sort products by:
  - Price (low to high, high to low)
  - Rating (high to low)

### 4. Shopping Cart
- Users can add products to the cart from the product list or details page.
- Cart displays:
  - Products with their quantities.
  - Option to adjust quantity or remove items.
  - Total price calculation.

---

## Technologies Used

- **Frontend Framework:** React.js
- **State Management:** Context API
- **Styling:** CSS
- **Build Tool:** Vite
- **API:** Platzi Fake Store API

---

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or later)
- **npm** (Node Package Manager) or **yarn**

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ajinkya8010/ecommerce-product-list
   cd ecommerce-product-list
2. **Install dependencies**
   ```bash
   npm install
3. **Run the Application**
   ```bash
   npm run dev
