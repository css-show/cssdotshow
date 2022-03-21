export type Handler<TEvent, TResult> = (
  event: TEvent,
  context?: Context
) => void | Promise<TResult>;

export interface Context {
  callbackWaitsForEmptyEventLoop: boolean;
  environ: string;
  environment: string;
  function_name: string;
  function_version: string;
  memory_limit_in_mb: number;
  namespace: string;
  request_id: string;
  tencentcloud_appid: string;
  tencentcloud_region: string;
  tencentcloud_uin: string;
  time_limit_in_ms: number;
  // getRemainingTimeInMillis: () => number;
}
