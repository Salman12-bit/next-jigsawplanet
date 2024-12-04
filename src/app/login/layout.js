export const metadata = {
    title: "jigsaw planet Login Information",
    description: "This is the login page for jigsaw planet.",
    openGraph: {
        title: "Jigsaw Planet Login",
        description: "Log in to access jigsaw planet and start your puzzle journey.",
        url: "https://jigsawplanet.us/login",
        images: [
            {
                url: "https://jigsawplanet.us/images/jigsaw-planet-login.jpg",
                width: 1200,
                height: 630,
                alt: "Login to jigsaw planet and start your puzzle journey",
            },
        ],
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
