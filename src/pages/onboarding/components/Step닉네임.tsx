import styled from '@emotion/styled';
import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftIc } from '../../../assets/svgs';
import FullBtn from '../../../components/commons/FullBtn';
import Header from '../../../components/commons/Header';
import Input from '../../../components/commons/Input';
import Spacing from '../../../components/commons/Spacing';
import Title from '../../../components/commons/Title';

const Step닉네임 = () => {
  const navigate = useNavigate();
  const [nickNameVal, setNickNameVal] = useState('');

  const onClickBack = () => {
    // 뒤로가기 눌러서 어디로가는지 확인 필요
    navigate('/onboarding/2');
  };

  const handleChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickNameVal(e.target.value);
  };

  const onClickNicknameSubmit = () => {
    console.log('닉네임 post api 혹은 저장');
    navigate('/main');
  };

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
