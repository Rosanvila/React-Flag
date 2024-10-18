import React, { useEffect } from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import Article from "../components/Article";

const Blog = () => {
    const [content, setContent] = React.useState("");
    const [error, setError] = React.useState(false);
    const [blogData, setBlogData] = React.useState([]);
    const [author, setAuthor] = React.useState("");
    const [lastId, setLastId] = React.useState(0);

    const getData = async () => {
        await axios
            .get("http://localhost:3001/articles")
            .then((response) => {
                const data = response.data;
                setBlogData(data);
                const numericIds = data.map(article => parseInt(article.id)).filter(id => !isNaN(id));
                setLastId(Math.max(...numericIds, 0));
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const handle = (ev) => {
        ev.preventDefault();

        if (content.length < 140) {
            setError(true);
        } else {
            const newId = lastId + 1;
            axios.post("http://localhost:3001/articles", {
                author,
                content,
                date: Date.now(),
                id: newId.toString()
            }).then(() => {
                setLastId(newId);
                setError(false);
                setContent("");
                setAuthor("");
                getData();
            });
        }
    };

    const handleDelete = (id) => {
        setBlogData(previousData => previousData.filter(article => article.id !== id));
    };

    return (
        <div className="blog-container">
            <Logo />
            <Navigation />
            <h1>Blog</h1>
            <form onSubmit={(ev) => handle(ev)}>
                <input type="text" placeholder="Name"
                       onChange={(e) => (setAuthor(e.target.value))}
                       value={author} />
                <textarea placeholder="Message" style={{ border: error ? "1px solid red" : "1px solid #67dafb" }}
                          onChange={(ev) => setContent(ev.target.value)}
                          value={content}></textarea>
                <p>
                    {error && "Your message is too short, it should be at least 140 characters long."}
                </p>
                <input type="submit" value="Submit" />
            </form>
            <ul>
                {blogData
                    .sort((a, b) => b.date - a.date)
                    .map((article) => (
                        <Article key={article.id} article={article} onDelete={handleDelete} />
                    ))}
            </ul>
        </div>
    );
};

export default Blog;