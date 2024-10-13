import styled from '@emotion/styled';

interface ReplyImgPropType {
  paddingTop?: number;
}

const ReplyImg = (props: ReplyImgPropType) => {
  const { paddingTop = 5.6 } = props;
  return (
    <ReplyImgTempContainer $paddingTop={paddingTop}>
      <ReplyTempImg />
      <ReplyTempVideo />
    </ReplyImgTempContainer>
  );
};

export default ReplyImg;

const ReplyImgTempContainer = styled.div<{ $paddingTop: number }>`
  display: flex;
  gap: 0.9rem;

  width: 100%;
  padding-top: ${({ $paddingTop }) => `${$paddingTop}rem`};
`;

const ReplyTempImg = styled.div`
  width: 19.4rem;

  background-color: ${({ theme }) => theme.colors.key};
`;

const ReplyTempVideo = styled.div`
  width: 13.2rem;
  height: 11.4rem;

  background-color: ${({ theme }) => theme.colors.key};
`;
