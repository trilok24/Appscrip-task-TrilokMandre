import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.subscribeSection}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <form className={styles.form}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <div className={styles.contactSection}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>🇺🇸 - USD</p>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>

      <div className={styles.linksRow}>
        <div className={styles.linkColumn}>
          <h5>mettā muse</h5>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className={styles.linkColumn}>
          <h5>QUICK LINKS</h5>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styles.followColumn}>
          <h5>FOLLOW US</h5>
          <div className={styles.socials}>
            <span>🔗</span>
            <span>💼</span>
          </div>
          <h5>mettā muse ACCEPTS</h5>
          <div className={styles.payments}>
            <img src="/payments/googlepay.png" alt="Google Pay" />
            <img src="/payments/mastercard.png" alt="Mastercard" />
            <img src="/payments/paypal.png" alt="Paypal" />
            <img src="/payments/amex.png" alt="Amex" />
            <img src="/payments/applepay.png" alt="Apple Pay" />
            <img src="/payments/shop.png" alt="Shop Pay" />
          </div>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <p>Copyright © 2025 Trilok Mandre. All rights reserved.</p>
      </div>
    </footer>
  );
}
