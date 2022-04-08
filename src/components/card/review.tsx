import { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { pxToRem } from '../../utils/pxToRem';

type IReviewCard = {
  imgSrc: string;
  name: string;
  body: string;
  className?: string;
};
export const ReviewCard: FC<IReviewCard> = ({
  imgSrc,
  name,
  body,
  className
}) => {
  return (
    <Card className={className}>
      <Avatar src={imgSrc} />
      <TextContainer>
        <Name>{name}</Name>
        <SubTitle>{body}</SubTitle>
      </TextContainer>
    </Card>
  );
};

const Card = styled.div`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 71.8491px 94.0881px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(9.4088px);
  border-radius: 7.60308px;
  display: flex;
  width: 234.36px;
  padding: 12px;
`;
const Avatar = styled.img`
  background: #c4c4c4;
  width: 42.77px;
  height: 42.77px;
  object-fit: cover;
  border-radius: 21.38px;
  margin-right: 9.2px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.p`
  font-family: 'Inter';
  font-weight: 700;
  font-size: ${pxToRem(10.64)};
  line-height: ${pxToRem(15.21)};
  color: ${colors.newBlack};
`;
const SubTitle = styled(Name)`
  font-weight: 400;
  margin-top: 3.67px;
`;
