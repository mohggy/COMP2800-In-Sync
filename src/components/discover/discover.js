import React, { useState } from "react";
import {
  DiscoverBackground,
  DiscoverContainer,
  DiscoverContent,
  DiscoverH1,
  DiscoverP,
  DiscoverBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./DiscoverElements.js";
import Picture from "../../pictures/planner.jpg";
import { Button } from "./../buttons/ButtonElement.js";

const DiscoverSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <DiscoverContainer>
      <DiscoverBackground>
        <img src={Picture} alt="background"></img>
      </DiscoverBackground>
      <DiscoverContent>
        <DiscoverH1>Syncing schedules made easy</DiscoverH1>
        <DiscoverP>
          Syncing up your schedule with your friends has never been easier
        </DiscoverP>
        <DiscoverP>Sign up today and get syncing</DiscoverP>
        <DiscoverBtnWrapper>
          <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </DiscoverBtnWrapper>
      </DiscoverContent>
    </DiscoverContainer>
  );
};

export default DiscoverSection;
