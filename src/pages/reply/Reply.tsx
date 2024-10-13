import styled from '@emotion/styled';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import ReplyContainer from './components/ReplyContainer';
import { usePostAiAudio } from './hooks/queries';
import { ReplyCompletePjIc, ReplyCompleteDgIc, ReplyPlayIc, ReplyPauseIc } from '../../assets/svgs';
import ButtonBg from '../../components/commons/ButtonBg';
import TwoBtn from '../../components/commons/TwoBtn';
import { characterState } from '../../states/characterState';
import { todayMoodDiaryIdState } from '../../states/todayMoodDiaryIdState';

const Reply = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const saveRef = useRef(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isToggleOpen, setIsToggleOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const character = useRecoilValue(characterState);
  const moodDiaryId = useRecoilValue(todayMoodDiaryIdState);

  const { mutate: postAiAudio, isSuccess, data } = usePostAiAudio(Number(moodDiaryId));

  useEffect(() => {
    if (isSuccess && data) {
      const url = URL.createObjectURL(data);
      const audioPlayer = audioRef.current;
      if (audioPlayer) {
        audioPlayer.src = url;
        audioPlayer.play();
      }
    }
  }, [isSuccess, data]);

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

  // 오디오 실행
  const onClickReplyVid = () => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      postAiAudio();
    }
  };

  useEffect(() => {
    const audioPlayer = audioRef.current;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    if (audioPlayer) {
      audioPlayer.addEventListener('play', handlePlay);
      audioPlayer.addEventListener('pause', handlePause);

      return () => {
        audioPlayer.removeEventListener('play', handlePlay);
        audioPlayer.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  return (
    <Wrapper $isToggleOpen={isToggleOpen}>
      <SaveImgWrapper ref={saveRef}>
        <ReplyImg>
          {character === '동글이' && <ReplyCompleteDgIcon />}
          {character === '뾰족이' && <ReplyCompletePjIcon />}
          {isPlaying ? <ReplyPauseIcon onClick={onClickReplyVid} /> : <ReplyPlayIcon onClick={onClickReplyVid} />}
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <Audio id="audioPlayer" controls ref={audioRef}></Audio>
        </ReplyImg>
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
  padding: ${({ $isToggleOpen }) => ($isToggleOpen ? '0 0 17rem' : '0 0 17rem')};
`;

const SaveImgWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 -2rem;
  padding: 0 2rem 2rem;

  background-color: ${({ theme }) => theme.colors.grayScaleBg};
`;

const ReplyImg = styled.div`
  display: flex;
  gap: 0.9rem;
  position: relative;

  width: 100%;
  height: 17rem;
`;

const ReplyCompletePjIcon = styled(ReplyCompletePjIc)`
  position: absolute;
  bottom: -2rem;
`;

const ReplyCompleteDgIcon = styled(ReplyCompleteDgIc)`
  position: absolute;
  bottom: -2rem;
`;

const ReplyPlayIcon = styled(ReplyPlayIc)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const ReplyPauseIcon = styled(ReplyPauseIc)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Audio = styled.audio`
  display: none;
`;
