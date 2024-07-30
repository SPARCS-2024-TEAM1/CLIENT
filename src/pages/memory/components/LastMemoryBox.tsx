import styled from '@emotion/styled';

interface LastMemoryBoxPropsType {
  id: number;
  date: string;
  feeling: string;
  onClick: () => void;
}

const LastMemoryBox = (props: LastMemoryBoxPropsType) => {
  const { date, feeling, onClick } = props;
  return (
    <Wrapper onClick={() => onClick()}>
      <Date>{date}</Date>
      <Feeling>{feeling}</Feeling>
    </Wrapper>
  );
};

export default LastMemoryBox;

const Wrapper = styled.section`
  position: relative;

  height: 10.6rem;
  padding: 1rem 1.4rem;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.grayScaleMg};

  cursor: pointer;
`;

const Date = styled.span`
  position: absolute;
  top: 1rem;
  left: 1.4rem;

  ${({ theme }) => theme.fonts.Caption1_M_12};
  color: ${({ theme }) => theme.colors.grayScaleLg};
`;

const Feeling = styled.span`
  position: absolute;
  right: 1.4rem;
  bottom: 0.8rem;

  ${({ theme }) => theme.fonts.Body2_SB_18};
  color: ${({ theme }) => theme.colors.grayScaleW_bg};
`;
