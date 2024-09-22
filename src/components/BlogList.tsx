// src/components/BlogList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Define a BlogPost interface
interface BlogPost {
    _id: string;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    user_id: string;
}

const BlogList: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]); // Define the correct type for posts
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts')
            .then(response => {
                setPosts(response.data); // TypeScript now knows response.data is an array of BlogPost
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading posts...</p>;
    }

    return (
        <div>
            <h1>Blog Posts</h1>
            {posts.length === 0 ? (
                <p>No blog posts available</p>
            ) : (
                <ul>
                    {posts.map(post => (
                        <li key={post._id}>
                            <h2>{post.title}</h2>
                            <p>{post.content.slice(0, 100)}...</p> {/* Shortened content */}
                            <Link to={`/posts/${post._id}`}>Read More</Link> {/* Link to BlogDetails */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BlogList;
