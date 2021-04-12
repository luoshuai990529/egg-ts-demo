'use strict';
module.exports = {
  // 随机创建用户名
  createUserName: () => {
    const chars = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    let username = '';
    for (let i = 0; i < 4; i++) {
      const randomCount = Math.floor(Math.random() * (25 + 1));
      username += chars[randomCount] + randomCount;
    }
    return username;
  },
};