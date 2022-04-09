import { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { pxToRem } from '../../utils/pxToRem';

type ISideCard = {
  title: string;
  body: string;
  className?: string;
};

export const SideCard: FC<ISideCard> = ({ title, body, className }) => {
  return (
    <Card className={className}>
      <TextContainer>
        <Title>{title}</Title>
        <SubTitle>{body}</SubTitle>
      </TextContainer>
    </Card>
  );
};

const Card = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 163px;
  padding: 12px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  font-family: 'Inter';
  font-weight: 700;
  font-size: ${pxToRem(24)};
  line-height: ${pxToRem(27)};
  color: ${colors.primary.primaryTint50};
  text-align: center;
  letter-spacing: ${pxToRem(-0.015)};
`;
const SubTitle = styled(Title)`
  font-weight: 400;
  margin-top: 4px;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(20)};
`;
