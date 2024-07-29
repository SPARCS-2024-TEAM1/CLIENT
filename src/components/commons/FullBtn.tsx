import styled from '@emotion/styled';

interface fullBtnPropsType {
  activeText?: string;
  disabledText?: string;
  isBtnDisable?: boolean;
  onClick?: () => void;
  bottom?: boolean;
  btnColorType?: string;
  marginBottom?: number;
}

const FullBtn = (props: fullBtnPropsType) => {
  const {
    activeText,
    disabledText,
    isBtnDisable = true,
    onClick,
    bottom = true,
    btnColorType = 'yellow',
    marginBottom = 3.6,
  } = props;
  return (
    <>
      {bottom ? (
        <DownWrapper>
          <Button
            type="button"
            disabled={isBtnDisable}
            $isBtnDisable={isBtnDisable}
            $btnColorType={btnColorType}
            onClick={onClick}
            $marginBottom={marginBottom}>
            {isBtnDisable ? disabledText : activeText}
          </Button>
        </DownWrapper>
      ) : (
        <TopWrapper>
          <Button
            type="button"
            disabled={isBtnDisable}
            $btnColorType={btnColorType}
            $isBtnDisable={isBtnDisable}
            onClick={onClick}
            $marginBottom={marginBottom}>
            {isBtnDisable ? disabledText : activeText}
          </Button>
        </TopWrapper>
      )}
    </>
  );
};

export default FullBtn;

const TopWrapper = styled.div`
  display: flex;

  width: 100%;
`;

const DownWrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 3;

  width: 100%;
  margin-left: -2rem;
  padding: 0 2rem;
`;

const Button = styled.button<{ $isBtnDisable: boolean; $btnColorType: string; $marginBottom: number }>`
  z-index: 3;

  width: 100%;
  height: 5.6rem;
  margin-bottom: ${({ $marginBottom }) => `${$marginBottom}rem`};
  padding: 0 1.5rem;
  border: none;
  border-radius: 5px;

  background-color: ${({ $isBtnDisable, $btnColorType, theme }) =>
    $isBtnDisable
      ? theme.colors.grayScaleMg
      : $btnColorType === 'yellow'
        ? theme.colors.key
        : theme.colors.grayScaleMg};

  color: ${({ $isBtnDisable, $btnColorType, theme }) =>
    $isBtnDisable
      ? theme.colors.transparentW80
      : $btnColorType === 'yellow'
        ? theme.colors.grayScaleBg
        : theme.colors.transparentW80};
  ${({ theme }) => theme.fonts.Body2_SB_18};

  cursor: ${({ $isBtnDisable }) => ($isBtnDisable ? 'default' : 'cursor')};
`;
