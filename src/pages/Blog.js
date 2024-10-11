import React from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Blog = () => {
    const [content, setContent] = React.useState("");
    const [error, setError] = React.useState(false);
    const handle = (ev) => {
        ev.preventDefault();

        if (content.length < 140) {
            setError(true);
        } else {
            setError(false);
            // Send the message to the server
        }
    };

    return (
        <div className="blog-container">
            <Logo/>
            <Navigation/>
            <h1>Blog</h1>
            <form onSubmit={(ev) => handle(ev)}>
                <input type="text" placeholder="Name"/>
                <textarea placeholder="Message" style={{border: error ? "1px solid red" : "1px solid #67dafb"}}
                          onChange={(ev) => setContent(ev.target.value)}></textarea>
                <p>
                    {error && "Your message is too short, it should be at least 140 characters long."}
                </p>
                <input type="submit" value="Submit"/>
            </form>
            <ul></ul>
        </div>
    );
};

export default Blog;