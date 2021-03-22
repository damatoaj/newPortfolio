import React from 'react';
import { useState, useEffect } from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Logo from '../../assests/Authur-logo-small.png';
import BigLogo from '../../assests/Authur-logo-big.png';
import Projects from '../Pages/Projects';
import Container from 'react-bootstrap/Container';
// import SlideShow from './Statics/SlideShow';



const Homepage = (props) => {
    const [current, setCurrent] = useState(0);
    const length = props.slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1: current - 1)
    }

console.log(current)


        return(
            <section>
                <picture>
                    <source media="(min-width:750px)"  srcSet={BigLogo}/>
                    <img src={Logo} alt="logo"/>
                </picture>
                <div className='arrows'>
                    <IconContext.Provider value={{ className:'react-icons' }}>
                        <FaArrowAltCircleLeft onClick={prevSlide}/>
                        <FaArrowAltCircleRight onClick={nextSlide}/>
                    </IconContext.Provider>
                </div>
                <div>
                    {props.slides.map((slide, index) => {
                        return(
                        
                            <div className={index === current ? 'slide_active' : 'slide'} key={index}>
                                {index === current && (
                                <> 
                                    <figcaption>{slide.caption}</figcaption>
                                    <img src={slide.image} alt="travel image" className="slides"/>
                                </>
                                )}
                            </div>
                           
                           )
                        })}
                    <Projects />
                </div>
            </section>
        )
}

export default Homepage;