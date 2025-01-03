import en from './messages/en.json';

type Messages = typeof en;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}

  namespace NodeJS {
    export interface ProcessEnv {
      PAYLOAD_CMS_URL: string;
      BASE_URL: string;
    }
  }
}
