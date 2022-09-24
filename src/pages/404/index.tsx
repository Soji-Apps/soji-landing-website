import { ReactComponent as Logo } from '../../assets/soji_logo.svg';
import Image404 from '../../assets/404_img.svg';
import styled from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../utils/colors';
import { PrimaryButton } from '../../components';

export const Page404 = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Navbar>
        <Logo />
      </Navbar>
      <Container>
        <OppsText>Oops!</OppsText>
        <FlexBox>
          <StyledImage404 src={Image404} />
          <Div>
            <ErrorText>
              The page you are looking for is not available or might have been
              removed
            </ErrorText>
            <Redirectiontex>
              You can click the button below to go back to the home page
            </Redirectiontex>
            <HomeButton
              btnTxt={'Go Back'}
              onClick={() => navigate('/', { replace: true })}
            />
          </Div>
        </FlexBox>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #fafafb;
  min-height: 100vh;
`;
const Navbar = styled.div`
  padding: 20px 50px;
  @media screen and (max-width: 600px) {
    background: ${colors.primary.primaryTint50};
    filter: drop-shadow(0px 4px 4px rgba(50, 50, 71, 0.05));
    padding: 40px 20px 24px 20px;
  }
`;
const Container = styled.div`
  padding: 0px 50px 50px 50px;
  @media screen and (max-width: 600px) {
    text-align: center;
    padding: 0px 20px;
  }
`;
const OppsText = styled.h1`
  font-weight: 700;
  font-size: ${pxToRem(96)};
  line-height: ${pxToRem(144)};
  color: ${colors.newBlack};
  margin: 70px 0px 30px 0px;
  @media screen and (max-width: 600px) {
    font-size: ${pxToRem(64)};
    margin: 50px 0px 0px 0px;
  }
`;
const StyledImage404 = styled.img`
  width: 50%;
  margin-top: -100px;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0px 0px 30px 0px;
  }
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-self: flex-start;
  height: 20vh;
  @media screen and (max-width: 600px) {
    display: block;
    height: 0vh;
  }
`;
const Div = styled.div`
  width: 50%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const ErrorText = styled.p`
  font-weight: 500;
  font-size: ${pxToRem(24)};
  line-height: ${pxToRem(36)};
  color: ${colors.newBlack};
  max-width: 469px;
  @media screen and (max-width: 600px) {
    font-size: ${pxToRem(20)};
    line-height: ${pxToRem(30)};
  }
`;
const Redirectiontex = styled.p`
  font-weight: 400;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(21)};
  color: ${colors.newBlack};
  margin: 12px 0px;
`;
const HomeButton = styled(PrimaryButton)`
  margin-top: 35px;
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
