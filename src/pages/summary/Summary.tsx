import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Loading from './components/Loading';
import { AutoCloseModal } from './components/Modal';
import { usePostChatbotReply } from './hooks/queries';
import { getTodayData } from './utils/getTodayData';
import { SummaryIc, ArrowLeftIc } from '../../assets/svgs';
import ButtonBg from '../../components/commons/ButtonBg';
import FullBtn from '../../components/commons/FullBtn';
import Header from '../../components/commons/Header';
import Spacing from '../../components/commons/Spacing';
import Title from '../../components/commons/Title';
import { characterState } from '../../states/characterState';
import { todayMoodDiaryIdState } from '../../states/todayMoodDiaryIdState';
import { userState } from '../../states/userState';

const Summary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [onSuccess, setOnSuccess] = useState(false);
  const user = useRecoilValue(userState);
  const character = useRecoilValue(characterState);
  const moodDiaryId = useRecoilValue(todayMoodDiaryIdState);

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

  if (isPending) {
    return (
      <>
        <Loading />
        {isSuccess && (
          <AutoCloseModal
            text={`답장이 완성되었어요! \n읽으러 가볼까요?`}
            showModal={isSuccess}
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

  return (
    <Wrapper>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={onClickBack} />
      <TitleContainer>
        <Title text={`${user.nickName} 님의 이야기를 \n정리해봤어요`} type="middle" align="center" paddingTop={7.1} />
        <Spacing marginBottom="1.2" />
        <DateChip>{getTodayData()}</DateChip>
      </TitleContainer>
      <Spacing marginBottom="3.4" />
      {/* 연결필요 */}
      <TempSumDiv>분노에 찬 하루였군요</TempSumDiv>
      <Spacing marginBottom="1" />
      <SummaryWrapper>
        <SummaryTitle>오늘 하루 이런 일들이 있으셨네요</SummaryTitle>
        {/* 실제 데이터로 연결 필요 */}
        <ContentWrapper>
          {SUMMARY_LIST.map((sentence: string) => (
            <Content key={Math.random().toString(36).slice(2, 11)}>{sentence}</Content>
          ))}
        </ContentWrapper>
        <SummaryIcon />
      </SummaryWrapper>
      {/* api쏘는 함수 연결 필요 */}
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

const TempSumDiv = styled.section`
  width: 100%;
  height: 11rem;
  margin-bottom: 0.8rem;
  padding: 1.3rem 2rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.key};

  ${({ theme }) => theme.fonts.Title2_SB_16};
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
