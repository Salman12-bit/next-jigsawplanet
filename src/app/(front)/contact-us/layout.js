export const metadata = {
    title: "Contact Us - PuzzlesPlan",
    description: "Get in touch with the PuzzlesPlan team for support, inquiries, or feedback. We're here to help!",
    openGraph: {
        title: "Contact Us - PuzzlesPlan",
        description: "Have questions or need assistance? Reach out to the PuzzlesPlan team for support, feedback, and general inquiries.",
        url: "https://puzzlesplan.com/contact-us",
        images: [
            {
                url: "https://puzzlesplan.com/images/puzzlesplan.webp",
                width: 1200,
                height: 630,
                alt: "Contact PuzzlesPlan for support and inquiries",
            },
        ],
    },
    alternates: {
        canonical: "https://puzzlesplan.com/contact-us",
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
