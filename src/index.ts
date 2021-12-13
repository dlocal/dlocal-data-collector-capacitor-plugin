import { registerPlugin } from '@capacitor/core';

import type { DataCollectorSDKPlugin } from './definitions';

const DataCollectorSDK = registerPlugin<DataCollectorSDKPlugin>(
  'DataCollectorSDK',
  {
    web: () => import('./web').then(m => new m.DataCollectorSDKWeb()),
  },
);

export * from './definitions';
export { DataCollectorSDK };
