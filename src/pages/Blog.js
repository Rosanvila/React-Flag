import React from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Blog = () => (
    <div className="blog-container">
        <Logo />
        <Navigation />
        <h1>Blog</h1>
        <form>
            <input type="text" placeholder="Name" />
            <textarea placeholder="Message"></textarea>
            <input type="submit" value="Submit" />
        </form>
        <ul></ul>
    </div>
);

export default Blog;