import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <ul className={styles.footerSection}>
          <li><Link href="about">About Us</Link></li>
          <li><Link href="/privacypolicy">Privacy Policy</Link></li>
        </ul>
        <div className={styles.footerSection}>
          <Link href="https://www.facebook.com/groups/590704540347867/?ref=share&mibextid=NSMWBT" target="_blank">
            <Image
              className={styles.gameImage}
              src="/images/Facebook.png"
              alt="Join our Facebook group for advanced jigsaw puzzles"
              width={25}
              height={25}
              loading="lazy"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-salman-998256261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <Image
              className={styles.gameImage}
              src="/images/Linkedin.png"
              alt="Join our Facebook group for advanced jigsaw puzzles"
              width={25}
              height={25}
              loading="lazy"
            />
          </Link>
          <br/>
          <Link href="/termofservices">Term Of Service</Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        &copy; 2024 Jigsawplanet.us All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
