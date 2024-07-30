import styled from '@emotion/styled';
import { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { ArrowLeftIc } from '../../../assets/svgs';
import FullBtn from '../../../components/commons/FullBtn';
import Header from '../../../components/commons/Header';
import Input from '../../../components/commons/Input';
import Spacing from '../../../components/commons/Spacing';
import Title from '../../../components/commons/Title';
import { usePostSignup } from '../hooks/queries';

const Step닉네임 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [nickNameVal, setNickNameVal] = useState('');

  const {
    mutate: postSignup,
    data,
    isSuccess,
  } = usePostSignup({
    nickname: nickNameVal,
    phoneNumber: location.state ? location.state.phoneNumber : '',
  });

  const onClickBack = () => {
    navigate('/onboarding/1');
  };

  const handleChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickNameVal(e.target.value);
  };

  const onClickNicknameSubmit = () => {
    postSignup();
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/main');
    }
  }, [isSuccess]);

  console.log(data);

  return (
    <>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={onClickBack} />
      <Title text={`반가워요\n어떻게 불러드리면 될까요?`} type="middle" />
      <Spacing marginBottom="2" />
      <Input
        placeholder="닉네임을 입력해주세요"
        inputVal={nickNameVal}
        handleInputVal={handleChangeNickname}
        wordLimit={10}
      />
      <Spacing marginBottom="1.2" />
      <ImgDiv />
      <Spacing marginBottom="2" />
      <FullBtn
        activeText="확인"
        disabledText="확인"
        isBtnDisable={nickNameVal.length > 10 || nickNameVal.length === 0}
        onClick={onClickNicknameSubmit}
      />
    </>
  );
};

export default Step닉네임;

const ImgDiv = styled.div`
  width: 100%;
  height: 31rem;

  background-color: ${({ theme }) => theme.colors.key};
`;
