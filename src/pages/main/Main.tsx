import styled from '@emotion/styled';

const Main = () => {
  return <TestDiv>안녕하세요</TestDiv>;
};

export default Main;

const TestDiv = styled.div`
  color: ${({ theme }) => theme.colors.Blue};
  ${({ theme }) => theme.fonts.Head1_B_20};
`;
