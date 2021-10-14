import cloudbase from '@cloudbase/js-sdk';

export function getUserAuth() {
  const app = cloudbase.init({
    env: 'cssshow-2g4tde9n52947f03',
  });
  const auth = app.auth({
    persistence: 'local',
  });

  return auth;
}
