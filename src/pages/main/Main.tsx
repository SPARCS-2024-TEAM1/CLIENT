import styled from '@emotion/styled';
import { HbPromiseIc } from '../../assets/svgs';

const Main = () => {
  return (
    <>
      <HbPromiseIc />
      <TestDiv>안녕하세요</TestDiv>
    </>
  );
};

export default Main;

const TestDiv = styled.div`
  color: ${({ theme }) => theme.colors.Blue};
  ${({ theme }) => theme.fonts.Head1_B_20};
`;
