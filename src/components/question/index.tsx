import { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';
import openIcon from '../../assets/open_icon.svg';

type IQuestionTab = {
  header: string;
  text: string;
};

export const QuestionTab: FC<IQuestionTab> = ({ header, text, ...rest }) => {
  const [openModule, setOpenModule] = useState(false);

  return (
    <Wrapper open={openModule}>
      <HeaderWrap>
        <QuestionHeader>{header}</QuestionHeader>
        {openModule ? (
          <Hyphen
            as={'button'}
            onClick={() => setOpenModule((prev) => !prev)}
          />
        ) : (
          <QuestionOpenIcon
            src={openIcon}
            onClick={() => setOpenModule((prev) => !prev)}
          />
        )}
      </HeaderWrap>
      {openModule && <Text {...rest}>{text}</Text>}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ open: boolean }>`
  padding: 32px 32px;
  margin: 0px auto;
  ${(props) =>
    props.open
      ? css`
          background: '#ffffff';
          box-shadow: 0px 4px 40px rgba(43, 89, 255, 0.08);
        `
      : css`
          background-color: none;
          box-shadow: none;
          border-bottom: 1px solid whitesmoke;
          :last-child {
            border-bottom: none;
          }
        `}
  border-radius: 5px;
`;
const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0px;
`;
export const QuestionHeader = styled.h3`
  font-weight: 500;
  color: #000b33;
  font-size: ${pxToRem(20)};
  line-height: ${pxToRem(26)};
`;
const Hyphen = styled.div`
  width: 32px;
  border: none;
  border-bottom: 4px solid #32324b;
  display: flex;
  align-self: center;
  cursor: pointer;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(26)};
  color: #32324b;
`;
const QuestionOpenIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
