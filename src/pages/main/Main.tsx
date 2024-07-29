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
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.fonts.Body1_M_18};
`;
