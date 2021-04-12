import { Service } from "egg";

export default class Test extends Service {
  public async testService() {
    const { ctx } = this;
    const username = ctx.helper.createUserName()
    return `hi, ${username}`;
  }
}
