import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { ArrowUpIc, ArrowDownIc } from '../../../assets/svgs';
import Spacing from '../../../components/commons/Spacing';
import { characterState } from '../../../states/characterState';
import { userState } from '../../../states/userState';

interface ReplyContainerPropsType {
  isToggleOpen: boolean;
  onClickToggle: () => void;
  answer: string;
  summary: string[];
  memoryCharacter?: string;
}

const ReplyContainer = (props: ReplyContainerPropsType) => {
  const { isToggleOpen, onClickToggle, answer, summary, memoryCharacter } = props;
  const character = useRecoilValue(characterState);
  const user = useRecoilValue(userState);

  return (
    <>
      <ReplyDiv>
        <ReplyTitle>{`안녕 나 ${memoryCharacter !== undefined ? memoryCharacter : character}야 \n오늘의 답변을 보내줄게!`}</ReplyTitle>
        <ReplyContent>{answer}</ReplyContent>
      </ReplyDiv>
      <Spacing marginBottom="1" />
      <SummaryToggle>
        <SummaryTitle onClick={onClickToggle}>
          {user.nickName} 님의 이야기 정리본
          {isToggleOpen ? <ArrowUpIc onClick={onClickToggle} /> : <ArrowDownIc onClick={onClickToggle} />}
        </SummaryTitle>
        {isToggleOpen && (
          <ContentWrapper>
            {summary.map((sentence) => (
              <SummaryContent key={Math.random().toString(36).slice(2, 11)}>{sentence}</SummaryContent>
            ))}
          </ContentWrapper>
        )}
      </SummaryToggle>
    </>
  );
};

export default ReplyContainer;

const ReplyDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  z-index: 7;

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
