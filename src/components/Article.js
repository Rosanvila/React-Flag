import React from 'react';

const Article = ({article}) => {

    const dateFormat = (date) => {
        const options = {year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric"};
        return new Date(date).toLocaleDateString("en-EN", options);
    };

    return (
        <div className={"article"}>
            <div className={"card-header"}>
                <h3>{article.author}</h3>
                <span>Posted at {dateFormat(article.date)}</span>
            </div>
            <p>{article.content}</p>
            <div className={"btn-container"}>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Article;