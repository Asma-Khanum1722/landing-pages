import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-inner">
        
        <div className="ft-reviews-strip">
          <h4 className="ft-reviews-label">What our clients say <span style={{ color: 'rgba(255,255,255,.35)', fontWeight: '500', fontSize: '.85em' }}>&nbsp;· Google Reviews</span></h4>
          <div className="ft-reviews-marquee-wrapper">
            <div className="ft-reviews-row">
              {/* Set 1 */}
              <div className="ft-review-card">
                <div className="ft-stars">★★★★★</div>
                <p className="ft-review-text">"I fully recommend SVR aesthetics! I was listened to, given good advice and the result of my procedure was even better than I could have hoped for. Fantastic service, amazing result."</p>
                <span className="ft-review-by">Rachel Robinson</span>
              </div>
              <div className="ft-review-card">
                <div className="ft-stars">★★★★★</div>
                <p className="ft-review-text">"First time visit and very good experience, felt very comfortable and would definitely recommend to friends and family! Very clean clinic and gives really good skin advice."</p>
                <span className="ft-review-by">Riya Patel</span>
              </div>
              <div className="ft-review-card">
                <div className="ft-stars">★★★★★</div>
                <p className="ft-review-text">"Great friendly service! Great product used for lip fillers. Thanks! Holly R."</p>
                <span className="ft-review-by">Ryan Hill</span>
              </div>
              <div className="ft-review-card">
                <div className="ft-stars">★★★★★</div>
                <p className="ft-review-text">"Lovely experience and knowledgeable."</p>
                <span className="ft-review-by">Anne-Marie Mosley</span>
              </div>
              {/* Set 2 for seamless loop */}
              <div className="ft-review-card" aria-hidden="true">
                <div className="ft-stars">★★★★★</div>
                <p className="ft-review-text">"I fully recommend SVR aesthetics! I was listened to, given good advice and the result of my procedure was even better than I could have hoped for. Fantastic service, amazing result."</p>
                <span className="ft-review-by">Rachel Robinson</span>
              </div>
              <div className="ft-review-card" aria-hidden="true">
                <div className="ft-stars">★★★★★</div>
                <p className="ft-review-text">"First time visit and very good experience, felt very comfortable and would definitely recommend to friends and family! Very clean clinic and gives really good skin advice."</p>
                <span className="ft-review-by">Riya Patel</span>
              </div>
              <div className="ft-review-card" aria-hidden="true">
                <div className="ft-stars">★★★★★</div>
                <p className="ft-review-text">"Great friendly service! Great product used for lip fillers. Thanks! Holly R."</p>
                <span className="ft-review-by">Ryan Hill</span>
              </div>
              <div className="ft-review-card" aria-hidden="true">
                <div className="ft-stars">★★★★★</div>
                <p className="ft-review-text">"Lovely experience and knowledgeable."</p>
                <span className="ft-review-by">Anne-Marie Mosley</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="ft-brand">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '40px' }}>
              <Image src="/SVR-Aesthetics-logo.webp" alt="SVR Aesthetics" width={180} height={60} style={{ objectFit: 'contain' }} priority />
            </Link>
            <p>Professional Cosmetic Care To Help You Look And Feel As Good As You Can.</p>
            <div className="ft-social">
              <a href="https://www.facebook.com/svraesthetics" className="social-pill" aria-label="Facebook" target="_blank" rel="noopener noreferrer">f</a>
              <a href="https://www.instagram.com/svraesthetics" className="social-pill" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="ft-col">
            <h4>Quick Links</h4>
            <ul className="ft-links">
              <li><a href="https://svraesthetics.co.uk/about-us/">About Us</a></li>
              <li><a href="https://svraesthetics.co.uk/treatments/">Treatments</a></li>
              <li><a href="https://svraesthetics.co.uk/pricing/">Pricing</a></li>
              <li><a href="https://svraesthetics.co.uk/faq/">FAQ</a></li>
            </ul>
          </div>
          
          <div className="ft-col">
            <h4>Policies</h4>
            <ul className="ft-links">
              <li><a href="https://svraesthetics.co.uk/privacy-policy/">Privacy Policy</a></li>
              <li><a href="https://svraesthetics.co.uk/terms-conditions/">Terms &amp; Conditions</a></li>
              <li><a href="https://svraesthetics.co.uk/complaints-policy/">Complaints Policy</a></li>
            </ul>
          </div>
          
          <div className="ft-col">
            <h4>Working Hours</h4>
            <div className="hours-grid">
              <div className="hr-row" id="hr-wkday">
                <span className="hr-day">Monday – Friday</span>
                <span className="hr-time">10:00 am – 7:00 pm</span>
              </div>
              <div className="hr-row" id="hr-sat">
                <span className="hr-day">Saturday</span>
                <span className="hr-time">10:00 am – 8:30 pm</span>
              </div>
              <div className="hr-row" id="hr-sun">
                <span className="hr-day">Sunday</span>
                <span className="hr-time">Closed</span>
              </div>
              <p className="hr-note">Opening times (Appointment only):<br/>Mon–Thur: 10:00 PM – 04:00 PM<br/>Friday – Sat: 10:00 PM – 04:00</p>
            </div>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>COPYRIGHT &copy; 2026 SVR AESTHETICS | ALL RIGHTS RESERVED. &nbsp;&middot;&nbsp; <a href="https://svraesthetics.co.uk/privacy-policy/">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
}
