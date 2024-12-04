import React from "react";
import "./home.css";
import { notFound } from "next/navigation";
import Head from "next/head";

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
      url: `https://jigsawplanet.us/${post.title}`,
      images: [
        {
          url: post.file,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `https://jigsawplanet.us/${post.title}`,
    },
    // Custom metadata
    additionalMetadata: {
      datePublished: post.datePublished,
      dateModified: post.dateModified,
    },
  };
}




const BlogPost = async ({ params }) => {
  const post = await getData(params.id);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.desc,
    "datePublished": post.datePublished, // ISO 8601 format
    "dateModified": post.dateModified, // ISO 8601 format
    "author": {
      "@type": "Person",
      "name": post.author || "Jigsaw planet",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jigsaw Planet",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.us/logo.png", // Update with your logo URL
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jigsawplanet.us/${params.id}`,
    },
    "image": {
      "@type": "ImageObject",
      "url": post.file,
      "width": 1200,
      "height": 630,
    },
  };

  return (
    <div className="container">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="top">
        <div className="info">
          <h1 className="title">Title : {post.title}</h1>
          <h2>Description :</h2><br />
          <p className="desc">{post.desc}</p>
          <div className="author">
            <img
              src={post.file}
              alt="Author Avatar"
              width={1200}
              height={500}
              className="avatar"
            />
          </div>
          <h2>Content :</h2><br />
          <p className="content">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;