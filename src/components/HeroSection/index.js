import React, {useState} from 'react'
import video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import { 
  HeroContainer,
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroBtnWrapper, 
  ArrowForward, 
  ArrowRight } from './heroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <HeroContainer>
      <HeroBg>
      <VideoBg autoPlay loop>
        <source src={video} type="video/mp4" />
      </VideoBg>
        
      </HeroBg>
      <HeroContent>
        <HeroH1> Listen to your favourite artists
         wherever you are.</HeroH1>
        <HeroP>
          Sign up and try it for free for 3 months. 
          No credit cards needed.
          No Bullsh*t.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover}
          onMouseLeave={onHover}>
          Try it {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
