import styled from '@emotion/styled';

import { ModalStopIc, ModalCutIc, ModalDoneIc } from '../../../assets/svgs';
import Spacing from '../../../components/commons/Spacing';

interface BtnCloseModalPropType {
  type: string;
  title?: string;
  isModalOpen: boolean;
  leftBtnText: string;
  rightBtnText: string;
  handleLeftBtn: () => void;
  handleRightBtn: () => void;
}

export const BtnCloseModal = (props: BtnCloseModalPropType) => {
  const { type, title, isModalOpen, leftBtnText, rightBtnText, handleLeftBtn, handleRightBtn } = props;

  return (
    isModalOpen && (
      <Wrapper>
        <ModalBackground $isModalOpen={isModalOpen} />
        <BtnModalWrapper $isModalOpen={isModalOpen}>
          {type === 'back' && <ModalStopIcon />}
          {type === 'timeOut' && <ModalDoneIcon />}
          {type === 'submit' && <ModalCutIcon />}
          <Spacing marginBottom="1" />
          <BtnModalTitle>{title}</BtnModalTitle>

          <BtnWrapper>
            <LeftBtn onClick={handleLeftBtn}>{leftBtnText}</LeftBtn>
            <RightBtn onClick={handleRightBtn}>{rightBtnText}</RightBtn>
          </BtnWrapper>
        </BtnModalWrapper>
      </Wrapper>
    )
  );
};

const ModalStopIcon = styled(ModalStopIc)`
  width: 100%;
  height: 100%;
`;
const ModalCutIcon = styled(ModalCutIc)`
  width: 100%;
  height: 100%;
`;
const ModalDoneIcon = styled(ModalDoneIc)`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;

  width: 100%;
  height: 100dvh;
`;

const ModalBackground = styled.div<{ $isModalOpen: boolean }>`
  display: ${({ $isModalOpen }) => ($isModalOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;

  width: 100%;
  height: 100dvh;

  background-color: ${({ theme }) => theme.colors.transparentB75};
`;

const BtnModalWrapper = styled.section<{ $isModalOpen: boolean }>`
  display: ${({ $isModalOpen }) => ($isModalOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  z-index: 5;

  width: 26.6rem;
  padding: 2.3rem 2.1rem 2.2rem;
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

export const BtnModalTitle = styled.h2`
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.fonts.Body2_SB_18};
  color: ${({ theme }) => theme.colors.grayScaleBg};
  text-align: center;
  white-space: pre-wrap;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 0.8rem;

  width: 100%;
`;

const LeftBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 4rem;
  border-radius: 4px;

  ${({ theme }) => theme.fonts.Title2_SB_16};
  background-color: ${({ theme }) => theme.colors.grayScaleLg};

  color: ${({ theme }) => theme.colors.grayScaleBg};

  cursor: pointer;
`;

const RightBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 4rem;
  border-radius: 4px;

  ${({ theme }) => theme.fonts.Title2_SB_16};
  background-color: ${({ theme }) => theme.colors.grayScaleBg};

  color: ${({ theme }) => theme.colors.grayScaleWhite};

  cursor: pointer;
`;
