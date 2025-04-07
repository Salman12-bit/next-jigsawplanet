export const metadata = {
  title: "PuzzlesPlan About Us",
  description: "Enjoy the thrilling Freezenova game on PuzzlesPlan. Solve interactive puzzles, enhance cognitive skills, and embrace the ultimate challenge.",
  openGraph: {
    title: "PuzzlesPlan | About Us",
    description: "Dive into the Freezenova adventure with PuzzlesPlan. Play free puzzles, sharpen your mind, and conquer exciting challenges today!",
    url: "https://puzzlesplan.com/about-us",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 600,
        height: 400,
        alt: "PuzzlesPlan puzzle game experience",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/about-us",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
