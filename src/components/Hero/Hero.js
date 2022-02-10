import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding  >
    <LeftSection>
      <SectionTitle>
        Angel Ipanaque <br />
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        Data Scientist and Project Management Consultant
      </SectionText>
      <Button onClick={() => window.location = '#about'} >Get in Touch</ Button>
    </LeftSection>


  </Section>
);

export default Hero;