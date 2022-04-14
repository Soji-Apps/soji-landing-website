import { FC } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';

type IQuestionTab = {
  header: string;
  text: string;
};

export const QuestionTab: FC<IQuestionTab> = ({ header, text }) => {
  return (
    <Wrapper>
      <HeaderWrap>
        <QuestionHeader>{header}</QuestionHeader>
        <Hyphen />
      </HeaderWrap>
      <Text>{text}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2em 2em;
  margin: 0em auto;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 4px 40px rgba(43, 89, 255, 0.08);
`;
const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0em;
`;
export const QuestionHeader = styled.h3`
  font-family: 'DM Sans';
  font-weight: 500;
  color: #000b33;
  font-size: ${pxToRem(20)};
  line-height: ${pxToRem(26)};
`;
const Hyphen = styled.div`
  width: 2em;
  border-bottom: 4px solid #32324b;
  display: flex;
  align-self: center;
`;
export const Text = styled.p`
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(26)};
  color: #32324b;
`;
