import React from 'react';
import "./privacy.css";

const PrivacyPolicy = () => {
    return (
        <div className='privacy'>
            <h1>Privacy Policy</h1>
            <div className="privacy-content">
                <h2>1. Information Collection and Use</h2>
                <p>
                    At PuzzlesPlan, we prioritize your privacy and are committed to protecting your personal information. 
                    When you interact with our website, we may collect the following types of data:
                </p>
                <ul>
                    <li><strong>Personal Information:</strong> This includes details such as your name, email address, or any other information you voluntarily provide when creating an account or reaching out to us.</li>
                    <li><strong>Usage Data:</strong> Information about your interactions with our website, including IP address, browser type, pages visited, and activity logs.</li>
                </ul>
                <p>
                    This data helps us enhance your experience, offer personalized features, and maintain the functionality of our platform.
                </p>

                <h2>2. Cookies</h2>
                <p>
                    PuzzlesPlan uses cookies to improve your browsing experience. These small data files stored on your device allow us to:
                </p>
                <ul>
                    <li>Remember your preferences and settings for a more tailored experience.</li>
                    <li>Analyze website traffic and user behavior to enhance our services.</li>
                    <li>Ensure smooth navigation and optimized performance.</li>
                </ul>
                <p>
                    You can disable cookies in your browser settings, but some features of the website may not function properly as a result.
                </p>

                <h2>3. Third-Party Links</h2>
                <p>
                    PuzzlesPlan may contain links to external websites or services. Please be aware that we do not control their privacy policies or content.
                </p>
                <ul>
                    <li>We recommend reviewing the privacy policies of any third-party websites you visit.</li>
                    <li>PuzzlesPlan is not responsible for any data collection or security practices beyond our platform.</li>
                </ul>

                <h2>4. Service Terms</h2>
                <p>
                    By using PuzzlesPlan, you agree to the terms outlined in this Privacy Policy. We are committed to continuous improvements and may update this policy periodically. 
                </p>
                <p>
                    If you have any questions regarding data protection or privacy, feel free to contact us through our official support channels.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
