import { WebPlugin } from '@capacitor/core';

import type { DataCollectorSDKPlugin } from './definitions';

export class DataCollectorSDKWeb
  extends WebPlugin
  implements DataCollectorSDKPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
