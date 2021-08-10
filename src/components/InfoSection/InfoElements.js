import styled from "styled-components";
import { Link } from "react-router-dom";

export const InfoSectionContainer = styled.div`
  background: white;
  height: 100vh;
`;

export const InfoSectionWrapper = styled.div`
  background: white;
`;

export const InfoSectionH1 = styled.h1`
  margin-left: 60px;
  margin-top: 60px;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  color: black;
  font-size: 24pt;
`;

export const InfoSectionSubtitle = styled.p`
  margin-left: 60px;
  margin-right: 20px;
  font-size: 16pt;
  color: black;
`;

export const InfoSectionDescription = styled.p`
  margin-left: 60px;
  margin-right: 20px;
  font-size: 11pt;
  color: black;
`;

export const InfoSectionPicture = styled.img`
  width: 500px;
  height: 300px;
  float: right;

  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;

export const InfoBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
`;
export const Linked = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: none;
    color: black;
  }
`;
