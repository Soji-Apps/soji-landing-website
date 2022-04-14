import {
  AboutContainer,
  AboutContent,
  AboutImage,
  AboutTitle,
  AgentSideContainer,
  AgentSideContent,
  AgentSideTitle,
  BackgroudCirlce,
  BackgroudCirlce2,
  Banner,
  BannerSubTitle,
  BannerTitle,
  BottomContainer,
  CardContainer,
  Column,
  Contact,
  ContactWrap,
  Container,
  CopyWriteText,
  CustomReviewCard,
  CustomSideCard,
  CustomSideCard2,
  FeatureImage,
  FeaturesContainer,
  FeatureSubTitle,
  FeatureTitle,
  FooterFlex,
  FooterText,
  GoalsContainer,
  GoalSubTitle,
  GoalTitle,
  Header,
  HeaderButtonContainer,
  HeaderContentContainer,
  HeaderImage,
  HeaderImageContainer,
  HeaderSubTitle,
  HeaderTitle,
  Logo,
  LogoWrap,
  QuestionContainer,
  QuestionTitle,
  Section,
  SocialIcon,
  SocialIconWrap,
  UserSideContainer,
  UserSideContent,
  UserSideImage,
  UserSideImageContiner,
  UserSideTitle,
  Wrap
} from './style';
import logo from '../../assets/soji_logo.svg';
import headerImage from '../../assets/header_image.svg';
import app_store from '../../assets/app_store.svg';
import play_store from '../../assets/play_store.svg';
import splash from '../../assets/splash.svg';
import splash2 from '../../assets/splash2.svg';
import splash3 from '../../assets/splash3.svg';
import splash4 from '../../assets/splash4.svg';
import { StoreButton } from '../../components/button';
import { GoalCard } from '../../components/card';
import { useLayoutEffect, useRef } from 'react';
import { Feature } from '../../components';
import { QuestionTab } from '../../components/question';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';
import email from '../../assets/email.svg';
import call from '../../assets/call.svg';

export const LandingPage = () => {
  const documentRef = useRef<HTMLDivElement>(null);
  const onScroll = () => {
    let revealPoint = 100;
    var reveals = documentRef.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight,
        revealTop = reveals[i].getBoundingClientRect().top;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  };
  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <Container ref={documentRef}>
      <Logo alt="logo" src={logo} />
      <Header>
        <HeaderContentContainer>
          <BackgroudCirlce />
          <HeaderTitle>SOJI IS CONVINENET, EASY & SECURE </HeaderTitle>
          <HeaderSubTitle>
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            integer at integer congue magna at pretium purus pretium ligula
            rutrum.
          </HeaderSubTitle>
          <HeaderButtonContainer>
            <StoreButton src={app_store} />
            <StoreButton src={play_store} />
          </HeaderButtonContainer>
        </HeaderContentContainer>
        <HeaderImageContainer>
          <HeaderImage alt="" loading={'lazy'} src={headerImage} />
          <CustomReviewCard
            left
            imgSrc={
              'https://img.freepik.com/free-photo/attractive-female-student-with-curly-hair-wears-transparent-glasses-white-t-shirt-stands-against-blue-background-has-calm-face-expression-tender-smile_273609-32793.jpg?w=1380&t=st=1649435206~exp=1649435806~hmac=9ca2ff3e0737a7b5329cb3beeb1dc65cdd147e7e2a329cad325a421f0cba564d'
            }
            name={'Ronald Richards'}
            body={
              'I commented on SOJI,I commented on SOJI, I commented on SOJI, '
            }
          />
          <CustomReviewCard
            imgSrc={
              'https://img.freepik.com/free-photo/attractive-female-student-with-curly-hair-wears-transparent-glasses-white-t-shirt-stands-against-blue-background-has-calm-face-expression-tender-smile_273609-32793.jpg?w=1380&t=st=1649435206~exp=1649435806~hmac=9ca2ff3e0737a7b5329cb3beeb1dc65cdd147e7e2a329cad325a421f0cba564d'
            }
            name={'Jenny Wilson'}
            body={
              'I commented on SOJI,I commented on SOJI, I commented on SOJI, '
            }
          />
        </HeaderImageContainer>
        <BackgroudCirlce2 />
      </Header>
      <Section>
        <GoalsContainer className="reveal">
          <GoalTitle>
            Our goal is to make service delivery easy and seemless
          </GoalTitle>
          <GoalSubTitle>
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            integer at odio velna vitae auctor integer congue magna at pretium
            purus pretium ligula rutrum luctus risus
          </GoalSubTitle>
          <CardContainer>
            <GoalCard
              text={
                'SOlution solution solution Lörem ipsum pong spökgarn egotåst nilynde. Rärade tirad posamma. Nysm olig tilask utan revis teplare. Hemifölig beräk inte prena deciktigt. Nande Vans infrafölig asamma, sadade astrofän. Traner tygt nylig andrafiering. Eur'
              }
            />
            <GoalCard
              text={
                'SOlution solution solution Lörem ipsum pong spökgarn egotåst nilynde. Rärade tirad posamma. Nysm olig tilask utan revis teplare. Hemifölig beräk inte prena deciktigt. Nande Vans infrafölig asamma, sadade astrofän. Traner tygt nylig andrafiering. Eur'
              }
            />
            <GoalCard
              text={
                'SOlution solution solution Lörem ipsum pong spökgarn egotåst nilynde. Rärade tirad posamma. Nysm olig tilask utan revis teplare. Hemifölig beräk inte prena deciktigt. Nande Vans infrafölig asamma, sadade astrofän. Traner tygt nylig andrafiering. Eur'
              }
            />
          </CardContainer>
        </GoalsContainer>
      </Section>
      <Section>
        <AboutContainer className="reveal">
          <Column>
            <AboutTitle>Enjoy professional services with SOJI</AboutTitle>
            <AboutContent>
              You can also check your account balance through the net banking
              facility. To use this facility need to login to the official
              website of the concerned bank from your phone. You can also check
              your account balance through the net banking facility. To use this
              facility need to login to the official website of the concerned
              bank from your phone.
            </AboutContent>
          </Column>
          <AboutImage alt="" src={splash} />
        </AboutContainer>
      </Section>
      <Section>
        <UserSideContainer className="reveal">
          <UserSideImageContiner>
            <CustomSideCard title="9,823" body="Dummy title on here" />
            <CustomSideCard2 title="9,823" body="Dummy title on here" />
            <UserSideImage alt="" src={splash2} />
          </UserSideImageContiner>
          <Column left>
            <UserSideTitle>User side</UserSideTitle>
            <UserSideContent>
              You can also check your account balance through the net banking
              facility. To use this facility need to login to the official
              website of the concerned bank from your phone. You can also check
              your account balance through the net banking facility. To use this
              facility need to login to the official website of the concerned
              bank from your phone.
            </UserSideContent>
          </Column>
        </UserSideContainer>
      </Section>
      <Section>
        <AgentSideContainer className="reveal">
          <Column>
            <AgentSideTitle>Agent side</AgentSideTitle>
            <AgentSideContent>
              You can also check your account balance through the net banking
              facility. To use this facility need to login to the official
              website of the concerned bank from your phone. You can also check
              your account balance through the net banking facility. To use this
              facility need to login to the official website of the concerned
              bank from your phone.
            </AgentSideContent>
          </Column>
          <UserSideImageContiner>
            <CustomSideCard title="9,823" body="Dummy title on here" />
            <CustomSideCard2 title="9,823" body="Dummy title on here" />
            <UserSideImage alt="" src={splash3} />
          </UserSideImageContiner>
        </AgentSideContainer>
      </Section>
      <Section>
        <FeaturesContainer className="reveal">
          <FeatureImage alt="" src={splash4} />
          <Column left>
            <FeatureTitle as={'h2'}>
              Easy to manage all services requests
            </FeatureTitle>
            <FeatureSubTitle>
              An enim nullam tempor gravida donec enim luctus risusd diam eget
              risus varius blandit sit amet.
            </FeatureSubTitle>
            <Feature
              title="Feature one"
              body="We believe that designing products and services in close  is the only way to have a real impact on their business."
            />
            <Feature
              title="Feature two"
              body="We believe that designing products and services in close  is the only way to have a real impact on their business."
            />
          </Column>
        </FeaturesContainer>
      </Section>
      <Banner>
        <BannerTitle>SOJI IS CONVINENET, EASY & SECURE </BannerTitle>
        <BannerSubTitle>
          An enim nullam tempor sapien gravida donec enim ipsum porta justo
          integer at integer congue magna at pretium purus pretium ligula
          rutrum.
        </BannerSubTitle>
        <HeaderButtonContainer>
          <StoreButton src={app_store} />
          <StoreButton src={play_store} />
        </HeaderButtonContainer>
      </Banner>
      <BottomContainer>
        <QuestionContainer>
          <QuestionTitle>Frequently Asked Questions</QuestionTitle>
          <QuestionTab
            header="Equally the beginning of the daily work?"
            text="On the other hand, the strengthening and development of the structure largely determines the creation of substantial financial and administrative conditions. Equally, the beginning of the daily work on the formation of the position provides a wide range of (specialists) participation in the formation of participatory systems."
          />
          <QuestionTab
            header="Equally the beginning of the daily work?"
            text="On the other hand, the strengthening and development of the structure largely determines the creation of substantial financial and administrative conditions. Equally, the beginning of the daily work on the formation of the position provides a wide range of (specialists) participation in the formation of participatory systems."
          />
          <QuestionTab
            header="Equally the beginning of the daily work?"
            text="On the other hand, the strengthening and development of the structure largely determines the creation of substantial financial and administrative conditions. Equally, the beginning of the daily work on the formation of the position provides a wide range of (specialists) participation in the formation of participatory systems."
          />
          <QuestionTab
            header="Equally the beginning of the daily work?"
            text="On the other hand, the strengthening and development of the structure largely determines the creation of substantial financial and administrative conditions. Equally, the beginning of the daily work on the formation of the position provides a wide range of (specialists) participation in the formation of participatory systems."
          />
        </QuestionContainer>
        <FooterFlex>
          <LogoWrap>
            <Logo alt="logo" src={logo} />
            <Wrap>
              <FooterText>Convenient and Professional service</FooterText>
              <SocialIconWrap>
                <SocialIcon src={instagram} />
                <SocialIcon src={linkedin} />
                <SocialIcon src={facebook} />
                <SocialIcon src={twitter} />
              </SocialIconWrap>
            </Wrap>
          </LogoWrap>
          <ContactWrap>
            <Contact>Contact info</Contact>
            <FooterText>455 West Orchard Street</FooterText>
            <FooterText>Kings Mountains NC 280867</FooterText>
            <FooterText>
              <SocialIcon src={call} /> +088 (246) 642-27-10
            </FooterText>
            <FooterText>
              <SocialIcon src={email} /> example@gmail.com
            </FooterText>
            <HeaderButtonContainer>
              <StoreButton src={app_store} />
              <StoreButton src={play_store} />
            </HeaderButtonContainer>
          </ContactWrap>
        </FooterFlex>
        <CopyWriteText>© 2021 4thenergy All Rights Reserved.</CopyWriteText>
      </BottomContainer>
    </Container>
  );
};
