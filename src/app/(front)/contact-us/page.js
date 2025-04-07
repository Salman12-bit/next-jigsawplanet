import React from "react";
import "./contact.css";
import Button from "@/components/Button/Button";

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - PuzzlesPlan",
    "description": "Get in touch with the PuzzlesPlan team to resolve your queries through this contact form.",
    "url": "https://puzzlesplan.com/contact-us", 
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/puzzlesplan.webp", 
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/contact-us"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@puzzlesplan.com", 
      "telephone": "+92-336-389-1016",
      "url": "https://puzzlesplan.com/contact-us", 
    },
  };

  return (
    <div className="imgformat">
      <h1 className="title-text">Let’s Solve Your Queries</h1>
      <div className="content-text">
        <form className="form">
          <input type="text" placeholder="Your Name" className="input-text" />
          <input type="email" placeholder="Your Email" className="input-text" />
          <textarea
            className="textarea"
            placeholder="Your Message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </div>
  );
};

export default Contact;
