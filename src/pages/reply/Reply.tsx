import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowDownIc, ArrowUpIc } from '../../assets/svgs';
import ButtonBg from '../../components/commons/ButtonBg';
import Spacing from '../../components/commons/Spacing';
import TwoBtn from '../../components/commons/TwoBtn';

const Reply = () => {
  const navigate = useNavigate();
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const onClickToggle = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const onClickToHome = () => {
    navigate('/main');
  };

  const onClickSaveImg = () => {
    console.log('사진 저장 로직');
  };

  return (
    <Wrapper $isToggleOpen={isToggleOpen}>
      <ReplyImgTempContainer>
        <ReplyTempImg />
        <ReplyTempVideo />
      </ReplyImgTempContainer>
      <ReplyDiv>
        {/* 사용자가 고른 캐릭터로 이름 변경 필요 */}
        <ReplyTitle>{`안녕 나 버럭이야 \n오늘의 답변을 보내줄게!`}</ReplyTitle>
        <ReplyContent>
          오늘 진짜 그런 일이 있었다고? 완전 어이가 없네 아니 걔는 어떻게 그러냐.. 사과도 안했어? 그러고 사과도 안하는
          애였으면 난 꿀밤 10대 쥐어 박는건데... 참은 너가 진짜 대단하다고 생각해. 훨씬 대단한 너가 잘 넘어간 것 같아.
          하지만 다음에 또 그러면 확실히 한마디 해 ! 오늘 진짜 그런 일이 있었다고? 완전 어이가 없네 아니 걔는 어떻게
          그러냐.. 사과도 안했어? 그러고 사과도 안하는 애였으면 난 꿀밤 10대 쥐어 박는건데...
        </ReplyContent>
      </ReplyDiv>
      <Spacing marginBottom="1" />
      <SummaryToggle>
        {/* 사용자 이름으로 변경 필요 */}
        <SummaryTitle onClick={onClickToggle}>
          또리사랑누나해 님의 이야기 정리본
          {isToggleOpen ? <ArrowUpIc onClick={onClickToggle} /> : <ArrowDownIc onClick={onClickToggle} />}
        </SummaryTitle>
        {isToggleOpen && (
          <ContentWrapper>
            <SummaryContent>
              다음 달 1일부터 00 등 소주 제품 공장 출고가격이 인상된다. - 공장 출고가 이렇게 인상되면서 소매점과 식당의
              가격인상이 불가피해질 전망이다.
            </SummaryContent>
            <SummaryContent>
              다음 달 1일부터 00 등 소주 제품 공장 출고가격이 인상된다. - 공장 출고가 이렇게 인상되면서 소매점과 식당의
              가격인상이 불가피해질 전망이다.
            </SummaryContent>
            <SummaryContent>
              다음 달 1일부터 00 등 소주 제품 공장 출고가격이 인상된다. - 공장 출고가 이렇게 인상되면서 소매점과 식당의
              가격인상이 불가피해질 전망이다.
            </SummaryContent>
            <SummaryContent>
              다음 달 1일부터 00 등 소주 제품 공장 출고가격이 인상된다. - 공장 출고가 이렇게 인상되면서 소매점과 식당의
              가격인상이 불가피해질 전망이다.
            </SummaryContent>
          </ContentWrapper>
        )}
      </SummaryToggle>

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

const ReplyImgTempContainer = styled.div`
  display: flex;
  gap: 0.9rem;

  width: 100%;
  padding-top: 5.6rem;
`;

const ReplyTempImg = styled.div`
  width: 19.4rem;

  background-color: ${({ theme }) => theme.colors.key};
`;

const ReplyTempVideo = styled.div`
  width: 13.2rem;
  height: 11.4rem;

  background-color: ${({ theme }) => theme.colors.key};
`;

const ReplyDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;
  padding: 2rem 2rem 2.4rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleW_bg};
`;

const ReplyTitle = styled.p`
  color: ${({ theme }) => theme.colors.grayScaleB_Text};
  ${({ theme }) => theme.fonts.Body2_SB_18};
  white-space: pre-wrap;
`;

const ReplyContent = styled.div`
  margin-bottom: 1rem;

  line-break: auto;

  color: ${({ theme }) => theme.colors.grayScaleB_Text};

  ${({ theme }) => theme.fonts.Body3_M_14};
`;

const SummaryToggle = styled.ul`
  width: 100%;
  padding: 0.9rem 1.3rem 0.9rem 2rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.brown};
`;

const SummaryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.brown};

  color: ${({ theme }) => theme.colors.grayScaleMg};

  ${({ theme }) => theme.fonts.Title2_SB_16};
  cursor: pointer;
`;

const ContentWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const SummaryContent = styled.li`
  line-break: auto;
  list-style: disc;
  list-style-position: inside;

  width: 92%;
  margin-left: 2rem;

  background-color: ${({ theme }) => theme.colors.brown};

  color: ${({ theme }) => theme.colors.grayScaleBg};
  text-indent: -2rem;
  ${({ theme }) => theme.fonts.Body3_M_14};

  &:first-of-type {
    margin-top: 0.8rem;
  }

  &:last-child {
    padding-bottom: 0.4rem;
  }
`;
