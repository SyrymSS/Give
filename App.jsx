import React from "react";
import "./style.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to Give From and To</h1>
        <p>A platform to share and give with love.</p>
      </header>
      <main className="main-content">
        <section className="about">
          <h2>About Us</h2>
          <p>
            We believe in the power of giving. Our mission is to connect people
            who want to give with those in need.
          </p>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <label>
              Your Name:
              <input type="text" name="name" placeholder="Enter your name" />
            </label>
            <label>
              Your Message:
              <textarea name="message" placeholder="Write your message"></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Give From and To. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;