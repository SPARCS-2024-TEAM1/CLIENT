import { useNavigate } from 'react-router-dom';

import FullBtn from '../../components/commons/FullBtn';
import Title from '../../components/commons/Title';

const Home = () => {
  const navigate = useNavigate();

  const onClickNext = () => {
    navigate('/onboarding/1');
  };
  return (
    <>
      <Title text={`오늘의 이야기와 감정을 \n나누는 특별한 공간 \n\nArea`} type="head" paddingTop={20.3} />
      <FullBtn activeText="휴대전화 번호로 시작하기" isBtnDisable={false} onClick={onClickNext} />
    </>
  );
};

export default Home;
