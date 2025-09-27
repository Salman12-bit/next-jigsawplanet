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
      link: '/jigsaw-barbie'
    },
    {
      "image": "/images/eiffeltower.webp",
      link: '/older-puzzles'
    },
    {
      "image": "/images/treeriver.webp",
      link: '/jigsawadult'
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
      <h1 className="home-title" >
        Play the Best Jigsaw Puzzle Online – Free & Fun in 2025
      </h1>
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
                  loading="lazy"
                />
              </Link>
            </div>
          )
          )
        }
      </div>
      <div className='article-container'>

        <h2 className="article-title">Online Jigsaw Puzzles in 2025: Relaxation, Education & Mindfulness</h2>
        <p><strong>By <span itemProp="author">PuzzlesPlan.com</span></strong></p>

        <h2 className="article-step">Why Online Jigsaw Puzzles Work So Well in 2025</h2>
        <p className="article-description">
          These days we all scroll a little too much, right? Quick posts, quick videos—then more of the same.
          That’s why online jigsaw puzzles have become such a nice change. Instead of racing for points, you get a calmer, more mindful game that actually feels good to play.
          It’s like giving your brain a little stretch while also taking a break from the noise.
        </p>
        <p className="article-description">
          The best part is you don’t need downloads or complicated setups.
          Browser-based puzzles are ready to go, and you can pick a design that matches your mood—something soothing for a short pause, or a bigger challenge when you have more time.
          Either way, you’re solving, thinking, and relaxing at the same time.
        </p>

        <h2 className="article-step">What Makes a Great Puzzle Platform</h2>
        <p className="article-description">
          A solid puzzle site should be simple to use, look good, and work on any device.
          The fun comes from taking an image—whether it’s artwork, a photo, or even study material—and turning it into a playable puzzle within seconds.
          That little transformation makes the whole thing rewarding.
        </p>
        <p className="article-description">
          The best platforms also let you make it your own: switch up piece shapes, change the level of difficulty, or even track your solving time if you like keeping score with yourself.
        </p>
        <ul>
          <li>Thousands of free puzzles—nature, travel, art, animals, and more</li>
          <li>Upload your own images to create instant custom puzzles</li>
          <li>Join a global puzzle-loving community</li>
        </ul>

        <h2 className="article-step">Why More People Are Playing Online Puzzles</h2>
        <p className="article-description">
          Wellness is a big theme right now, and puzzles fit right in.
          Instead of endless scrolling, players are turning to something interactive but relaxing.
          Jigsaw puzzles—once thought of as old-fashioned—are now one of the most popular ways to relax with a screen without feeling drained.
        </p>
        <p className="article-description">
          What makes them click is balance. They’re calm but never boring, focused but never stressful.
          You’re solving and thinking, but without the competitive pressure of other games.
          For many, playing becomes a little ritual—like journaling or tea time—that fits easily into daily life.
        </p>

        <h3 className="article-substep">Trends to Watch in 2025</h3>
        <ul>
          <li><strong>Digital detox</strong>: swap social media scrolling for puzzle time</li>
          <li><strong>Learning tools</strong>: teachers use puzzles for spatial skills and visual learning</li>
          <li><strong>Memory care</strong>: seniors and caregivers use puzzles to stay sharp</li>
          <li><strong>Mindfulness</strong>: a game that feels more like breathing than racing</li>
        </ul>

        <h2 className="article-step">Who Gets the Most Out of Online Puzzles</h2>
        <p className="article-description">
          The short answer? Pretty much everyone.
          From little kids learning shapes to adults squeezing in a brain break at work, puzzles scale to any level.
          That’s the magic—they’re simple to start, but still engaging no matter your age.
        </p>

        <h3 className="article-substep">For Kids</h3>
        <ul>
          <li>Boosts early math and spatial reasoning</li>
          <li>Teaches patience and concentration</li>
          <li>Safe screen time—no ads or noisy distractions</li>
          <li>Parents and teachers can turn lessons into puzzles</li>
        </ul>

        <h3 className="article-substep">For Students</h3>
        <ul>
          <li>A calm break from studying that still exercises the brain</li>
          <li>Improves pattern recognition and logic</li>
          <li>Keeps focus sharp during exam season</li>
          <li>A mindful alternative to social feeds</li>
        </ul>

        <h3 className="article-substep">For Adults</h3>
        <ul>
          <li>A quick way to reset during work breaks</li>
          <li>Helps with stress, creativity, and focus</li>
          <li>Stops digital burnout from endless apps</li>
          <li>Perfect for a mid-day recharge</li>
        </ul>

        <h3 className="article-substep">For Seniors</h3>
        <ul>
          <li>Supports hand-eye coordination and memory</li>
          <li>Gentle therapy for Alzheimer’s and cognitive care</li>
          <li>A calming daily activity without overstimulation</li>
        </ul>

        <h2 className="article-step">Extra Features That Make Digital Puzzles Shine</h2>
        <p className="article-description">
          Online puzzles aren’t just copies of cardboard ones.
          They add cool options like choosing piece shapes, tracking your time, and even sharing puzzles with friends.
          That mix of personalization and community makes the whole thing more engaging.
        </p>
        <p className="article-description">
          One of the favorite features? Uploading your own images.
          A family photo, a child’s drawing, or even a historic map—turn it into a puzzle and it suddenly feels special.
        </p>
        <p className="article-description">
          And for anyone who likes to track progress, built-in timers and stats make it easy to see how you improve over time.
          Community boards and puzzle races give social players another way to connect.
        </p>
        <ul>
          <li>Pick from different puzzle piece shapes and sizes</li>
          <li>Track your progress, times, and completed boards</li>
          <li>Send puzzles to friends or join community challenges</li>
          <li>Works on mobile or tablet for play anywhere</li>
          <li>Difficulty levels from beginner to expert</li>
        </ul>

        <h2 className="article-step">Puzzles for Learning and Creativity</h2>
        <p className="article-description">
          Teachers love puzzles for making lessons stick.
          Science charts, history maps, even vocabulary sheets—all become more fun when students have to piece them together.
          It turns class into an interactive game instead of just memorizing facts.
        </p>
        <p className="article-description">
          Families also use puzzles for stories, keepsakes, and memory-building.
          Vacation photos, birthday pictures, or even kids’ doodles turn into playable games that mean something beyond the screen.
        </p>
        <ul>
          <li>Turn lesson materials into classroom puzzles</li>
          <li>Create photo puzzles for holidays and family games</li>
          <li>Design digital puzzle gifts for birthdays or anniversaries</li>
          <li>Make science or geography maps into learning puzzles</li>
          <li>Digitize kids’ artwork and make it interactive</li>
        </ul>
        <p className="article-description">
          At this point, puzzles aren’t just games—they’re tools for storytelling, education, and creative play.
        </p>

        <h2 className="article-step">Puzzle Time for Families and Groups</h2>
        <p className="article-description">
          Even if families live far apart, online puzzles make it easy to share an activity.
          Grandparents and kids can solve together over a video call, or friends can compete in a puzzle race for fun.
          It’s a simple way to connect and laugh together.
        </p>
        <ul>
          <li>Do puzzles during Zoom calls with family</li>
          <li>Use them as bonding activities for kids</li>
          <li>Race with friends and compare scores</li>
        </ul>

        <h2 className="article-step">The Future of Puzzle Games</h2>
        <p className="article-description">
          Puzzle platforms are only getting smarter.
          Expect AI that builds puzzles tailored to your skill level, augmented reality that mixes real-world and digital pieces, and themed puzzle packs from art and pop culture.
          Communities will keep growing too, with tournaments and leaderboards.
        </p>
        <ul>
          <li>AI-powered puzzles based on your skills</li>
          <li>AR puzzles blending real life and screen play</li>
          <li>Special packs with art or pop culture themes</li>
          <li>Leaderboards and community competitions</li>
        </ul>

        <h2 className="article-step">Tips to Solve Faster</h2>
        <p className="article-description">
          A little puzzle play every day goes a long way.
          Just 10–20 minutes can reduce stress, sharpen memory, and lift your mood.
          And with a few tricks, you’ll get even quicker.
        </p>
        <ul>
          <li>Pick a quiet space for focus</li>
          <li>Go full-screen for better visibility</li>
          <li>Always start with edge pieces—it makes the frame</li>
        </ul>

        <h2 className="article-step">Why Online Puzzles Are Worth It</h2>
        <p className="article-description">
          You don’t need flashy, addictive apps to have fun.
          Online jigsaw puzzles are creative, relaxing, and good for the brain.
          They’re one of those rare games that appeal to kids, adults, and seniors alike.
        </p>
        <p className="article-description">
          Whether you’re playing for fun, learning, or even therapy, puzzle time fits in perfectly.
          It’s an activity that calms the mind while sharpening it.
        </p>
        <p className="article-description">
          Ready to try? 👉 <Link href="/jigsawnight" className="cta-link">Play Free Puzzle Now</Link>
        </p>

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

