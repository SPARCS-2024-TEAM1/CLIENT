import styled from '@emotion/styled';

interface fullBtnPropsType {
  activeText?: string;
  disabledText?: string;
  isBtnDisable: boolean;
  onClick?: () => void;
}

const FullBtn = (props: fullBtnPropsType) => {
  const { activeText, disabledText, isBtnDisable, onClick } = props;
  return (
    <Wrapper>
      <Button $isBtnDisable={isBtnDisable} onClick={onClick}>
        {isBtnDisable ? disabledText : activeText}
      </Button>
      <BtnBackground />
    </Wrapper>
  );
};

export default FullBtn;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  margin-left: -2rem;
  padding: 0 2rem;
`;

const Button = styled.button<{ $isBtnDisable: boolean }>`
  z-index: 2;

  width: 100%;
  height: 5.6rem;
  padding: 0 1.5rem;
  border: none;
  border-radius: 5px;

  background-color: ${({ $isBtnDisable, theme }) => ($isBtnDisable ? theme.colors.grayScaleMg : theme.colors.key)};

  /* 폰트 색상 변경 필요 */
  color: ${({ $isBtnDisable, theme }) => ($isBtnDisable ? theme.colors.transparentW80 : theme.colors.grayScaleBg)};
  ${({ theme }) => theme.fonts.Body2_SB_18};

  cursor: ${({ $isBtnDisable }) => ($isBtnDisable ? 'default' : 'cursor')};
`;

const BtnBackground = styled.div`
  width: 100%;
  height: 3.6rem;

  background-color: ${({ theme }) => theme.colors.grayScaleBg};
`;
