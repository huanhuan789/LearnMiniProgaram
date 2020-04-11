// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '成功',
      mark:true,
      success(){
        console.log('展示弹窗成功')
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      // 去掉取消
      // showCancel:false,
      success(res){
console.log(res)
// 根据res中的值判断用户点击了确认还是取消
if(res.cancel){
  console.log('用户点击了取消')
}
if(res.confirm){
  console.log('用户点击了确定')
}
      }
    })
  },
  // 向网络发送请求
  handleShowLoding(){
    wx.showLoading({
      title: '加载ing',
    })
    // 发送成功调用 wx.hideLoading() 
  },
  handleShowAction(){
wx.showActionSheet({
  itemList: ['拍照','相册'],
  //根据res判断用户的选择
  success(res){
console.log(res)
  }
})
  },
  /**
   * 页面的初始数据
   */
  data: {

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
return{
  title:'分享的标题',
  // 进入的页面路径 默认首页
  path:'pages/about/about',
  // 显示的图片 默认首页截图
  imageUrl:'https://p1.ssl.qhimgs1.com/sdr/400__/t01baca0f382c6f1cdb.png'
}
  }
})