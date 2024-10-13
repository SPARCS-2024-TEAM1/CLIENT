import styled from '@emotion/styled';
import React from 'react';

interface InputPropsType {
  placeholder: string;
  inputVal: string;
  handleInputVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
  wordLimit?: number;
  isValid?: boolean;
}

const Input = (props: InputPropsType) => {
  const { placeholder, inputVal, handleInputVal, wordLimit = 0, isValid = true } = props;

  return (
    <>
      <Wrapper
        placeholder={placeholder}
        value={inputVal}
        onChange={handleInputVal}
        $wordLimit={wordLimit !== 0}
        $isValid={isValid}
      />
      {(wordLimit !== 0 || (isValid !== null && !isValid)) && (
        <WarnText $wordLimit={inputVal.length > wordLimit} $isValid={isValid}>
          {wordLimit !== 0 ? (
            inputVal.length > wordLimit ? (
              `${wordLimit}자가 초과되었어요`
            ) : (
              `최대 ${wordLimit}자까지 입력할 수 있어요!`
            )
          ) : (
            <></>
          )}
          {!isValid && '인증번호가 틀렸어요'}
        </WarnText>
      )}
    </>
  );
};

export default Input;

const Wrapper = styled.input<{ $wordLimit: boolean; $isValid: boolean }>`
  width: 100%;
  height: 5rem;
  margin-bottom: ${({ $wordLimit, $isValid }) => ($wordLimit || !$isValid ? '0.8rem' : '')};
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

const WarnText = styled.p<{ $wordLimit: boolean; $isValid: boolean }>`
  ${({ theme }) => theme.fonts.Caption1_M_12};
  color: ${({ $wordLimit, $isValid, theme }) =>
    !$isValid || $wordLimit ? theme.colors.red : theme.colors.transparentW40};
`;
