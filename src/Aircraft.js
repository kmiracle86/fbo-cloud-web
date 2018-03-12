import React from 'react';
import styled from 'styled-components';
import { getRandomImg, trimParagraph } from './utils';
import {
  ButtonBar,
  PrimaryButton,
  SecondaryButton
} from './reusable-components/Button';

const Card = styled.div`
  margin: 20px;
  width: 25rem;
  height: 500px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
`;

const Top = styled.div`
  height: 200px;
`;

const Middle = styled.div`
  padding: 15px;
  height: 200px;
`;

const Bottom = styled.div``;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding: 0;
  display: inline;
  margin-right: 5px;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  display: inline;
`;

const Description = styled.p`
  margin-top: 7px;
  height: 100px;
`;

const Aircraft = ({ aircraft: { registration, type, color, description }}) => {
  return (
    <Card>
      <Top>
        <img src={getRandomImg(400,200)} alt={registration} />
      </Top>
      <Middle>
        <Title>
          {registration.toUpperCase()}
        </Title>
        <SubTitle>{type.toUpperCase()}</SubTitle>
        <Description>
          Description: {trimParagraph(description)}
        </Description>
      </Middle>
      <Bottom>
        <ButtonBar>
          <PrimaryButton>Reserve</PrimaryButton>
          <SecondaryButton>View</SecondaryButton>
          <SecondaryButton>Edit</SecondaryButton>
        </ButtonBar>
      </Bottom>
    </Card>
  );
}

export default Aircraft;
