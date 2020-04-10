// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
styleIsolation:"shared"
  },
  // ！！！作用 让使用者可以给组件传入数据
  // 页面向组件传值 在properties中接收
  properties: {
// title: String
title:{
  type:String,
value:'默认值',
observer(newval,oldVal){
  console.log(newval, oldVal)
}
}
  },
  externalClasses:['titleclass'],

  //  ！！定义组件内部的初始数据
   
  data: {

  },

// ！！！用于定义组件内部的函数
  methods: {
    handeladd(){
      this.triggerEvent('increment', {name:'刘欢',age:18}, {})
    }
  },
  // 定义组件的配置选项
  options:{

  },
  // 外界给组件传入额外的样式
  externalClasses:[],
  // 可以监听properties/data的改变
  observers:{
 counter:function(newVal){
   console.log(newVal)
 }
  },
//------------组件中监听生命周期函数
// 1.监听所在页面的生命周期 
pageLifetimes:{
show(){
  console.log('监听组件所在页面显示出来时')
},
hide(){
  console.log('监听组件所在页面隐藏起来时')
},
resize(){
  console.log('监听页面尺寸发生改变')
}
},
// 2.组件本身的生命周期
lifetimes:{
created(){
  console.log('组件被创建出来')
},
attached(){
  console.log('组件被添加到页面')
},
ready(){
  console.log('组件被渲染出来')
},
moved(){
  console.log('组件被移动到另外一个节点')
},
dettached(){
  console.log('组价被移除掉')
}
}
})
