// pages/shijian/shijian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
titles:['衣服','裤子','裙子']
  },
  handleBtnClick(){
console.log('点击事件')
  },
  handleStart(){
    console.log('手指触摸动作开始')
  },
  handleEventClick(event){
console.log('------',event)
  },
  handleouter(event){
console.log('外层',event)
  },
  handleinner(event){
console.log('内层',event)
  },
  getEvent(event){
console.log(event)
console.log(event.currentTarget.dataset.item)
console.log(event.currentTarget.dataset.index)
  },
  handleCapture3(){
    console.log('handleCapture3')
  },
  handleCapture2(){
    console.log('handleCapture2')
  },
  handleCapture1(){
    console.log('handleCapture1')
  },
  handleBind3(){
    console.log('handleBind3')
  },
  handleBind2(){
    console.log('handleBind2')
  },
  handleBind1(){
    console.log('handleBind1')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})