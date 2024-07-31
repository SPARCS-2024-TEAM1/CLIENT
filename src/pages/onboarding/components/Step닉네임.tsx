import styled from '@emotion/styled';
import { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { ArrowLeftIc, NameIcPng, NicknameFlowerIc } from '../../../assets/svgs';
import FullBtn from '../../../components/commons/FullBtn';
import Header from '../../../components/commons/Header';
import Input from '../../../components/commons/Input';
import Spacing from '../../../components/commons/Spacing';
import Title from '../../../components/commons/Title';
import { userState, userStateType } from '../../../states/userState';
import { usePostSignup } from '../hooks/queries';

const Step닉네임 = () => {
  const navigate = useNavigate();
  const [nickNameVal, setNickNameVal] = useState('');
  const [user, setUserState] = useRecoilState(userState);

  const {
    mutate: postSignup,
    isSuccess,
    memberId,
    userNickname,
  } = usePostSignup({
    nickname: nickNameVal,
    phoneNumber: user.phoneNumber,
  });

  const onClickBack = () => {
    navigate('/onboarding/1');
  };

  const handleChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickNameVal(e.target.value);
  };

  const onClickNicknameSubmit = () => {
    postSignup();
    setUserState((prev: userStateType) => ({
      ...prev,
      nickName: nickNameVal,
    }));
  };

  useEffect(() => {
    if (isSuccess) {
      setUserState((prev: userStateType) => ({
        ...prev,
        nickName: userNickname,
        userId: memberId,
      }));
      navigate('/main');
    }
  }, [isSuccess]);

  // console.log(user);

  return (
    <>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={onClickBack} />
      <Title
        text={
          <div>
            반가워요
            <NicknameFlowerIcon />
            <br />
            어떻게 불러드리면 될까요?
          </div>
        }
        type="middle"
      />
      <Spacing marginBottom="2" />
      <Input
        placeholder="닉네임을 입력해주세요"
        inputVal={nickNameVal}
        handleInputVal={handleChangeNickname}
        wordLimit={10}
      />
      <Spacing marginBottom="1.2" />
      <NameIcPngIcon />
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

const NicknameFlowerIcon = styled(NicknameFlowerIc)`
  margin-left: 0.6rem;
`;

const NameIcPngIcon = styled(NameIcPng)`
  width: 100%;
`;
