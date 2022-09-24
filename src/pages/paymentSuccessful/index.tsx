import { ReactComponent as Logo } from '../../assets/soji_logo.svg';
import styled from 'styled-components';
import { ReactComponent as StatusGood } from '../../assets/status_good.svg';

export const PaymentSuccessful = () => {
  return (
    <Wrapper>
      <Navbar>
        <Logo />
      </Navbar>
      <Container>
        <StatusGood />
        <OppsText>Payment Successful</OppsText>
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
    filter: drop-shadow(0px 4px 4px rgba(50, 50, 71, 0.05));
    padding: 40px 20px 24px 20px;
  }
`;
const Container = styled.div`
  padding: 0px 50px 50px 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const OppsText = styled.h3`
  font-weight: 500;
  margin-top: 20px;
`;
