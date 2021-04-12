// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportClientCheck from '../../../app/middleware/clientCheck';
import ExportUuidMiddleWare from '../../../app/middleware/uuidMiddleWare';

declare module 'egg' {
  interface IMiddleware {
    clientCheck: typeof ExportClientCheck;
    uuidMiddleWare: typeof ExportUuidMiddleWare;
  }
}
