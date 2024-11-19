// src/app/(front)/[id]/page.js

import React from "react";
import "./home.css"; 
import { notFound } from "next/navigation";

// Async function to fetch post data by ID
async function getData(id) {
  const res = await fetch(`${process.env.LIVE_LINK}/api/posts/${id}`, {
    cache: "no-store",  // Disable caching
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

// Function to generate metadata dynamically for SEO
export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
    openGraph: {
      title: post.title,
      description: post.desc,
      url: "https://jigsawplanet.us" + params.id,
      images: [
        { 
          url: "https://jigsawplanet.us",
          width: 1200,
          height: 630,
          alt: "Explore and play puzzles on jigsaw planet",
        },
      ],
    },
  };
}

const BlogPost = async ({ params }) => {
  const post = await getData(params.id);

  return (
    <div className="container">
      <div className="top">
        <div className="info">
          <h1 className="title">Title : {post.title}</h1>
          <h2>Description  : </h2><br/>
          <p className="desc"> {post.desc}</p>
          <div className="author">
            <img
              src={post.file}
              alt="Author Avatar"
              width={1200}
              height={500}
              className="avatar"
            />
          </div>
          <h2>Content : </h2><br/>
          <p className="content">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
