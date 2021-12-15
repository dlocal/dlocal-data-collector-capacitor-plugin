import { WebPlugin } from '@capacitor/core';

import type { DataCollectorSDKPlugin, DLEnvironment } from './definitions';

export class DataCollectorSDKWeb
  extends WebPlugin
  implements DataCollectorSDKPlugin {
    async setUp(_options: { apiKey: string; env: DLEnvironment; }): Promise<void> {
      console.warn("DataCollectorSDK not supported on web");
    }

    async startSession(): Promise<void> {
      console.warn("DataCollectorSDK not supported on web");
    }

    async getSession(): Promise<{ sessionId: string; }> {
      console.warn("DataCollectorSDK not supported on web");
      return new Promise(() => {});
    }
}
