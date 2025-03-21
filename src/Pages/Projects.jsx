import React from "react";
import work1 from "../images/work1.jpg";
import work2 from "../images/work2.jpg";
import cart from "../images/cart.jpg";
import truckboxes from "../images/truck-boxes-supply-chain-representation.jpg";
import graphic from "../images/graphic-design-day.jpg";
import recipe from "../images/recipe.jpg";
import TiltedCard from '../Components/TiltedCards';
import GradientText from "../Components/GradientText";


export default function Projects() {
  return (
    <div className="container">
         <div id="portfolio">
          {/* <h1 className="sub-title mt-5 text-center">Projects */}
                <GradientText
                  colors={["#FFA500", "#40ffaa", "#FFA500", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="sub-title mt-5 mb-5"
                >
                    Projects
                </GradientText>

          <div className="row work-list">
            <div className="col-md-6 col-lg-4">
                <a href="https://mutiatt.github.io/portfolio.github.io/m3collective/atelier.html"
                  target="_blank" rel="noopener noreferrer">
                    <TiltedCard
                          imageSrc={work1}
                          altText="Web Design"
                          captionText="Web Design"
                          containerHeight="300px"
                          containerWidth="300px"
                          imageHeight="300px"
                          imageWidth="300px"
                          loading="lazy"
                          rotateAmplitude={12}
                          scaleOnHover={1.2}
                          showMobileWarning={false}
                          showTooltip={true}
                          displayOverlayContent={true}
                          overlayContent={
                            <p className="tilted-card-demo-text"></p>
                        }
                    />
                </a>
            </div>
             <div className="col-md-6 col-lg-4">
                <a href="https://mutiatt.github.io/portfolio.github.io/WIX/index.html"
                      target="_blank" rel="noopener noreferrer">
                        <TiltedCard
                              imageSrc={work2}
                              altText="Landing Pages"
                              captionText="Landing Pages"
                              containerHeight="300px"
                              containerWidth="300px"
                              imageHeight="300px"
                              imageWidth="300px"
                              loading="lazy"
                              rotateAmplitude={12}
                              scaleOnHover={1.2}
                              showMobileWarning={false}
                              showTooltip={true}
                              displayOverlayContent={true}
                              overlayContent={
                                <p className="tilted-card-demo-text"></p>
                            }
                      />
                    </a>
              </div>
            <div className="col-md-6 col-lg-4">
              <a href=" https://mutiatt.github.io/portfolio.github.io/ML%20logistics/index.html"
                        target="_blank" rel="noopener noreferrer">
                          <TiltedCard
                                imageSrc={truckboxes}
                                altText="e-commerce"
                                captionText="E-commerce"
                                containerHeight="300px"
                                containerWidth="300px"
                                imageHeight="300px"
                                imageWidth="300px"
                                loading="lazy"
                                rotateAmplitude={12}
                                scaleOnHover={1.2}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                  <p className="tilted-card-demo-text"></p> }
                                  />
                </a>
            </div>

            <div className="col-md-6 col-lg-4">
              <a href="https://mutiatt.github.io/portfolio.github.io/firebase/index.html"
                        target="_blank" rel="noopener noreferrer">
                          <TiltedCard
                                imageSrc={cart}
                                altText="Shopping Cart"
                                captionText="Shopping Cart"
                                containerHeight="300px"
                                containerWidth="300px"
                                imageHeight="300px"
                                loading="lazy"
                                imageWidth="300px"
                                rotateAmplitude={12}
                                scaleOnHover={1.2}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                  <p className="tilted-card-demo-text"></p> }
                                  />
                </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="https://mutiatt.github.io/portfolio.github.io/Mario/views/class.html"
                        target="_blank" rel="noopener noreferrer">
                          <TiltedCard
                                imageSrc={graphic}
                                altText="ebook design"
                                captionText="Ebook Clone"
                                containerHeight="300px"
                                containerWidth="300px"
                                imageHeight="300px"
                                imageWidth="300px"
                                loading="lazy"
                                rotateAmplitude={12}
                                scaleOnHover={1.2}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                  <p className="tilted-card-demo-text"></p> }
                                  />
                </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="https://mutiatt.github.io/portfolio.github.io/restaurant/menu.html"
                        target="_blank" rel="noopener noreferrer">
                          <TiltedCard
                                imageSrc={recipe}
                                altText="recipes"
                                captionText="Recipe Menu"
                                containerHeight="300px"
                                containerWidth="300px"
                                imageHeight="300px"
                                imageWidth="300px"
                                loading="lazy"
                                rotateAmplitude={12}
                                scaleOnHover={1.2}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                  <p className="tilted-card-demo-text"></p> }
                                  />
                </a>
            </div>

            

          {/* <div className="text-center">
            <a href="https://mutiatt.github.io/portfolio.github.io/Mario/views/class.html" className="btn">See More</a>
          </div> */}
        </div>
</div>
</div>
 
  );
}
