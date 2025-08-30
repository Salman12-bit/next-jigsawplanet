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
      <div className='article-container'>
        <h1>
          Online Jigsaw Puzzles in 2025: Relaxation, Education & Mindfulness
        </h1>
        <p><strong>By <span itemProp="author">PuzzlesPlan.com</span></strong></p>

        <h2 >Why Online Jigsaw Puzzles Are the Best Mindful Games in 2025</h2>
        <p>
          Our platform considered that games should give more than a quick burst of excitement. In the modern digital era, full of continuous scrolling and quick content, every individual is turning toward calmer, more mindful experiences. These relaxing online puzzles promote digital wellness and give a break from endless scrolling.
        </p>
        <p>
          Simple, browser-based jigsaw puzzle platforms have become one of the most enjoyable ways to unwind and boost the thinking level. Players can explore fully customizable and interactive puzzles that match their mood-best for a mindful break or a longer, engaging challenge. These puzzles improve problem-solving skills and provide a fun, memorable experience for players of all ages.
        </p>

        <h2 >Key Features of the Best Free Puzzle Platforms</h2>
        <p>
          A standout puzzle platform is it should be easy to use, visually engaging, and accessible on any device. It should let users solve existing puzzles, artwork, or educational material into playable puzzles within seconds. The experience is smooth and rewarding for people of all ages.
        </p>
        <p>
          Key attributes consist of flexibility and personalization. According to your thinking level, you choose puzzle piece shapes, adjust difficulty levels, and even monitor your solving time.
        </p>
        <ul>
          <li>Thousands of free puzzles in categories like nature, animals, architecture, art, and travel</li>
          <li>Upload any image to create custom puzzles instantly</li>
          <li>Join a vibrant global puzzle-loving community</li>
        </ul>

        <h2 >Why Online Puzzle Games Are Rising in Popularity</h2>
        <p>
          The demand for digital wellness has exploded in recent years. Lots of people recognize the toll of non-stop scrolling and passive consumption, and they’re changing to interactive, intentional activities. Jigsaw puzzles, in past years considered old-fashioned, jigsaw puzzles have now become one of the most popular forms of screen-based mindfulness and stress-relief puzzles.
        </p>
        <p>
          What makes online puzzles so appealing is their balance. They are calming but not boring. They stimulate the brain without overwhelming it. They foster focus and creativity, but don’t induce stress or competitive anxiety. For many, they become a calm ritual—like journaling or sipping tea—woven into daily routines.
        </p>

        <h3>Top Puzzle Trends in 2025:</h3>
        <ul>
          <li><strong>Digital detox</strong>: Take a mindful break from social media with relaxing puzzles.</li>
          <li><strong>Learning integration</strong>: Teachers use them for spatial reasoning and visual comprehension</li>
          <li><strong>Memory care</strong>: Caregivers and seniors use puzzles to maintain mental sharpness and benefit from cognitive training puzzles</li>
          <li><strong>Mindfulness practice</strong>: Players get benefits similar to breathing</li>
        </ul>

        <h2 >Who Benefits Most from Playing Online Jigsaw Puzzles</h2>
        <p>
          One of the most interactive aspects of jigsaw puzzles is their broad appeal. From toddlers to retirees, from students to corporate professionals, there’s a puzzle type and difficulty level for everyone. The simplicity of gameplay combined with mental challenge makes them ideal for nearly any age or ability level.
        </p>

        <h3>Kids and Early Learners</h3>
        <ul>
          <li>Encourages spatial reasoning and early math concepts</li>
          <li>Improves concentration, patience, and fine motor skills</li>
          <li>Safe screen time without ads or overstimulation</li>
          <li>Parents and teachers can turn educational material into puzzles</li>
        </ul>

        <h3>Teens and College Students</h3>
        <ul>
          <li>Reduces academic stress and helps manage study breaks</li>
          <li>Improves pattern recognition and logical problem-solving</li>
          <li>Helps with focus and mental clarity during exams</li>
          <li>A more mindful form of screen entertainment</li>
        </ul>

        <h3>Busy Adults and Working Professionals</h3>
        <ul>
          <li>Helps manage digital burnout and improve mood</li>
          <li>Promotes brain breaks during remote or office work</li>
          <li>Fosters creativity and persistence</li>
          <li>Great as a midday recharge between tasks</li>
        </ul>

        <h3>Seniors and Retirees</h3>
        <ul>
          <li>Improve thinking level, hand-eye coordination, and cognitive function</li>
          <li>Can be used as a gentle therapy for Alzheimer's</li>
          <li>Provides meaningful activity without overstimulation</li>
        </ul>

        <h2 >Relaxing and Brain-Boosting Features of Digital Puzzles</h2>
        <p>
          Our digital puzzle tool offers more than just gameplay—it gives a customizable, interactive, and meaningful way to unwind. The beauty lies in their availability and ability to adjust to the player’s needs. Unlike traditional puzzles, online versions often come with improved options that boost the entire experience.
        </p>
        <p>
          One of the most prominent attributes is the ability to upload your images. Whether it’s a family portrait or your child’s drawing, changing it into a puzzle gives emotional value and creative fun. You can even use historical documents or artworks to build educational puzzles.
        </p>
        <p>
          Our digital platform also gives progress tracking with built-in timers and completion stats to help players monitor their progress. For social players, community features enable puzzle sharing, leaderboards, and collaborative solving.
        </p>
        <ul>
          <li>Select from a variety of puzzle piece shapes and sizes</li>
          <li>User can track their time, progress, and completed puzzles</li>
          <li>You can send your favorite puzzle to your friends or join public puzzle challenges</li>
          <li>Easy to use on mobile and tablet for on-the-go play</li>
          <li>Choosing difficulty level from beginner to expert-level puzzling</li>
        </ul>

        <h2 >Educational and Creative Uses for Jigsaw Puzzles</h2>
        <p>
          Jigsaw puzzles are a powerful technique for both learning and invention. Teachers can change science charts or history images into interactive puzzles to improve visual learning, problem-solving, and classroom interaction.
        </p>
        <p>
          Families use man-made puzzles for storytelling, memory-building, and unique keepsakes—such as changing vacation photos or kids’ work into enjoyment, personalized games. These puzzles give hands-on educational value and meaningful enjoyment for all ages.
        </p>

        <ul>
          <li>Teachers convert lesson materials into puzzles for classroom engagement</li>
          <li>Families turn photos into puzzles for holiday games or keepsakes</li>
          <li>Create digital puzzle gifts for birthdays and anniversaries</li>
          <li>Make educational puzzles from science charts or maps</li>
          <li>Kids can digitize and puzzle their artwork</li>
        </ul>
        <p>
          Puzzle is not just a game; puzzle is now used for storytelling, memory-building, and education. They provide a hands-on, inventive outlet within an online format.
        </p>

        <h2 >Family and Group Puzzle Time: Connect and Play Together</h2>
        <p>
          In a time when families are living across different locations, jigsaw puzzles give a shared experience that makes a digital and emotional connection. Whether it's solving puzzles side-by-side on a tablet, the platform brings people together.
        </p>
        <ul>
          <li>Complete puzzles during Zoom calls with grandparents</li>
          <li>Share a bonding activity with kids that builds problem-solving skills</li>
          <li>Compete in puzzle races with friends and compare time scores</li>
        </ul>

        <h2 >Future Puzzle Game Trends: AI, AR, and Mindful Gaming</h2>
        <p>As puzzle gaming evolves, expect exciting innovations:</p>
        <ul>
          <li>Smart AI-generated personalized puzzles will create unique brain exercises based on your skills.</li>
          <li>Augmented Reality puzzles that blend the real world and screen</li>
          <li>Premium puzzle packs with pop culture themes or famous artwork</li>
          <li>Community leaderboards and social puzzle tournaments</li>
        </ul>

        <h2 >Expert Tips to Solve Online Jigsaw Puzzles Faster</h2>
        <p>
          If a player solves a puzzle for 10 to 20 minutes a day, this can reduce anxiety and enhance short-term memory. It’s a good habit for both emotional well-being and mental fitness.
        </p>
        <ul>
          <li>Find a calm, quiet space for maximum focus and excitement</li>
          <li>Enable full-screen mode for interactive puzzling</li>
          <li>Start your puzzle with the edge pieces to form the framework</li>
        </ul>

        <h2 >Why Online Puzzles Are Perfect for Fun and Mental Fitness</h2>
        <p>
          In our opinion, we consider that online puzzle experiences don’t have to be fast, flashy, or addictive to be fun. Online jigsaw puzzles provide an actual blend of creativity and cognitive challenge that benefits users of all ages.
        </p>
        <p>
          Whether you're finding puzzles for fun, educational use, or therapeutic value, this platform continues to lead the way. We proudly recommend discovering the world of jigsaw puzzles an activity that calms the mind while sharpening it.
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

