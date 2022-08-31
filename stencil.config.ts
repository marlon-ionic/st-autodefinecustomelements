import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'st-autodefinecustomelements',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist-hydrate-script'
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      generateTypeDeclarations: true,
      autoDefineCustomElements: true
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
