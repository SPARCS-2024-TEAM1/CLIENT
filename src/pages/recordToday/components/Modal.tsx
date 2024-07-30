import styled from '@emotion/styled';
import React from 'react';

interface BtnCloseModalPropType {
  title?: string;
  isModalOpen: boolean;
  handleModalOpen: (type: boolean) => void;
  handleBtnClick?: () => void;
}

export const BtnCloseModal = (props: BtnCloseModalPropType) => {
  const { title, isModalOpen, handleModalOpen, handleBtnClick } = props;

  const handleModalClose = () => {
    handleModalOpen(false);
  };

  return (
    isModalOpen && (
      <Wrapper>
        <ModalBackground $isModalOpen={isModalOpen} onClick={handleModalClose} />
        <BtnModalWrapper $isModalOpen={isModalOpen}>
          <BtnModalTitle>{title}</BtnModalTitle>
          <BtnWrapper>
            <LeftBtn>초기화하기</LeftBtn>
            <RightBtn>나가기</RightBtn>
          </BtnWrapper>
        </BtnModalWrapper>
      </Wrapper>
    )
  );
};

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
  margin-left: -2rem;

  background-color: ${({ theme }) => theme.colors.grayScaleBg};
`;

const BtnModalWrapper = styled.section<{ $isModalOpen: boolean }>`
  display: ${({ $isModalOpen }) => ($isModalOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1.8rem;
  align-items: center;
  position: fixed;
  z-index: 5;

  width: 26.6rem;
  padding: 2.3rem 2.1rem 2.2rem;
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

export const BtnModalTitle = styled.h2`
  ${({ theme }) => theme.fonts.Head2_SB_30};
  color: ${({ theme }) => theme.colors.grayScaleBg};
  text-align: center;
  white-space: pre-wrap;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const LeftBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
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
  border-radius: 4px;

  ${({ theme }) => theme.fonts.Title2_SB_16};
  background-color: ${({ theme }) => theme.colors.grayScaleBg};

  color: ${({ theme }) => theme.colors.grayScaleWhite};

  cursor: pointer;
`;
