import styled, { keyframes } from 'styled-components';
import { ReviewCard } from '../../components/card';
import { colors } from '../../utils/colors';
import { pxToRem } from '../../utils/pxToRem';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  max-height: 40px;
  width: auto;
  align-self: flex-start;
  margin: 64px 8.3% 24px 8.3%;
  object-fit: contain;
`;

export const Header = styled.header`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  padding: 0px 8.3%;
  min-height: calc(100vh - 168px);
  display: flex;
  justify-content: center;
  position: relative;
  /* flex-wrap: wrap; */
`;

export const HeaderContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30.66px;
  position: relative;
  max-width: 639px;
`;
export const BackgroudCirlce = styled.div`
  background: #fda800;
  opacity: 0.4;
  height: 269px;
  width: 269px;
  margin-top: calc(73px - 24px);
  position: absolute;
  border-radius: 135px;
  filter: blur(100px);
`;
export const BackgroudCirlce2 = styled(BackgroudCirlce)`
  background: #4a2f8c;
  align-self: flex-end;
  margin-top: unset;
  right: 57px;
`;
export const HeaderTitle = styled.h1`
  font-weight: 700;
  margin-top: calc(200px - 24px);
  font-size: ${pxToRem(60)};
  line-height: ${pxToRem(84)};
  align-items: center;
  letter-spacing: ${pxToRem(-0.5)};
  color: ${colors.newBlack};
  @media (max-width: 500px) {
    font-size: ${pxToRem(40)};
    line-height: ${pxToRem(40 * 1.5)};
  }
`;
export const HeaderSubTitle = styled.p`
  margin-top: 16px;
  font-weight: 400;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(22)};
  padding-right: 15px;
  letter-spacing: 0.1px;
  color: ${colors.secondary.secondaryTint30};
`;
export const HeaderButtonContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const HeaderImageContainer = styled.div`
  position: relative;
  align-self: flex-end;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const HeaderImage = styled.img`
  min-width: 441.36px;
  width: 100%;
  height: auto;
`;
const animateLinear = keyframes`
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;
export const CustomReviewCard = styled(ReviewCard)<{ left?: boolean }>`
  position: absolute;
  top: ${({ left }) => (left ? '462.3px' : '341px')};
  left: ${({ left }) => (left ? '-44.15px' : 'unset')};
  right: ${({ left }) => (left ? 'unset' : '-72.7px')};
  z-index: 1;
  animation: ${animateLinear} ease infinite 2s alternate;
`;

export const Section = styled.section`
  scroll-snap-type: y mandatory;
`;
export const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 160px 8.3%;
  transform: translateY(100px);
  opacity: 0;
  transition: all 1s ease;
  :active {
    transform: translateY(0px);
    opacity: 1;
  }
`;
export const GoalTitle = styled.h2`
  font-weight: 500;
  margin: 0px 105.5px;
  font-size: ${pxToRem(40)};
  line-height: ${pxToRem(58)};
  letter-spacing: ${pxToRem(-0.5)};
  color: #000b33;
  text-align: center;
  @media (max-width: 730px) {
    margin: 0;
  }
  @media (max-width: 500px) {
    font-size: ${pxToRem(30)};
    line-height: ${pxToRem(30 * 1.5)};
  }
`;
export const GoalSubTitle = styled.p`
  font-weight: 400;
  margin: 16px 105.5px 40px 105.5px;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(26)};
  text-align: center;
  color: #000b33;
  @media (max-width: 730px) {
    margin: 16px 0px 40px 0px;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  margin: 0 16px;
  flex-wrap: wrap;
`;
