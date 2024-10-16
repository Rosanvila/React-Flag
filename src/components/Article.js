import React from 'react';
import axios from "axios";

const Article = ({article}) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [editedContent, setEditedContent] = React.useState("");

    const dateFormat = (date) => {
        const options = {year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric"};
        return new Date(date).toLocaleDateString("en-EN", options);
    };

    const handleEdit = () => {
        // Update the article content
        const updatedArticle = {
            author: article.author,
            content: editedContent ? editedContent : article.content,
            date: article.date,
            updatedDate: Date.now(),
        }
        // Call the update function
        axios.put(`http://localhost:3001/articles/${article.id}`, updatedArticle).then(() => {
            setIsEditing(false);
        });
    }

    return (
        <div className={"article"}>
            <div className={"card-header"}>
                <h3>{article.author}</h3>
                <span>Posted at {dateFormat(article.date)}</span>
            </div>
            {isEditing ? (
                <textarea defaultValue={article.content} onChange={(e) => setEditedContent(e.target.value)}/>
            ) : (
                <p>{editedContent ? editedContent : article.content}</p>
            )}
            <div className={"btn-container"}>
                {isEditing ? (
                        <button onClick={() => handleEdit()}>Save</button>)
                    : (
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    )}
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Article;