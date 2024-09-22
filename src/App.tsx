// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Routes, and Route
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetail';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Route for the blog list */}
                    <Route path="/" element={<BlogList />} />

                    {/* Route for the blog details page */}
                    <Route path="/posts/:id" element={<BlogDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
