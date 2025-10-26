import React from "react";
import "../styles/PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

        <section className="privacy-section">
          <h2>Introduction</h2>
          <p>
            Hare Rama Events ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your 
            information when you use our website and services.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Information We Collect</h2>
          <p>We may collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information (phone number, email address)</li>
            <li>Event details and preferences</li>
            <li>Venue information</li>
            <li>Any other information you choose to provide</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Data Sharing and Third Parties</h2>
          <p>
            <strong>We do not sell, share, or disclose your personal information, including 
            phone numbers, to third parties for marketing or promotional purposes.</strong>
          </p>
          <p>
            We may share your information only in the following circumstances:
          </p>
          <ul>
            <li>With service providers who assist us in operating our business (e.g., hosting, payment processing)</li>
            <li>When required by law or to protect our rights</li>
            <li>In connection with a business transfer or merger</li>
          </ul>
          <p>
            Any service providers we work with are required to maintain the confidentiality 
            of your information and are not permitted to use your information for any other purpose.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Consent and Opt-In</h2>
          <p>
            By providing your phone number and checking the opt-in box on our contact form, 
            you agree to be contacted by Hare Rama Events via call, email, and text message 
            regarding our event services.
          </p>
          <p><strong>Message and data rates may apply.</strong></p>
          <p><strong>Message frequency varies.</strong></p>
        </section>

        <section className="privacy-section">
          <h2>How to Opt-Out</h2>
          <p>You can opt-out of receiving communications from us at any time by:</p>
          <ul>
            <li>Replying "STOP" to any text message</li>
            <li>Replying "HELP" for assistance</li>
            <li>Clicking the unsubscribe link in any email</li>
            <li>Contacting us directly at the information provided below</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect 
            your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, 
            please contact us:
          </p>
          <p>
            <strong>Hare Rama Events</strong><br />
            Email: <a href="mailto:hareramaevents@gmail.com">hareramaevents@gmail.com</a><br />
            Phone: <a href="tel:19496076318">(949) 607-6318</a>
          </p>
        </section>

        <section className="privacy-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>
      </div>
    </div>
  );
}
