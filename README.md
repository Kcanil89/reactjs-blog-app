# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/Kcanil89/reactjs-blog-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
our app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
API Endpoints
GET /api/posts: Retrieve a list of all blog posts.
GET /api/posts/{id}: Retrieve details of a single blog post.
These endpoints should be tested using Postman.

## API Integration with ReactJS using Axios

In our ReactJS project, Axios is used for API requests. Here's an example of how to integrate Axios:

Install Axios if you haven't already:


'npm install axios'

In our component (e.g., BlogList), use Axios to fetch data:


## Frontend Development

# Blog List Page
Objective: Display a list of blog posts, each linked to its detailed view.
API Integration: Uses Axios to retrieve posts from the Laravel API.
CSS Styling: Added custom CSS to ensure the blog list page is visually appealing and responsive.

# Blog Detail Page
Objective: Display detailed content of a selected blog post.
API Integration: Fetches individual blog post details from the Laravel API when a user clicks on a post.
CSS Styling: Added custom styling to enhance readability and presentation of the blog content.

# Testing and Debugging
API Testing

Use Postman to test the API endpoints:
GET /api/posts
GET /api/posts/{id}
Ensure that the API returns the correct data and handles errors appropriately.
Frontend Testing

## Conclusion
This assignment demonstrates the integration of ReactJS with Laravel Sanctum API using Axios for a fully functional blog application with user authentication and MongoDB support. The project implements best practices in both frontend and backend development, ensuring a seamless and secure interaction between the two.
