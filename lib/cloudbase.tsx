import cloudbase from '@cloudbase/js-sdk';

export const getApp = () =>
  cloudbase.init({
    env: 'cssshow-2g4tde9n52947f03',
  });
