import React, { useState } from "react";
import profile from "../images/profile.jpeg"; 
import "../Pages/style.css";
import SplitText from "../Components/SplitText";
import DecryptedText from '../Components/DecryptedText';




export default function Home() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("skills");

  // Function to handle tab switching
  const opentab = (tabname) => {
    setActiveTab(tabname);
  };
 
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};



  return (
    <div>
      <div className="container-xxl">
        <div className="row align-items-center d-flex">
          <div className="col-md-6">
            <img src={profile} alt="Mutiat's Portfolio" width={400} className="rounded-pill ms-2 my-5 me-5 py-5 img-fluid" />
          </div>

          <div className="col-md-6 header-text justify-content-between align-items-center">
            <SplitText
                text= "Hi, I'm Mutiat"
                className="text-2xl font-semibold text-center mt-5"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
               <p className="">Software Developer</p>

               <SplitText
                text="Passionate about crafting beautiful, responsive, and user-friendly web experiences. When I’m not coding, you’ll find me managing projects or creating lifestyle content."
                className="text-2xl font-semibold text-center lead mb-5"
                delay={10}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />               
               
          </div>

          <div className=" mt-5 about-col-1 col-md-6">
            {/*
            {/* Tab Links */}
            <div className="text-end tab-titles">
              <p className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`} onClick={() => opentab("skills")}>Skills</p>
              <p className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`} onClick={() => opentab("experience")}>Experience</p>
              <p className={`tab-links ${activeTab === "education" ? "active-link" : ""}`} onClick={() => opentab("education")}>Education</p>
            </div>

            {/* Tab Contents */}
            <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`} id="skills">
              <ul>
                <li><span>Web Development</span><br/>Html, Css, TailwindCss, Bootstrap, JavaScript, ReactJs, NodeJs</li>
                <li><span>Project Management</span><br/>Building and Managing Project Features</li>
                <li><span>Digital Creator</span><br/>Content Creation and Video Editing</li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`} id="experience">
              <ul>
                <li><span>2024</span><br/>Full Stack Development Training at Mackintouch Consulting</li>
                <li><span>2024</span><br/>Project Manager, Volunter- HerBode Org.</li>
                <li><span>2023</span><br/>Internship, Virdi Nigeria LTD.</li>
                <li><span>2022-2023</span><br/>Vice President, NACOS(Lead City University Chapter)</li>
                <li><span>2022-2023</span><br/>Student Ambassador, Huawei ICT Academy</li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`} id="education">
              <ul>
                <li><span>2021-2024</span><br/>BSc, LeadCity University.</li>
                <li><span>2018-2019</span><br/>A'Levels, University Of Lagos.</li>
                <li><span>2011-2017</span><br/>SSCE, FUNAAB International School.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
