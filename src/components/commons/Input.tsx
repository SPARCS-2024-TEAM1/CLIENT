import styled from '@emotion/styled';
import React from 'react';

interface InputPropsType {
  placeholder: string;
  inputVal: string;
  handleInputVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
  wordLimit?: number;
}

const Input = (props: InputPropsType) => {
  const { placeholder, inputVal, handleInputVal, wordLimit = 0 } = props;

  return (
    <>
      <Wrapper placeholder={placeholder} value={inputVal} onChange={handleInputVal} $wordLimit={wordLimit !== 0} />
      {wordLimit !== 0 && (
        <WarnText $wordLimit={inputVal.length > wordLimit}>
          {inputVal.length > wordLimit ? '20자가 초과되었어요' : '최대 20자까지 입력할 수 있어요!'}
        </WarnText>
      )}
    </>
  );
};

export default Input;

const Wrapper = styled.input<{ $wordLimit: boolean }>`
  width: 100%;
  height: 5rem;
  margin-bottom: ${({ $wordLimit }) => ($wordLimit ? '0.8rem' : '')};
  padding: 1.2rem 0.7rem;
  border: none;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.grayScaleW_bg};

  color: ${({ theme }) => theme.colors.grayScaleB_Text};

  ${({ theme }) => theme.fonts.Body1_M_18};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScaleLg};
  }
`;

const WarnText = styled.p<{ $wordLimit: boolean }>`
  ${({ theme }) => theme.fonts.Caption1_M_12};
  color: ${({ $wordLimit, theme }) => ($wordLimit ? theme.colors.red : theme.colors.transparentW40)};
`;
