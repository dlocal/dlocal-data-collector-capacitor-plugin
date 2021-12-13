export interface DataCollectorSDKPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
