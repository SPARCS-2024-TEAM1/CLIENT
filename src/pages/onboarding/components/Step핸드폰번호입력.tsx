import styled from '@emotion/styled';
import { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { ArrowLeftIc, PhoneIc } from '../../../assets/svgs';
import FullBtn from '../../../components/commons/FullBtn';
import Header from '../../../components/commons/Header';
import Input from '../../../components/commons/Input';
import Spacing from '../../../components/commons/Spacing';
import Title from '../../../components/commons/Title';
import { userState, userStateType } from '../../../states/userState';
import { usePostPhoneNumber } from '../hooks/queries';
import { formatPhone } from '../utils/formatPhone';

const Step핸드폰번호입력 = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const setUserState = useSetRecoilState(userState);

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedNum = formatPhone(e.target.value);
    setPhoneNumber(formattedNum);
  };

  const { mutate: postPhoneNumber, isSuccess } = usePostPhoneNumber(phoneNumber);

  const onClickBack = () => {
    navigate('/');
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/onboarding/2');
    }
  }, [isSuccess]);

  const onClickGetAuthCode = () => {
    postPhoneNumber();
    setUserState((prev: userStateType) => ({
      ...prev,
      phoneNumber: phoneNumber,
    }));
  };

  return (
    <>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={onClickBack} />
      <Title
        text={
          <div>
            안녕하세요
            <PhoneIcon />
            <br />
            전화번호를 입력해주세요
          </div>
        }
        type="middle"
      />
      <Spacing marginBottom="2" />
      <Input placeholder="010-1234-5678" inputVal={phoneNumber} handleInputVal={handleChangePhone} />
      <Spacing marginBottom="3" />
      <FullBtn
        activeText="인증번호 받기"
        disabledText="인증번호 받기"
        isBtnDisable={phoneNumber.length < 13}
        onClick={onClickGetAuthCode}
        bottom={false}
      />
    </>
  );
};

export default Step핸드폰번호입력;

const PhoneIcon = styled(PhoneIc)`
  margin-left: 0.6rem;
`;
