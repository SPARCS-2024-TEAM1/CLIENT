import styled from '@emotion/styled';

interface TitlePropsType {
  text: string;
  type: string;
  align?: string;
}

const Title = (props: TitlePropsType) => {
  const { text, type, align = 'start' } = props;
  return (
    <Wrapper $type={type} $align={align}>
      {text}
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div<{ $type: string; $align: string }>`
  display: flex;
  justify-content: ${({ $align }) => ($align === 'center' ? 'center' : 'flex-start')};

  color: ${({ theme }) => theme.colors.grayScaleW_bg};
  text-align: ${({ $align }) => ($align === 'center' ? 'center' : '')};
  ${({ $type, theme }) => ($type === 'head' ? theme.fonts.Head1_SB_24 : theme.fonts.Title1_SB_20)};
  white-space: pre-wrap;
`;
