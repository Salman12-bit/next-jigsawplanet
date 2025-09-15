import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <p className={styles.contact}>
            📧 Email: <a href="mailto:msalman39707@gmail.com">support@puzzlesplan.com</a>
          </p>
          <p className={styles.contact}>📞 Phone: +92 336 389 1016</p>

          <h3>Follow Us</h3>
          <div className={styles.socialIconsRow}>
            <Link href="https://www.facebook.com/groups/590704540347867/?ref=share&mibextid=NSMWBT" target="_blank">
              <Image className={styles.socialIcon} src="/images/Facebook.png" alt="Facebook" width={30} height={30} loading="lazy" />
            </Link>
            <Link href="https://www.linkedin.com/in/muhammad-salman-998256261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <Image className={styles.socialIcon} src="/images/Linkedin.png" alt="LinkedIn" width={30} height={30} loading="lazy" />
            </Link>
          </div>
        </div>
        <div className={styles.footerMiddle}>
          <h3>Subscribe to Our Newsletter</h3>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
          <p>Get the latest updates and exclusive content directly to your inbox.</p>
          <Link href="/contact-us" className={styles.footerLink}>Contact Us</Link>
        </div>
        <div className={styles.footerRight}>
          <Link href="/termofservices" className={styles.footerLink}>Terms of Service</Link>
          <Link href="/privacypolicy" className={styles.footerLink}>Privacy Policy</Link>
          <Link href="/about-us" className={styles.footerLink}>About Us</Link>
          <Link href="/faq" className={styles.footerLink}>FAQ</Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} puzzlesplan | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
