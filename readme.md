# Product Management & URL Shortener

This project includes two challenges: a Product Management web application and a URL Shortener web application. The backend is built with Laravel, and the frontend uses Vue.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup](#setup)
  - [Backend (Laravel)](#backend-laravel)
  - [Frontend (Vue.js)](#frontend-vuejs)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project combines two challenges into a single application: a product management system and a URL shortener. Users can manage their products and shorten URLs within the same application.

## Features

### Product Management

- User authentication and authorization.
- CRUD operations for products (add, edit, delete) with details like name, description, size, etc.
- Display a list of products with search and pagination functionality.
- Basic validation to ensure required product fields are filled.
- Filtering products based on specific criteria (e.g., name, type).

### URL Shortener

- Accept a long URL input from the user.
- Generate a unique short URL for the given long URL.
- Store the mapping between the short URL and the original long URL.
- Redirect users to the original URL when they access the short URL.
- Display a list of previously shortened URLs with their corresponding statistics (e.g., click count).
- Show basic stats about URL visits and the most visited URLs.

## Project Structure

/project-root
|-- backend # Laravel backend code
|-- frontend # Vue.js frontend code
|-- ...


## Setup

### Backend (Laravel)

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies: `composer install`.
4. Copy `.env.example` to `.env` and configure your database.
5. Generate application key: `php artisan key:generate`.
6. Migrate the database: `php artisan migrate`.
7. Serve the backend: `php artisan serve`.

### Frontend (Vue.js)

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`.
3. Copy `.env.example` to `.env` and configure the API endpoint if needed.
4. Run the frontend: `npm run serve`.

## Usage

Visit the URLs provided by the backend to access the frontend and start using the applications.

## Contributing

Feel free to contribute by submitting issues or pull requests. Follow the guidelines outlined in the contribution guidelines.

## License

This project is licensed under [Your License Here].

