/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg?react' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>;

  export default ReactComponent;
}

declare module '*.jsx' {
  const content: any;
  export default content;
}
