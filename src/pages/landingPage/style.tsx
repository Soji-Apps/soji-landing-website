import styled, { keyframes } from 'styled-components';
import { ReviewCard } from '../../components/card';
import { SideCard } from '../../components/card/side';
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
  @media (max-width: 990px) {
    flex-direction: column;
  }
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
  margin-top: 30px;
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
  @media (max-width: 990px) {
    margin-top: 20px;
  }
  @media (max-width: 500px) {
    font-size: ${pxToRem(30)};
    line-height: ${pxToRem(30 * 1.5)};
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
  min-width: 441.36px;
  min-height: 400px;
  @media (max-width: 990px) {
    align-self: center;
    margin-top: 40px;
    min-width: unset;
  }
`;
export const HeaderImage = styled.img`
  width: 100%;
  height: auto;
  @media (max-width: 990px) {
  }
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
  top: ${({ left }) => (left ? '68.76%' : '50.82%')};
  left: ${({ left }) => (left ? '-44.15px' : 'unset')};
  right: ${({ left }) => (left ? 'unset' : '-72.7px')};
  z-index: 1;
  animation: ${animateLinear} ease infinite 2s alternate;
  @media (max-width: 990px) {
    right: ${({ left }) => (left ? 'unset' : '-5%')};
    left: ${({ left }) => (left ? '-5%' : 'unset')};
  }
`;

export const Section = styled.section`
  scroll-snap-type: y mandatory;
`;
export const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 160px 8.3%;
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
    text-align: left;
  }
  @media (max-width: 500px) {
    font-size: ${pxToRem(30)};
    line-height: ${pxToRem(30 * 1.5)};
  }
  @media (max-width: 500px) {
    font-size: ${pxToRem(20)};
    line-height: ${pxToRem(20 * 1.5)};
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
    text-align: left;
  }
  @media (max-width: 500px) {
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(16 * 1.5)};
  }
`;
export const CardContainer = styled.div`
  display: flex;
  margin: 0 16px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    justify-content: space-between;
    margin: 0;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  margin: 0px 8.3% 160px 8.3%;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const AboutTitle = styled.h2`
  font-weight: 700;
  font-size: ${pxToRem(40)};
  line-height: ${pxToRem(56)};
  letter-spacing: ${pxToRem(0.2)};
  color: ${colors.newBlack};
  text-align: left;
  max-width: 486px;
  @media (max-width: 500px) {
    font-size: ${pxToRem(20)};
    line-height: ${pxToRem(20 * 1.5)};
  }
`;
export const AboutContent = styled(GoalSubTitle)`
  margin: 16px 0 0;
  text-align: left;
  max-width: 486px;
`;
export const Column = styled.div<{ left?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-right: ${({ left }) => (left ? 'unset' : '32px')};
  margin-left: ${({ left }) => (left ? '32px' : 'unset')};
  @media (max-width: 768px) {
    margin: 0;
    align-self: center;
    margin-top: ${({ left }) => (!left ? 'unset' : '40px')};
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 587px;
  max-width: 448.76px;
  @media (max-width: 990px) {
    max-height: 500px;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
    max-height: unset;
  }
`;

export const UserSideContainer = styled(AboutContainer)`
  margin: 0;
  background-color: #6542c0;
  min-height: 600px;
  padding: 0 8.06%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: end;
  }
`;

export const UserSideImageContiner = styled.div`
  position: relative;
  align-self: flex-end;
  display: flex;
  @media (max-width: 768px) {
    align-self: center;
  }
`;
export const UserSideImage = styled.img`
  width: auto;
  height: 100%;
  max-height: 396px;
  align-self: flex-end;
  @media (max-width: 1024px) {
    max-height: 350px;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
    max-height: unset;
    width: 100%;
    height: auto;
  }
`;

export const UserSideTitle = styled(AboutTitle)`
  color: ${colors.primary.primaryTint50};
`;

export const UserSideContent = styled(AboutContent)`
  color: ${colors.primary.primaryTint50};
`;

export const CustomSideCard = styled(SideCard)`
  background: #00bb98;
  position: absolute;
  top: 10%;
  @media (max-width: 500px) {
    left: -15px;
  }
  animation: ${animateLinear} ease infinite 2s alternate;
`;
export const CustomSideCard2 = styled(CustomSideCard)`
  background: #fda800;
  right: 0;
  top: 34.58%;
  left: unset;
  @media (max-width: 900px) {
    right: -15px;
  }
  @media (max-width: 500px) {
    top: 60%;
  }
`;
export const AgentSideContainer = styled(UserSideContainer)`
  background-color: unset;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: end;
  }
`;
export const AgentSideTitle = styled(AboutTitle)``;

export const AgentSideContent = styled(AboutContent)``;
