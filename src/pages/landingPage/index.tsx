import {
  AboutContainer,
  AboutContent,
  AboutTitle,
  AgentSideContainer,
  AgentSideContent,
  AgentSideTitle,
  BackgroudCirlce,
  BackgroudCirlce2,
  BackgroudCirlce3,
  Banner,
  BannerTitle,
  CardContainer,
  Column,
  Contact,
  ContactUs,
  ContactWrap,
  Container,
  CopyWriteText,
  CustomReviewCard,
  CustomSideCard,
  CustomSideCard2,
  FeatureContent,
  FeatureImage,
  FeatureImageContainer,
  FeaturesContainer,
  FeatureTitle,
  FooterFlex,
  FooterText,
  Header,
  HeaderButtonContainer,
  HeaderContent,
  HeaderContentContainer,
  HeaderFlex,
  HeaderImage,
  HeaderImageContainer,
  HeaderSubTitle,
  HeaderTitle,
  LogoWrap,
  Section,
  SocialIcon,
  SocialIconWrap,
  Span,
  UserSideContainer,
  UserSideContent,
  UserSideImage,
  UserSideImageContiner,
  UserSideTitle,
  Wrap
} from './style';
import { ReactComponent as Logo } from '../../assets/soji_logo.svg';
import headerImage from '../../assets/header_img.svg';
import app_store from '../../assets/app_store.svg';
import play_store from '../../assets/play_store.svg';
import splash2 from '../../assets/splash2.svg';
import splash3 from '../../assets/splash3.svg';
import icon1 from '../../assets/card_icon1.svg';
import icon2 from '../../assets/card_icon2.svg';
import icon3 from '../../assets/card_icon3.svg';
import icon4 from '../../assets/card_icon4.svg';
// import splash3 from '../../assets/nsplash3.svg';
// import splash4 from '../../assets/splash4.svg';
import splash4 from '../../assets/girl_img.svg';
import { StoreButton } from '../../components/button';
import { GoalCard } from '../../components/card';
import { useLayoutEffect, useRef } from 'react';
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
      <HeaderContent>
        <HeaderFlex>
          <Logo />
          <ContactUs>Contact us</ContactUs>
        </HeaderFlex>
        <Header>
          <HeaderContentContainer>
            <BackgroudCirlce />
            <HeaderTitle>
              <Span>SOJI</Span> IS CONVINENET, EASY & SECURE
            </HeaderTitle>
            <HeaderSubTitle>
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              integer at integer congue magna at pretium purus pretium ligula
              rutrum.An enim nullam tempor sapien gravida donec enim ipsum porta
              justo integer at integer congue magna at pretium purus pretium
              ligula rutrum.
            </HeaderSubTitle>
            <HeaderButtonContainer>
              <StoreButton src={app_store} />
              <StoreButton src={play_store} />
            </HeaderButtonContainer>
          </HeaderContentContainer>
          <HeaderImageContainer>
            <HeaderImage alt="" loading={'lazy'} src={headerImage} />
          </HeaderImageContainer>
          <BackgroudCirlce2 />
          <BackgroudCirlce3 />
        </Header>
      </HeaderContent>
      <Section>
        <AboutContainer className="reveal">
          <CardContainer>
            <GoalCard
              imgSrc={icon1}
              name="Increased revenue"
              body="With lots of unique blocks you can easily create a page without coding with Appmax"
            />
            <GoalCard
              imgSrc={icon2}
              name="Innovative solution"
              body="With lots of unique blocks you can easily create a page without coding with Appmax"
            />
            <GoalCard
              imgSrc={icon3}
              name="Vast Clientele"
              body="With lots of unique blocks you can easily create a page without coding with Appmax"
            />
            <GoalCard
              imgSrc={icon4}
              name="Secure transactions"
              body="With lots of unique blocks you can easily create a page without coding with Appmax"
            />
          </CardContainer>
          <Column>
            <AboutTitle>Unique selling Proposition (USP)</AboutTitle>
            <AboutContent>
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              integer at odio velna vitae auctor integer An enim nullam tempor
              sapien gravida donec enim ipsum porta justo integer at odio velna
              vitae auctor integer
            </AboutContent>
          </Column>
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
          <Column>
            <FeatureTitle>Reinforcement statement</FeatureTitle>
            <FeatureContent>
              This section supports the hero section by reinforcing the headline
              and assuring the visitor of top tier experience and service.
            </FeatureContent>
          </Column>
          <FeatureImageContainer>
            <FeatureImage alt="" src={splash4} />
            <CustomReviewCard
              left
              imgSrc={
                'https://img.freepik.com/free-photo/attractive-female-student-with-curly-hair-wears-transparent-glasses-white-t-shirt-stands-against-blue-background-has-calm-face-expression-tender-smile_273609-32793.jpg?w=1380&t=st=1649435206~exp=1649435806~hmac=9ca2ff3e0737a7b5329cb3beeb1dc65cdd147e7e2a329cad325a421f0cba564d'
              }
              name={'Ronald Richards'}
              body={'One of the best SOJI I have ever used'}
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
          </FeatureImageContainer>
        </FeaturesContainer>
      </Section>
      <Banner>
        <BannerTitle>
          Want us to email you about special offers & updates?
        </BannerTitle>
        <HeaderButtonContainer>
          <StoreButton src={app_store} />
          <StoreButton src={play_store} />
        </HeaderButtonContainer>
      </Banner>
      {/* <BottomContainer> */}
      <FooterFlex>
        <LogoWrap>
          <Logo />
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
      {/* </BottomContainer> */}
    </Container>
  );
};
