import styled, { keyframes } from 'styled-components';
import { ReviewCard } from '../../components/card';
import { SideCard } from '../../components/card/side';
import { colors } from '../../utils/colors';
import { pxToRem } from '../../utils/pxToRem';
import banner from '../../assets/banner.svg';
import bgImage from '../../assets/bg_img.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary.primaryTint50};
  background: #e5e5e5;
`;

export const Logo = styled.img`
  max-height: 40px;
  width: auto;
  align-self: flex-start;
  margin: 64px 8.3% 24px 0%;
  object-fit: contain;
`;
export const HeaderContent = styled.div`
  background: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0px;
`;
export const HeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 8.3%;
  svg {
    margin: 64px 8.3% 24px 0%;
    fill: ${colors.primary.primaryTint50};
  }
`;
export const ContactUs = styled.p`
  font-weight: 500;
  font-size: ${pxToRem(21)};
  line-height: ${pxToRem(29)};
  letter-spacing: ${pxToRem(0.15)};
  color: ${colors.primary.main};
`;
export const Header = styled.header`
  /* padding: 0px 8.3%; */
  min-height: calc(100vh - 168px);
  display: flex;
  justify-content: space-between;
  margin: 0px 8.3%;
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
  max-width: 700px;
`;
export const BackgroudCirlce = styled.div`
  background: #fda800;
  opacity: 0.4;
  height: 269px;
  width: 269px;
  /* margin-top: 30px; */
  position: absolute;
  left: -8.3%;
  border-radius: 135px;
  filter: blur(100px);
`;
export const BackgroudCirlce2 = styled(BackgroudCirlce)`
  background: #fda800;
  align-self: flex-end;
  margin-top: unset;
  left: 30%;
  bottom: -30%;
`;
export const BackgroudCirlce3 = styled(BackgroudCirlce)`
  background: #4a2f8c;
  align-self: flex-end;
  margin-top: unset;
  right: -8.3%;
  left: unset;
  bottom: -150px;
`;
export const HeaderTitle = styled.h1`
  font-weight: 700;
  margin-top: calc(200px - 24px);
  font-size: ${pxToRem(60)};
  line-height: ${pxToRem(84)};
  align-items: center;
  letter-spacing: ${pxToRem(-0.5)};
  color: ${colors.primary.primaryTint50};
  @media (max-width: 990px) {
    margin-top: 20px;
  }
  @media (max-width: 500px) {
    font-size: ${pxToRem(30)};
    line-height: ${pxToRem(30 * 1.5)};
  }
`;
export const Span = styled.span`
  color: #fda800;
`;
export const HeaderSubTitle = styled.p`
  margin-top: 16px;
  font-weight: 400;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(22)};
  padding-right: 15px;
  letter-spacing: 0.1px;
  color: ${colors.primary.primaryTint50};
`;
export const HeaderButtonContainer = styled.div`
  display: flex;
  margin-top: 40px;
  @media (max-width: 320px) {
    img {
      width: 100%;
    }
  }
`;

export const HeaderImageContainer = styled.div`
  position: relative;
  margin-top: 50px;
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
  width: 50%;
  column-gap: 30px;
  row-gap: 20px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    justify-content: space-between;
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  margin: 150px 8.3% 160px 8.3%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 30px;
  }
`;
export const AboutTitle = styled.h2`
  font-weight: 700;
  font-size: ${pxToRem(48)};
  line-height: ${pxToRem(62)};
  letter-spacing: ${pxToRem(-1.584)};
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
  margin-right: ${({ left }) => (left ? 'unset' : '40px')};
  margin-left: ${({ left }) => (left ? '40px' : 'unset')};
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
  background-color: ${colors.primary.main};
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

export const UserSideTitle = styled(AboutTitle)``;

export const UserSideContent = styled(AboutContent)``;

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
  background-color: ${colors.primary.main};
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: end;
    margin-top: 40px;
  }
`;
export const AgentSideTitle = styled(AboutTitle)``;

export const AgentSideContent = styled(AboutContent)``;

export const FeaturesContainer = styled(AboutContainer)`
  min-height: 684.32px;
  background-color: ${colors.primary.primaryTint50};
  margin: 160px 0px 119.68px 0px;
  padding: 0px 8.3%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 80px;
  }
`;
export const FeatureImageContainer = styled.div`
  position: relative;
  margin-top: 50px;
  align-self: flex-end;
  min-width: 441.36px;
  min-height: 400px;
  @media (max-width: 990px) {
    align-self: center;
    margin-top: 40px;
    min-width: unset;
  }
`;
export const FeatureImage = styled(AboutImage)`
  max-height: 684.32px;
  max-width: 681.65x;
  @media (max-width: 990px) {
    max-height: 500px;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
    max-height: unset;
  }
`;
export const FeatureTitle = styled(AboutTitle)``;
export const FeatureContent = styled(AboutContent)`
  max-width: 638px;
  text-align: left;
  max-width: 440px;
  margin-bottom: 58px;
`;
export const Banner = styled.div`
  min-height: 400px;
  background-image: url(${banner});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BannerTitle = styled(HeaderTitle)`
  width: 60%;
  font-size: ${pxToRem(48)};
  margin-top: unset;
  line-height: ${pxToRem(57)};
  color: ${colors.primary.primaryTint50};
  text-align: center;
  @media (max-width: 500px) {
    font-size: ${pxToRem(30)};
    line-height: ${pxToRem(30 * 1.5)};
  }
`;
export const BannerSubTitle = styled(HeaderSubTitle)`
  color: ${colors.primary.primaryTint50};
  max-width: 638px;
  text-align: center;
`;
export const BottomContainer = styled.div`
  width: 100%;
  background: #fafafa;
`;
export const QuestionContainer = styled.div`
  width: 1200px;
  padding: 0px 32px;
  margin: auto;
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: unset;
    padding: 0px;
    margin-top: -48px;
  }
`;
export const QuestionTitle = styled.p`
  font-weight: 700;
  font-size: ${pxToRem(40)};
  line-height: ${pxToRem(56)};
  margin: 120px 0px 16px 0px;
  text-align: center;
  letter-spacing: ${pxToRem(0 * 0.2)}; ;
`;
export const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 80px 0px 8.3%;
  background-color: ${colors.primary.primaryTint50};
  @media (max-width: 768px) {
    /* display: block; */
    margin-top: 16px;
    padding: 0px;
  }
  @media (max-width: 425px) {
    display: block;
  }
`;
export const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 400px;
  @media (max-width: 600px) {
    width: auto;
  }
  svg {
    margin: 64px 8.3% 24px 0%;
    fill: #430297;
  }
`;
export const ContactWrap = styled.div`
  @media (max-width: 768px) {
    margin: 0px 0px 0px 8.3%;
    /* width: 50%; */
  }
  @media (max-width: 425px) {
    margin: -40px 0px 0px 8.3%;
  }
`;
export const Wrap = styled.div``;
export const FooterText = styled.p`
  font-weight: 500;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(22)};
  color: #4e4e75;
`;
export const SocialIconWrap = styled.div`
  width: 10em;
  display: flex;
  justify-content: space-between;
  margin: 24px 8.3% 24px 0%;
`;
export const SocialIcon = styled.img`
  padding-right: 4.8px;
  width: 12.8px;
  :nth-child(3) {
    height: 11.2px;
    width: 8px;
  }
`;
export const Contact = styled(FooterText)`
  font-weight: 700;
  line-height: ${pxToRem(24)};
  color: #fda800;
  margin: 64px 8.3% 24px 0%;
`;
export const CopyWriteText = styled(FooterText)`
  text-align: center;
  padding: 64px 0px 32px 0px;
  background-color: ${colors.primary.primaryTint50};
`;
