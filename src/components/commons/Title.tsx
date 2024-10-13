import styled from '@emotion/styled';

interface TitlePropsType {
  text: string | React.ReactNode;
  type: string;
  align?: string;
  paddingTop?: number;
}

const Title = (props: TitlePropsType) => {
  const { text, type, align = 'start', paddingTop = 8 } = props;
  return (
    <Wrapper $type={type} $align={align} $paddingTop={paddingTop}>
      {text}
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div<{ $type: string; $align: string; $paddingTop: number }>`
  display: flex;
  justify-content: ${({ $align }) => ($align === 'center' ? 'center' : 'flex-start')};
  align-items: center;

  padding-top: ${({ $paddingTop }) => `${$paddingTop}rem`};

  color: ${({ theme }) => theme.colors.grayScaleW_bg};
  text-align: ${({ $align }) => ($align === 'center' ? 'center' : '')};
  ${({ $type, theme }) => ($type === 'head' ? theme.fonts.Head1_SB_24 : theme.fonts.Title1_SB_20)};
  white-space: pre-wrap;
`;
