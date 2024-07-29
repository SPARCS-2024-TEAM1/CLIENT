import styled from '@emotion/styled';
import React from 'react';

interface HeaderPropsType {
  LeftSvg?: React.FunctionComponent<React.ComponentProps<'svg'>>;
  onClickLeft?: () => void;
  children?: React.ReactNode;
}

const Header = (props: HeaderPropsType) => {
  const { LeftSvg, onClickLeft, children } = props;
  return (
    <Wrapper>
      {LeftSvg && (
        <LeftSvgWrapper>
          <LeftSvg onClick={onClickLeft} />
        </LeftSvgWrapper>
      )}
      {children}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;

  width: 100%;
  height: 5rem;
  margin-left: -2rem;
  padding: 1.6rem 2rem 0 1rem;
`;

const LeftSvgWrapper = styled.div`
  cursor: pointer;
`;
