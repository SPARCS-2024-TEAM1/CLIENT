import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ReplyContainer from './components/ReplyContainer';
import ReplyImg from './components/ReplyImg';
import ButtonBg from '../../components/commons/ButtonBg';
import TwoBtn from '../../components/commons/TwoBtn';

const Reply = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const navigate = useNavigate();

  const onClickToHome = () => {
    navigate('/main');
  };
  const onClickSaveImg = () => {
    console.log('사진 저장 로직');
  };

  const onClickToggle = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <Wrapper $isToggleOpen={isToggleOpen}>
      <ReplyImg />
      <ReplyContainer isToggleOpen={isToggleOpen} onClickToggle={onClickToggle} />

      <TwoBtn
        leftText="홈으로 가기"
        rightText="답장 사진 저장하기"
        leftColorType="gray"
        rightColorType="yellow"
        leftOnClick={onClickToHome}
        rightOnClick={onClickSaveImg}
      />
      <ButtonBg />
    </Wrapper>
  );
};

export default Reply;

const Wrapper = styled.div<{ $isToggleOpen: boolean }>`
  padding: ${({ $isToggleOpen }) => ($isToggleOpen ? '0 0 17rem' : '')};
`;
