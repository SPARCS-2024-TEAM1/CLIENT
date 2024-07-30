import styled from '@emotion/styled';

interface TwoBtnPropsType {
  leftText: string;
  rightText: string;
  leftColorType: string;
  rightColorType: string;
  leftOnClick?: () => void;
  rightOnClick?: () => void;
}

const TwoBtn = (props: TwoBtnPropsType) => {
  const { leftText, rightText, leftOnClick, rightOnClick, leftColorType, rightColorType } = props;
  return (
    <Wrapper>
      <Button type="button" $active={leftColorType === 'yellow'} onClick={leftOnClick}>
        {leftText}
      </Button>
      <Button type="button" $active={rightColorType === 'yellow'} onClick={rightOnClick}>
        {rightText}
      </Button>
    </Wrapper>
  );
};

export default TwoBtn;

const Wrapper = styled.div`
  display: flex;
  gap: 1.1rem;
  position: fixed;
  bottom: 0;
  z-index: 3;

  width: 100%;
  margin-bottom: 3.6rem;
  margin-left: -2rem;
  padding: 0 2rem;
`;

const Button = styled.button<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 6rem;
  border: none;
  border-radius: 5px;

  background-color: ${({ $active, theme }) => ($active ? theme.colors.key : theme.colors.grayScaleMg)};

  color: ${({ $active, theme }) => ($active ? theme.colors.grayScaleBg : theme.colors.transparentW80)};

  ${({ theme }) => theme.fonts.Title2_SB_16};
  cursor: pointer;
`;
