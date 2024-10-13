import styled from '@emotion/styled';

const ButtonBg = () => {
  return <Wrapper />;
};

export default ButtonBg;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 2;

  width: 100%;
  height: 16rem;
  margin-left: -2rem;

  background: linear-gradient(
    180deg,
    rgb(50 50 50 / 0%) 19.98%,
    rgb(50 50 50 / 10%) 29.99%,
    rgb(50 50 50 / 53.3%) 45.02%,
    #323232 70.06%
  );
`;
