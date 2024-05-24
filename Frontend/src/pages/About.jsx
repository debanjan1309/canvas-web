import React from "react";
import "../style/About.css"; 
const About = () => {
  return (
    <div className="about-container">
      <section className="hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            {" "}
            Welcome to our vibrant tourist destination website "Explore
            Kolkata"! Discover a world of breathtaking landscapes, rich cultural
            experiences, and unforgettable adventures. Our passionate team is
            your gateway to an unforgettable travel experience. Immerse yourself
            in the beauty of our diverse landscapes, indulge in unique local
            flavors, and create lasting memories. Our mission is to guide you
            through the wonders of Kolkata with expert insights, travel tips,
            and personalized recommendations. Whether you're a solo explorer, a
            family seeking adventure, Explore Kolkata is here to make your
            journey extraordinary. Explore with us and join us on a journey
            where every moment becomes a cherished memory.
          </p>
        </div>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <div className="team-member">
          <img
            src="https://th.bing.com/th/id/OIP.X50jqmcCKft4PEDeAqsDSgHaEK?rs=1&pid=ImgDetMain"
            alt="Team Member 1"
          />
          <h3>Abir Ghosh</h3>
          <p>Developer</p>
        </div>
        <div className="team-member">
          <img
            src="https://wallpapercave.com/wp/HADL376.jpg"
            alt="Team Member 2"
          />
          <h3>Debanjan Das</h3>
          <p>Developer</p>
        </div>
        <div className="team-member">
          <img
            src="https://th.bing.com/th/id/OIP.vSvRnOwfateYUAHmEHiUaQHaLL?rs=1&pid=ImgDetMain"
            alt="Team Member 3"
          />
          <h3>Shreetama Das</h3>
          <p>Developer</p>
        </div>
        <div className="team-member">
          <img
            src="https://th.bing.com/th/id/R.23ee9dea47a2e54178ec8b62a12dccdb?rik=J%2fR6uDaQHH9gIQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fRizD8vo.jpg&ehk=u5AfGgbIBMqqyIQeqyOpELNipvzzj7W7IbRM5HB8mY8%3d&risl=&pid=ImgRaw&r=0"
            alt="Team Member 4"
          />
          <h3>Soumi Bhadra</h3>
          <p>Developer</p>
        </div>
        <div className="team-member">
          <img
            src="https://images.hdqwalls.com/wallpapers/5k-joker-joaquin-phoenix-2019-dr.jpg"
            alt="Team Member 5"
          />
          <h3>Tanushka Chanda</h3>
          <p>Developer</p>
        </div>
        {/* Add more team members as needed */}
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At EXPLORE KOLKATA , we are on a mission to celebrate the vibrant
          tapestry of Kolkata's rich culture, heritage, and experiences. Our
          goal is to be the premier guide for tourists, offering insightful
          recommendations, captivating stories, and personalized itineraries
          that showcase the City of Joy in all its glory. Through our passion
          for Kolkata, we aspire to create memorable journeys for travelers,
          fostering a deep appreciation for the city's history, art, cuisine,
          and warmth of its people. Join us as we embark on a mission to make
          every visit to Kolkata an unforgettable exploration of joy, discovery,
          and connection.
        </p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Quality</li>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer-Centric</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or would like to get in touch, please don't
          hesitate to contact us.
        </p>
        {/* <a href="contact.html" className="cta-button">Contact Us</a> */}
        <section className="footer-social">
          <ul>
            <li>
              <a href="https://www.facebook.com/debanjan.das.10690203?mibextid=ZbWKwL">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/DEBANJANDA53702">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/debanjan_9935">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/debanjan-das-0b49a921b">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/debanjan1309">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </section>
      </section>
      

      
    </div>
  );
};

export default About;
