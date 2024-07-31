import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { MainIc } from '../../assets/svgs';
import FullBtn from '../../components/commons/FullBtn';
import Spacing from '../../components/commons/Spacing';
import Title from '../../components/commons/Title';
import { userState } from '../../states/userState';

const Main = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  const onClickRecordToday = () => {
    navigate('/todayFeeling');
  };

  const onClickPastFeeling = () => {
    navigate('/memory');
  };
  return (
    <>
      <Title text={`${user.nickName} 님의\n감정 기록 공간`} type="title" paddingTop={8} align="center" />
      <Spacing marginBottom="2.3" />
      <MainIcon />
      <Spacing marginBottom="1.6" />
      <ButtonWrapper>
        <FullBtn
          activeText="오늘의 감정 기록하기"
          isBtnDisable={false}
          bottom={false}
          marginBottom={0}
          onClick={onClickRecordToday}
        />
        <FullBtn
          activeText="지난 감정 기록 보기"
          isBtnDisable={false}
          btnColorType="gray"
          bottom={false}
          onClick={onClickPastFeeling}
        />
      </ButtonWrapper>
    </>
  );
};

export default Main;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  bottom: 0;

  width: 100%;
  margin-left: -2rem;
  padding: 0 2rem;
`;

const MainIcon = styled(MainIc)`
  width: 100%;
  height: 100%;
`;
