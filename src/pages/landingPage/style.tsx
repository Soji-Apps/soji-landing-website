import styled, { keyframes } from 'styled-components';
import { ReviewCard } from '../../components/card';
import { SideCard } from '../../components/card/side';
import { colors } from '../../utils/colors';
import { pxToRem } from '../../utils/pxToRem';
import banner from '../../assets/banner.svg';
import bgImage from '../../assets/bg_img.svg';
import { PrimaryButton } from '../../components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary.main};
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
  background-position: bottom;
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

  @media (min-width: 1551px) {
    max-width: 1440px;
    margin: auto;
  }
`;
export const ContactUs = styled.a`
  font-weight: 500;
  font-size: ${pxToRem(21)};
  line-height: ${pxToRem(29)};
  letter-spacing: ${pxToRem(0.15)};
  color: ${colors.primary.main};
  text-decoration: none;
`;
export const Header = styled.header`
  /* padding: 0px 8.3%; */
  min-height: calc(100vh - 168px);
  display: flex;
  justify-content: space-between;
  margin: 0px 8.3%;
  position: relative;
  @media (min-width: 1551px) {
    max-width: 1440px;
    margin: auto;
  }
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

  @media (max-width: 375px) {
    height: unset;
  }
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
  font-size: 3rem;
  line-height: ${pxToRem(84)};
  text-transform: capitalize;
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

  @media (min-width: 1551px) {
    align-self: unset;
  }
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
  flex: 1;
  margin: 0 16px;
  column-gap: 30px;
  row-gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    max-width: 596px;
  }
  @media (max-width: 1000px) {
    justify-content: space-between;
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    /* column-gap: 1px; */
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  margin: 150px 8.3% 160px 8.3%;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1551px) {
    max-width: 1440px;
    margin: auto;
  }
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    row-gap: 50px;
  }

  @media (max-width: 768px) {
    row-gap: 30px;
  }
  @media (max-width: 425px) {
    margin: 55px 8.3% 160px 8.3%;
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

  @media (max-width: 1200px) {
    max-width: unset;
    text-align: center;
  }
  @media (max-width: 500px) {
    font-size: ${pxToRem(20)};
    line-height: ${pxToRem(20 * 1.5)};
  }
`;
export const AboutContent = styled(GoalSubTitle)`
  margin: 16px 0 0;
  text-align: left;
  max-width: 486px;

  @media (max-width: 1200px) {
    max-width: unset;
    text-align: center;
  }
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
export const BenefitContainer = styled.div`
  margin: 0 8.3% 0 8.3%;
  text-align: center;

  @media (min-width: 1551px) {
    max-width: 1440px;
    margin: 100px auto;
  }
`;
export const StyledHeader = styled.div`
  margin-bottom: 83px;
`;
export const StyledHeading = styled.h3`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 62px;
  text-align: center;
  letter-spacing: -1.584px;

  color: #0d152e;

  @media (max-width: 700px) {
    font-size: ${pxToRem(25)};
    line-height: ${pxToRem(25 * 1.5)};
  }
`;
export const StyledDescription = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  width: 50%;
  margin: auto;
  line-height: 34px;
  /* or 170% */
  text-align: center;
  letter-spacing: -0.66px;

  color: #81838c;

  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const BenefitWraper = styled.div``;
export const BenefitRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 86px;

  @media (max-width: 1200px) {
    column-gap: 43px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const BenefitItem = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    column-gap: 30px;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;
export const CenterBenefitList = styled.div``;
export const RightBenefitList = styled.div`
  text-align: left;
  margin-bottom: 64px;
`;
export const LeftBenefitList = styled.div`
  margin-bottom: 64px;
  text-align: right;

  @media (max-width: 1024px) {
    text-align: left;
  }
`;
export const BenefitNumberWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    justify-content: flex-start;
  }
`;
export const BenefitNumber = styled.h3`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  letter-spacing: -0.792px;
  padding: 10px;
  width: 50px;
  height: 50px;
  color: #0d152e;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 25px 17px rgba(111, 118, 138, 0.156863);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BenefitTitle = styled.h5`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */
  letter-spacing: -0.726px;
  color: #0d152e;
  margin: 32px 0;
`;
export const BenefitPhrase = styled.div`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
  letter-spacing: -0.528px;
  color: #81838c;
`;
export const SojiOnPhone = styled.img`
  @media (max-width: 1024px) {
    margin-bottom: 64px;
  }
`;

export const GetStartedContainer = styled.div`
  margin: 180px 0 0 0;

  @media (min-width: 1551px) {
    max-width: 1440px;
    margin: 100px auto;
  }
  @media (max-width: 1024px) {
    margin: 100px 8.3% 0 8.3%;
  }
`;

export const CarouselContainer = styled.div``;

export const CarouselBody = styled.div`
  width: 100%;
  max-width: 960px;
  perspective: 300px;
  perspective-origin: 50% 60%;
  min-height: 14em;
  margin: 3em auto;
`;

export const CarouselItem = styled.div`
  width: 100%;
  overflow-x: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  column-gap: 3.9%;
`;

export const CarouselImage = styled.img<{ active: boolean }>`
  filter: ${({ active }) => (active ? 'blur(0px)' : 'blur(2px)')};
`;
export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 52px;
`;
export const Dot = styled.span<{ active: boolean }>`
  cursor: pointer;
  height: 6px;
  width: 6px;
  margin: 0 2px;
  background-color: #32324b;
  opacity: ${({ active }) => (active ? '1' : '0.2')};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
`;
export const UserSideContainer = styled.div`
  display: flex;
  /* margin: 150px 8.3% 160px 8.3%; */
  align-items: center;
  justify-content: space-between;
  /* @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 30px;
  } */

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

export const FeaturesWrapper = styled.div`
  background-color: ${colors.primary.primaryTint50};
`;
export const FeaturesContainer = styled.div`
  display: flex;
  margin: 150px 8.3% 160px 8.3%;
  align-items: center;
  justify-content: space-between;
  min-height: 684.32px;
  margin: 160px 0px 119.68px 0px;
  padding: 0px 8.3%;
  @media (min-width: 1551px) {
    max-width: 1440px;
    margin: 100px auto;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 80px;
  }
`;
export const FeatureImageContainer = styled.div`
  position: relative;
  margin-top: 50px;
  align-self: flex-end;
  @media (max-width: 990px) {
    align-self: center;
    min-width: unset;
  }
`;
export const FeatureImage = styled.img`
  object-fit: contain;
  width: 100%;
`;
export const FeatureTitle = styled(AboutTitle)`
  @media (max-width: 600px) {
    font-size: ${pxToRem(25)};
    line-height: ${pxToRem(25 * 1.5)};
  }
`;
export const FeatureContent = styled(AboutContent)`
  max-width: 638px;
  text-align: left;
  max-width: 440px;
  margin-bottom: 58px;
`;
export const BannerContainer = styled.div`
  min-height: 400px;
  background-image: url(${banner});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Banner = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1551px) {
    max-width: 1440px;
    margin: auto;
  }
  @media (max-width: 600px) {
    align-items: unset;
  }
`;

export const BannerTitle = styled(HeaderTitle)`
  width: 60%;
  font-size: ${pxToRem(48)};
  margin-top: unset;
  line-height: ${pxToRem(57)};
  color: ${colors.primary.primaryTint50};
  text-align: center;
  @media (max-width: 700px) {
    font-size: ${pxToRem(25)};
    line-height: ${pxToRem(25 * 1.5)};
    width: 80%;
  }
  @media (max-width: 600px) {
    align-self: center;
  }
  @media (max-width: 600px) {
    width: 98%;
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
export const EmailSubscriptionContainer = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(255, 176, 158, 0.12);
  border-radius: 4px;
  padding: 8px;
  margin-top: 48px;
  @media (max-width: 600px) {
    margin: 30px 60px 0;
  }
  @media (max-width: 425px) {
    margin: 30px 20px 0;
  }
`;
export const EmailSubscriptionInput = styled.input`
  border: none;
  outline: none;
  padding: 12px 8px;
  width: 350px;

  &::placeholder {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */
    color: #a1a1a1;
  }

  @media (max-width: 600px) {
    width: unset;
    flex: 1;
  }
`;
export const EmailSubscriptionButton = styled(PrimaryButton)`
  background-color: #fda800;
  border-radius: 8px;
  padding: 12px 25px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 170%;
  border: none;
  /* identical to box height, or 24px */

  letter-spacing: 0.25px;

  /* Colors/Primary */

  color: #fafafa;
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
export const FooterContainer = styled.div`
  background-color: ${colors.primary.primaryTint50};
`;
export const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 80px 0px 8.3%;
  background-color: ${colors.primary.primaryTint50};
  @media (max-width: 768px) {
    /* display: block; */
    margin-top: 16px;
    padding: 0px 0px 0px 25px;
  }

  @media (min-width: 1551px) {
    max-width: 1440px;
    margin: auto;
  }
  @media (max-width: 586px) {
    display: block;
    padding-left: 35px;
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
  @media (max-width: 586px) {
    margin: -40px 0px 0px 0;
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

export const SocialIconLink = styled.a`
  text-decoration: none;
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
export const PlaystoreButton = styled.a`
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0;
  margin-right: 24px;
  :nth-child(2) {
    padding-right: 0;
  }
`;
export const ButtonImg = styled.img`
  object-fit: cover;
`;
