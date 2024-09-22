import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Define BlogPost interface for a single post
interface BlogPost {
    _id: string;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    user_id: string;
}

const BlogDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Extract the ID parameter from the route
    const [post, setPost] = useState<BlogPost | null>(null); // Correct type for a single post
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/${id}`)
            .then(response => {
                setPost(response.data); // Set the post data
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the post:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading post...</p>;
    }

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div className="blog-details">
            <h1 className="blog-title">{post.title}</h1>
            <p className="blog-content">{post.content}</p>

            <div className="blog-meta">
                <p><strong>Author ID:</strong> {post.user_id}</p>
                <p><strong>Created At:</strong> {new Date(post.created_at).toLocaleString()}</p>
                <p><strong>Updated At:</strong> {new Date(post.updated_at).toLocaleString()}</p>
            </div>
        </div>
    );
};

export default BlogDetails;
