import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftIc } from '../../assets/svgs';
import Header from '../../components/commons/Header';
import Spacing from '../../components/commons/Spacing';
import ReplyContainer from '../reply/components/ReplyContainer';
import ReplyImg from '../reply/components/ReplyImg';

const Memory = () => {
  const navigate = useNavigate();
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [memoryType, setMemoryType] = useState('오늘의 기록');

  const onClickBack = () => {
    // 어디로 가는지 확인 해야함
    navigate('/main');
  };

  const onClickToggle = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <Wrapper $isToggleOpen={isToggleOpen}>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={onClickBack} title="지난 감정 기록" />
      <ListTypeWrapper>
        <MemoryType $isActive={memoryType === '오늘의 기록'} onClick={() => setMemoryType('오늘의 기록')}>
          오늘의 기록
        </MemoryType>
        <MemoryType $isActive={memoryType === '지난 기록들'} onClick={() => setMemoryType('지난 기록들')}>
          지난 기록들
        </MemoryType>
      </ListTypeWrapper>
      <Spacing marginBottom="3" />
      <ReplyImg paddingTop={0} />
      <ReplyContainer isToggleOpen={isToggleOpen} onClickToggle={onClickToggle} />
    </Wrapper>
  );
};

export default Memory;

const Wrapper = styled.div<{ $isToggleOpen: boolean }>`
  padding: ${({ $isToggleOpen }) => ($isToggleOpen ? '0 0 4rem' : '')};
`;

const ListTypeWrapper = styled.div`
  display: flex;
  gap: 1rem;

  padding-top: 6.8rem;
`;

const MemoryType = styled.div<{ $isActive: boolean }>`
  height: 3rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.key : theme.colors.grayScaleW_bg)};

  ${({ theme }) => theme.fonts.Caption2_SB_14};
  cursor: pointer;
`;
