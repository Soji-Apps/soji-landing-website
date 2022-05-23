import { FC } from 'react';
import styled from 'styled-components';
import goal_icon from '../../assets/goal_icon.svg';
import { colors } from '../../utils/colors';
import { pxToRem } from '../../utils/pxToRem';

type IGoalCard = {
  text: string;
};
export const GoalCard: FC<IGoalCard> = ({ text }) => {
  return (
    <Card>
      <Icon alt="" src={goal_icon} />
      <Text>{text}</Text>
    </Card>
  );
};

const Card = styled.div`
  background: ${colors.primary.primaryTint50};
  flex-direction: column;
  border: 0.5px solid #c4c4c4;
  padding-bottom: 32px;
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
  height: 172px;
  padding: 12px;
  box-shadow: 0px 2px 4px 4px rgba(129, 100, 203, 0.06);
  :nth-child(2) {
    margin: 0 40px;
  }
  width: calc(33.33% - 40px);
  @media (max-width: 1000px) {
    width: calc(45% - 16px);
    margin: 0px 0px 40px;
    :nth-child(2) {
      margin: 0 0 0 40px;
    }
  }
  @media (max-width: 730px) {
    width: 100%;
    margin: 0;
    :nth-child(2) {
      margin: 40px 0;
    }
  }
`;
const Icon = styled.img`
  height: 40px;
  width: 40px;
  margin-bottom: 40px;
`;
const Text = styled.p`
  font-weight: 400;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(24)};
  letter-spacing: ${pxToRem(0.15)};
  color: ${colors.secondary.secondaryTint30};
  height: 28px;
  overflow-y: hidden;
`;
