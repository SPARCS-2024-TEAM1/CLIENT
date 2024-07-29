import styled from '@emotion/styled';

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

  width: 100%;
  height: 10.6rem;
  padding: 1.5rem 0 0.9rem 2rem;
  border-radius: 4px;

  /* 배경색 변경 필요 */
  background-color: ${({ theme }) => theme.colors.grayScaleW_bg};

  opacity: ${({ $isSelected, $isCharClicked }) => ($isCharClicked ? ($isSelected ? '' : '10%') : '')};
`;

const NameChipDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

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
  color: ${({ theme }) => theme.colors.grayScaleB_Text};
  ${({ theme }) => theme.fonts.Body3_M_14};
  text-align: left;
  white-space: pre-wrap;
`;
