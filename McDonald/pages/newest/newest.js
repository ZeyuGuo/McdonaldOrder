// pages/newest/newest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xps: [
      {
        "thumb": "/image/xp1.png",
        "name": "冰醇咖啡",
        "price": "9.9"
      },
      {
        "thumb": "/image/xp2.png",
        "name": "大菠浪",
        "price": "9.9"
      },
      {
        "thumb": "/image/xp3.png",
        "name": "金拱门桶A组合",
        "price": "18.8"
      },
      {
        "thumb": "/image/xp4.png",
        "name": "金拱门桶B组合",
        "price": "18.8"
      },
      {
        "thumb": "/image/xp5.png",
        "name": "那么大珍珠奶茶（热）",
        "price": "9.9"
      },
      {
        "thumb": "/image/xp6.png",
        "name": "香芒芒",
        "price": "9.9"
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
      url: 'http://www.mylocaldb.com/api/wx/newest.txt',
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