import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import anisha from '../Icons/avatar-anisha.png';
import richard from '../Icons/avatar-richard.png';
import ali from '../Icons/avatar-ali.png';
import shanai from '../Icons/avatar-shanai.png';

export default class SimpleSlider extends Component {

    render() {


        const reviews = [
            {
                id: 1,
                img: richard,
                name: 'Richard Watts',
                text: `"Manage allows us to provide structure and process. It keeps us organised and focus.
                       I can't stop recommending them to everyone i talk to "`,

            },

            {
                id: 2,
                img: ali,
                name: `Ali Bravo`,
                text: `"We have been able to cancel so many other subscriptions since using Manage.
                        There is no more cross-channel confusion and everyone is much more focused. "`
            },

            {
                id: 3,
                img: anisha,
                name: `Anisha Li`,
                text: `"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones
                        at all times keeps everyone motivated."`,
            },

            {
                id: 4,
                img: shanai,
                name: `Shanai Gough`,
                text: `"Thier software allows us to manage, track and collaborate on our projects from anywhere.
                        It keeps the whole team in-sync without being intrusive."`,
            }

        ]


        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings} className='mobile-slider'>

                    {
                        reviews.map(
                            (i) => (
                                <div className="testimonials">

                                    <img src={i.img} alt='avatar' />

                                    <h3>
                                        {i.name}
                                    </h3>

                                    <p>
                                        {i.text}
                                    </p>
                                </div>
                            )
                        )
                    }

                </Slider>
            </div>
        );
    }
}