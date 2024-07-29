import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftIc } from '../../assets/svgs';
import FullBtn from '../../components/commons/FullBtn';
import Header from '../../components/commons/Header';
import Spacing from '../../components/commons/Spacing';
import Title from '../../components/commons/Title';

const Summary = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    // url 바꿔야 함
    navigate('/');
  };

  return (
    <Wrapper>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={onClickBack} />
      <TitleContainer>
        {/* 닉네임 실제 유저로 변경 필요 */}
        <Title text={`또리누나사랑해 님의 이야기를 \n정리해봤어요`} type="middle" align="center" paddingTop={7.1} />
        <Spacing marginBottom="1.2" />
        <DateChip>2024년 7월 29일</DateChip>
      </TitleContainer>
      <Spacing marginBottom="3.4" />
      <TempSumDiv>분노에 찬 하루였군요</TempSumDiv>
      <Spacing marginBottom="1" />
      <SummaryWrapper>
        <SummaryTitle>오늘 하루 이런 일들이 있으셨네요</SummaryTitle>
        {/* 실제 데이터로 연결 필요 */}
        <ContentWrapper>
          <Content>
            다음 달 1일부터 00 등 소주 제품 공장 출고가격이 인상된다. - 공장 출고가 이렇게 인상되면서 소매점과 식당의
            가격인상이 불가피해질 전망이다.
          </Content>
          <Content>
            주류업계에서는 000 소주 출고가가 65.5원 오르면 대형할인점 등에서는 소매 가격을 100원 안팎 올릴 것으로 보고
            있다.
          </Content>
          <Content>
            주류업계에서는 000 소주 출고가가 65.5원 오르면 대형할인점 등에서는 소매 가격을 100원 안팎 올릴 것으로 보고
            있다.
          </Content>
          <Content>
            주류업계에서는 000 소주 출고가가 65.5원 오르면 대형할인점 등에서는 소매 가격을 100원 안팎 올릴 것으로 보고
            있다.
          </Content>
        </ContentWrapper>
      </SummaryWrapper>
      <FullBtn activeText="00에게 답장받기" btnColorType="gray" isBtnDisable={false} />
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

  /* 폰트 확인 후 변경 필요 */
  ${({ theme }) => theme.fonts.Body3_M_14};
`;

const TempSumDiv = styled.section`
  width: 100%;
  height: 11rem;
  margin-bottom: 0.8rem;
  padding: 1.3rem 2rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.key};

  /* 폰트 확인 후 변경 필요 */
  ${({ theme }) => theme.fonts.Title2_SB_16};
`;

const SummaryWrapper = styled.section`
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

  /* 폰트 확인 후 변경 필요 */
  ${({ theme }) => theme.fonts.Title1_SB_20};
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

const ButtonBg = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 2;

  width: 100%;
  height: 16rem;
  margin-left: -2rem;

  background: linear-gradient(
    180deg,
    rgb(50 50 50 / 0%) 19.98%,
    rgb(50 50 50 / 10%) 29.99%,
    rgb(50 50 50 / 53.3%) 45.02%,
    #323232 70.06%
  );
`;
