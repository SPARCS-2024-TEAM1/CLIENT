import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftIc } from '../../assets/svgs';
import Header from '../../components/commons/Header';
import Spacing from '../../components/commons/Spacing';
import ReplyContainer from '../reply/components/ReplyContainer';
import ReplyImg from '../reply/components/ReplyImg';

const LastMemory = () => {
  const navigate = useNavigate();
  const [isToggleOpen, setIsToggleOpen] = useState(true);

  const onClickToggle = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const onClickBack = () => {
    navigate('/memory');
  };

  return (
    <Wrapper $isToggleOpen={isToggleOpen}>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={onClickBack} title="지난 감정 기록" />
      <Spacing marginBottom="3" />
      <ReplyImg />
      <ReplyContainer isToggleOpen={isToggleOpen} onClickToggle={onClickToggle} />
    </Wrapper>
  );
};

export default LastMemory;

const Wrapper = styled.div<{ $isToggleOpen: boolean }>`
  padding: ${({ $isToggleOpen }) => ($isToggleOpen ? '0 0 4rem' : '')};
`;
