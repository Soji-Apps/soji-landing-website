import { FC } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';

type IGoalCard = {
  imgSrc: string;
  name: string;
  body: string;
  className?: string;
};
export const GoalCard: FC<IGoalCard> = ({ imgSrc, name, body, className }) => {
  return (
    <Card className={className}>
      <Avatar src={imgSrc} />
      <TextContainer>
        <Name>{name}</Name>
        <SubTitle>{body}</SubTitle>
      </TextContainer>
    </Card>
  );
};

const Card = styled.div`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 71.8491px 94.0881px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(9.4088px);
  border-radius: 7.60308px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 282px;
  max-height: 264px;
  padding: 40px 20px;
  row-gap: 20px;
  box-sizing: border-box;
`;
const Avatar = styled.img`
  background: #c4c4c4;
  width: 42.77px;
  height: 42.77px;
  object-fit: cover;
  border-radius: 21.38px;
  margin-right: 9.2px;
  display: flex;
  align-self: center;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.p`
  font-family: 'Inter';
  font-weight: 700;
  font-size: ${pxToRem(20)};
  line-height: ${pxToRem(28)};
  color: #000b33;
`;
const SubTitle = styled(Name)`
  font-weight: 400;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(21)};
  margin-top: 3.67px;
`;
