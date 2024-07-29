import type { SerializedStyles } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      red: string;
      key: string;
      grayScaleWhite: string;
      grayScaleW_bg: string;
      grayScaleMg: string;
      grayScaleBg: string;
      grayScaleB_Text: string;
      transparentW80: string;
      transparentW40: string;
    };
    fonts: {
      Head1_SB_24: SerializedStyles;
      Title1_SB_20: SerializedStyles;
      Body1_M_18: SerializedStyles;
      Body2_SB_18: SerializedStyles;
      Caption1_M_12: SerializedStyles;
    };
  }
}
