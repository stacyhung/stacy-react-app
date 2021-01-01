import React from "react";
import { Link } from "react-router-dom";
import "../css/blog.css";

function BlogCard(props) {

    const { data } = props;

    return (
        <Link to={`/blogs/${data.id}`} >
            <div className="blog-card">
                <img src="" alt="" />
                <div className="blog-card-content">
                    <h3 className="blog-card-title">{data.title}</h3>
                    <p className="blog-card-exerpt">{data.exerpt}</p>
                    <p className="blog-card-date">{data.date}</p>
                </div>
            </div>
        </Link>
    )

}

export default BlogCard;