import styled from '@emotion/styled';
import React from 'react';

interface HeaderPropsType {
  LeftSvg?: React.FunctionComponent<React.ComponentProps<'svg'>>;
  onClickLeft?: () => void;
  children?: React.ReactNode;
  title?: string;
}

const Header = (props: HeaderPropsType) => {
  const { LeftSvg, onClickLeft, children, title } = props;
  return (
    <Wrapper>
      {LeftSvg && (
        <LeftSvgWrapper>
          <LeftSvg onClick={onClickLeft} />
        </LeftSvgWrapper>
      )}
      {title ? <Title>{title}</Title> : <></>}
      {children}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  position: fixed;
  top: 0;

  width: 100%;
  height: 5rem;
  margin-left: -2rem;
  padding: 1.6rem 2rem 0 1rem;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.transparentW80};
  ${({ theme }) => theme.fonts.Title2_SB_16};
`;

const LeftSvgWrapper = styled.div`
  position: absolute;
  top: 1.6rem;
  left: 1rem;

  cursor: pointer;
`;
