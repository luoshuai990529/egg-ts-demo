import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;
  
  // 覆盖框架，插件的配置 appinfo：package.json中的配置
  config.keys = appInfo.name + "_1618199555720_3839";
  config.middleware = [];
  config.security = {
    csrf: {
      ignore: "123",
    },
  };

  // 应用本身的配置
  const bizConfig = {
    local: {
      msg: "local",
    },
    uuid: {
      name: "ebuuid",
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
    },
  };

  // 目的是将业务配置属性合并到 EggAppConfig 中返回
  return {
    // 如果直接返回 config ，将该类型合并到 EggAppConfig 的时候可能会出现 circulate type 错误。
    ...(config as {}),
    ...bizConfig,
  };
};
