// pages/cheap/cheap.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ths: [
      {
        "thumb": "/image/th1.png",
        "name": "无辣不欢冰火单人餐",
        "price": "19.9"
      },
      {
        "thumb": "/image/th2.png",
        "name": "无辣不欢冰火双人餐",
        "price": "29.9"
      },
      {
        "thumb": "/image/th3.png",
        "name": "无辣不欢冰火三人餐",
        "price": "39.9"
      }
    ]

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
    let self = this
    wx.request({
      url: 'http://www.mylocaldb.com/api/wx/cheap.txt',
      success(res) {
        self.setData({
          detail: res.data
        })
      }
    })
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