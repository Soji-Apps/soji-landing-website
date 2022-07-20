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
  Wrap,
  SocialIconLink,
  PlaystoreButton,
  ButtonImg
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
import call from '../../assets/phone.svg';
import message from '../../assets/Message.svg';
import location from '../../assets/location.svg';
import pdf from '../../assets/Jeffdona_Global_Resources_Ltd_Privacy_Policy Document.pdf';

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
          <ContactUs href="#footer">Contact us</ContactUs>
        </HeaderFlex>
        <Header>
          <HeaderContentContainer>
            <BackgroudCirlce />
            <HeaderTitle>
              …The <Span>lifestyle</Span> you deserve, Let's champion your
              comfort.
            </HeaderTitle>
            <HeaderSubTitle>
              SOJI gives you access to malls and shopping store in your region
              and makes your real estate experience very easy and trust
            </HeaderSubTitle>
            <HeaderButtonContainer>
              <PlaystoreButton>
                <ButtonImg src={app_store} />
              </PlaystoreButton>
              <PlaystoreButton
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.sojiapps"
              >
                <ButtonImg src={play_store} />
              </PlaystoreButton>
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
              name="Convenient"
              body="SOJI is the best option for a busy person to smoothen his day and stay successful"
            />
            <GoalCard
              imgSrc={icon2}
              name="Innovative solution"
              body="We saw a need in the community and we are trying to provide a solution that works"
            />
            <GoalCard
              imgSrc={icon3}
              name="Vast Clientele"
              body="Stores, products and services are provided easily since they are regional"
            />
            <GoalCard
              imgSrc={icon4}
              name="Secure transactions"
              body="All operations on the app are encrypted and void of compromise"
            />
          </CardContainer>
          <Column>
            <AboutTitle>Safe delivery of products and services</AboutTitle>
            <AboutContent>
              We connect users to services and produts locally and efficently
              cutting stress and delay.
            </AboutContent>
          </Column>
        </AboutContainer>
      </Section>
      <Section>
        <BenefitContainer>
          <StyledHeader>
            <StyledHeading>Benefits of SOJI</StyledHeading>
            <StyledDescription>
              Set up and account and proceed to an awesome experience online and
              offline!
            </StyledDescription>
          </StyledHeader>
          <BenefitWraper>
            <BenefitRow>
              <BenefitItem>
                <LeftBenefitList>
                  <BenefitNumberWrapper>
                    <BenefitNumber>1</BenefitNumber>
                  </BenefitNumberWrapper>
                  <BenefitTitle>Fast delivery</BenefitTitle>
                  <BenefitPhrase>
                    Our team and logistics system is built to work with perfect
                    timing making delivery fast
                  </BenefitPhrase>
                </LeftBenefitList>
                <LeftBenefitList>
                  <BenefitNumberWrapper>
                    <BenefitNumber>2</BenefitNumber>
                  </BenefitNumberWrapper>
                  <BenefitTitle>Property inspection</BenefitTitle>
                  <BenefitPhrase>
                    You choose the property of your chioce and a thorough
                    inspection is guaranteed
                  </BenefitPhrase>
                </LeftBenefitList>
              </BenefitItem>
              <BenefitItem>
                <SojiOnPhone src={usecaseImage} alt="" />
              </BenefitItem>
              <BenefitItem>
                <RightBenefitList>
                  <BenefitNumber>3</BenefitNumber>
                  <BenefitTitle>Quality assurance</BenefitTitle>
                  <BenefitPhrase>
                    We deliver exactly what we offer you, top-tier professional
                    product and service.
                  </BenefitPhrase>
                </RightBenefitList>
                <RightBenefitList>
                  <BenefitNumber>4</BenefitNumber>
                  <BenefitTitle>End-End encryption</BenefitTitle>
                  <BenefitPhrase>
                    Your transactions are protected and secured by top notch
                    engineering and technology
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
              After singing up and setting up your profile, then all that is
              left is an awesome SOJI experience.
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
              <FeatureTitle>
                Enjoy the SOJI lifestyle Easy, safe & seamless
              </FeatureTitle>
              <FeatureContent>
                Browse the list of products and services, make an order and
                enjoy the SOJI experience to the fullest!
              </FeatureContent>
            </Column>
            <FeatureImageContainer>
              <FeatureImage alt="" src={featureImg} />
              <CustomReviewCard
                left
                imgSrc={
                  'https://img.freepik.com/free-photo/attractive-female-student-with-curly-hair-wears-transparent-glasses-white-t-shirt-stands-against-blue-background-has-calm-face-expression-tender-smile_273609-32793.jpg?w=1380&t=st=1649435206~exp=1649435806~hmac=9ca2ff3e0737a7b5329cb3beeb1dc65cdd147e7e2a329cad325a421f0cba564d'
                }
                name={'Ben Okeke'}
                body={'My orders always come in so fast with SOJI'}
              />
              <CustomReviewCard
                imgSrc={
                  'https://img.freepik.com/free-photo/attractive-female-student-with-curly-hair-wears-transparent-glasses-white-t-shirt-stands-against-blue-background-has-calm-face-expression-tender-smile_273609-32793.jpg?w=1380&t=st=1649435206~exp=1649435806~hmac=9ca2ff3e0737a7b5329cb3beeb1dc65cdd147e7e2a329cad325a421f0cba564d'
                }
                name={'Princess Agu'}
                body={
                  'SOJI helped me secure an apartment of my chioce at an affordable price'
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
      <FooterContainer id="footer">
        <FooterFlex>
          <LogoWrap>
            <Logo />
            <Wrap>
              <FooterText>Convenient and Professional service</FooterText>

              <SocialIconWrap>
                <SocialIconLink
                  href="https://instagram.com/soji_app?igshid=YmMyMTA2M2Y="
                  target="_blank"
                >
                  <SocialIcon src={instagram} />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com/company/sojiapp/"
                  target={'_blank'}
                >
                  <SocialIcon src={linkedin} />
                </SocialIconLink>
                <SocialIconLink>
                  <SocialIcon src={facebook} />
                </SocialIconLink>
                <SocialIconLink>
                  <SocialIcon src={twitter} />
                </SocialIconLink>
              </SocialIconWrap>
              <FooterText href={pdf} target={'_blank'} as={'a'}>
                Privacy Policy
              </FooterText>
            </Wrap>
          </LogoWrap>
          <ContactWrap>
            <Contact>Contact info</Contact>
            <FooterText>
              <SocialIcon src={location} />
              Enugu, Nigeria
            </FooterText>
            <FooterText>
              <SocialIcon src={call} /> +234 703-302-5748
            </FooterText>
            <FooterText>
              <SocialIcon src={message} />
              admin@sojiapps.com
            </FooterText>
            <HeaderButtonContainer>
              <PlaystoreButton>
                <ButtonImg src={app_store} />
              </PlaystoreButton>
              <PlaystoreButton
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.sojiapps"
              >
                <ButtonImg src={play_store} />
              </PlaystoreButton>
            </HeaderButtonContainer>
          </ContactWrap>
        </FooterFlex>
      </FooterContainer>
      <CopyWriteText>© 2021 SOJI All Rights Reserved.</CopyWriteText>
    </Container>
  );
};
