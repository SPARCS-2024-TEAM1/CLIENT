import styled from '@emotion/styled';

import {
  RecordAngerIc,
  RecordAnxietyIc,
  RecordCalmnessIc,
  RecordFatigueIc,
  RecordGratitudeIc,
  RecordJoyIc,
  RecordLonelinessIc,
  RecordSadnessIc,
  RecordStressIc,
} from '../../../assets/svgs';

interface LastMemoryBoxPropsType {
  id: number;
  date: string;
  feeling: string;
  onClick: () => void;
}

const LastMemoryBox = (props: LastMemoryBoxPropsType) => {
  const { date, feeling, onClick } = props;
  return (
    <Wrapper onClick={() => onClick()}>
      {feeling === '기쁨' && <RecordJoyIcon />}
      {feeling === '불안' && <RecordAnxietyIcon />}
      {feeling === '스트레스' && <RecordStressIcon />}
      {feeling === '슬픔' && <RecordSadnessIcon />}
      {feeling === '평온' && <RecordCalmnessIcon />}
      {feeling === '감사' && <RecordGratitudeIcon />}
      {feeling === '화남' && <RecordAngerIcon />}
      {feeling === '피로' && <RecordFatigueIcon />}
      {feeling === '외로움' && <RecordLonelinessIcon />}
      <Date>{date}</Date>
    </Wrapper>
  );
};

export default LastMemoryBox;

const Wrapper = styled.section`
  position: relative;

  width: 100%;
  height: 10.6rem;
  border-radius: 4px;

  cursor: pointer;
`;

const Date = styled.span`
  position: absolute;
  top: 1rem;
  left: 1.4rem;

  ${({ theme }) => theme.fonts.Caption1_M_12};
  color: ${({ theme }) => theme.colors.grayScaleLg};
`;

const RecordAngerIcon = styled(RecordAngerIc)`
  width: 100%;
  height: 100%;
`;
const RecordAnxietyIcon = styled(RecordAnxietyIc)`
  width: 100%;
  height: 100%;
`;

const RecordCalmnessIcon = styled(RecordCalmnessIc)`
  width: 100%;
  height: 100%;
`;

const RecordFatigueIcon = styled(RecordFatigueIc)`
  width: 100%;
  height: 100%;
`;

const RecordGratitudeIcon = styled(RecordGratitudeIc)`
  width: 100%;
  height: 100%;
`;

const RecordJoyIcon = styled(RecordJoyIc)`
  width: 100%;
  height: 100%;
`;

const RecordLonelinessIcon = styled(RecordLonelinessIc)`
  width: 100%;
  height: 100%;
`;

const RecordSadnessIcon = styled(RecordSadnessIc)`
  width: 100%;
  height: 100%;
`;

const RecordStressIcon = styled(RecordStressIc)`
  width: 100%;
  height: 100%;
`;
