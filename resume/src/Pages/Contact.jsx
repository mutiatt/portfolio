import React from 'react';

export default function Contact() {
  return (
    <div id="contact" className="container py-5">
      <h1 className="sub-title text-start text-orange 
       mb-5">Contact Me</h1>

      <div className="row justify-content-center">
        {/* Left Side - Contact Info & Social Links */}
        <div className="col-12 col-md-6 text-center text-md-start mb-4">
          <div className="contact-left">
            <p><i className="bi bi-send"></i> lamidemutiat@gmail.com</p>
            <p><i className="bi bi-telephone"></i> +234-8189798384</p>
          </div>
          
          <div className="social-icons mt-3">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>

          <a href="./Adenekan Mutiat Olamide CV.pdf" target="_blank" download className="btn btn-dark  mt-3">
            Download CV
          </a>
        </div>

        {/* Right Side - Contact Form */}
        <div className="col-12 col-md-6">
          <div className="contact-right">
            <form name="submit-to-google-sheet">
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="5" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn-dark">Submit</button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>

      
    </div>
  );
}
