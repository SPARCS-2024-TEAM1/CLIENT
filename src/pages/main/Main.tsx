import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HbPromiseIc } from '../../assets/svgs';
import FullBtn from '../../components/commons/FullBtn';
import Input from '../../components/commons/Input';

const Main = () => {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState('');

  const handleInputVal = (val: string) => {
    setInputVal(val);
  };

  const handleOnClickFullBtn = () => {
    navigate('/');
  };

  return (
    <>
      <HbPromiseIc />
      <Input placeholder="닉네임을 입력해주세요" inputVal={inputVal} handleInputVal={handleInputVal} wordLimit={20} />
      <FullBtn
        disabledText="닉네임을 입력해주세요"
        activeText="감정 기록해볼까요?"
        isBtnDisable={inputVal.length > 20 || inputVal.length === 0}
        onClick={handleOnClickFullBtn}
      />
    </>
  );
};

export default Main;
