import React from 'react';
import "./term.css";

const TermofService = () => {
    return (
        <div className='term'>
            <h1>Terms of Service</h1>
            <div className="terms-content">
                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing and using PuzzlesPlan.com, you agree to comply with and be bound by these Terms of Service. 
                    If you do not agree to these terms, please discontinue the use of our website.
                </p>

                <h2>2. Content Policy</h2>
                <p>
                    To maintain a high-quality user experience, we enforce the following guidelines:
                </p>
                <ul>
                    <li>Users must not post, upload, or share any content that is offensive, misleading, irrelevant, or inappropriate.</li>
                    <li>PuzzlesPlan reserves the right to remove any content deemed harmful, irrelevant, or damaging to the platform without prior notice.</li>
                </ul>

                <h2>3. Content Usage & License</h2>
                <p>
                    All content available on PuzzlesPlan.com, including text, images, graphics, and multimedia, is owned and licensed exclusively by PuzzlesPlan.
                </p>
                <ul>
                    <li>You are granted a non-exclusive, limited license to access and use the content for personal, non-commercial purposes.</li>
                    <li>Unauthorized reproduction, modification, or redistribution of content without written consent from PuzzlesPlan is strictly prohibited.</li>
                    <li>Violation of this content policy may lead to legal action.</li>
                </ul>

                <h2>4. Copyright & Intellectual Property</h2>
                <p>
                    All rights to the trademarks, logos, and intellectual property displayed on PuzzlesPlan.com are protected under applicable copyright laws.
                </p>
                <ul>
                    <li>Content on this website may not be copied, distributed, or used in any way without explicit permission from PuzzlesPlan.</li>
                    <li>Attempts to infringe upon PuzzlesPlan’s intellectual property rights will be subject to legal enforcement.</li>
                    <li>If you believe that any content on PuzzlesPlan violates copyright laws, please contact us for a resolution.</li>
                </ul>
            </div>
        </div>
    );
};

export default TermofService;
