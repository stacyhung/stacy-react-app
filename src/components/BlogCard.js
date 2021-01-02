import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleContext } from "../ToggleContext";
import "../css/blog.css";

function BlogCard(props) {

    const { data } = props;
    const { theme } = useContext(ToggleContext);

    return (
        <Link className="blog-card-link" to={`/blog/${data.id}`} >
            <div className={`blog-card ${theme}-theme`}>
                <img className="blog-card-img" src={data.img_small} alt="{data.img_alt}" />
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