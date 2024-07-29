import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HbPromiseIc, ArrowLeftIc } from '../../assets/svgs';
// import FullBtn from '../../components/commons/FullBtn';
import Header from '../../components/commons/Header';
import Input from '../../components/commons/Input';
import Title from '../../components/commons/Title';
import TwoBtn from '../../components/commons/TwoBtn';

const Main = () => {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState('');

  const handleInputVal = (val: string) => {
    setInputVal(val);
  };

  const handleOnClickFullBtn = () => {
    navigate('/');
  };

  const handleOnClickLeft = () => {
    navigate('/');
  };

  return (
    <>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={handleOnClickLeft}></Header>
      <HbPromiseIc />
      <Title text={`안녕하세요 \n전화번호를 입력해주세요`} type="title" />
      <Title text={`또리누나의사랑 님의 \n감정 기록 공간`} type="head" align="center" />
      <Input placeholder="닉네임을 입력해주세요" inputVal={inputVal} handleInputVal={handleInputVal} wordLimit={20} />
      {/* <FullBtn
        disabledText="닉네임을 입력해주세요"
        activeText="감정 기록해볼까요?"
        isBtnDisable={inputVal.length > 20 || inputVal.length === 0}
        onClick={handleOnClickFullBtn}
      /> */}
      <TwoBtn
        leftText="지난 감정들 보러가기"
        leftColorType="gray"
        leftOnClick={handleOnClickLeft}
        rightText="답장 사진 저장하기"
        rightColorType="yellow"
        rightOnClick={handleOnClickFullBtn}
      />
    </>
  );
};

export default Main;
