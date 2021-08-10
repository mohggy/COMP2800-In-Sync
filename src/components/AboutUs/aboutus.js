import React from "react";
import {
  AboutUsContainer,
  AboutUsH1,
  AboutUsWrapper,
  AboutUsCard,
  AboutUsIcon,
  AboutUsH2,
  AboutUsP,
} from "./AboutUsElement";
import Icon1 from "../../pictures/maggie.png";
import Icon2 from "../../pictures/taqwa.png";
import Icon3 from "../../pictures/izzy.png";
import Icon4 from "../../pictures/alex.png";

const About = () => {
  return (
    <AboutUsContainer id="aboutus">
      <AboutUsH1>Meet the creators</AboutUsH1>
      <AboutUsWrapper>
        <AboutUsCard>
          <AboutUsIcon src={Icon1} />
          <AboutUsH2>Maggie Dou</AboutUsH2>
          <AboutUsP>
            Maggie graduated from the University of Toronto with a degree in
            Biochemistry and Molecular Biology. After working some years post
            graduation, she realized that coding and problem solving was her
            passion and decided to pursue this goal at BCIT's CST program.
          </AboutUsP>
        </AboutUsCard>

        <AboutUsCard>
          <AboutUsIcon src={Icon2} />
          <AboutUsH2>Taqwa Oumed</AboutUsH2>
          <AboutUsP>
            Taqwa is a graduate of BCIT’s Technical Web Designer program and
            current student of their CST program. When not plugged in to her
            computer, she can either be found with her nose in a book or
            rewatching the entire Marvel Cinematic Universe. She aspires to
            complete her current diploma program and pursue a BTech degree.
          </AboutUsP>
        </AboutUsCard>

        <AboutUsCard>
          <AboutUsIcon src={Icon3} />
          <AboutUsH2>Shizuka (Izzy) Sato</AboutUsH2>
          <AboutUsP>
            Izzy graduated from Meisei Art University in Japan, where she
            studied fashion and design. She worked as a Product Service Analyst
            for four years in Vancouver before deciding a career in software
            development. Currently, she is a second-term CST at BCIT.
          </AboutUsP>
        </AboutUsCard>

        <AboutUsCard>
          <AboutUsIcon src={Icon4} />
          <AboutUsH2>Alex Ho</AboutUsH2>
          <AboutUsP>
            Alex graduated with an Accounting Degree from Douglas College. After
            graduation, he sought to challenge himself in a new environment and
            thus found his passion in coding. In his spare time, you'll find him
            lifting weights at the gym or dozing off somewhere. Alex is
            currently pursuing his passion for software development at BCIT.
          </AboutUsP>
        </AboutUsCard>
      </AboutUsWrapper>
    </AboutUsContainer>
  );
};

export default About;
