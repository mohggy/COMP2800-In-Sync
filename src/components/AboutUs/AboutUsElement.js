import styled from "styled-components";

export const AboutUsContainer = styled.div`
height 1000px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background: #ff6150;

@media screen and (max-width: 768px) {
    height: 1800px;
}

@media screen and (max-width: 480px) {
    height: 1800px;
}
`;

export const AboutUsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const AboutUsCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 565px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 768px) {
    height: 390px;
  }

  @media screen and (max-width: 1000px) {
    height: 395px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
`;

export const AboutUsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const AboutUsH1 = styled.h1`
  margin-top: 20px;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AboutUsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const AboutUsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
