import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../data/blogData";
import "../css/blog.css";

function BlogDetail() {

    const { blogId } = useParams();

    // get recipe data using id
    const thisBlog = blogData.find(blog => blog.id === blogId)

    return (
        <div className="blog-container">
            <h1>{thisBlog.title}</h1>
        </div>
    )

}

export default BlogDetail;