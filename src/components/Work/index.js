import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Work.scss'

function Work() {
    return (
        <div id="Work">
            <h2>Our Work</h2>
            <Carousel className="vas-carousel" infiniteLoop={true}>
                <div>
                    <img src="./kitchen1.jpg" />
                </div>
                <div>
                    <img src="./kitchen2.jpg" />
                </div>
                <div>
                    <img src="./kitchen3.jpg" />
                </div>
                <div>
                    <img src="./kitchen4.jpg" />
                </div>
                <div>
                    <img src="./kitchen5.jpg" />
                </div>
                <div>
                    <img src="./kitchen6.jpg" />
                </div>
            </Carousel>
        </div>
    )
}

export default Work