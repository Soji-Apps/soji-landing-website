import { ComponentPropsWithoutRef, FC } from 'react';
import styled from 'styled-components';
import loader from '../../assets/infinity_loader.svg';

export const BaseButton = styled.button`
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0;
  margin-right: 24px;
  :nth-child(2) {
    padding-right: 0;
  }
`;

interface IStoreButton extends ComponentPropsWithoutRef<'button'> {
  src: string;
  alt?: string;
}
export const StoreButton: FC<IStoreButton> = ({ src, alt = '', ...rest }) => {
  return (
    <BaseButton {...rest}>
      <ButtonImage src={src} alt={alt} />
    </BaseButton>
  );
};

const ButtonImage = styled.img``;

interface ILoadButton extends ComponentPropsWithoutRef<'button'> {
  btnTxt: string;
  isLoading: boolean;
}

const ButtonImg = styled.img`
  width: 35px;
  height: 12px;
  object-fit: cover;
`;

export const PrimaryButton: FC<ILoadButton> = ({
  btnTxt,
  isLoading,
  ...rest
}) => {
  return (
    <button {...rest}>
      {isLoading ? <ButtonImg src={loader} alt={''} /> : btnTxt}
    </button>
  );
};
