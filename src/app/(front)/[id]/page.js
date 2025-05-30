import React from "react";
import "./home.css";
import { notFound } from "next/navigation";


async function getData(id) {
  const res = await fetch(`${process.env.LIVE_LINK}/api/posts/${id}`, {
    cache: "no-store",  
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  try {
    const post = await getData(params.id);

    return {
      title: post.title,
      description: post.desc,
      openGraph: {
        title: post.title,
        description: post.desc,
        url: `https://puzzlesplan.com/${params.id}`,
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
        canonical: `https://puzzlesplan.com/${params.id}`,
      },
      additionalMetadata: {
        datePublished: post.datePublished,
        dateModified: post.dateModified,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Post Not Found",
      description: "This post could not be found.",
      alternates: {
        canonical: `https://puzzlesplan.com/404`,
      },
    };
  }
}

const BlogPost = async ({ params }) => {
  const post = await getData(params.id);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.desc,
    "datePublished": post.datePublished, 
    "dateModified": post.dateModified, 
    "author": {
      "@type": "Person",
      "name": post.author || "puzzlesplan",
    },
    "publisher": {
      "@type": "Organization",
      "name": "puzzlesplan",
      "logo": {
        "@type": "ImageObject",
        "url": `https://puzzlesplan.com/${post.file}`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://puzzlesplan.com/${params.id}`,
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
      <div className="top">
        <div className="info">
          <h1 className="title">{post.title}</h1>
          <p className="desc">{post.desc}</p>
          <div className="author">
            <img
              src={post.file}
              alt="Author Avatar"
              width={700}
              height={400}
              className="avatar"
            />
          </div>
          <div className="content" dangerouslySetInnerHTML={{ __html: post.content }}></div>

        </div>
      </div>
    </div>
  );
};

export default BlogPost;
