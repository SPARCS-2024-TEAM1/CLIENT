import { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftIc } from '../../../assets/svgs';
import FullBtn from '../../../components/commons/FullBtn';
import Header from '../../../components/commons/Header';
import Input from '../../../components/commons/Input';
import Spacing from '../../../components/commons/Spacing';
import Title from '../../../components/commons/Title';
import { usePostPhoneNumber } from '../hooks/queries';
import { formatPhone } from '../utils/formatPhone';

const Step핸드폰번호입력 = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedNum = formatPhone(e.target.value);
    setPhoneNumber(formattedNum);
  };

  // const handleGetAuthCodeSuccess = () => {
  //   console.log('first');
  //   navigate('/onboarding/2', {
  //     state: {
  //       phoneNumber: phoneNumber,
  //     },
  //   });
  // };

  const { mutate: postPhoneNumber, isSuccess } = usePostPhoneNumber(phoneNumber);

  const onClickBack = () => {
    navigate('/');
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/onboarding/2', {
        state: { phoneNumber },
      });
    }
  }, [isSuccess, phoneNumber]);

  const onClickGetAuthCode = () => {
    postPhoneNumber();
  };

  return (
    <>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={onClickBack} />
      <Title text={`안녕하세요\n전화번호를 입력해주세요`} type="middle" />
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
