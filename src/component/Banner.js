import React from "react"
import intro1 from "../assets/images/pages/home/intro1.jpg";
import intro2 from "../assets/images/pages/home/intro2.jpg";
import intro3 from "../assets/images/pages/home/intro3.jpg";
import intro4 from "../assets/images/pages/home/intro4.jpg";
import intro5 from "../assets/images/pages/home/intro5.jpg";
import {Carousel} from "react-responsive-carousel";

const Banner = () => {

    return (
        <Carousel showThumbs={false} emulateTouch={true} showArrows={false}>
            <div>
                <a href="#">
                    <img src={intro1}  alt="Intro 1"/>
                </a>
            </div>
            <div>
                <img src={intro2}  alt="Intro 2"/>
            </div>
            <div>
                <img src={intro3}  alt="Intro 3"/>
            </div>
            <div>
                <img src={intro4}  alt="Intro 4"/>
            </div>
            <div>
                <img src={intro5}  alt="Intro 5"/>
            </div>
        </Carousel>
    )
}

export default Banner