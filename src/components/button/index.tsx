import { ComponentPropsWithoutRef, FC } from 'react';
import styled from 'styled-components';

export const BaseButton = styled.button`
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0;
  padding-right: 24px;
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
