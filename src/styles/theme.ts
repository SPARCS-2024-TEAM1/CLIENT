import { css } from '@emotion/react';

export const theme = {
  colors: {
    red: '#FF7D7D',
    key: '#FCEE99',
    brown: '#BEB7A9',
    grayScaleWhite: '#FFFFFF',
    grayScaleW_bg: '#F3F1EA',
    grayScaleLg: '#BFBFBF',
    grayScaleMg: '#595956',
    grayScaleBg: '#323232',
    grayScaleB_Text: '#171717',
    transparentW80: 'rgba(255, 255, 255, 0.8)',
    transparentW40: 'rgba(243, 241, 234, 0.4)',
  },
  fonts: {
    Head1_SB_24: css`
      font-family: 'Pretendard Variable', sans-serif;
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 3.48rem;
      letter-spacing: -0.024rem;
    `,
    Title1_SB_20: css`
      font-family: 'Pretendard Variable', sans-serif;
      font-size: 2rem;
      font-weight: 600;
      line-height: 2.9rem;
      letter-spacing: -0.02rem;
    `,
    Title2_SB_16: css`
      font-family: 'Pretendard Variable', sans-serif;
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 2.32rem;
      letter-spacing: -0.01rem;
    `,
    Body1_M_18: css`
      font-family: 'Pretendard Variable', sans-serif;
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 2.61rem;
      letter-spacing: -0.027rem;
    `,
    Body2_SB_18: css`
      font-family: 'Pretendard Variable', sans-serif;
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.52rem;
      letter-spacing: -0.018rem;
    `,
    Caption1_M_12: css`
      font-family: 'Pretendard Variable', sans-serif;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.74rem;
      letter-spacing: -0.012rem;
    `,
    Body3_M_14: css`
      font-family: 'Pretendard Variable', sans-serif;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.17rem;
      letter-spacing: -0.014rem;
    `,
  },
};

export default theme;
