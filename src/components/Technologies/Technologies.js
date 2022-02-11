import React from 'react';
import { DiScrum, DiDatabase, DiReact, DiAws, DiGoogleAnalytics } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
      <br /><br />
      <SectionTitle>Services</SectionTitle>
      <SectionText>
        As a freelance data analyst and data scientist, I translate data into valuable and comprehensible insights. My goal is to improve results, make the right decisions and save costs. I am experienced in machine learning, supervised and unsupervised algorithms and use data visualization techniques to present the results. I use SQL, R, Python, QlikView and Tableau for my data projects.
      </SectionText>
      <List>
      <ListItem>
        <DiGoogleAnalytics size="4rem" />
        <ListContainer>
          <ListTitle>Data analysis </ListTitle>
          <ListParagraph>
            I am specialized in analyzing data. Results, trends and recommendations are clearly presented in reports or tools. <br />
            future link<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAws size="4rem" />
        <ListContainer>
          <ListTitle>Consulting and coaching projects</ListTitle>
          <ListParagraph>
            Before and during data related projects, I give advice on the progress of the project and I coach data analysts. <br />
            future example <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="4rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Get more value from your data, create a new one or implement, modify your old dataset.<br />
            SQL, SQLite, NoSQL<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiScrum size="4rem" />
        <ListContainer>
          <ListTitle>R-ports and infographics</ListTitle>
          <ListParagraph>
            Present your data in an inspiring way by using an infographic rather than a piece of text. I create interactive infographics which can be used internally or publicly. <br />
            Matplotlib, Seaborn, Tableau<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front-End web developer</ListTitle>
          <ListParagraph>
            As a web developer, I help to design and create the perfect website for starters and freelancers. The website is optimized for desktop and smartphone. <br />
            React.js, Redux, Next.js<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
