import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 5, text: 'Plants owned', },
  { number: 30, text: 'KMs per week on bike', },
  { number: 225, text: 'Paladin Tauren DPS ilvl', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider/>
    <br/><br/>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>

  </Section>
);

export default Acomplishments;
