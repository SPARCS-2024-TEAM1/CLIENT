/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { BtnCloseModal } from './components/Modal';
import { ArrowLeftIc, RestartIc } from '../../assets/svgs';
import Header from '../../components/commons/Header';
import Spacing from '../../components/commons/Spacing';
import Title from '../../components/commons/Title';
import { characterState } from '../../states/characterState';

const RecordToday = () => {
  const navigate = useNavigate();

  const [isStart, setIsStart] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const character = useRecoilValue(characterState);

  const [stream, setStream] = useState<MediaStream | null>(null);
  const [media, setMedia] = useState<MediaRecorder | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState<MediaStreamAudioSourceNode | null>(null);
  const [analyser, setAnalyser] = useState<ScriptProcessorNode | null>(null);
  const [audioUrl, setAudioUrl] = useState<Blob | null>(null);
  const [serverAudio, setServerAudio] = useState<string | null>(null);
  const [serverAudioFile, setServerAudioFile] = useState<File | null>(null);
  console.log(serverAudioFile);

  // 뒤로가기 눌렀을 때 열리는 모달
  const onClickBack = () => {
    if (isStart) {
      offRecAudio();
      setModalType('back');
      setIsModalOpen(true);
    } else {
      navigate('/character');
    }
  };

  // 뒤로가기 누르고 모달 열린 후 나가기(오른쪽 버튼) 눌렀을 경우
  const onClickBackModalRight = () => {
    navigate('/character');
  };

  // 초기화하기 눌렀을 때
  // 뒤로가기 누르고 모달 열린 후 초기화하기(왼쪽 버튼) 눌렀을 경우
  // 시간 다 됐을 때 열린 모달 다시할게요(왼쪽버튼) 눌렀을 경우
  // 사용자가 제출눌렀을 때 뜨는 모달 다시할게요 (왼쪽버튼) 눌렀을 경우
  const onClickResetBtn = () => {
    offRecAudio();
    setIsModalOpen(false);
    setIsStart(false);
    setTimeLeft(30);
  };

  // 시간이 다 됐을 때 열리는 모달
  useEffect(() => {
    if (timeLeft === 0) {
      offRecAudio();
      setModalType('timeOut');
      setIsModalOpen(true);
    }
  }, [timeLeft]);

  // 시간 다 됐을 때 열린 모달 다 했어요(오른쪽버튼) 눌렀을 경우
  // 사용자가 제출눌렀을 때 뜨는 모달 다했어요(오른쪽버튼) 눌렀을 경우
  const onClickSubmit = () => {
    // 서버에 제출하는 로직
    onSubmitAudioFile();
    navigate('/summary');
  };

  // 하단 Full 버튼 눌렸을 때
  const onClickStart = () => {
    // 시작하기 -> 완료로 바뀐 후 눌렸을 경우 (제출하기)
    if (isStart) {
      offRecAudio();
      setModalType('submit');
      setIsModalOpen(true);
    } else {
      onRecAudio();
    }
  };

  // 녹음 시작하고 얼마나 됐는지
  useEffect(() => {
    if (isStart && timeLeft > 0 && !isModalOpen) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else if (timeLeft === 0) {
      setIsStart(false);
    }
  }, [isStart, timeLeft, isModalOpen]);

  const getModalProps = (modalType: string) => {
    const titles: { [key: string]: string } = {
      back: '지금 나가면 모두 없어져요!\n나가시겠어요?',
      timeOut: '시간이 다 되었어요!\n하고싶은 얘기 다 하셨나요?',
      submit: '하고싶은 얘기 다 하셨나요?\n완료하시겠어요?',
    };

    const leftBtnFn: { [key: string]: () => void } = {
      back: onClickResetBtn,
      timeOut: onClickResetBtn,
      submit: onClickResetBtn,
    };

    const rightBtnFn: { [key: string]: () => void } = {
      back: onClickBackModalRight,
      timeOut: onClickSubmit,
      submit: onClickSubmit,
    };

    const leftBtnText: { [key: string]: string } = {
      back: '초기화하기',
      timeOut: '다시 할게요',
      submit: '다시 할게요',
    };

    const rightBtnText: { [key: string]: string } = {
      back: '나가기',
      timeOut: '다 했어요',
      submit: '다 했어요',
    };

    return {
      title: titles[modalType] || '',
      handleLeftBtn: leftBtnFn[modalType] || (() => {}),
      handleRightBtn: rightBtnFn[modalType] || (() => {}),
      leftBtnText: leftBtnText[modalType] || '',
      rightBtnText: rightBtnText[modalType] || '',
    };
  };

  const onRecAudio = () => {
    setIsStart(true);
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const analyserNode = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyserNode);

    const makeSound = (stream: MediaStream) => {
      const sourceNode = audioCtx.createMediaStreamSource(stream);
      setSource(sourceNode);
      sourceNode.connect(analyserNode);
      analyserNode.connect(audioCtx.destination);
    };

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyserNode.onaudioprocess = function (e) {
        if (e.playbackTime > 30) {
          stream.getAudioTracks().forEach((track) => {
            track.stop();
          });
          mediaRecorder.stop();
          analyserNode.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
          };
        } else {
          setOnRec(false);
        }
      };
    });
  };

  const offRecAudio = () => {
    if (media && stream && analyser && source) {
      media.ondataavailable = function (e) {
        setAudioUrl(e.data);
        setOnRec(true);
      };

      stream.getAudioTracks().forEach((track) => {
        track.stop();
      });

      media.stop();
      analyser.disconnect();
      source.disconnect();
    }
  };

  const onSubmitAudioFile = useCallback(() => {
    if (audioUrl) {
      const audioURL = URL.createObjectURL(audioUrl);
      setServerAudio(audioURL);
    }

    if (audioUrl) {
      const sound = new File([audioUrl], 'todayFeelingRecord', { lastModified: new Date().getTime(), type: 'audio' });
      // 파일 저장 필요
      setServerAudioFile(sound);
      console.log(sound);
    }
  }, [audioUrl]);

  console.log(serverAudio);

  return (
    <>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={onClickBack} />
      <Title
        text={`${character}한테 하고싶은 얘기를\n30초 동안 말해볼까요?`}
        type="title"
        align="center"
        paddingTop={9.45}
      />
      <Spacing marginBottom="4.035" />

      <RecordWrapper>
        <RecordTempImg />
        <Timer>{`00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`}</Timer>
        <Spacing marginBottom="3.215" />
        <ResetDiv onClick={onClickResetBtn}>
          <RestartIc />
          <ResetText>초기화하기</ResetText>
        </ResetDiv>
      </RecordWrapper>

      {/* <button onClick={onRec ? onRecAudio : offRecAudio}>녹음</button>
      <button onClick={onSubmitAudioFile}>결과 확인</button>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      {/* <audio controls src={serverAudio || undefined}></audio>   */}
      <DownWrapper>
        <Button type="button" onClick={onClickStart}>
          {isStart ? '완료' : '시작하기'}
        </Button>
      </DownWrapper>

      <BtnCloseModal isModalOpen={isModalOpen} {...getModalProps(modalType)} />
    </>
  );
};

export default RecordToday;

const RecordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const RecordTempImg = styled.div`
  width: 22rem;
  height: 16rem;

  background-color: ${({ theme }) => theme.colors.key};
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;

  width: 18rem;
  height: 7rem;
  padding: 1.13rem 4.85rem;
  border-radius: 8px;

  ${({ theme }) => theme.fonts.Head2_SB_30};
  background-color: ${({ theme }) => theme.colors.grayScaleW_bg};
`;

const ResetDiv = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  cursor: pointer;
`;

const ResetText = styled.span`
  ${({ theme }) => theme.fonts.Title2_SB_16};
  color: ${({ theme }) => theme.colors.grayScaleW_bg};
`;

const DownWrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 3;

  width: 100%;
  margin-left: -2rem;
  padding: 0 2rem;
`;

const Button = styled.button`
  z-index: 3;

  width: 100%;
  height: 5.6rem;
  margin-bottom: 3.6rem;
  padding: 0 1.5rem;
  border: none;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.key};

  color: ${({ theme }) => theme.colors.grayScaleBg};
  ${({ theme }) => theme.fonts.Body2_SB_18};

  cursor: pointer;
`;
