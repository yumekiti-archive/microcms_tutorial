import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'service',  // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: 'api-key',
});