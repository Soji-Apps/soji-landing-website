import {
  AboutContainer,
  AboutContent,
  AboutTitle,
  BackgroudCirlce,
  BackgroudCirlce2,
  BackgroudCirlce3,
  Banner,
  BannerContainer,
  BannerTitle,
  BenefitContainer,
  BenefitItem,
  BenefitNumber,
  BenefitNumberWrapper,
  BenefitPhrase,
  BenefitRow,
  BenefitTitle,
  BenefitWraper,
  CardContainer,
  CarouselContainer,
  CarouselImage,
  Column,
  Contact,
  ContactUs,
  ContactWrap,
  Container,
  CopyWriteText,
  CustomReviewCard,
  Dot,
  DotContainer,
  EmailSubscriptionButton,
  EmailSubscriptionContainer,
  EmailSubscriptionInput,
  FeatureContent,
  FeatureImage,
  FeatureImageContainer,
  FeaturesContainer,
  FeaturesWrapper,
  FeatureTitle,
  FooterContainer,
  FooterFlex,
  FooterText,
  GetStartedContainer,
  Header,
  HeaderButtonContainer,
  HeaderContent,
  HeaderContentContainer,
  HeaderFlex,
  HeaderImage,
  HeaderImageContainer,
  HeaderSubTitle,
  HeaderTitle,
  LeftBenefitList,
  LogoWrap,
  RightBenefitList,
  Section,
  SocialIcon,
  SocialIconWrap,
  SojiOnPhone,
  Span,
  StyledDescription,
  StyledHeader,
  CarouselItem,
  StyledHeading,
  Wrap
} from './style';
import { ReactComponent as Logo } from '../../assets/soji_logo.svg';
import headerImage from '../../assets/header_img.svg';
import app_store from '../../assets/app_store.svg';
import play_store from '../../assets/play_store.svg';
import icon1 from '../../assets/card_icon1.svg';
import icon2 from '../../assets/card_icon2.svg';
import icon3 from '../../assets/card_icon3.svg';
import icon4 from '../../assets/card_icon4.svg';
import featureImg from '../../assets/feature_image.svg';
import { StoreButton } from '../../components/button';
import { GoalCard } from '../../components/card';
import { useLayoutEffect, useRef, useState } from 'react';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import usecaseImage from '../../assets/Device - iPhone X.svg';
import carouselImage3 from '../../assets/carouselImage.svg';
import carouselImage1 from '../../assets/carouselImage1.svg';
import carouselImage2 from '../../assets/carouselImage2.svg';
import carouselImage4 from '../../assets/carouselImage3.svg';
import carouselImage5 from '../../assets/carouselImage4.svg';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';
import call from '../../assets/call.svg';
import { showErrorToast, showSuccessToast } from '../../utils/toast';
import { BASE_URL } from '../../api';

export const LandingPage = () => {
  const [active, setActive] = useState(2);
  const documentRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
  const handleSubscribe = () => {
    const regex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/);
    if (!regex.test(email)) {
      showErrorToast('invalid email address');
      return;
    }
    setIsLoading(true);
    fetch(`${BASE_URL}/user/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then((res) => res.json())
      .then((response) => {
        showSuccessToast(response.message);
      })
      .catch((error) => {
        showErrorToast(`An error occured : ${error.message}`);
      })
      .finally(() => {
        setEmail('');
        setIsLoading(false);
      });
  };
  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const items = [
    carouselImage1,
    carouselImage2,
    carouselImage3,
    carouselImage4,
    carouselImage5
  ];

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
              …The <Span>lifestyle</Span> you deserve, Let's champion your
              comfort.
            </HeaderTitle>
            <HeaderSubTitle>
              Soji App gives you access to malls and shops in your region and
              makes real estate very easy for you!
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
        <BenefitContainer>
          <StyledHeader>
            <StyledHeading>Benefits of SOJI</StyledHeading>
            <StyledDescription>
              This section talks about the key benefits of SOJI to the user, who
              include the Agent and the Client
            </StyledDescription>
          </StyledHeader>
          <BenefitWraper>
            <BenefitRow>
              <BenefitItem>
                <LeftBenefitList>
                  <BenefitNumberWrapper>
                    <BenefitNumber>1</BenefitNumber>
                  </BenefitNumberWrapper>
                  <BenefitTitle>Variety of services</BenefitTitle>
                  <BenefitPhrase>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which{' '}
                  </BenefitPhrase>
                </LeftBenefitList>
                <LeftBenefitList>
                  <BenefitNumberWrapper>
                    <BenefitNumber>2</BenefitNumber>
                  </BenefitNumberWrapper>
                  <BenefitTitle>Variety of services</BenefitTitle>
                  <BenefitPhrase>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which{' '}
                  </BenefitPhrase>
                </LeftBenefitList>
              </BenefitItem>
              <BenefitItem>
                <SojiOnPhone src={usecaseImage} alt="" />
              </BenefitItem>
              <BenefitItem>
                <RightBenefitList>
                  <BenefitNumber>3</BenefitNumber>
                  <BenefitTitle>Variety of services</BenefitTitle>
                  <BenefitPhrase>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which{' '}
                  </BenefitPhrase>
                </RightBenefitList>
                <RightBenefitList>
                  <BenefitNumber>4</BenefitNumber>
                  <BenefitTitle>Variety of services</BenefitTitle>
                  <BenefitPhrase>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which{' '}
                  </BenefitPhrase>
                </RightBenefitList>
              </BenefitItem>
            </BenefitRow>
          </BenefitWraper>
        </BenefitContainer>
      </Section>
      <Section>
        <GetStartedContainer>
          <StyledHeader>
            <StyledHeading>Start your journey with SOJI!</StyledHeading>
            <StyledDescription>
              This section shows different screens shots from SOJI as an example
              of “context of use”
            </StyledDescription>
          </StyledHeader>
          <CarouselContainer>
            <CarouselItem>
              {items.map((images, index) => {
                return (
                  <CarouselImage
                    onClick={(e: any) => {
                      setActive(index);
                      e.stopPropagation();
                    }}
                    src={images}
                    alt=""
                    active={active === index}
                    key={index.toString()}
                  />
                );
              })}
            </CarouselItem>
            <DotContainer>
              {items.map((_, index) => (
                <Dot
                  onClick={(e: any) => {
                    setActive(index);
                    e.stopPropagation();
                  }}
                  active={active === index}
                  key={index.toString()}
                />
              ))}
            </DotContainer>
          </CarouselContainer>
        </GetStartedContainer>
      </Section>
      <Section>
        <FeaturesWrapper>
          <FeaturesContainer className="reveal">
            <Column>
              <FeatureTitle>Reinforcement statement</FeatureTitle>
              <FeatureContent>
                This section supports the hero section by reinforcing the
                headline and assuring the visitor of top tier experience and
                service.
              </FeatureContent>
            </Column>
            <FeatureImageContainer>
              <FeatureImage alt="" src={featureImg} />
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
        </FeaturesWrapper>
      </Section>
      <BannerContainer>
        <Banner>
          <BannerTitle>
            Want us to email you about special offers & updates?
          </BannerTitle>
          <EmailSubscriptionContainer>
            <EmailSubscriptionInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
            <EmailSubscriptionButton
              isLoading={isLoading}
              btnTxt={'Subscribe'}
              onClick={handleSubscribe}
            />
          </EmailSubscriptionContainer>
        </Banner>
      </BannerContainer>
      <FooterContainer>
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
      </FooterContainer>
      <CopyWriteText>© 2021 4thenergy All Rights Reserved.</CopyWriteText>
      {/* </BottomContainer> */}
    </Container>
  );
};
