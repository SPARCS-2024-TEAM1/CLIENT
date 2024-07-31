import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Loading from './components/Loading';
import { AutoCloseModal } from './components/Modal';
import { usePostChatbotReply } from './hooks/queries';
import { getTodayData } from './utils/getTodayData';
import {
  SummaryIc,
  ArrowLeftIc,
  ModalReplyIc,
  ReplyAngerIc,
  ReplyAnxietyIc,
  ReplyCalmnessIc,
  ReplyFatigueIc,
  ReplyGratitudeIc,
  ReplyJoyIc,
  ReplyLonelinessIc,
  ReplySadnessIc,
  ReplyStressIc,
} from '../../assets/svgs';
import ButtonBg from '../../components/commons/ButtonBg';
import FullBtn from '../../components/commons/FullBtn';
import Header from '../../components/commons/Header';
import Spacing from '../../components/commons/Spacing';
import Title from '../../components/commons/Title';
import { characterState } from '../../states/characterState';
import { moodState } from '../../states/moodState';
import { todayMoodDiaryIdState } from '../../states/todayMoodDiaryIdState';
import { userState } from '../../states/userState';

const Summary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setOnSuccess] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const user = useRecoilValue(userState);
  const character = useRecoilValue(characterState);
  const moodDiaryId = useRecoilValue(todayMoodDiaryIdState);
  const mood = useRecoilValue(moodState);

  const lastSummary = location.state.summary;
  const SUMMARY_LIST = lastSummary.split('\n').map((text: string) => text.replace(/^- /, ''));

  const { mutate: postChatbotReply, isSuccess, answer, isPending } = usePostChatbotReply(Number(moodDiaryId));

  // axios 결과값 받아오기
  const handleShowModal = (type: boolean) => {
    setOnSuccess(type);
  };

  const onClickBack = () => {
    navigate('/character');
  };

  const handlePostReplyBtn = () => {
    postChatbotReply();
  };

  useEffect(() => {
    setIsComplete(isSuccess);
  }, [isSuccess]);

  if (isPending) {
    return (
      <>
        <Loading />
        {isComplete && (
          <AutoCloseModal
            text={`답장이 완성되었어요! \n읽으러 가볼까요?`}
            showModal={isComplete}
            path="/reply"
            handleShowModal={handleShowModal}
            summary={SUMMARY_LIST}
            answer={answer}>
            <ModalImg />
          </AutoCloseModal>
        )}
      </>
    );
  }

  if (isComplete) {
    return (
      <>
        <Loading />
        <AutoCloseModal
          text={`답장이 완성되었어요! \n읽으러 가볼까요?`}
          showModal={isComplete}
          path="/reply"
          handleShowModal={handleShowModal}
          summary={SUMMARY_LIST}
          answer={answer}>
          <ModalReplyIcon />
        </AutoCloseModal>
      </>
    );
  }

  return (
    <Wrapper>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={onClickBack} />
      <TitleContainer>
        <Title text={`${user.nickName} 님의 이야기를 \n정리해봤어요`} type="middle" align="center" paddingTop={7.1} />
        <Spacing marginBottom="1.2" />
        <DateChip>{getTodayData()}</DateChip>
      </TitleContainer>
      <Spacing marginBottom="3.4" />
      {mood === '기쁨' && <ReplyJoyIcon />}
      {mood === '불안' && <ReplyAnxietyIcon />}
      {mood === '스트레스' && <ReplyStressIcon />}
      {mood === '슬픔' && <ReplySadnessIcon />}
      {mood === '평온' && <ReplyCalmnessIcon />}
      {mood === '감사' && <ReplyGratitudeIcon />}
      {mood === '화남' && <ReplyAngerIcon />}
      {mood === '피로' && <ReplyFatigueIcon />}
      {mood === '외로움' && <ReplyLonelinessIcon />}
      <Spacing marginBottom="1" />
      <SummaryWrapper>
        <SummaryTitle>오늘 하루 이런 일들이 있으셨네요</SummaryTitle>
        <ContentWrapper>
          {SUMMARY_LIST.map((sentence: string) => (
            <Content key={Math.random().toString(36).slice(2, 11)}>{sentence}</Content>
          ))}
        </ContentWrapper>
        <SummaryIcon />
      </SummaryWrapper>
      <FullBtn
        activeText={`${character}에게 답장받기`}
        btnColorType="gray"
        isBtnDisable={false}
        onClick={handlePostReplyBtn}
      />
      <ButtonBg />
    </Wrapper>
  );
};

export default Summary;

const Wrapper = styled.div`
  padding: 0 0 13.36rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DateChip = styled.div`
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.grayScaleW_bg};

  color: ${({ theme }) => theme.colors.grayScaleBg};

  ${({ theme }) => theme.fonts.Caption2_SB_14};
`;

const SummaryWrapper = styled.section`
  position: relative;

  width: 100%;
  padding: 1.3rem 2rem 10.73rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleW_bg};

  color: ${({ theme }) => theme.colors.grayScaleB_Text};

  ${({ theme }) => theme.fonts.Body3_M_14};
`;

const SummaryTitle = styled.p`
  margin-bottom: 0.8rem;

  background-color: ${({ theme }) => theme.colors.grayScaleW_bg};

  color: ${({ theme }) => theme.colors.grayScaleB_Text};

  ${({ theme }) => theme.fonts.Title2_SB_16};
`;

const ContentWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Content = styled.li`
  line-break: auto;
  list-style: disc;
  list-style-position: inside;

  margin-left: 2rem;

  color: ${({ theme }) => theme.colors.grayScaleB_Text};
  text-indent: -2rem;
  ${({ theme }) => theme.fonts.Body3_M_14};
`;

const ModalImg = styled.div`
  width: 100%;
  height: 16rem;

  background-color: ${({ theme }) => theme.colors.key};
`;

const SummaryIcon = styled(SummaryIc)`
  position: absolute;
  right: 2.041rem;
  bottom: 0;
`;

const ModalReplyIcon = styled(ModalReplyIc)`
  width: 100%;
`;

const ReplyAngerIcon = styled(ReplyAngerIc)`
  width: 100%;
  height: 100%;
`;
const ReplyAnxietyIcon = styled(ReplyAnxietyIc)`
  width: 100%;
  height: 100%;
`;
const ReplyCalmnessIcon = styled(ReplyCalmnessIc)`
  width: 100%;
  height: 100%;
`;
const ReplyFatigueIcon = styled(ReplyFatigueIc)`
  width: 100%;
  height: 100%;
`;
const ReplyGratitudeIcon = styled(ReplyGratitudeIc)`
  width: 100%;
  height: 100%;
`;
const ReplyJoyIcon = styled(ReplyJoyIc)`
  width: 100%;
  height: 100%;
`;
const ReplyLonelinessIcon = styled(ReplyLonelinessIc)`
  width: 100%;
  height: 100%;
`;
const ReplySadnessIcon = styled(ReplySadnessIc)`
  width: 100%;
  height: 100%;
`;
const ReplyStressIcon = styled(ReplyStressIc)`
  width: 100%;
  height: 100%;
`;
