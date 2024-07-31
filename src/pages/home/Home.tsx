import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { LogoIc, SplashBigIc } from '../../assets/svgs';
import FullBtn from '../../components/commons/FullBtn';
import Title from '../../components/commons/Title';

const Home = () => {
  const navigate = useNavigate();

  const onClickNext = () => {
    navigate('/onboarding/1');
  };

  return (
    <>
      <LogoIcon />
      <Title text={`입시생들의 속마음을\n들어주고 답변해주는 공간`} type="title" align="center" paddingTop={13.5} />
      <SplashBigIcon />
      <FullBtn activeText="휴대전화 번호로 시작하기" isBtnDisable={false} onClick={onClickNext} />
    </>
  );
};

export default Home;

const LogoIcon = styled(LogoIc)`
  position: absolute;
  top: 7.4rem;
  left: 39%;
`;

const SplashBigIcon = styled(SplashBigIc)`
  width: 100%;
`;
