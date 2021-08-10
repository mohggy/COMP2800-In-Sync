import React, { useState } from "react";
import {
  HeroBackground,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements.js";
import Picture from "../../pictures/planner.jpg";
import { Button } from "../buttons/ButtonElement.js";

const DiscoverSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBackground>
        <img src={Picture} alt="background"></img>
      </HeroBackground>
      <HeroContent>
        <HeroH1>Syncing schedules made easy</HeroH1>
        <HeroP>
          Syncing up your schedule with your friends has never been easier
        </HeroP>
        <HeroP>Sign up today and get syncing</HeroP>
        <HeroBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="false"
            dark="true"
            to="/signup"
            style={{ color: "black" }}
          >
            Get Started
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default DiscoverSection;
