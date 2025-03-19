import React from "react";
import "./style.css"; // Make sure this file has the updated CSS

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h1 className="sub-title text-center my-5">My Services</h1>
        <div className="services-list">
          <div className="service-card">
          <i className="bi bi-laptop"></i>
          <h2>Web <span>Design</span></h2>
            <p>My current stack is Frontend Development with HTML, CSS, Bootstrap,Tailwind Css and JavaScript.
            I am currently learning React.js,and Node.js, hoping to grow my skills in these technologies.</p>
            <a href="/">Click Here!</a>
          </div>

          <div className="service-card">
            <i class="bi bi-kanban"></i>
            <h2>Project <span>Management</span></h2>
            <p>
              I enjoy bringing ideas to life through seamless planning, coordination, and execution. 
              I excel in managing projects from inception to delivery, ensuring timelines, resources, and 
              team dynamics align for success.
            </p>
            <a href="https://www.linkedin.com/in/mutiat-adenekan-96199325a/" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>

          <div className="service-card">
          <i class="bi bi-camera-reels"></i>   
          <h2>Content <span>Creation</span></h2>
            <p>
              I create engaging, audience-focused content that tells stories and sparks connections. 
              My favorite tools include CapCut, InShot, Canva, and Notion.
            </p>
            <a href="https://www.instagram.com/reel/DBvkcSaIg8Y/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">My Content Here!</a>
          </div>

          <div className="service-card">
            <i class="bi bi-palette"></i>
            <h2>Makeup <span>Artistry</span></h2>
            <p>If I’m not tapping away on my screen, you can find me making pretty people even prettier!</p>
            <a href="https://www.instagram.com/reel/DGGAJecI2XP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Check out my Insta!</a>
          </div>
        </div>
      </div>
    </section>
  );
}
