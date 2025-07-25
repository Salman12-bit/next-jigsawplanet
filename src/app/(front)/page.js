"use client";

import "./home.css";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();

  const puzzleGames = [
    {
      "image": "/images/nightshift.webp",
      link: '/jigsawnight'
    },
    {
      "image": "/images/beautifulplace.webp",
      link: '/jigsawplace'
    },
    {
      "image": "/images/darkhistory.webp",
      link: '/jigsawdark'
    },
    {
      "image": "/images/jigsawsnow.webp",
      link: '/game-jigsaw'
    },
    {
      "image": "/images/jigsawengine.webp",
      link: '/jigsaw-planet'
    },
    {
      "image": "/images/eiffeltower.webp",
      link: '/older-puzzles'
    },
    {
      "image": "/images/treeriver.webp",
      link: '/jisawplanet'
    },
  ]

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/posts", {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Failed to fetch posts");

      const data = await res.json();
      setData(data);
      setErr(false);
    } catch (error) {
      setErr(true);
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      getData();
    } catch (err) {
      console.log("Error while deleting a post:", err);
    }
  };

  return (
    <div className="home-container">
      <div style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        gap: "7px",
        marginBottom: "20px"
      }}>

        {
          puzzleGames.map((item, index) => (
            <div key={index} className="puzzle-game-card">
               <Link href={item.link}>
              <img
                src={item.image}
                alt={`Puzzle ${index + 1}`}
                className="puzzle-game-image"
              />
              </Link>
            </div>
          )
          )
        }
      </div>
      <div className="posts">

        {isLoading ? (
          <div className="loader">
            <div className="spinner"></div>
          </div>
        ) : err ? (
          <p className="error">Error loading posts.</p>
        ) : (
          data?.map((post) => (
            <div className="post" key={post._id}>
              <div className="imgContainer">
                <Link href={`/${post._id}`} key={post._id}>
                  <img className="img" src={post.file} alt={post.title}
                    loading="lazy" />
                </Link>
              </div>
              <Link href="/jigsaw-planet" className="button1">Play Game</Link>
              <div className="postContentContainer">
                <h1 className="postTitle">{post.title}</h1>
                <p className="postContent">{post.desc}</p>
                <h3 className="postScore">Score: {post.score}</h3>
                {session && session.user?.role === "admin" && (
                  <>
                    <button
                      className="delete"
                      onClick={() => handleDelete(post._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

