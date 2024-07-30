import styled from '@emotion/styled';
import { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftIc, ClockIc } from '../../../assets/svgs';
import FullBtn from '../../../components/commons/FullBtn';
import Header from '../../../components/commons/Header';
import Input from '../../../components/commons/Input';
import Spacing from '../../../components/commons/Spacing';
import Title from '../../../components/commons/Title';
import { formatTime } from '../utils/formatTime';

const Step문자인증 = () => {
  const navigate = useNavigate();
  const [authCode, setAuthCode] = useState('');

  // 서버 통신 후 맞는 인증코드인지 확인 필요
  const isValid = true;

  const onClickBack = () => {
    navigate('/onboarding/1');
  };

  const TIME = 180 * 1000;
  const [timeLeft, setTimeLeft] = useState(TIME);
  const { minutes, seconds } = formatTime(timeLeft);

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1000) {
          clearInterval(id);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [timeLeft]);

  // 재전송 클릭
  const onClickGetAuthCode = () => {
    console.log('문자인증 api 연결');
    setTimeLeft(TIME);
  };

  // 인증 코드 입력 input handler
  const handleChangeAuthCode = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthCode(e.target.value);
  };

  // 확인버튼
  const onClickCheckAuthCode = () => {
    console.log('인증번호 맞는지 확인하는 api');
    isValid && navigate('/onboarding/3');
  };

  return (
    <>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={onClickBack}>
        <ReAuthBtn onClick={onClickGetAuthCode}>재발송</ReAuthBtn>
      </Header>
      <Title text="인증번호를 입력해주세요" type="middle" />
      <Spacing marginBottom="0.4" />
      <TimerContainer>
        <ClockIc />
        <Timer>
          {minutes}:{seconds} 남았어요
        </Timer>
      </TimerContainer>
      <Spacing marginBottom="2.3" />
      <Input placeholder="인증번호 6자리" inputVal={authCode} handleInputVal={handleChangeAuthCode} isValid={isValid} />
      <Spacing marginBottom="2.943" />
      <FullBtn
        activeText="확인"
        disabledText="확인"
        isBtnDisable={authCode.length !== 6}
        onClick={onClickCheckAuthCode}
        bottom={false}
      />
    </>
  );
};

export default Step문자인증;

const ReAuthBtn = styled.button`
  position: absolute;
  top: 1.7rem;
  right: 2rem;

  width: 5.3rem;
  height: 2.8rem;
  padding: 0.3rem 0.8rem;
  border: none;
  border-radius: 4px;

  /* 색상 변경 필요 */
  background-color: ${({ theme }) => theme.colors.grayScaleW_bg};

  color: ${({ theme }) => theme.colors.grayScaleB_Text};

  ${({ theme }) => theme.fonts.Body3_M_14};
  cursor: pointer;
`;

const TimerContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;

const Timer = styled.span`
  ${({ theme }) => theme.fonts.Body3_M_14};
  color: ${({ theme }) => theme.colors.transparentW40};
`;
