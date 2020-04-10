// pages/wxml语法/wxml.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    // 有错误----
    // nowTime:new Data().toLocaleString()
    isActive:false,
    isShow:true,
    score:55,
    movies:['aa','qq','oo','ll'],
    nums:[[1,2,3,4],[5,7,8,9],[10,11,12,13]],
    keyArray: [{ id: 1, unique: 'unique_1' }, {id: 1, unique: 'unique_2'}]
  },
  handleSwitchColor(){
this.setData({
isActive:!this.data.isActive
})
  },
handleisShow(){
  this.setData({
    isShow:!this.data.isShow
  })
},
  handleScore(){
this.setData({
 score:this.data.score+10
})
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