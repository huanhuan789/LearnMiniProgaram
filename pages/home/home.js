// pages/home/home.js
// 系统提供函数getApp()获取App()产生的示例对象
const app=getApp()
const name=app.globalData.name
Page({

  /**
   * 页面的初始数据
   */
  data: {
name:'huanhuan',
    students:[
        {id:110,name:'hh',age:18},
        {id:111,name:'jj',age:21},
        {id:112,name:'aa',age:30},
        {id:113,name:'qq',age:10}
    ],
    counter: 0
  },
handbtnadd(){
  // 这么写控制台有输出但页面不会刷新
  // this.data.couter+=1
  // console.log(this.data.couter)
  // 需要调用setData函数
  console.log(this)
this.setData({
 counter: this.data.counter +1
})
  console.log('点击了')
  console.log(name)
},
  handbtncut(){
    // 同理调用setData函数
    this.setData({
      counter:this.data.counter-1
  
    })
    console.log('点击了')
  },
  // 获取用户信息函数 小程序传进event对象
  handleGetinfo(event){
console.log(event)
  }
})