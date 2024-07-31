import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import Spacing from '../../../components/commons/Spacing';
import Title from '../../../components/commons/Title';
import { characterState } from '../../../states/characterState';

const Loading = () => {
  const character = useRecoilValue(characterState);
  return (
    <>
      <Title
        text={`${character}가 당신의 이야기에 대한\n답장을 적고 있어요!`}
        align="center"
        type="middle"
        paddingTop={9.45}
      />
      <Spacing marginBottom="4" />
      <TempImg />
    </>
  );
};

export default Loading;

// 로띠
const TempImg = styled.div`
  width: 100%;
  height: 35rem;

  background-color: ${({ theme }) => theme.colors.key};
`;
