// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
tabtitle:{
  type:Array,
  value:[]
}
  },

  /**
   * 组件的初始数据
   */
  data: {
// 记录当前索引值
currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event){
      console.log(event)
      // 取出当前索引值
      const index = event.currentTarget.dataset.index
      // 修改当前索引值currentIndex
      this.setData({
        currentIndex:index
      })
      this.triggerEvent('tabtab', { index, tabtitle: this.properties.tabtitle[index]},{})

    }
  }
})
