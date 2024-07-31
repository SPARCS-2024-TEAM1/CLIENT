import styled from '@emotion/styled';
import Lottie from 'lottie-web';
import { useRef, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import LottieLoading from '../../../assets/lottie/lottie_loading.json';
import Spacing from '../../../components/commons/Spacing';
import Title from '../../../components/commons/Title';
import { characterState } from '../../../states/characterState';

interface loadingPropType {
  type: string;
}

const Loading = (props: loadingPropType) => {
  const { type } = props;
  const character = useRecoilValue(characterState);

  // lottie
  const lottieContainer = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    if (lottieContainer.current !== null) {
      const animation = Lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: LottieLoading,
      });

      return () => {
        animation.destroy();
      };
    }
  }, []);

  return (
    <>
      <Title
        text={
          type === 'summary'
            ? `오늘 들은 얘기를 정리 중이에요\n잠시만 기다려주세요!`
            : `${character}가 당신의 이야기에 대한\n답장을 적고 있어요!`
        }
        align="center"
        type="middle"
        paddingTop={9.45}
      />
      <Spacing marginBottom="4" />
      <TempImg ref={lottieContainer} />
    </>
  );
};

export default Loading;

// 로띠
const TempImg = styled.div`
  width: 100%;
  height: 35rem;
`;
