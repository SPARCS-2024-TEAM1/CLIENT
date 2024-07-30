import styled from '@emotion/styled';

import Spacing from '../../../components/commons/Spacing';
import Title from '../../../components/commons/Title';

const Loading = () => {
  return (
    <>
      <Title
        // 실제 캐릭터 이름으로 변경 필요
        text={`버럭이가 당신의 이야기에 대한\n답장을 적고 있어요!`}
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
