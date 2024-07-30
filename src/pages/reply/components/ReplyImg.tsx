import styled from '@emotion/styled';

const ReplyImg = () => {
  return (
    <ReplyImgTempContainer>
      <ReplyTempImg />
      <ReplyTempVideo />
    </ReplyImgTempContainer>
  );
};

export default ReplyImg;

const ReplyImgTempContainer = styled.div`
  display: flex;
  gap: 0.9rem;

  width: 100%;
  padding-top: 5.6rem;
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
