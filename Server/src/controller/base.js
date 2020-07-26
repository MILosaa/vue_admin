const jsonwebtoken = require('jsonwebtoken');
module.exports = class extends think.Controller {
  __before() {

  }

  //声明验证失败函数
  authFail(){
    this.json({error:"JWT校验失败"});
    return false;
  }
  checkAuth(){
    let token = this.ctx.headers['x-token'];
    const {secret,cookie,exipre} = this.config('jwt')

    try {
      var tokenObj = token? jsonwebtoken.verify(token,secret):{};
      this.ctx.state.username = tokenObj.name;
    } 
    catch (error) {
      return this.authFail()
    }

    if(!tokenObj.name){
      return this.authFail()
    }

    this.updateAuth(token.name)
  }

  updateAuth(userName){
    const userInfo = {
      name:userName
    };
    // 获取jwt的配置信息
    const {secret,cookie,expire} = this.config('jwt')
    const token = jsonwebtoken.sign(userInfo,secret,{expiresIn:expire});
    this.cookie(cookie,token);
    this.header('authoriztion',token);
    return token;
  }

};