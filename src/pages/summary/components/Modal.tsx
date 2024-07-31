import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AutoCloseModalPropType {
  text: string;
  showModal: boolean;
  handleShowModal: (type: boolean) => void;
  children: React.ReactNode;
  path?: string;
  summary?: string[];
  answer?: string;
}

export const AutoCloseModal = (props: AutoCloseModalPropType) => {
  const navigate = useNavigate();
  const { text, showModal, handleShowModal, children, path, summary, answer = '' } = props;

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        handleShowModal(false);
        path &&
          navigate(`${path}`, {
            state: {
              summary: summary,
              answer: answer,
            },
          });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <ModalBackground $showModal={showModal}>
      <AutoCloseModalWrapper>
        {children}
        <AutoCloseModalText>{text}</AutoCloseModalText>
      </AutoCloseModalWrapper>
    </ModalBackground>
  );
};

const ModalBackground = styled.div<{ $showModal: boolean }>`
  display: ${({ $showModal }) => ($showModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9;

  width: 100%;
  height: 100dvh;
  margin-left: -2rem;
  padding: 0 5.5rem;

  background-color: ${({ theme }) => theme.colors.transparentB75};
`;

const AutoCloseModalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.31rem;
  align-items: center;

  width: 26.6rem;
  height: 28rem;
  padding: 2.3rem 2.1rem 3rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const AutoCloseModalText = styled.span`
  color: ${({ theme }) => theme.colors.grayScaleBg};
  text-align: center;
  ${({ theme }) => theme.fonts.Body2_SB_18};
  white-space: pre-wrap;
`;
