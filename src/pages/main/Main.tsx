import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import FullBtn from '../../components/commons/FullBtn';
import Spacing from '../../components/commons/Spacing';
import Title from '../../components/commons/Title';

const Main = () => {
  const navigate = useNavigate();

  const onClickRecordToday = () => {
    navigate('/record');
  };

  const onClickPastFeeling = () => {
    navigate('/list');
  };
  return (
    <>
      {/* 닉네임 앞에 값으로 변경 필요 */}
      <Title text={`또리누나의사랑 님의\n감정 기록 공간`} type="head" paddingTop={8} align="center" />
      <Spacing marginBottom="2.3" />
      <ImgDiv />
      <Spacing marginBottom="1.6" />
      {/* 버튼 위치 조정 필요 */}
      {/* disable 처리 필요 */}
      <FullBtn activeText="오늘의 감정 기록하기" isBtnDisable={false} bottom={false} onClick={onClickRecordToday} />
      <Spacing marginBottom="1" />
      <FullBtn disabledText="지난 감정 기록 보기" isBtnDisable={true} bottom={false} onClick={onClickPastFeeling} />
    </>
  );
};

export default Main;

const ImgDiv = styled.div`
  width: 100%;
  height: 32rem;

  background-color: ${({ theme }) => theme.colors.key};
`;
