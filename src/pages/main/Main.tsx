import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import FullBtn from '../../components/commons/FullBtn';
import Spacing from '../../components/commons/Spacing';
import Title from '../../components/commons/Title';

const Main = () => {
  const navigate = useNavigate();

  const onClickRecordToday = () => {
    navigate('/todayFeeling');
  };

  const onClickPastFeeling = () => {
    navigate('/memory');
  };
  return (
    <>
      {/* 닉네임 앞에 값으로 변경 필요 */}
      <Title text={`또리누나의사랑 님의\n감정 기록 공간`} type="head" paddingTop={8} align="center" />
      <Spacing marginBottom="2.3" />
      <ImgDiv />
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

const ImgDiv = styled.div`
  width: 100%;
  height: 32rem;

  background-color: ${({ theme }) => theme.colors.key};
`;

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
