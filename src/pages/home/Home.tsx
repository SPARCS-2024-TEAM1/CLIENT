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
      <Title text={`입시생들의 속마음을\n들어주고 답변해주는 공간`} type="title" paddingTop={20.3} align="center" />
      <FullBtn activeText="휴대전화 번호로 시작하기" isBtnDisable={false} onClick={onClickNext} />
    </>
  );
};

export default Home;
