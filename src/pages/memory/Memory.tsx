import styled from '@emotion/styled';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import LastMemoryBox from './components/LastMemoryBox';
import { MEMORY_LIST } from './constants/constants';
import {
  ArrowLeftIc,
  RecordEmptyIc,
  ReplyCompleteDgIc,
  ReplyCompletePjIc,
  ReplyPlayIc,
  ReplyPauseIc,
} from '../../assets/svgs';
import Header from '../../components/commons/Header';
import Spacing from '../../components/commons/Spacing';
import { characterState } from '../../states/characterState';
import { todayMoodDiaryIdState } from '../../states/todayMoodDiaryIdState';
import ReplyContainer from '../reply/components/ReplyContainer';
import { usePostAiAudio } from '../reply/hooks/queries';

const Memory = () => {
  const navigate = useNavigate();
  const [isToggleOpen, setIsToggleOpen] = useState(true);
  const [memoryType, setMemoryType] = useState('오늘의 기록');
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  // 넷 다 서버에서 와야 함
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

  // 서버에서 받아온 지난 기록 리스트 필요
  const length = 1;

  const onClickBack = () => {
    navigate('/main');
  };

  const onClickMemoryBox = (id: string) => {
    // location으로 데이터 같이 전달 필요
    navigate(`/memory/${id}`);
  };

  const onClickToggle = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const onClickEmptyText = () => {
    // 어디로 가는지 확인 해야함
    navigate('/todayFeeling');
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
      {length ? (
        <>
          {memoryType === '오늘의 기록' && (
            <>
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
            </>
          )}
          {memoryType === '지난 기록들' && (
            // 서버에서 온 리스트로 map돌리기
            <Container>
              {MEMORY_LIST.map((memory) => (
                <LastMemoryBox
                  key={memory.id}
                  id={memory.id}
                  date={memory.date}
                  feeling={memory.feeling}
                  onClick={() => onClickMemoryBox(memory.id + '')}
                />
              ))}
            </Container>
          )}
        </>
      ) : (
        <RecordEmptyIcon onClick={onClickEmptyText} />
      )}
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

const Container = styled.section`
  display: grid;
  gap: 1rem 0.7rem; /* 세로 간격 1rem, 가로 간격 0.7rem */

  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(16.4rem, 1fr));
`;

const RecordEmptyIcon = styled(RecordEmptyIc)`
  width: 100%;
  height: 100%;
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
