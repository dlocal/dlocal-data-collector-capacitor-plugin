export interface DataCollectorSDKPlugin {
  setUp(options: { apiKey: string, env: DLEnvironment }): Promise<void>;
  setUp(options: { apiKey: string }): Promise<void>;
  startSession(): Promise<void>;
  getSession(): Promise<{ sessionId: string }>;
}

export enum DLEnvironment {
  production = 0,
  sandbox = 1
}
