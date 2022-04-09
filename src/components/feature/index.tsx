import { FC } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';

type IFeature = {
  title: string;
  body: string;
};
export const Feature: FC<IFeature> = ({ title, body }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 34px;
  max-width: 353px;
`;
const Title = styled.h3`
  font-weight: 700;
  font-size: ${pxToRem(20)};
  line-height: ${pxToRem(26)};
  color: #000b33;
`;

const Body = styled.p`
  font-weight: 400;
  margin-top: 15px;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(26)};
  color: #000b33;
`;
