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
  CardContainer,
  Column,
  Container,
  CustomReviewCard,
  CustomSideCard,
  CustomSideCard2,
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
  Section,
  UserSideContainer,
  UserSideContent,
  UserSideImage,
  UserSideImageContiner,
  UserSideTitle
} from './style';
import logo from '../../assets/soji_logo.svg';
import headerImage from '../../assets/header_image.svg';
import app_store from '../../assets/app_store.svg';
import play_store from '../../assets/play_store.svg';
import splash from '../../assets/splash.svg';
import splash2 from '../../assets/splash2.svg';
import splash3 from '../../assets/splash3.svg';
import { StoreButton } from '../../components/button';
import { GoalCard } from '../../components/card';
import { useLayoutEffect, useRef } from 'react';

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
    </Container>
  );
};
