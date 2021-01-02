import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import blogData from "../data/blogData";
import Blog20201017 from "./blogs/Blog20201017";
import Blog20201217 from "./blogs/Blog20201217";
import { ToggleContext } from "../ToggleContext";
import "../css/blog.css";

function BlogDetail() {

    //get context for theme
    const { theme } = useContext(ToggleContext);

    // get the route id
    const { blogId } = useParams();

    // get recipe data using id
    const thisBlog = blogData.find(blog => blog.id === blogId)

    // get the Blog page content for the given id
    let content = null;
    switch (thisBlog.id) {
        case "20201017": {
            content = <Blog20201017 />;
            break;
        }
        case "20201217": {
            content = <Blog20201217 />;
            break;
        }
    }

    return (
        <div className={`blog-container ${theme}-theme`}>
            <img className="blog-img" src={thisBlog.img_large} alt={thisBlog.img_alt} />
            <h1>{thisBlog.title}</h1>
            <p className="blog-date">{thisBlog.date}</p>
            <div className={`blog-content ${theme}-theme`}>{content}</div>
        </div>
    )

}

export default BlogDetail;