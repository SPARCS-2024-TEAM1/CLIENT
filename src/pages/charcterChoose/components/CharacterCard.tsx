import styled from '@emotion/styled';

import { ReplyDgIc, ReplyPjIc } from '../../../assets/svgs';

interface CharacterCardPropsType {
  id: number;
  name: string;
  chipList: string[];
  description: string;
  onClick: (id: number, name: string) => void;
  selectedChar: string;
  characterList: boolean[];
}

const CharacterCard = (props: CharacterCardPropsType) => {
  const { id, name, chipList, description, onClick, selectedChar, characterList } = props;
  return (
    <Wrapper
      type="button"
      onClick={() => onClick(id, name)}
      $isCharClicked={selectedChar !== ''}
      $isSelected={characterList[id]}>
      {name === '동글이' ? <ReplyDgIc /> : <ReplyPjIc />}
      <NameChipDiv>
        <Name>{name}</Name>
        {chipList.map((chip) => (
          <Chip key={chip}>{chip}</Chip>
        ))}
      </NameChipDiv>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default CharacterCard;

const Wrapper = styled.button<{ $isCharClicked: boolean; $isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 0;
  border-radius: 4px;

  opacity: ${({ $isSelected, $isCharClicked }) => ($isCharClicked ? ($isSelected ? '' : '10%') : '')};
`;

const NameChipDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  position: absolute;
  top: 1.5rem;
  left: 2rem;

  margin-bottom: 1.2rem;
`;

const Name = styled.span`
  color: ${({ theme }) => theme.colors.grayScaleB_Text};
  ${({ theme }) => theme.fonts.Body2_SB_18};
`;

const Chip = styled.div`
  padding: 0.3rem 0.8rem;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.grayScaleB_Text};

  color: ${({ theme }) => theme.colors.grayScaleW_bg};
  ${({ theme }) => theme.fonts.Caption1_M_12};
`;

const Description = styled.div`
  position: absolute;
  top: 4.7rem;
  left: 2rem;

  color: ${({ theme }) => theme.colors.grayScaleB_Text};
  ${({ theme }) => theme.fonts.Body3_M_14};
  text-align: left;
  white-space: pre-wrap;
`;
