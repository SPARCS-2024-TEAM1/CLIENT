import type { SerializedStyles } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      Blue: string;
    };
    fonts: {
      Head1_B_20: SerializedStyles;
    };
  }
}
