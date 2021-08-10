import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
`;
export const HeroH1 = styled.h1`
  color: black;
  font-size: 48px;
  text-align: center;
  letter-spacing: 0.1em;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const HeroP = styled.p`
margin-top: 24px;
color: black;
font-size: 24px;
text-align: center;
max-width: 600px;
}
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Linked = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: none;
    color: black;
  }
`;
