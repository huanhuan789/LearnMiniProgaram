// pages/about/about.js
Page({
  //  页面的初始数据
  data: {
list:[]

  },
 // 生命周期函数--监听页面加载
  onLoad: function (options) {
    // 请求数据
wx.request({
  url: 'http://123.207.32.32:8000/recommend',
  success:(res)=>{
console.log(res)
const data=res.data.data;
    console.log(this)
this.setData({
  list:data
})
  }
})
  },
// 生命周期函数--监听页面初次渲染完成
  onReady: function () {

  },
// 生命周期函数--监听页面显示
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
  // 监听页面滚动
  onPageScroll(obj){
    console.log(obj)
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
//  用户点击右上角分享
  onShareAppMessage: function () {

  }
})