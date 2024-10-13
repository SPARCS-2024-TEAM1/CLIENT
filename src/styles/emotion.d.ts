import type { SerializedStyles } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      red: string;
      key: string;
      brown: string;
      grayScaleWhite: string;
      grayScaleW_bg: string;
      grayScaleLg: string;
      grayScaleMg: string;
      grayScaleBg: string;
      grayScaleB_Text: string;
      transparentW80: string;
      transparentW40: string;
      transparentB75: string;
    };
    fonts: {
      Head1_SB_24: SerializedStyles;
      Head2_SB_30: SerializedStyles;
      Title1_SB_20: SerializedStyles;
      Title2_SB_16: SerializedStyles;
      Body1_M_18: SerializedStyles;
      Body2_SB_18: SerializedStyles;
      Body3_M_14: SerializedStyles;
      Caption1_M_12: SerializedStyles;
      Caption2_SB_14: SerializedStyles;
    };
  }
}
