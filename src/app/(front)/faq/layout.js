export const metadata = {
  title: "PuzzlesPlan FAQ",
  description: "Find answers to common questions about PuzzlesPlan. Learn how to play, manage your account, and troubleshoot issues with our puzzle platform.",
  openGraph: {
    title: "PuzzlesPlan | FAQ",
    description: "Explore frequently asked questions about PuzzlesPlan. Get help with gameplay, accounts, and technical support for the best puzzle-solving experience.",
    url: "https://puzzlesplan.com/faq",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 600,
        height: 400,
        alt: "PuzzlesPlan FAQ section",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/faq",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
