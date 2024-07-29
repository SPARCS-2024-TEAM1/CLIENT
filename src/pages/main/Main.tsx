import styled from '@emotion/styled';
import { useState } from 'react';

import { HbPromiseIc } from '../../assets/svgs';
import Input from '../../components/commons/Input';

const Main = () => {
  const [inputVal, setInputVal] = useState('');

  const handleInputVal = (val: string) => {
    setInputVal(val);
  };
  return (
    <>
      <HbPromiseIc />
      <Input placeholder="닉네임을 입력해주세요" inputVal={inputVal} handleInputVal={handleInputVal} wordLimit={20} />
    </>
  );
};

export default Main;
