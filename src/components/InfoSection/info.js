import React from "react";
import { Button } from "../buttons/ButtonElement";
import {
  InfoSectionContainer,
  InfoSectionWrapper,
  InfoSectionH1,
  InfoSectionSubtitle,
  InfoSectionDescription,
  InfoSectionPicture,
  InfoBtnWrapper,
} from "./InfoElements";

const infoSection = ({ id, heading, headline, description, button, img }) => {
  return (
    <InfoSectionContainer lightBG id={id}>
      <InfoSectionWrapper lightBG>
        <InfoSectionH1 notDark>{heading}</InfoSectionH1>
        <InfoSectionSubtitle>{headline}</InfoSectionSubtitle>
        <InfoSectionDescription>{description}</InfoSectionDescription>
        <InfoBtnWrapper>
          <Button
            primary="true"
            dark=""
            to="/signup"
            style={{ color: "black" }}
          >
            {button}
          </Button>
        </InfoBtnWrapper>
        <InfoSectionPicture src={img} />
      </InfoSectionWrapper>
    </InfoSectionContainer>
  );
};

export default infoSection;
