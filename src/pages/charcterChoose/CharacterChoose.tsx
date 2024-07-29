import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CharacterCard from './components/CharacterCard';
import { CHARACTER_LIST } from './constants/constants';
import { ArrowLeftIc } from '../../assets/svgs';
import FullBtn from '../../components/commons/FullBtn';
import Header from '../../components/commons/Header';
import Spacing from '../../components/commons/Spacing';
import Title from '../../components/commons/Title';

const CharacterChoose = () => {
  const navigate = useNavigate();
  const [characterList, setCharacterList] = useState(Array(3).fill(false));
  const [selectedChar, setSelectedChar] = useState('');

  const onClickBack = () => {
    navigate('/todayFeeling');
  };

  const onClickNext = () => {
    navigate('/record');
  };

  const onClickCharacter = (id: number, feeling: string) => {
    const updatedFeeling = characterList.map((_, index) => index === id);
    setCharacterList(updatedFeeling);
    setSelectedChar(feeling);
  };

  return (
    <>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={onClickBack} />
      <Title text={`누구에게 답장 받고 싶나요?`} type="middle" align="center" paddingTop={9.5} />
      <Spacing marginBottom="6.5" />
      <CharacterWrapper>
        {CHARACTER_LIST.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            chipList={character.chipList}
            description={character.description}
            onClick={() => onClickCharacter(character.id, character.name)}
            characterList={characterList}
            selectedChar={selectedChar}
          />
        ))}
      </CharacterWrapper>
      <FullBtn activeText="다음으로" disabledText="다음으로" isBtnDisable={selectedChar === ''} onClick={onClickNext} />
    </>
  );
};

export default CharacterChoose;

const CharacterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;
