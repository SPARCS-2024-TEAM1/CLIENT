import styled from '@emotion/styled';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import ReplyContainer from './components/ReplyContainer';
import { ReplyCompletePjIc, ReplyCompleteDgIc } from '../../assets/svgs';
import ButtonBg from '../../components/commons/ButtonBg';
import TwoBtn from '../../components/commons/TwoBtn';
import { characterState } from '../../states/characterState';

const Reply = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const saveRef = useRef(null);

  const [isToggleOpen, setIsToggleOpen] = useState(true);

  const character = useRecoilValue(characterState);

  const SUMMARY_LIST = location.state.summary;
  const answer = location.state.answer;

  const onClickToHome = () => {
    navigate('/main');
  };

  const onClickToggle = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  // 이미지 저장
  const onClickSaveImg = async () => {
    if (!saveRef.current) return;

    try {
      const img = saveRef.current;
      const canvas = await html2canvas(img, { scale: 2 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'reply.png');
        }
      });
    } catch (err) {
      console.error('이미지 저장 에러: ', err);
    }
  };

  return (
    <Wrapper $isToggleOpen={isToggleOpen}>
      <SaveImgWrapper ref={saveRef}>
        {character === '동글이' && <ReplyCompleteDgIcon />}
        {character === '뾰족이' && <ReplyCompletePjIcon />}
        <ReplyContainer
          isToggleOpen={isToggleOpen}
          onClickToggle={onClickToggle}
          answer={answer}
          summary={SUMMARY_LIST}
        />
      </SaveImgWrapper>
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

const SaveImgWrapper = styled.div`
  margin: 0 -2rem;
  padding: 0 2rem 2rem;

  background-color: ${({ theme }) => theme.colors.grayScaleBg};
`;

const ReplyCompletePjIcon = styled(ReplyCompletePjIc)`
  position: absolute;
  top: 5.6rem;
  left: 2rem;
`;

const ReplyCompleteDgIcon = styled(ReplyCompleteDgIc)`
  position: absolute;
  top: 5.6rem;
  left: 2rem;
`;
