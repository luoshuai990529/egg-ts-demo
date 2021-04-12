import { Application } from 'egg';

export default (app: Application) => {
  // 1.从服务端的实例对象中解构出对象中处理路由的对象和处理控制器的对象
  const { controller, router } = app;
  // 在执行请求test之前先要经过clientCheck，通过了才往下执行
  // const clientCheck = app.middleware.clientCheck({ ua: /Chrome/ });
  router.get('/', controller.home.index);
};
