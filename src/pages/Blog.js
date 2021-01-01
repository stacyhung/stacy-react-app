import React from "react";
import blogData from "../data/blogData";
import BlogCard from "../components/BlogCard";
import "../css/blog.css"

function Blog() {

    // place in useEffect (with []) ??
    const blogs = blogData.map(blog => (

        <BlogCard
            key={blog.id}
            className="blog-card"
            data={blog}
        />

    ))

    return (
        <div>
            <div className="blog-cards-container">
                {blogs}
            </div>
        </div>
    )

}

export default Blog;