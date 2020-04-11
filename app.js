const TOKEN='token'
App({
  globalData:{
    token:''
  },
  onLaunch(){
    // --------1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    // 判断 token是否有值
    if(token && token.length !==0){//已经有token,验证token是否过期
      this.check_token(token)//验证token是否过期
    }else{//没有token,进行登录操作
      this.login()
    }

  },
  // 验证token
  check_token(token){
    console.log('执行了验证token操作')
wx.request({
  url: 'http://123.207.32.32:3000/auth',
  method:'post',
  header:{
    token
  },
  success:(res)=>{
    if (!res.data.errCode) {
      this.globalData.token = token;
    } else {
      this.login()
    }
    console.log(res)
  },
  fail:(err)=>{
    console.log(err)
  }
})
  },
  login(){
    console.log('执行了登录操作')
    // 登录操作
    wx.login({
      // code只有5分钟的有效期
      success: (res) => {
        console.log(res)
        // 1.获取code
        const code = res.code;
        // 2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code: code
          },
          success: (res) => {
        
            console.log(res)
            // 1.取出token
            const token = res.data.token;
            // 2.将token保存到globalData中
            this.globalData.token = token;
            // 3.进行本地存储 同步
            wx.setStorageSync(TOKEN, token)


          }
        })
      }
    })
  }

})