import styled from '@emotion/styled';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { ArrowLeftIc, ReplyCompleteDgIc, ReplyCompletePjIc, ReplyPlayIc, ReplyPauseIc } from '../../assets/svgs';
import Header from '../../components/commons/Header';
import Spacing from '../../components/commons/Spacing';
import { characterState } from '../../states/characterState';
import { todayMoodDiaryIdState } from '../../states/todayMoodDiaryIdState';
import ReplyContainer from '../reply/components/ReplyContainer';
import { usePostAiAudio } from '../reply/hooks/queries';

const LastMemory = () => {
  const navigate = useNavigate();
  const [isToggleOpen, setIsToggleOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  // 둘 다 서버에서 와야 함
  const character = useRecoilValue(characterState);
  const moodDiaryId = useRecoilValue(todayMoodDiaryIdState);
  const SUMMARY_LIST = ['히히', '히히'];
  const answer = '응답이라구요';

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
    </Wrapper>
  );
};

export default LastMemory;

const Wrapper = styled.div<{ $isToggleOpen: boolean }>`
  padding: ${({ $isToggleOpen }) => ($isToggleOpen ? '0 0 4rem' : '')};
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
