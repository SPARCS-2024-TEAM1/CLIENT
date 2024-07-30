import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftIc, RestartIc } from '../../assets/svgs';
import FullBtn from '../../components/commons/FullBtn';
import Header from '../../components/commons/Header';
import Spacing from '../../components/commons/Spacing';
import Title from '../../components/commons/Title';

const RecordToday = () => {
  const navigate = useNavigate();
  const [isStart, setIsStart] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const onClickBack = () => {
    navigate('/todayFeeling');
  };

  const onClickStart = () => {
    setIsStart(true);
  };

  useEffect(() => {
    if (isStart && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else if (timeLeft === 0) {
      setIsStart(false);
    }
  }, [isStart, timeLeft]);

  return (
    <>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={onClickBack} />
      {/* 실제 캐릭터 이름으로 바꿔야함 */}
      <Title text={`버럭이한테 하고싶은 얘기를\n30초 동안 말해볼까요?`} type="title" align="center" paddingTop={9.45} />
      <Spacing marginBottom="4.035" />
      <RecordWrapper>
        <RecordTempImg />
        <Timer>{`00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`}</Timer>
        <Spacing marginBottom="3.215" />
        <ResetDiv>
          <RestartIc />
          <ResetText>초기화하기</ResetText>
        </ResetDiv>
      </RecordWrapper>
      <FullBtn activeText={isStart ? '완료' : '시작하기 '} isBtnDisable={false} onClick={onClickStart} />
    </>
  );
};

export default RecordToday;

const RecordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const RecordTempImg = styled.div`
  width: 22rem;
  height: 16rem;

  background-color: ${({ theme }) => theme.colors.key};
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;

  width: 18rem;
  height: 7rem;
  padding: 1.13rem 4.85rem;
  border-radius: 8px;

  ${({ theme }) => theme.fonts.Head2_SB_30};
  background-color: ${({ theme }) => theme.colors.grayScaleW_bg};
`;

const ResetDiv = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  cursor: pointer;
`;

const ResetText = styled.span`
  ${({ theme }) => theme.fonts.Title2_SB_16};
  color: ${({ theme }) => theme.colors.grayScaleW_bg};
`;
