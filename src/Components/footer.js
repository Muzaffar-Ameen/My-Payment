import React from "react";

const footer = () => {
  return (
    <div>
      <footer className="footer my-10 py-4 bg-dark text-white ">
        <div className="footer-container">
          {/* Brand / Title */}
          <h3 className="footer-logo">Payment App</h3>

          {/* Navigation links */}
          <ul className="footer-links">
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/">Signup</a>
            </li>
            <li>
              <a href="https://wa.me/923474862915">Contact</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
          </ul>

          {/* Social links */}
          <div className="footer-socials">
            <a href="https://web.facebook.com/muzaffar.sahi/" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M8.946 6.745H10.5l.2-2.313H8.946V3.41c0-.63.126-.878.735-.878h1.019V.208H9.14C7.396.208 6.51 1.07 6.51 2.913v1.52H5v2.313h1.51v5.187h2.436V6.745z" />
              </svg>
            </a>

           
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <svg
                xmlns="https://www.linkedin.com/in/muzaffar-ameen-0b5484284"
                width="22"
                height="22"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175A1.13 1.13 0 0 1 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zM3.743 5.1c.837 0 1.357-.554 1.357-1.248-.015-.709-.52-1.248-1.341-1.248S2.4 3.143 2.4 3.852c0 .694.52 1.248 1.327 1.248h.016zm4.905 8.294V9.359c0-.202.015-.404.074-.548.163-.403.535-.821 1.159-.821.819 0 1.146.62 1.146 1.529v3.875h2.401V9.25c0-2.22-1.184-3.253-2.764-3.253-1.274 0-1.845.7-2.165 1.193v.027h-.016l.016-.027V6.169h-2.4c.03.662 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>

            <a
              href="https://github.com/Muzaffar-Ameen/Muzaffar-Ameen"
              target="_blank"
              rel="noreferrer"
            >
              💻
            </a>
          </div>

          {/* Copyright */}
          <p className="footer-copy">
            © {new Date().getFullYear()} Payment App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default footer;
